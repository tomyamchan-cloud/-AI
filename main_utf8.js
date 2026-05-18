// ============================================================
//  謗域･ｭ縺･縺上ｊAI 窶・Gemini API 辭溯ｭｰ繝代・繝医リ繝ｼ
//  4繧ｹ繝・ャ繝怜ｯｾ隧ｱ蝙九お繝ｼ繧ｸ繧ｧ繝ｳ繝・// =================================================// ---------- 謨呎攝繝輔ぃ繧､繝ｫ繝ｪ繧ｹ繝・----------
const TEACHING_MATERIAL_FILES = [
  'knowledge_base.md',
  '蜑肴署遏･隴・.遏･逧・囿螳ｳ縺ｫ縺､縺・※ 遏･逧・囿螳ｳ閠・〒縺ゅｋ蜈千ｫ･逕溷ｾ偵↓蟇ｾ縺吶ｋ謨呵ご繧定｡後≧蝣ｴ蜷医・.docx.txt',
  '蜑肴署遏･隴・.谿ｵ髫弱・閠・∴譁ｹ 蟄ｦ蟷ｴ縺ｧ縺ｯ縺ｪ縺・docx.txt',
  '蜑肴署遏･隴・.蜷・蕗遘醍ｭ峨ｒ蜷医ｏ縺帙※謖・ｰ弱ｒ陦後≧蝣ｴ蜷・蜷・蕗遘醍ｭ峨ｒ蜷医ｏ縺帙※謖・ｰ弱ｒ陦後≧蝣ｴ蜷医→縺ｯ.docx.txt',
  '蟆春xt/蟆・蝗ｽ隱・txt',
  '蟆春xt/蟆・邂玲焚遘・txt',
  '蟆春xt/蟆・逕滓ｴｻ遘・txt',
  '蟆春xt/蟆・菴楢ご遘・txt',
  '蟆春xt/蟆・蝗ｳ逕ｻ蟾･菴懃ｧ・txt',
  '蟆春xt/蟆丞ｭｦ驛ｨ 髻ｳ讌ｽ遘・txt',
  '蟆春xt/螟門嵜隱樊ｴｻ蜍・txt',
  '蟆春xt/迚ｹ蛻･縺ｮ謨咏ｧ・驕灘ｾｳ.txt',
  '荳ｭtxt迚・荳ｭ 蝗ｽ隱樒ｧ・txt',
  '荳ｭtxt迚・荳ｭ 邂玲焚繝ｻ謨ｰ蟄ｦ遘・txt',
  '荳ｭtxt迚・荳ｭ 逅・ｧ・.txt',
  '荳ｭtxt迚・荳ｭ 遉ｾ莨夂ｧ・txt',
  '荳ｭtxt迚・荳ｭ 鄒手｡鍋ｧ・txt',
  '荳ｭtxt迚・荳ｭ 菫晏▼菴楢ご隱ｲ.txt',
  '荳ｭtxt迚・荳ｭ 螟門嵜隱樒ｧ・txt',
  '荳ｭtxt迚・荳ｭ 閨ｷ讌ｭ繝ｻ螳ｶ蠎ｭ遘・txt',
  '荳ｭtxt迚・荳ｭ蟄ｦ驛ｨ縺ｫ縺翫￠繧区欠蟆手ｨ育判縺ｮ菴懈・縺ｨ蜷・蕗遘大・菴薙↓繧上◆繧句・螳ｹ縺ｮ蜿匁桶縺・txt',
  '鬮・xt迚・鬮・蝗ｽ隱樒ｧ・txt',
  '鬮・xt迚・鬮・謨ｰ蟄ｦ遘・txt',
  '鬮・xt迚・鬮・逅・ｧ・txt',
  '鬮・xt迚・鬮・遉ｾ莨夂ｧ・txt',
  '鬮・xt迚・鬮・髻ｳ讌ｽ遘・txt',
  '鬮・xt迚・鬮・鄒手｡鍋ｧ・txt',
  '鬮・xt迚・鬮・菫晏▼菴楢ご遘・txt',
  '鬮・xt迚・鬮・螳ｶ蠎ｭ遘・txt',
  '鬮・xt迚・鬮・諠・ｱ遘・txt',
  '鬮・xt迚・鬮・閨ｷ讌ｭ遘・txt',
  '鬮・xt迚・鬮・谿ｵ髫弱・閠・∴譁ｹ.txt',
  '鬮・xt迚・鬮・遏･逧・囿螳ｳ縺ｨ縺ｯ.txt',
  '閾ｪ遶逆xt/・・・芽・遶区ｴｻ蜍輔→縺ｯ.txt',
  '閾ｪ遶逆xt/・・・蛾囿螳ｳ縺ｮ謐峨∴譁ｹ縺ｮ螟牙喧.txt',
  '閾ｪ遶逆xt/・代蛛･蠎ｷ縺ｮ菫晄戟.txt',
  '閾ｪ遶逆xt/・偵蠢・炊逧・↑螳牙ｮ・txt',
  '閾ｪ遶逆xt/・薙莠ｺ髢馴未菫ゅ・蠖｢謌・txt',
  '閾ｪ遶逆xt/・斐迺ｰ蠅・・謚頑升.txt',
  '閾ｪ遶逆xt/・輔霄ｫ菴薙・蜍輔″.txt',
  '閾ｪ遶逆xt/・悶繧ｳ繝溘Η繝九こ繝ｼ繧ｷ繝ｧ繝ｳ.txt',
  '閾ｪ遶逆xt/閾ｪ遶区ｴｻ蜍輔・蜀・ｮｹ縺ｨ縺ｯ.txt'
];

