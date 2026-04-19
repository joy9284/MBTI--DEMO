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
    "ESTJ": {
    title: "🌷 ESTJ 大地之母", // 你可以之後修改標題
    makeup: "images/products/ESFJ.png", // 建議換成 ESFJ 對應的圖片路徑
    desc: "你是溫暖且慷慨的照顧者，天生具有敏銳的觀察力，總能察覺他人的需求並給予最及時的協助。在人群中，你就是最穩定且充滿愛的存在。",
    model: "images/models/ESFJ.png",
  }
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
