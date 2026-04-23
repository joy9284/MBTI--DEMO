// ===== 資料 =====
const data = {
  "INFP":{
    title:"🌷 INFP 人間仙女",
    makeup:"images/products/INFP.png",
    desc:"你屬於比較內斂、感受力很強的人，情緒細膩、容易被氛圍影響。不喜歡太強烈或太張揚的風格，比起吸引所有人，你更在意「剛剛好被看見」。",
    model:"images/models/INFP.png",
  },
  "ESTJ": {
    title: "🌷 ESTJ 大地之母", // 你可以之後修改標題
    makeup: "images/products/ESTJ.png", // 建議換成 ESFJ 對應的圖片路徑
    desc: "你是溫暖且慷慨的照顧者，天生具有敏銳的觀察力，總能察覺他人的需求並給予最及時的協助。在人群中，你就是最穩定且充滿愛的存在。",
    model: "images/models/ESTJ.png",
  },
    "INTJ": {
    title: "INTJ 冷感策士女王", // 你可以之後修改標題
    makeup: "images/products/INTJ.png", // 建議換成 ESFJ 對應的圖片路徑
    desc: "你給人的第一印象通常是理性、冷靜、有距離感，不太喜歡過度甜美或可愛的妝感，因為那不符合你的氣場，你適合輪廓清晰、線條乾淨的妝容，這種妝感能強化你本身的掌控感與高級感。",
    model: "images/models/INTJ.png",
  },
  "INTP": {
    title: "INTP 慵懶少女", // 你可以之後修改標題
    makeup: "images/products/INTP.png", // 建議換成 ESFJ 對應的圖片路徑
    desc: "你喜歡自然、舒服、不費力但依然有質感的感覺。很適合低存在感的裸妝系路線，整體像素顏升級版，乾淨、聰明、帶點隨性。",
    model: "images/models/INTP.png",
  },
    "ENTJ": {
    title: "ENTJ 俐落女強人", // 你可以之後修改標題
    makeup: "images/products/ENTJ.png", // 建議換成 ESFJ 對應的圖片路徑
    desc: "你很有目標感，走到哪都像在掌控局面。最適合有份量、有存在感的妝容立體修容能強化你的輪廓，紅唇則會讓整體氣場直接拉滿。",
    model: "images/models/ENTJ.png",
   },  
    "ENTP": {
    title: "ENTP 古靈精怪鬼馬少女", // 你可以之後修改標題
    makeup: "images/products/ENTP.png", // 建議換成 ESFJ 對應的圖片路徑
    desc: "你很有自己的想法，喜歡新鮮感，也不怕嘗試不同風格。標準模板型妝容對你來說太無聊。你很適合玩色眼妝、亮面唇、甚至一些特殊點綴，例如彩色眼線或亮片。這種妝感能把你的靈動感和有趣個性完全表現出來。",
    model: "images/models/ENTP.png",
   },   
    "INFJ": {
    title: "INFJ｜神秘系女主角", // 你可以之後修改標題
    makeup: "images/products/INFJ.png", // 建議換成 ESFJ 對應的圖片路徑
    desc: "你身上有種很安靜卻讓人想了解的故事感。明明沒有特別做什麼，卻總是讓人忍不住多看幾眼。你很適合深邃暈染的眼妝，像是低飽和棕色、內眼線和微煙燻感。這種妝感會放大你的神秘氛圍與深層魅力。",
    model: "images/models/INFJ.png",
   },
  "ENFJ": {
    title: "ENFJ｜溫柔鄰家大姐姐", // 你可以之後修改標題
    makeup: "images/products/ENFJ.png", // 建議換成 ESFJ 對應的圖片路徑
    desc: "你很會照顧別人，也很懂得在關係中給人安全感。穩定且有溫度是你最無可替代的魅力適合柔霧底妝、自然眼妝、豆沙色唇彩這種知性優雅路線。",
    model: "images/models/ENFJ.png",
   },
   "ENFP": {
    title: "ENFP｜元氣小太陽", // 你可以之後修改標題
    makeup: "images/products/ENFP.png", // 建議換成 ESFJ 對應的圖片路徑
    desc: "總是正能量滿滿的你是朋友圈中的開心果，跟你相處的人很容易被你感染。你很適合帶有元氣感的妝容，尤其是帶橘粉調的腮紅和水光唇。臉頰的好氣色會讓你整個人更有生命力，和你的性格就是靈魂搭配。",
    model: "images/models/ENFP.png",
  },
  "ISTJ": {
    title: "ISTJ｜元氣小太陽", // 你可以之後修改標題
    makeup: "images/products/ISTJ.png", // 建議換成 ESFJ 對應的圖片路徑
    desc: "你做事穩定、有邏輯，也很重視細節。不需要太多花俏元素，乾乾淨淨的淡妝才是你的核心。日常通勤妝妝感像你本人一樣：看似低調，但很有質感。",
    model: "images/models/ISTJ.png",
 },
 "ISFJ": {
    title: "ISFJ｜初戀白月光", // 你可以之後修改標題
    makeup: "images/products/ISFJ.png", // 建議換成 ESFJ 對應的圖片路徑
    desc: "你的氣質很柔和，適合淡粉色系、自然腮紅和乾淨眼妝。不需要太濃，反而越自然越能凸顯你的魅力。整體像是天生好氣色，自帶清純感的國民初戀。",
    model: "images/models/ISFJ.png", 
  },
 "ESTJ": {
    title: "ESTJ｜效率女精英", // 你可以之後修改標題
    makeup: "images/products/ESTJ.png", // 建議換成 ESFJ 對應的圖片路徑
    desc: "你喜歡事情有條理，也很知道自己要什麼。推薦給你線條明確、重點清楚的俐落感妝容!例如精確修容、精準眉型和低調高級唇色。妝容跟你的個性一樣，很有效率、很到位。",
    model: "images/models/ESTJ.png", 
 },
 "ESFJ": {
    title: "ESFJ｜粉嫩系女神", // 你可以之後修改標題
    makeup: "images/products/ESFJ.png", // 建議換成 ESFJ 對應的圖片路徑
    desc: "你身上有一種很特別的氣質，舉手投足都散發著女神感的魅力，讓人不自覺的就會被吸引。畫上帶有韓系水光的粉色桃花妝容，會把這種魅力再往上放大一層~讓你隨時隨地上演「女神降臨」",
    model: "images/models/ESFJ.png", 
},
 "ISTP": {
    title: "ISTP｜冷淡酷girl", // 你可以之後修改標題
    makeup: "images/products/ISTP.png", // 建議換成 ESFJ 對應的圖片路徑
    desc: "你很有自己的步調，不喜歡過度修飾。適合乾淨、極簡、帶點距離感的妝。細眼線、低飽和唇色、俐落輪廓就很夠。整體呈現自然酷感，完全是高級冷淡風。",
    model: "images/models/ISTP.png", 
 },
 "ISFP": {
    title: "ISFP｜文藝氣質小姐姐", // 你可以之後修改標題
    makeup: "images/products/ISFP.png", // 建議換成 ESFJ 對應的圖片路徑
    desc: "你很重感受，也很有自己的審美。你適合氛圍感很重的奶茶色、蜜桃色系妝容。像是暈染腮紅、柔和眼影和微水光唇，會讓你看起來很有故事感。整體很像日系電影女主角。",
    model: "images/models/ISFP.png",
 },
 "ESTP": {
    title: "ESTP｜派對辣妹", // 你可以之後修改標題
    makeup: "images/products/ESTP.png", // 建議換成 ESFJ 對應的圖片路徑
    desc: "你喜歡熱鬧和刺激，而且總是充滿著個人魅力。適合高存在感的歐美系妝容，那種很自信又張揚的感覺最能襯托出你的人格魅力~不需要刻意討好，氣場就已經贏一半。",
    model: "images/models/ESTP.png",
},
 "ESFP": {
    title: "ESFP｜閃耀社交甜心", // 你可以之後修改標題
    makeup: "images/products/ESFP.png", // 建議換成 ESFJ 對應的圖片路徑
    desc: "閃閃亮亮的派對妝容最適合你的性格!你很喜歡熱鬧的氛圍，也很享受成為目光的焦點，總是人群中充滿活力又閃閃發光的存在，走到哪裡都像自帶聚光燈!",
    model: "images/models/ESFP.png",
   },
};

// ===== 功能 =====
function choose(value, nextPage){
  let result = JSON.parse(localStorage.getItem("result")) || [];
  result.push(value);
  localStorage.setItem("result", JSON.stringify(result));
  location.href = nextPage;
}

// ===== 開始 =====
function start(){
  localStorage.setItem("result", JSON.stringify([]));
  location.href = "page1.html";
}

// ===== 結果頁用 =====
function renderResult(){
  let result = JSON.parse(localStorage.getItem("result")) || [];

  if(result.length !== 4){
    location.href = "index.html";
    return;
  }

  let mbti = result.join("");
  let info = data[mbti] || data["ESTJ"];

  document.getElementById("title").innerText = info.title;
  document.getElementById("makeup").src = info.makeup;
  document.getElementById("desc").innerText = info.desc;
  document.getElementById("model").src = info.model;

}