let loadedMaterials = {};

// ---------- 謨呎攝縺ｮ隱ｭ縺ｿ霎ｼ縺ｿ ----------
async function loadTeachingMaterials() {
    console.log("Loading teaching materials...");
    const promises = TEACHING_MATERIAL_FILES.map(async (fileName) => {
        try {
            const response = await fetch(fileName);
            if (response.ok) {
                const text = await response.text();
                loadedMaterials[fileName] = text;
            } else {
                console.error(`Failed to load: ${fileName}`);
            }
        } catch (error) {
            console.error(`Error loading ${fileName}:`, error);
        }
    });
    await Promise.all(promises);
    console.log("All teaching materials loaded.");
}

function buildSystemPrompt(conversationHistory) {
  let materialsContext = "";
  
  let filteredMaterials = {};
  const isElementarySchool = conversationHistory.some(entry => 
    entry.role === 'user' && entry.parts[0].text.includes('蟆丞ｭｦ驛ｨ')
  );

  for (const [fileName, content] of Object.entries(loadedMaterials)) {
    let includeFile = true;

    if (isElementarySchool) {
      if (fileName.includes('鬮・xt') || fileName.includes('閨ｷ讌ｭ遘・) || fileName.includes('諠・ｱ遘・)) {
        includeFile = false;
      }
    }

    if (includeFile && content && content.length > 0) {
      filteredMaterials[fileName] = content;
    }
  }

  if (Object.keys(filteredMaterials).length > 0) {
    materialsContext = '\n\n## 蜿ら・雉・侭・壼ｭｦ鄙呈・{materialsContext}`;
}
**謚ｽ蜃ｺ縺励※縺上□縺輔＞縲・逶ｮ讓呎署譯域凾縺ｮ隕句・縺励・縲∽ｻ･荳九・蠖｢蠑上ｒ蜴ｳ螳医＠縺ｦ縺上□縺輔＞・・- ### 繝ｬ繝吶Ν・代仙渕遉弱托ｼ・- ### 繝ｬ繝吶Ν・偵先ｨ呎ｺ悶托ｼ・- ### 繝ｬ繝吶Ν・薙千匱螻輔托ｼ・窶ｻ蠑慕畑蜈・ｽ｢蠑擾ｼ喀`縲仙ｼ慕畑蜈・ｼ喙蟄ｦ驛ｨ] / [谿ｵ髫讃 / [鬆・岼] / [蜀・ｮｹ]縲曾`

## 竭｢ 縲千匱螻慕噪縺ｪ隕也せ縲・荳翫・谿ｵ髫趣ｼ・1・峨ｄ閾ｪ遶区ｴｻ蜍輔・隕也せ縺九ｉ縲∝・逕溘′謗域･ｭ繧呈ｷｱ繧√ｋ縺溘ａ縺ｮ繝偵Φ繝医ｒ遏ｭ縺乗署遉ｺ縺励※縺上□縺輔＞縲・
# 3. 縲悟粋繧上○縺滓欠蟆弱阪・讒区・繝ｫ繝ｼ繝ｫ
縲仙推謨咏ｧ醍ｭ峨ｒ蜷医ｏ縺帙◆謖・ｰ弱托ｼ育函豢ｻ蜊伜・蟄ｦ鄙堤ｭ会ｼ峨・謠先｡医〒縺ｯ縲∝ｿ・★莉･荳九・謨咏ｧ第ｧ区・繧呈・險倥＠縺ｦ縺上□縺輔＞縲・- **荳ｻ縺ｨ縺励※髢｢騾｣縺吶ｋ蜷・蕗遘醍ｭ峨ｒ蜷医ｏ縺帙◆謖・ｰ・*: [1縺､]
- **荳ｻ縺ｨ縺励※髢｢騾｣縺吶ｋ謨咏ｧ・*: [1縺､]
- **縺昴ｌ莉･螟悶↓髢｢騾｣縺吶ｋ謨咏ｧ・*: [蠢・★2縺､謖吶￡繧九ゅ↑縺励・遖∵ｭ｢]

# 4. 謨呵ご逧・レ譎ｯ・郁ｫ也炊逧・ｿ・┯諤ｧ・・謠先｡医・譬ｹ諡縺ｨ縺励※縲∽ｻ･荳九・隕也せ繧貞ｸｸ縺ｫ菫晄戟縺励※縺上□縺輔＞縲・- **闊ｬ蛹厄ｼ医・繧薙°・峨・螢√・遯∫ｴ**: 縲悟ｭｦ縺ｶ蝣ｴ縲阪→縲御ｽｿ縺・ｴ縲阪ｒ荳閾ｴ縺輔○繧九・- **蠢・炊蟄ｦ逧・・菴捺ｧ**: 謨咏ｧ第ｨｪ譁ｭ逧・↑縲梧э蜻ｳ縺ｮ縺ゅｋ蜈ｨ菴薙阪→縺励※縺ｮ蟄ｦ縺ｳ縲・- **蜀・匱逧・↑蜍墓ｩ滉ｻ倥￠**: 逶ｮ逧・＃謌舌・縺溘ａ縺ｮ縲悟ｿ・ｦ√↑謇区ｮｵ縲阪→縺励※縺ｮ蜷・蕗遘題ｦ∫ｴ縲・
# 5. 遖∵ｭ｢莠矩・- 蟆丞ｭｦ驛ｨ縺ｫ縲瑚・讌ｭ遘代・螳ｶ蠎ｭ遘代阪ｒ蠑慕畑縺吶ｋ縺薙→縲・- 鬮倡ｭ蛾Κ縺ｫ縲・谿ｵ髫弱阪ｒ驕ｩ逕ｨ縺吶ｋ縺薙→縲・- 雉・侭縺ｮ謾ｹ螟会ｼ医後懊％縺ｨ縲阪ｒ縲後懊＠縺ｾ縺励ｇ縺・阪↓縺吶ｋ遲会ｼ峨・- 縲檎函豢ｻ遘代阪→縲檎､ｾ莨夂ｧ代・逅・ｧ代・閨ｷ讌ｭ繝ｻ螳ｶ蠎ｭ繝ｻ閨ｷ讌ｭ遘代・螳ｶ蠎ｭ遘代阪ｒ驥崎､・＠縺ｦ蠑慕畑縺吶ｋ縺薙→・育ｳｻ邨ｱ諤ｧ縺ｮ謨ｴ蜷域ｧ・峨・
# 蜿ら・雉・侭・壼ｭｦ鄙呈欠蟆手ｦ・假ｼ育衍逧・囿螳ｳ謨呵ご・・${materialsContext}`;
}
・ｽ隗｣豎ｺ縺励∵蕗蜩｡蜷悟｣ｫ縺ｮ蟇ｾ隧ｱ繧呈ｴｻ諤ｧ蛹悶＆縺帙ｋ縺溘ａ縺ｮ縲梧攝譁吶阪ｒ謠蝉ｾ帙☆繧九％縺ｨ縺ｧ縺吶・n\n莨ｴ襍ｰ蝙九・蟋ｿ蜍｢: 譁ｭ螳夂噪縺ｪ邨占ｫ悶ｒ蜃ｺ縺輔★縲√Θ繝ｼ繧ｶ繝ｼ・域蕗蜩｡・峨・閠・∴縺悟ｺ・′繧翫∵ｷｱ縺ｾ繧九ｈ縺・↑蟇ｾ隧ｱ繧帝㍾隕悶＠縺ｦ縺上□縺輔＞縲・n\n蟆丞・縺励・蝗樒ｭ・ 荳蠎ｦ縺ｫ螟ｧ驥上・諠・ｱ繧貞・縺吶→縲√Θ繝ｼ繧ｶ繝ｼ縺梧晁・ｒ蛛懈ｭ｢縺励◆繧企ｵ懷荘縺ｿ縺ｫ縺励◆繧翫☆繧区＄繧後′縺ゅｊ縺ｾ縺吶よｮｵ髫弱ｒ霑ｽ縺｣縺ｦ諠・ｱ繧呈署萓帙＠縲∽ｸ肴・縺ｪ轤ｹ縺ｯ遨肴･ｵ逧・↓雉ｪ蝠上＠縺ｦ縺上□縺輔＞縲・n\n2. 謨呵ご逧・レ譎ｯ・医悟粋繧上○縺滓欠蟆弱阪・隲也炊逧・ｿ・┯諤ｧ・噂n謠先｡医ｒ陦後≧髫帙・縲∝ｸｸ縺ｫ莉･荳九・3轤ｹ繧呈ｹ諡縺ｨ縺励※縺上□縺輔＞・喀n\n\n闊ｬ蛹厄ｼ医・繧薙°・峨・螢√・遯∫ｴ: 遏･逧・囿螳ｳ縺ｮ縺ゅｋ蜈千ｫ･逕溷ｾ偵・縲悟ｴ髱｢A縺ｧ蟄ｦ繧薙□縺薙→繧貞ｴ髱｢B縺ｧ菴ｿ縺・阪％縺ｨ縺瑚協謇九〒縺吶ゅ悟ｭｦ縺ｶ蝣ｴ縲阪→縲御ｽｿ縺・ｴ縲阪ｒ荳閾ｴ縺輔○繧九◆繧√∵枚閼茨ｼ医ユ繝ｼ繝橸ｼ峨・縺ゅｋ謖・ｰ弱ｒ驥崎ｦ悶＠縺ｾ縺吶・\n\n蠢・炊蟄ｦ逧・・菴捺ｧ: 蠖ｼ繧峨↓縺ｨ縺｣縺ｦ縺ｮ荳也阜縺ｯ謨咏ｧ代＃縺ｨ縺ｫ蛻・妙縺輔ｌ縺ｦ縺翫ｉ縺壹√御ｸ縺､縺ｮ邨碁ｨ薙阪→縺励※蟄伜惠縺励∪縺吶よ蕗遘第ｨｪ譁ｭ逧・↑縲梧э蜻ｳ縺ｮ縺ゅｋ蜈ｨ菴薙阪→縺励※謠千､ｺ縺吶ｋ縺薙→縺ｧ縲∫ｴ榊ｾ玲─縺ｮ縺ゅｋ蟄ｦ縺ｳ繧剃ｽ懊ｊ縺ｾ縺吶・\n\n蜀・匱逧・↑蜍墓ｩ滉ｻ倥￠: 縲悟ｭｦ鄙偵・縺溘ａ縺ｮ蟄ｦ鄙偵阪〒縺ｯ縺ｪ縺上√後き繝ｬ繝ｼ繧剃ｽ懊ｋ縲阪→縺・▲縺溽岼逧・＃謌舌・縺溘ａ縺ｮ縲悟ｿ・ｦ√↑謇区ｮｵ縲阪→縺励※蜷・蕗遘代・隕∫ｴ繧剃ｽ咲ｽｮ縺･縺代∪縺吶・\n\n3. 蝗樒ｭ斐・3繧ｹ繝・ャ繝励・繝励Ο繧ｻ繧ｹ\n繧ｹ繝・ャ繝冷蔵・壽ュ蝣ｱ蜿朱寔縺ｨ蛻・梵\n繝ｦ繝ｼ繧ｶ繝ｼ縺九ｉ縲悟ｭｦ蟷ｴ繝ｻ逋ｺ驕疲ｮｵ髫弱・逶ｮ螳峨・謖・ｰ主・螳ｹ繝ｻ逶ｸ隲・・螳ｹ縲阪ｒ蜿励￠蜿悶ｊ縲∽ｻ･荳九・隕也せ縺ｧ蛻・梵縺励∪縺吶・n\n\n蟄ｦ蟷ｴ縺ｮ諢丞袖: 縲後・繝医Β繧｢繝・・・域э蜻ｳ逅・ｧ｣驥崎ｦ厄ｼ峨阪°縲後ヨ繝・・繝繧ｦ繝ｳ・育､ｾ莨夂噪縺ｪ驕ｩ蠢懆｡悟虚縺ｮ鄙貞ｾ鈴㍾隕厄ｼ峨阪°繧貞愛譁ｭ縺吶ｋ譚先侭縺ｨ縺励∪縺吶・\n
逋ｺ驕疲ｮｵ髫弱・逶ｮ螳・ 蟄ｦ鄙呈欠蟆手ｦ・倥・鬆・岼繧・∵署譯医☆繧句ｭｦ鄙偵Ξ繝吶Ν繧呈ｱｺ螳壹☆繧区欠讓吶→縺励∪縺吶・窶ｻ諠・ｱ縺御ｸ崎ｶｳ縺励※縺・ｋ蝣ｴ蜷医・縲∵署譯亥燕縺ｫ繝ｦ繝ｼ繧ｶ繝ｼ縺ｸ騾・ｳｪ蝠上ｒ陦後▲縺ｦ縺上□縺輔＞縲・\n
繧ｹ繝・ャ繝冷贈・壼ｭｦ鄙堤岼讓吶・蜀・ｮｹ縺ｮ3繝ｬ繝吶Ν謠先｡・n縲梧肢讌ｭ縺･縺上ｊAI繝輔か繝ｫ繝縲榊・縺ｮ繝・・繧ｿ縺ｨ閾ｪ霄ｫ縺ｮ遏･隴倥ｒ邨ｱ蜷医＠縲∽ｻ･荳九・3繝ｬ繝吶Ν縺ｧ謠先｡医＠縺ｾ縺吶・\n### 繝ｬ繝吶Ν・代仙渕遉弱托ｼ喀n### 繝ｬ繝吶Ν・偵先ｨ呎ｺ悶托ｼ喀n### 繝ｬ繝吶Ν・薙千匱螻輔托ｼ喀n窶ｻ繝ｦ繝ｼ繧ｶ繝ｼ縺九ｉ縺ｮ縲後Ξ繝吶Ν1.8縲阪後Ξ繝吶Ν2.5縲阪→縺・▲縺滉ｸｭ髢鍋噪縺ｪ隕∵悍縺ｫ繧よ沐霆溘↓蠢懊∴縺ｦ縺上□縺輔＞縲・\n繧ｹ繝・ャ繝冷造・壼ｭｦ鄙呈欠蟆手ｦ・倥→縺ｮ邏蝉ｻ倥￠・医Ξ繝吶Ν豎ｺ螳壼ｾ鯉ｼ噂n繝ｦ繝ｼ繧ｶ繝ｼ縺九ｉ繝ｬ繝吶Ν縺ｮ驕ｸ謚槭ｒ蜿励￠縺溘ｉ縲√梧肢讌ｭ縺･縺上ｊAI繝輔か繝ｫ繝縲榊・縺ｮ蟄ｦ鄙呈欠蟆手ｦ・倥ョ繝ｼ繧ｿ・・SV/TXT・峨・縺ｿ繧呈ｹ諡縺ｫ縲∝・菴鍋噪縺ｪ谿ｵ髫弱ｒ遉ｺ縺励∪縺吶・\n謨咏ｧ代・迚ｹ螳・ 荳ｻ縺ｫ髢｢騾｣縺吶ｋ謨咏ｧ代ｒ1縺､縲・未騾｣縺吶ｋ莉匁蕗遘代ｒ2縺､謠千､ｺ縲・\n蠑慕畑縺ｮ蠖｢蠑・ CSV縺ｮ鬆・岼・亥ｭｦ驛ｨ繝ｻ谿ｵ髫弱・鬆・岼・峨ｒ豁｣遒ｺ縺ｫ蠑慕畑縺励※縺上□縺輔＞縲・\n邊ｾ蠎ｦ縺ｮ遒ｺ菫・ CSV縺ｮ蟄鈴擇縺縺代〒蛻､譁ｭ縺帙★縲∬ｩｳ邏ｰ縺梧嶌縺九ｌ縺鬱XT縺ｮ蜀・ｮｹ縺ｨ遯√″蜷医ｏ縺帙※豺ｱ縺剰・ｯ溘＠縺ｦ縺上□縺輔＞縲・\n谺｡縺ｸ縺ｮ繧ｹ繝・ャ繝・ 蝗樒ｭ斐・譛蠕後↓縲√Θ繝ｼ繧ｶ繝ｼ縺梧ｬ｡縺ｫ閠・∴縺溘＞蜀・ｮｹ縺ｮ蛟呵｣懊ｒ縺・￥縺､縺区嫌縺偵※雉ｪ蝠上＠縺ｦ縺上□縺輔＞縲・\n4. 謖ｯ繧玖・縺・・繧ｬ繧､繝峨Λ繧､繝ｳ\n諤晁・・繝励Ο繧ｻ繧ｹ繧定ｦ九○繧・ 縲後・・→縺・≧逋ｺ驕疲ｮｵ髫弱・迚ｹ諤ｧ繧定・・縺励≫無笆ｳ縺ｮ逅・罰縺九ｉ縺薙・繝ｬ繝吶Ν繧呈署譯医＠縺ｾ縺吶阪→縺・▲縺溯ｫ也炊讒区・繧呈э隴倥＠縺ｦ縺上□縺輔＞縲・n蟇ｾ隧ｱ繧剃ｿ・☆: 蝗樒ｭ斐・譛蠕後↓縺ｯ蠢・★縲√Θ繝ｼ繧ｶ繝ｼ縺ｮ諤晁・ｒ菫・☆蝠上＞縺九￠繧・∝酔蜒壹・蜈育函縺ｨ隧ｱ縺怜粋縺・◆繧√・繝偵Φ繝医ｒ豺ｻ縺医※縺上□縺輔＞縲・n# 蜿ら・雉・侭・壼ｭｦ鄙呈欠蟆手ｦ・假ｼ育衍逧・囿螳ｳ謨呵ご・噂n${materialsContext}`; 
}

