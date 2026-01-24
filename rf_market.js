// === RF 市場情報局 核心引擎 v1.5 (量能分析版) ===

let marketData = JSON.parse(localStorage.getItem('rf_market_db')) || {};
let currentItem = null; 
let chartInstance = null;
let currentTimeRange = 0; 

window.onload = function() {
    initTimeInput();
    renderItemList();
    const keys = Object.keys(marketData);
    if(keys.length > 0) selectItem(keys[0]);
};

function initTimeInput() {
    const now = new Date();
    const tzOffset = now.getTimezoneOffset() * 60000; 
    const localISOTime = (new Date(now - tzOffset)).toISOString().slice(0, 16);
    document.getElementById('inTime').value = localISOTime;
}

function addData() {
    const name = document.getElementById('inName').value.trim();
    const low = parseFloat(document.getElementById('inLowPrice').value);
    const avg = parseFloat(document.getElementById('inAvgPrice').value);
    const last = parseFloat(document.getElementById('inLastPrice').value) || null; 
    const qty = parseInt(document.getElementById('inQty').value) || 0;
    const timeVal = document.getElementById('inTime').value;

    if(!name || isNaN(low) || isNaN(avg) || !timeVal) { alert("請輸入基本資料"); return; }

    const ts = new Date(timeVal).getTime();
    const record = { ts: ts, low: low, avg: avg, last: last, qty: qty };
    pushRecord(name, record);
    
    saveData();
    renderItemList();
    selectItem(name); 
    clearInputs(false); 
}

function pushRecord(name, record) {
    if(!marketData[name]) marketData[name] = [];
    marketData[name].push(record);
    marketData[name].sort((a, b) => a.ts - b.ts);
}

function openImport() { document.getElementById('importModal').style.display = 'flex'; }
function closeImport() { document.getElementById('importModal').style.display = 'none'; }

function processImport() {
    const raw = document.getElementById('importArea').value;
    const manualTimeVal = document.getElementById('inTime').value;
    const manualTs = manualTimeVal ? new Date(manualTimeVal).getTime() : Date.now();

    try {
        const data = JSON.parse(raw);
        if(!Array.isArray(data)) throw new Error("格式錯誤");
        
        let count = 0;
        data.forEach(item => {
            if(item.name && item.low && item.avg) {
                const ts = item.ts || manualTs; 
                const record = {
                    ts: ts,
                    low: parseFloat(item.low),
                    avg: parseFloat(item.avg),
                    last: parseFloat(item.last) || null,
                    qty: parseInt(item.qty) || 0
                };
                pushRecord(item.name, record);
                count++;
            }
        });

        saveData();
        renderItemList();
        alert(`成功匯入 ${count} 筆資料！`);
        closeImport();
        document.getElementById('importArea').value = '';
        if(data.length > 0 && data[0].name) selectItem(data[0].name);

    } catch(e) { alert("JSON 格式錯誤\n" + e.message); }
}

function clearInputs(clearName = true) {
    if(clearName) document.getElementById('inName').value = '';
    document.getElementById('inLowPrice').value = '';
    document.getElementById('inAvgPrice').value = '';
    document.getElementById('inLastPrice').value = '';
    document.getElementById('inQty').value = '';
}

function saveData() { localStorage.setItem('rf_market_db', JSON.stringify(marketData)); }

function renderItemList() {
    const list = document.getElementById('trackedItems');
    const dataList = document.getElementById('itemList');
    list.innerHTML = '';
    dataList.innerHTML = '';

    const keys = Object.keys(marketData);
    if (keys.length === 0) { list.innerHTML = '<div style="color:#666; text-align:center;">尚無追蹤物品</div>'; return; }

    keys.forEach(name => {
        const opt = document.createElement('option');
        opt.value = name;
        dataList.appendChild(opt);

        const records = marketData[name];
        const latest = records[records.length - 1];
        
        const diffPercent = latest.avg > 0 ? ((latest.avg - latest.low) / latest.avg) * 100 : 0;
        let color = diffPercent > 5 ? '#2ea043' : (diffPercent < -5 ? '#ff5252' : '#8b949e');

        const div = document.createElement('div');
        div.className = `item-card ${currentItem === name ? 'active' : ''}`;
        div.onclick = () => selectItem(name);
        div.innerHTML = `
            <div><div style="font-weight:bold; color:#fff;">${name}</div><div style="font-size:0.8em; color:#666;">均價: ${latest.avg}</div></div>
            <div style="text-align:right;"><div style="font-family:monospace; font-size:1.1em; color:var(--gold);">${latest.low}</div><div style="font-size:0.7em; color:${color};">${diffPercent.toFixed(1)}%</div></div>
        `;
        list.appendChild(div);
    });
}

function selectItem(name) {
    currentItem = name;
    document.getElementById('inName').value = name;
    renderItemList();
    analyzeData(name);
    drawChart(name);
    renderHistoryTable(name);
}

