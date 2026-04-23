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
    makeup: "images/products/ESFJ.png", // 建議換成 ESFJ 對應的圖片路徑
    desc: "你是溫暖且慷慨的照顧者，天生具有敏銳的觀察力，總能察覺他人的需求並給予最及時的協助。在人群中，你就是最穩定且充滿愛的存在。",
    model: "images/models/ESFJ.png",
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