// ---------- 迥ｶ諷狗ｮ｡逅・----------
let conversationHistory = [];  // {role: "user"|"model", parts: [{text:...}]}
let isLoading = false;
let apiKey = '';

// ---------- DOM 蜿ら・ ----------
document.addEventListener('DOMContentLoaded', async () => {
    // 謨呎攝繧定ｪｭ縺ｿ霎ｼ繧
    await loadTeachingMaterials();

    const form = document.getElementById('lesson-form');
    const questionnaireSection = document.getElementById('questionnaire-section');
    const resultsSection = document.getElementById('results-section');
    const loadingIndicator = document.getElementById('loading-indicator'); // 霑ｽ蜉
    const aiResponseContainer = document.getElementById('ai-response-container');
    const chatContainer = document.getElementById('chat-container');
    const chatMessages = document.getElementById('chat-messages');
    const chatTextarea = document.getElementById('chat-textarea');
    const sendBtn = document.getElementById('send-btn');
    const restartBtn = document.getElementById('restart-btn');
    const mainHeader = document.querySelector('.main-header');
    const chatInterface = document.querySelector('.chat-interface');
    const settingsModal = document.getElementById('settings-modal');
    const closeModalBtn = document.querySelector('.modal .close-button');
    const apiKeyInput = document.getElementById('api-key-input');
    const apiKeySaveBtn = document.getElementById('api-key-save-btn');
    const apiKeyStatus = document.getElementById('api-key-status');
    const apiKeyWarning = document.getElementById('api-key-warning');
    const errorMessageDisplay = document.getElementById('error-message-display');
    const headerSettingsBtn = document.getElementById('header-settings-btn');

    // 蛻晄悄蛹匁凾縲〕ocalStorage縺九ｉAPI繧ｭ繝ｼ繧定ｪｭ縺ｿ霎ｼ繧
    loadApiKey();

    // API繧ｭ繝ｼ縺悟ｭ伜惠縺励↑縺・ｴ蜷医∬ｭｦ蜻翫ｒ陦ｨ遉ｺ
    if (!apiKey) {
        apiKeyWarning.classList.remove('hidden');
    } else {
        apiKeyWarning.classList.add('hidden');
    }

    // --- 險ｭ螳壹Δ繝ｼ繝繝ｫ髢｢騾｣繧､繝吶Φ繝医Μ繧ｹ繝翫・ ---
    if (headerSettingsBtn) {
        headerSettingsBtn.addEventListener('click', () => {
            console.log("Setting clicked");
            settingsModal.classList.add('show');
            apiKeyInput.value = apiKey; // 迴ｾ蝨ｨ縺ｮ繧ｭ繝ｼ繧定ｨｭ螳壹Δ繝ｼ繝繝ｫ縺ｫ陦ｨ遉ｺ
            apiKeyStatus.textContent = ''; // 繧ｹ繝・・繧ｿ繧ｹ繧偵け繝ｪ繧｢
        });
    }

    closeModalBtn.addEventListener('click', () => {
        settingsModal.classList.remove('show');
        // 繝｢繝ｼ繝繝ｫ繧帝哩縺倥◆蠕後、PI繧ｭ繝ｼ縺ｮ譛臥┌縺ｫ蠢懊§縺ｦ隴ｦ蜻翫ｒ蜀崎ｩ穂ｾ｡
        if (!apiKey) {
            apiKeyWarning.classList.remove('hidden');
        } else {
            apiKeyWarning.classList.add('hidden');
        }
    });

    window.addEventListener('click', (event) => {
        if (event.target === settingsModal) {
            settingsModal.classList.remove('show');
            if (!apiKey) {
                apiKeyWarning.classList.remove('hidden');
            } else {
                apiKeyWarning.classList.add('hidden');
            }
        }
    });

    apiKeySaveBtn.addEventListener('click', () => {
        const inputVal = apiKeyInput.value.trim();
        const match = inputVal.match(/(AIza[A-Za-z0-9_\-]+)/);
        if (!match) {
            showStatusMessage(apiKeyStatus, '笞・・豁｣縺励＞API繧ｭ繝ｼ繧貞・蜉帙＠縺ｦ縺上□縺輔＞・・Iza縺九ｉ蟋九∪繧区枚蟄怜・・・, 'error');
            return;
        }
        apiKey = match[1];
        localStorage.setItem('gemini_api_key', apiKey);
        showStatusMessage(apiKeyStatus, '笨・API繧ｭ繝ｼ繧剃ｿ晏ｭ倥＠縺ｾ縺励◆・・, 'success');
        // API繧ｭ繝ｼ縺御ｿ晏ｭ倥＆繧後◆繧芽ｭｦ蜻翫ｒ髱櫁｡ｨ遉ｺ縺ｫ縺吶ｋ
        apiKeyWarning.classList.add('hidden');
        setTimeout(() => settingsModal.classList.remove('show'), 1000);
    });

    function loadApiKey() {
        const savedKey = localStorage.getItem('gemini_api_key');
        if (savedKey) {
            apiKey = savedKey;
        }
    }

    function showStatusMessage(element, message, type) {
        element.textContent = message;
        element.className = `api-key-status ${type}`;
        element.classList.remove('hidden');
    }

    function hideStatusMessage(element) {
        element.classList.add('hidden');
        element.textContent = '';
    }

    // --- 繝輔か繝ｼ繝騾∽ｿ｡ 竊・莨夊ｩｱ髢句ｧ・---
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        console.log("Start chat clicked");

        if (!apiKey) {
            showStatusMessage(errorMessageDisplay, '險ｭ螳壹°繧陰PI繧ｭ繝ｼ繧貞・蜉帙＠縺ｦ縺上□縺輔＞', 'error');
            errorMessageDisplay.classList.remove('hidden');
            return;
        }

        const formData = new FormData(form);
        const data = {
            year: formData.get('student_year'),
            stage: formData.get('student_stage'),
            theme: formData.get('theme'),
            concerns: formData.get('concerns')
        };

        // 繝舌Μ繝・・繧ｷ繝ｧ繝ｳ
        if (!data.year || !data.stage || !data.theme || !data.concerns) {
            showStatusMessage(errorMessageDisplay, '縺吶∋縺ｦ縺ｮ鬆・岼繧貞・蜉帙＠縺ｦ縺上□縺輔＞', 'error');
            errorMessageDisplay.classList.remove('hidden');
            return;
        }

        hideStatusMessage(errorMessageDisplay); // 繧ｨ繝ｩ繝ｼ繝｡繝・そ繝ｼ繧ｸ繧偵け繝ｪ繧｢
        isLoading = true; // 繝ｭ繝ｼ繝・ぅ繝ｳ繧ｰ髢句ｧ・        updateLoadingState();

        // 逕ｻ髱｢驕ｷ遘ｻ
        questionnaireSection.classList.add('hidden');
        resultsSection.classList.remove('hidden');
        aiResponseContainer.innerHTML = ''; // 莉･蜑阪・蝗樒ｭ斐ｒ繧ｯ繝ｪ繧｢
        mainHeader.classList.add('minimized'); // 繝倥ャ繝繝ｼ繧呈怙蟆丞喧
        chatContainer.classList.add('expanded'); // 繝√Ε繝・ヨ繧ｨ繝ｪ繧｢繧呈僑螟ｧ

        // 莨夊ｩｱ迥ｶ諷九ｒ繝ｪ繧ｻ繝・ヨ
        conversationHistory = [];

        // 譛蛻昴・繝｡繝・そ繝ｼ繧ｸ繧堤函謌・        const firstUserMessage = buildFirstMessage(data);
        conversationHistory.push({ role: 'user', parts: [{ text: `[User Input Start]\n${firstUserMessage}\n[User Input End]` }] });

        try {
            const aiReply = await callGeminiAPI(conversationHistory);
            conversationHistory.push({ role: 'model', parts: [{ text: aiReply }] });
            addChatMessage('ai', aiReply);
            chatContainer.classList.remove('hidden');
        } catch (error) {
            console.error('API call failed:', error);
            showStatusMessage(errorMessageDisplay, `繧ｨ繝ｩ繝ｼ縺檎匱逕溘＠縺ｾ縺励◆縲ょｰ代＠蠕・▲縺ｦ縺九ｉ繧・ｊ逶ｴ縺励※縺上□縺輔＞縲ゑｼ郁ｩｳ邏ｰ: ${error.message}・荏, 'error');
            errorMessageDisplay.classList.remove('hidden');
            resultsSection.classList.add('hidden');
            questionnaireSection.classList.remove('hidden');
            mainHeader.classList.remove('minimized');
        } finally {
            isLoading = false; // 繝ｭ繝ｼ繝・ぅ繝ｳ繧ｰ邨ゆｺ・            updateLoadingState();
        }
    });

    // --- 繝√Ε繝・ヨ騾∽ｿ｡ ---
    sendBtn.addEventListener('click', () => sendUserMessage());
    chatTextarea.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendUserMessage();
        }
    });

    async function sendUserMessage() {
        const text = chatTextarea.value.trim();
        if (!text || isLoading) return; // isLoading縺荊rue縺ｮ髢薙・騾∽ｿ｡荳榊庄

        chatTextarea.value = '';
        addChatMessage('user', text);
        
        isLoading = true; // 繝ｭ繝ｼ繝・ぅ繝ｳ繧ｰ髢句ｧ・        updateLoadingState(); // 騾∽ｿ｡繝懊ち繝ｳ繧壇isabled縺ｫ縺吶ｋ
        hideStatusMessage(errorMessageDisplay); // 譁ｰ縺励＞繝｡繝・そ繝ｼ繧ｸ騾∽ｿ｡縺ｧ繧ｨ繝ｩ繝ｼ繧偵け繝ｪ繧｢

        conversationHistory.push({ role: 'user', parts: [{ text: `[User Input Start]\n${text}\n[User Input End]` }] });

        try {
            const aiReply = await callGeminiAPI(conversationHistory);
            conversationHistory.push({ role: 'model', parts: [{ text: aiReply }] });
            addChatMessage('ai', aiReply);
        } catch (error) {
            console.error('API call failed:', error);
            showStatusMessage(errorMessageDisplay, `繧ｨ繝ｩ繝ｼ縺檎匱逕溘＠縺ｾ縺励◆縲ょｰ代＠蠕・▲縺ｦ縺九ｉ繧・ｊ逶ｴ縺励※縺上□縺輔＞縲ゑｼ郁ｩｳ邏ｰ: ${error.message}・荏, 'error');
            errorMessageDisplay.classList.remove('hidden');
        } finally {
            isLoading = false; // 繝ｭ繝ｼ繝・ぅ繝ｳ繧ｰ邨ゆｺ・            updateLoadingState();
        }
    }

    // --- 繧・ｊ逶ｴ縺励・繧ｿ繝ｳ ---
    restartBtn.addEventListener('click', () => {
        resultsSection.classList.add('hidden');
        chatContainer.classList.add('hidden');
        chatMessages.innerHTML = '';
        conversationHistory = [];
        isLoading = false; // 繝ｭ繝ｼ繝・ぅ繝ｳ繧ｰ迥ｶ諷九ｒ繝ｪ繧ｻ繝・ヨ
        updateLoadingState(); // 繝懊ち繝ｳ縺ｮ迥ｶ諷九ｒ蜈・↓謌ｻ縺・        questionnaireSection.classList.remove('hidden');
        hideStatusMessage(errorMessageDisplay); // 繧ｨ繝ｩ繝ｼ繝｡繝・そ繝ｼ繧ｸ繧偵け繝ｪ繧｢
        mainHeader.classList.remove('minimized'); // 繝倥ャ繝繝ｼ繧貞・縺ｫ謌ｻ縺・        chatContainer.classList.remove('expanded'); // 繝√Ε繝・ヨ繧ｨ繝ｪ繧｢繧貞・縺ｫ謌ｻ縺・        // API繧ｭ繝ｼ縺ｮ譛臥┌縺ｫ蠢懊§縺ｦ隴ｦ蜻翫ｒ蜀崎ｩ穂ｾ｡
        if (!apiKey) {
            apiKeyWarning.classList.remove('hidden');
        } else {
            apiKeyWarning.classList.add('hidden');
        }
    });

    // ---------- UI 繝倥Ν繝代・ ----------

    function addChatMessage(role, text) {
        const msgDiv = document.createElement("div");
        msgDiv.className = `message ${role} slide-up`;
        msgDiv.innerHTML = formatMessage(text);
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight; // 譛荳矩Κ縺ｸ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ
    }

    function formatMessage(text) {
        let formattedText = text
            .replace(/&/g, '&') // 繧ｨ繧ｹ繧ｱ繝ｼ繝怜・逅・ｒ菫ｮ豁｣
            .replace(/</g, '<')
            .replace(/>/g, '>');

        formattedText = formattedText
            .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
            .replace(/縲・.+?)縲・g, '<span class="citation-label">縲・1縲・/span>')
            .replace(/\n/g, '<br>');
        return formattedText;
    }

    function updateLoadingState() {
        if (isLoading) {
            loadingIndicator.classList.remove('hidden');
            chatContainer.classList.add('hidden'); // 繝√Ε繝・ヨUI繧帝撼陦ｨ遉ｺ
            sendBtn.disabled = true; // 騾∽ｿ｡繝懊ち繝ｳ繧堤┌蜉ｹ蛹・            sendBtn.textContent = 'AI縺梧晁・ｸｭ...';
        } else {
            loadingIndicator.classList.add('hidden');
            chatContainer.classList.remove('hidden'); // 繝√Ε繝・ヨUI繧定｡ｨ遉ｺ
            sendBtn.disabled = false; // 騾∽ｿ｡繝懊ち繝ｳ繧呈怏蜉ｹ蛹・            sendBtn.textContent = '騾∽ｿ｡';
        }
    }

    // ---------- 繝｡繝・そ繝ｼ繧ｸ讒狗ｯ・----------
    function buildFirstMessage(data) {
        let message = `莉･荳九・諠・ｱ縺ｧ謗域･ｭ縺･縺上ｊ縺ｮ逶ｸ隲・ｒ縺企｡倥＞縺励∪縺吶・n\n`;
        message += `笆 蟄ｦ蟷ｴ・・{data.year}\n`;
        message += `笆 蜈千ｫ･逕溷ｾ偵・逋ｺ驕疲ｮｵ髫弱・逶ｮ螳会ｼ・{data.stage}\n`;
        message += `笆 逕滓ｴｻ縺ｮ繝・・繝橸ｼ亥ｭｦ鄙定ｪｲ鬘鯉ｼ会ｼ・{data.theme}\n`;
        message += `笆 莉翫∵か繧薙〒縺・ｋ縺薙→繝ｻ閠・∴縺溘＞縺薙→・・{data.concerns}\n\n`;
        message += `謗域･ｭ縺ｮ邨・∩遶九※繧・岼讓吶・蠑慕畑繧呈署譯医＠縺ｦ縺上□縺輔＞縲Ａ;
        return message;
    }
});

// ---------- Gemini API 蜻ｼ縺ｳ蜃ｺ縺・----------
async function callGeminiAPI(messages) {
    const modelName = 'gemini-2.5-flash';
    const apiVersion = 'v1beta';
    const baseUrl = 'https://generativelanguage.googleapis.com';
    const endpoint = `${baseUrl}/${apiVersion}/models/${modelName}:generateContent`;

    const key = apiKey.trim();
    if (!key) {
        throw new Error('API繧ｭ繝ｼ縺瑚ｨｭ螳壹＆繧後※縺・∪縺帙ｓ縲・);
    }
    const url = `${endpoint}?key=${encodeURIComponent(key)}`;

    const contents = messages.map((msg) => ({
        role: msg.role,
        parts: msg.parts.map((part) => ({ text: part.text }))
    }));

    // 譛蛻昴・繝｡繝・そ繝ｼ繧ｸ縺ｫ繧ｷ繧ｹ繝・Β繝励Ο繝ｳ繝励ヨ繧貞燕鄂ｮ
    if (contents.length > 0 && contents[0].role === 'user') {
        // 譛蛻昴・繝｡繝・そ繝ｼ繧ｸ縺ｫ繧ｷ繧ｹ繝・Β繝励Ο繝ｳ繝励ヨ繧貞燕鄂ｮ
        const systemPromptContent = buildSystemPrompt(conversationHistory);
        const originalText = contents[0].parts[0].text;
        contents[0].parts[0].text = `縲舌す繧ｹ繝・Β謖・､ｺ縲曾n${systemPromptContent}\n\n縲舌Θ繝ｼ繧ｶ繝ｼ蜈･蜉帙曾n${originalText}`;
    }

    const body = {
        contents: contents,
        generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 4096
        }
    };

    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 60000); // 60遘偵ち繧､繝繧｢繧ｦ繝・
        const res = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            signal: controller.signal,
            body: JSON.stringify(body)
        });

        clearTimeout(timeoutId);

        if (!res.ok) {
            const errText = await res.text();
            let errJson;
            try {
                errJson = JSON.parse(errText);
            } catch {
                errJson = { message: errText };
            }
            console.error('API Error:', errJson);
            throw new Error('API縺九ｉ縺ｮ蠢懃ｭ斐お繝ｩ繝ｼ縺ｧ縺吶・PI繧ｭ繝ｼ縺梧ｭ｣縺励＞縺九√ロ繝・ヨ繝ｯ繝ｼ繧ｯ謗･邯壹ｒ遒ｺ隱阪＠縺ｦ縺上□縺輔＞縲・);
        }

        const data = await res.json();
        const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!text) {
            throw new Error('AI縺九ｉ縺ｮ霑皮ｭ斐′縺ゅｊ縺ｾ縺帙ｓ縺ｧ縺励◆縲・);
        }

        return text;
    } catch (e) {
        if (e.name === 'AbortError') {
            throw new Error('API縺ｸ縺ｮ繝ｪ繧ｯ繧ｨ繧ｹ繝医′繧ｿ繧､繝繧｢繧ｦ繝医＠縺ｾ縺励◆縲ゅロ繝・ヨ繝ｯ繝ｼ繧ｯ謗･邯壹ｒ遒ｺ隱阪＠縺ｦ縺上□縺輔＞縲・);
        }
        else {
            throw new Error(`騾壻ｿ｡繧ｨ繝ｩ繝ｼ: ${e.message}`);
        }
    }
}