function renderHistoryTable(name) {
    const tbody = document.getElementById('historyBody');
    tbody.innerHTML = '';
    const records = marketData[name];
    if(!records) return;

    records.slice().reverse().forEach((r, index) => {
        const realIndex = records.length - 1 - index;
        const dateObj = new Date(r.ts);
        const timeStr = `${dateObj.getMonth()+1}/${dateObj.getDate()} ${String(dateObj.getHours()).padStart(2,'0')}:${String(dateObj.getMinutes()).padStart(2,'0')}`;
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td style="color:#8b949e; font-size:0.85em;">${timeStr}</td>
            <td style="color:var(--gold); font-weight:bold;">${r.low}</td>
            <td>${r.avg}</td>
            <td style="color:var(--blue);">${r.last || '-'}</td>
            <td>${r.qty || '-'}</td>
            <td><button class="del-btn" onclick="delHistoryRecord('${name}', ${realIndex})">×</button></td>
        `;
        tbody.appendChild(row);
    });
}

function delHistoryRecord(name, index) {
    if(confirm('確定刪除這筆紀錄？')) {
        marketData[name].splice(index, 1);
        if(marketData[name].length === 0) delete marketData[name]; 
        saveData();
        if(marketData[name]) selectItem(name); else { renderItemList(); currentItem = null; }
    }
}

function analyzeData(name) {
    const records = marketData[name];
    if(!records || records.length === 0) {
        document.getElementById('dispCurrent').innerText = '--';
        document.getElementById('dispAvg').innerText = '--';
        document.getElementById('dispVolStatus').innerText = '--';
        document.getElementById('dispStatus').innerText = '--';
        return;
    }
    const latest = records[records.length - 1];
    
    // 計算價格狀態
    const discount = latest.avg > 0 ? ((latest.avg - latest.low) / latest.avg) * 100 : 0;
    let statusText = "一般", statusColor = "#888";
    if(latest.avg === 0) { statusText = "💀 死盤"; statusColor = "#555"; } 
    else if(discount > 10) { statusText = "🔥 強力買進"; statusColor = "#2ea043"; } 
    else if(discount > 0) { statusText = "✅ 價格合理"; statusColor = "#58a6ff"; } 
    else { statusText = "⛔ 價格過高"; statusColor = "#ff5252"; }

    // === 新增：量能分析邏輯 ===
    let volStatus = `${latest.qty} (持平)`;
    let volColor = "#888";
    
    if(records.length >= 2) {
        const prev = records[records.length - 2];
        const volDiff = latest.qty - prev.qty;
        
        // 設定閾值：變化超過 5% 才算有動靜
        if (prev.qty > 0 && Math.abs(volDiff) / prev.qty > 0.05) {
            if (volDiff > 0) {
                volStatus = `賣壓湧現 (↑${volDiff})`;
                volColor = "#ff5252"; // 紅色警戒
            } else {
                volStatus = `籌碼消化 (↓${Math.abs(volDiff)})`;
                volColor = "#2ea043"; // 綠色利多
            }
        } else if (volDiff !== 0) {
            volStatus = `${latest.qty} (${volDiff > 0 ? '+' : ''}${volDiff})`;
        }
    }

    document.getElementById('dispCurrent').innerText = latest.low;
    document.getElementById('dispAvg').innerText = latest.avg;
    
    const elVol = document.getElementById('dispVolStatus');
    elVol.innerText = volStatus;
    elVol.style.color = volColor;

    const elStat = document.getElementById('dispStatus');
    elStat.innerText = statusText;
    elStat.style.color = statusColor;
}

function setTimeRange(minutes) {
    currentTimeRange = minutes;
    document.querySelectorAll('.time-btn').forEach(b => b.classList.remove('active'));
    const map = {10:0, 30:1, 60:2, 180:3, 1440:4, 10080:5, 0:6};
    const btns = document.querySelectorAll('.time-btn');
    if(btns[map[minutes]]) btns[map[minutes]].classList.add('active');
    if(currentItem) drawChart(currentItem);
}

function drawChart(name) {
    const allRecords = marketData[name];
    if(!allRecords || allRecords.length === 0) return;

    let filteredRecords = allRecords;
    if(currentTimeRange > 0) {
        const cutoff = Date.now() - (currentTimeRange * 60 * 1000);
        filteredRecords = allRecords.filter(r => r.ts >= cutoff);
    }

    const warningEl = document.getElementById('dataWarning');
    if(filteredRecords.length === 0) { warningEl.style.display = 'block'; warningEl.innerText = "此時間範圍無資料"; } 
    else if(filteredRecords.length < 2) { warningEl.style.display = 'block'; warningEl.innerText = "資料不足，無法連線"; } 
    else { warningEl.style.display = 'none'; }

    let seriesLow = filteredRecords.map(r => [r.ts, r.low]);
    let seriesAvg = filteredRecords.map(r => [r.ts, r.avg]);

    if(chartInstance) chartInstance.destroy();

    const options = {
        chart: { type: 'line', height: '100%', background: 'transparent', animations: { enabled: false }, toolbar: { show: false } },
        theme: { mode: 'dark' },
        stroke: { curve: 'straight', width: [2, 2], dashArray: [0, 5] },
        colors: ['#dcb36c', '#2ea043'], 
        series: [ { name: '最低登錄價 (Ask)', data: seriesLow }, { name: '週平均價 (Avg)', data: seriesAvg } ],
        markers: { size: 5, hover: { size: 7 } },
        xaxis: { type: 'datetime', labels: { datetimeFormatter: { year: 'yyyy', month: "MMM 'yy", day: 'dd MMM', hour: 'HH:mm' } }, tooltip: { enabled: false } },
        yaxis: { labels: { formatter: (val) => val.toFixed(2), style: { colors: '#8b949e' } }, title: { text: '價格 (鑽)', style: { color: '#8b949e' } } },
        grid: { borderColor: '#30363d', strokeDashArray: 3 },
        tooltip: { theme: 'dark', x: { format: 'MM/dd HH:mm' } },
        legend: { position: 'top', horizontalAlign: 'right' }
    };

    chartInstance = new ApexCharts(document.querySelector("#priceChart"), options);
    chartInstance.render();
}