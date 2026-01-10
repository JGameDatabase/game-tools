// database.js - 戰術資料庫 (依照 10 張截圖精確修正 T1, T2, T3)
const database = {
    // ==================== TIER 1 (依照截圖修正) ====================
    "scout_rifle": {
        cn: "偵察步槍", en: "SCOUT RIFLE (Mini-21)", type: "weapon",
        desc: "半自動步槍，高精準度。雖然基礎傷害普通，但透過改裝可大幅提升操控性。",
        builds: [
            { name: "老兵II", desc: "換彈速度與操控性提升。" },
            { name: "人體工學II", desc: "舉槍速度與移動射擊穩定性提升。" },
            { name: "自訂槍管", desc: "增加射程與傷害。" }
        ]
    },
    "compact_smg": {
        cn: "緊湊型衝鋒槍", en: "COMPACT SMG (Casull 9)", type: "weapon",
        desc: "高射速副武器，適合近距離防身。",
        builds: [
            { name: "近身射擊II", desc: "大幅提升腰射精準度。" },
            { name: "熊熊火力", desc: "增加傷害。" },
            { name: "老兵I", desc: "略微提升換彈速度與操控性。" }
        ]
    },
    "shotgun": {
        cn: "霰彈槍", en: "SHOTGUN (M500)", type: "weapon",
        desc: "泵動式霰彈槍，近距離威力巨大。",
        builds: [
            { name: "命懸一線", desc: "在低血量時增加傷害或裝填速度。" },
            { name: "人體工學I", desc: "提升舉槍速度與操控性。" },
            { name: "自訂彈匣II", desc: "增加彈匣容量與裝填速度。" }
        ]
    },
    "pistol": {
        cn: "手槍", en: "PISTOL (1911 Protector)", type: "weapon",
        desc: "最基礎的副武器，裝上消音器後是潛行首選。",
        builds: [
            { name: "賞金獵人", desc: "對特殊感染者造成額外傷害。" },
            { name: "熊熊火力", desc: "增加基礎傷害。" },
            { name: "老兵I", desc: "略微提升換彈速度與操控性。" }
        ]
    },
    "machine_pistol": {
        cn: "自動手槍", en: "MACHINE PISTOL (Geist 17MP)", type: "weapon",
        desc: "全自動副武器，爆發力強但準度低。",
        builds: [
            { name: "充填攻擊", desc: "衝刺後短時間內增加傷害。" },
            { name: "熊熊火力", desc: "增加基礎傷害。" },
            { name: "賞金獵人", desc: "對特殊感染者造成額外傷害。" }
        ]
    },

    // ==================== TIER 2 (依照截圖修正) ====================
    "assault_rifle": {
        cn: "突擊步槍", en: "ASSAULT RIFLE (ARK-103)", type: "weapon",
        desc: "最標準的全自動步槍，性能均衡。",
        builds: [
            { name: "熟練槍手", desc: "提升換彈速度與操控性。" },
            { name: "人體工學I", desc: "提升舉槍速度與操控性。" },
            { name: "熊熊火力", desc: "增加基礎傷害。" }
        ]
    },
    "sporting_carbine": {
        cn: "運動卡賓槍", en: "SPORTING CARBINE (PAC-15)", type: "weapon",
        desc: "半自動卡賓槍，準度極高。",
        builds: [
            { name: "自訂裝備", desc: "依據個人手感調整的均衡配置。" },
            { name: "熊熊火力", desc: "增加基礎傷害。" },
            { name: "擴展彈匣", desc: "增加彈藥容量。" }
        ]
    },
    "classic_battle_rifle": {
        cn: "經典戰鬥步槍", en: "CLASSIC BATTLE RIFLE (LAR)", type: "weapon",
        desc: "大威力半自動步槍，改裝虎爪後可全自動射擊。",
        builds: [
            { name: "虎爪", desc: "特殊改裝：改為全自動模式。" },
            { name: "熊熊火力", desc: "增加基礎傷害。" },
            { name: "賞金獵人", desc: "對特殊感染者造成額外傷害。" }
        ]
    },
    "classic_bullpup": {
        cn: "經典小鬥牛步槍", en: "CLASSIC BULLPUP", type: "weapon",
        desc: "三連發點放武器。",
        builds: [
            { name: "命懸一線", desc: "在低血量時增加傷害或裝填速度。" },
            { name: "自訂彈藥", desc: "增加攜帶彈藥量。" },
            { name: "熊熊火力", desc: "增加基礎傷害。" }
        ]
    },
    "light_automatic_weapon": {
        cn: "輕型自動武器", en: "LIGHT AUTOMATIC WEAPON", type: "weapon",
        desc: "類似輕機槍，彈匣大。",
        builds: [
            { name: "公牛之角", desc: "大幅提升穿透力或傷害。" },
            { name: "自訂槍管", desc: "增加射程與精準度。" },
            { name: "老兵I", desc: "略微提升換彈速度與操控性。" }
        ]
    },
    "smg": {
        cn: "衝鋒槍", en: "SMG (TMP5)", type: "weapon",
        desc: "標準型衝鋒槍，射速快。",
        builds: [
            { name: "半自動", desc: "改為半自動模式，提升精準度。" },
            { name: "人體工學I", desc: "提升舉槍速度與操控性。" },
            { name: "彈藥袋", desc: "增加最大攜彈量。" }
        ]
    },
    "defense_smg": { 
        cn: "防禦衝鋒槍", en: "DEFENSE SMG (WASP-180)", type: "weapon",
        desc: "高射速且穩定性佳的防衛型武器。",
        builds: [
            { name: "輕量彈鼓", desc: "大幅增加彈匣容量。" },
            { name: "自訂槍管", desc: "增加射程與傷害。" },
            { name: "老兵I", desc: "略微提升換彈速度與操控性。" }
        ]
    },
    "combat_shotgun": {
        cn: "戰鬥霰彈槍", en: "COMBAT SHOTGUN (S890)", type: "weapon",
        desc: "半自動霰彈槍，射速比 T1 快。",
        builds: [
            { name: "鷹視", desc: "大幅提升射程與精準度。" },
            { name: "彈藥袋", desc: "增加最大攜彈量。" },
            { name: "擴展彈匣", desc: "增加裝填彈數。" }
        ]
    },
    "sniper": {
        cn: "狙擊步槍", en: "SNIPER RIFLE (Mk110)", type: "weapon",
        desc: "高傷害、高穿透。",
        builds: [
            { name: "雙發快速發射", desc: "一次扣板機發射兩發。" },
            { name: "賞金獵人", desc: "對特殊感染者造成額外傷害。" },
            { name: "彈藥袋", desc: "增加最大攜彈量。" }
        ]
    },
    "pdw": {
        cn: "個人防衛武器", en: "PDW", type: "weapon",
        desc: "全自動副武器。",
        builds: [
            { name: "半自動", desc: "改為半自動模式。" },
            { name: "近身射擊I", desc: "提升腰射精準度。" },
            { name: "老兵I", desc: "略微提升換彈速度與操控性。" }
        ]
    },
    "compact_shotgun": {
        cn: "緊湊型霰彈槍", en: "COMPACT SHOTGUN (S890 Shorty)", type: "weapon",
        desc: "副手霰彈槍，只有兩發。",
        builds: [
            { name: "減震器", desc: "減少後座力。" },
            { name: "熊熊火力", desc: "增加基礎傷害。" },
            { name: "人體工學I", desc: "提升舉槍速度與操控性。" }
        ]
    },
    "double_barrel": {
        cn: "雙管霰彈槍", en: "DOUBLE BARRELED", type: "weapon",
        desc: "兩發齊射，瞬間爆發。",
        builds: [
            { name: "衝破重圍", desc: "極高的擊退力。" },
            { name: "老兵I", desc: "略微提升換彈速度與操控性。" },
            { name: "加重子彈", desc: "增加單發傷害。" }
        ]
    },
    "revolver": {
        cn: "左輪手槍", en: "REVOLVER (Casull 6)", type: "weapon",
        desc: "大口徑手槍。",
        builds: [
            { name: "減震器", desc: "減少後座力。" },
            { name: "人體工學I", desc: "提升舉槍速度與操控性。" },
            { name: "熊熊火力", desc: "增加基礎傷害。" }
        ]
    },

    // ==================== TIER 3 (依照截圖修正) ====================
    "assault_carbine": {
        cn: "突擊卡賓槍", en: "ASSAULT CARBINE (HW416)", type: "weapon",
        desc: "T3 級別的突擊步槍，全能王。",
        builds: [
            { name: "自訂裝備", desc: "依據個人手感調整的均衡配置。" },
            { name: "自訂槍管", desc: "增加射程與傷害。" },
            { name: "人體工學I", desc: "提升舉槍速度與操控性。" }
        ]
    },
    "battle_rifle": {
        cn: "戰鬥步槍", en: "BATTLE RIFLE (HAMR-17)", type: "weapon",
        desc: "T3 級別的戰鬥步槍，原本半自動。",
        builds: [
            { name: "船尾型子彈", desc: "增加射程與傷害。" },
            { name: "熊熊火力", desc: "增加基礎傷害。" },
            { name: "老兵I", desc: "略微提升換彈速度與操控性。" }
        ]
    },
    "bullpup": {
        cn: "無托式步槍", en: "BULLPUP RIFLE (XTAR-95)", type: "weapon",
        desc: "三連發步槍，彈道集中。",
        builds: [
            { name: "命懸一線", desc: "在低血量時增加傷害或裝填速度。" },
            { name: "老兵I", desc: "略微提升換彈速度與操控性。" },
            { name: "戰術背心", desc: "增加攜彈量。" }
        ]
    },
    "acr": {
        cn: "先進戰鬥武器", en: "ACR (ACW-20)", type: "weapon",
        desc: "極度穩定，半自動。",
        builds: [
            { name: "榴霰彈", desc: "發射具有小範圍傷害的彈藥。" },
            { name: "擴展彈匣", desc: "增加裝填彈數。" },
            { name: "熊熊火力", desc: "增加基礎傷害。" }
        ]
    },
    "universal_bullpup": {
        cn: "通用無托式步槍", en: "UNIVERSAL BULLPUP (AUR)", type: "weapon",
        desc: "性能均衡的 T3 無托步槍。",
        builds: [
            { name: "基本三連發模式", desc: "維持三連發射擊。" },
            { name: "排好隊!", desc: "可能與穿透或擊殺回饋有關。" },
            { name: "暴怒", desc: "連續擊殺後增加傷害。" }
        ]
    },
    "advanced_smg": {
        cn: "先進衝鋒槍", en: "ADVANCED SMG (Kriss Vector)", type: "weapon",
        desc: "射速極快，近距離輸出極高。",
        builds: [
            { name: "近戰專家", desc: "提升近距離腰射與移動射擊能力。" },
            { name: "自訂彈匣I", desc: "增加彈匣容量。" },
            { name: "自訂彈藥I", desc: "增加攜帶彈藥量。" }
        ]
    },
    "special_smg": {
        cn: "特殊衝鋒槍", en: "SPECIAL SMG", type: "weapon",
        desc: "單發傷害較高的衝鋒槍。",
        builds: [
            { name: "偷偷摸摸", desc: "消音效果強化或不易被發現。" },
            { name: "老兵I", desc: "略微提升換彈速度與操控性。" },
            { name: "自訂彈匣I", desc: "增加彈匣容量。" }
        ]
    },
    "assault_shotgun": {
        cn: "突擊霰彈槍", en: "ASSAULT SHOTGUN (Taiga-12)", type: "weapon",
        desc: "全自動霰彈槍，近戰之王。",
        builds: [
            { name: "自訂彈匣II", desc: "大幅增加彈匣容量。" },
            { name: "自訂彈藥I", desc: "增加攜帶彈藥量。" },
            { name: "戰術背心", desc: "增加攜彈量。" }
        ]
    },
    "crossbow": {
        cn: "十字弩", en: "CROSSBOW", type: "weapon",
        desc: "發射爆炸弩箭。",
        builds: [
            { name: "鯊皮", desc: "免疫自身的爆炸傷害。" },
            { name: "擴展彈匣", desc: "增加裝填數 (弩箭)。" },
            { name: "老兵I", desc: "略微提升換彈速度與操控性。" }
        ]
    },
    "gl": {
        cn: "榴彈發射器", en: "GRENADE LAUNCHER (Thumper GL)", type: "weapon",
        desc: "副武器中的重武。",
        builds: [
            { name: "擊殺治療", desc: "擊殺殭屍後機率回復生命 (極稀有專精)。" },
            { name: "彈藥袋", desc: "增加最大攜彈量。" },
            { name: "戰術背心", desc: "增加攜彈量。" }
        ]
    },
    "multi_barrel": {
        cn: "多槍管霰彈槍", en: "MULTI-BARREL SHOTGUN", type: "weapon",
        desc: "四管霰彈槍。",
        builds: [
            { name: "新彈匣", desc: "改善裝填機制或容量。" },
            { name: "自訂彈藥I", desc: "增加攜帶彈藥量。" },
            { name: "自訂槍管", desc: "增加射程與精準度。" }
        ]
    },
    "repeating_rifle": {
        cn: "連發步槍", en: "REPEATING RIFLE (1877 SBL)", type: "weapon",
        desc: "槓桿式步槍。",
        builds: [
            { name: "電擊", desc: "子彈帶有電擊效果，可定身敵人。" },
            { name: "自訂彈匣I", desc: "增加彈匣容量。" },
            { name: "賞金獵人", desc: "對特殊感染者造成額外傷害。" }
        ]
    },
    "heavy_pistol": {
        cn: "重型手槍", en: "HEAVY PISTOL (DE50)", type: "weapon",
        desc: "大口徑手槍，傷害極高。",
        builds: [
            { name: "統治者", desc: "極高的單發傷害與擊退力。" },
            { name: "擴展彈匣", desc: "增加彈匣容量。" },
            { name: "近身射擊I", desc: "提升腰射精準度。" }
        ]
    },

    // ==================== HEAVY & MELEE (依照截圖) ====================
    "rpg": { cn: "RPG發射器", en: "RPG", type: "weapon", desc: "最大爆炸範圍，一發摧毀屍塔。", builds: [{name:"暫無", desc:"暫無"}] },
    "mgl": { cn: "MGL", en: "MGL", type: "weapon", desc: "連發榴彈。", builds: [{name:"暫無", desc:"暫無"}] },
    "mrl": { cn: "多管火箭發射器", en: "MRL", type: "weapon", desc: "四連發火箭。", builds: [{name:"暫無", desc:"暫無"}] },
    "payload": { cn: "爆破步槍", en: "PAYLOAD RIFLE", type: "weapon", desc: "高爆狙擊。", builds: [{name:"暫無", desc:"暫無"}] },
    "heavy_shotgun": { cn: "重型突擊霰彈槍", en: "HEAVY SHOTGUN", type: "weapon", desc: "全自動重噴。", builds: [{name:"暫無", desc:"暫無"}] },
    "machine_gun": { cn: "機槍", en: "MACHINE GUN", type: "weapon", desc: "持續火力。", builds: [{name:"暫無", desc:"暫無"}] },
    "flamethrower": { cn: "火焰噴射器", en: "FLAMETHROWER", type: "weapon", desc: "持續燃燒。", builds: [{name:"暫無", desc:"暫無"}] },
    "chainsaw": { cn: "鏈鋸", en: "CHAINSAW", type: "weapon", desc: "近戰切割。", builds: [{name:"暫無", desc:"暫無"}] },

    "light_melee": { cn: "輕型近戰武器", en: "LIGHT MELEE", type: "weapon", desc: "揮舞快，耗體少。", builds: [{name:"暫無", desc:"暫無"}] },
    "medium_melee": { cn: "中型近戰武器", en: "MEDIUM MELEE", type: "weapon", desc: "均衡選擇。", builds: [{name:"暫無", desc:"暫無"}] },
    "heavy_melee": { cn: "重型近戰武器", en: "HEAVY MELEE", type: "weapon", desc: "高傷，硬直大。", builds: [{name:"暫無", desc:"暫無"}] },

    // ==================== CLASSES (八大職業) ====================
    "gunslinger": {
        cn: "槍手", en: "GUNSLINGER", type: "class",
        desc: "槍械大師，擁有最強的單體輸出。核心是「爆頭」與「切槍」。",
        builds: [
            { 
                name: "副武爆彈流 (新手推薦)", 
                desc: "技能代碼：224-424-132<br>特點：快速擊殺特感，減少煩惱。核心技能包含衝擊手榴彈與切槍增傷。<br>開局武器：突擊步槍 或 戰鬥霰彈槍。" 
            },
            { 
                name: "增傷流 (進階輸出)", 
                desc: "技能代碼：223-122-131<br>特點：熟悉擊殺特感後可挑戰，方便擊殺屍潮。強調傷害堆疊。<br>開局武器：突擊步槍 或 戰鬥霰彈槍。" 
            }
        ]
    },
    "hellraiser": {
        cn: "叛逆者", en: "HELLRAISER", type: "class",
        desc: "爆炸專家。不需要準度，只需要炸爛一切。",
        builds: [
            { 
                name: "爆破流", 
                desc: "技能代碼：243-334-232<br>特點：新手先用這個版本，上手後再換成毒煙回彈。主要強化 C4 與榴彈傷害。" 
            }
        ]
    },
    "medic": {
        cn: "醫生", en: "MEDIC", type: "class",
        desc: "隊伍的心臟，提供治療與護盾。",
        builds: [
            { 
                name: "萬解懶人點法", 
                desc: "技能代碼：241-333-332<br>特點：這版本萬解懶人點法，頂多把打針效果改成噴護盾煙霧給隊員吸用(隱身)。" 
            }
        ]
    },
    "fixer": {
        cn: "修補匠", en: "FIXER", type: "class",
        desc: "提供彈藥或全隊隱身。",
        builds: [
            { 
                name: "彈修 (三合一補血)", 
                desc: "技能代碼：231-311-214<br>特點：強大輔助，提供爆破彈藥，且養成沒有爆破彈也能控彈的習慣。配置包含三合一補血。" 
            },
            { 
                name: "煙修 (遮蔽煙霧)", 
                desc: "技能代碼：324-312-233<br>特點：雖然玩的人比較少，但也是一個很輔助的職業。利用煙霧彈讓全隊隱身。" 
            }
        ]
    },
    "slasher": {
        cn: "劈砍者", en: "SLASHER", type: "class",
        desc: "近戰狂戰士，唯一能與殭屍肉搏的職業。",
        builds: [
            { 
                name: "回盾隱身流", 
                desc: "技能代碼：142-221-132<br>特點：需搭配【中型武器-戰斧】。砍殭屍回護盾 + 砍殭屍隱身，並增加近戰推殭屍距離。" 
            }
        ]
    },
    "exterminator": {
        cn: "殲滅者", en: "EXTERMINATOR", type: "class",
        desc: "防守專家，擅長燃燒與重武。",
        builds: [
            { 
                name: "火瓶流", 
                desc: "技能代碼：134-443-321<br>特點：新手請先使用火瓶流派入坑熟悉，爾後可以改玩地雷流。利用燃燒瓶封鎖區域。" 
            }
        ]
    },
    "dronemaster": {
        cn: "無人機大師", en: "DRONEMASTER", type: "class",
        desc: "帶著無人機的獨行俠。",
        builds: [
            { 
                name: "電擊流 (新手保命)", 
                desc: "技能代碼：232-232-432<br>特點：提供新人保命為重的方式，推薦電擊無人機。防止殭屍偷打、抗衡潛伏者撲倒、阻止蠻牛摔你。" 
            }
        ]
    },
    "vanguard": {
        cn: "前鋒", en: "VANGUARD", type: "class",
        desc: "持盾坦克，正面無敵。",
        builds: [
            { 
                name: "劍盾流", 
                desc: "技能代碼：223-142-332<br>特點：新手推薦從劍盾入門，上手後再學習槍盾流。第六排技能看個人選擇，也可以換成第四項(惡臭撲鼻)。" 
            }
        ]
    },

    // --- 預設 ---
    "default": {
        cn: "資料讀取中...", en: "DATA RETRIEVAL", type: "unknown",
        desc: "請確認該項目的 ID 是否正確。",
        builds: [{ name: "標準配置", desc: "基礎型態。" }]
    }
};