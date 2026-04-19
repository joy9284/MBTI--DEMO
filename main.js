// ===== 資料 =====
const data = {
  "INFP":{
    title:"🌷 INFP 人間仙女",
    makeup:"溫柔氛圍妝",
    desc:"你屬於比較內斂、感受力很強的人，情緒細膩、容易被氛圍影響。不喜歡太強烈或太張揚的風格，比起吸引所有人，你更在意「剛剛好被看見」。",
    model:"images/models/INFP.png",
    products:[
      {img:"images/products/小蜜乳.png", name:"小蜜乳"},
      {img:"images/products/小奶朵.png", name:"小奶朵"},
      {img:"images/products/小金桃.png", name:"小金桃"}
    ]
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
  let info = data[mbti] || data["INFP"];

  document.getElementById("title").innerText = info.title;
  document.getElementById("makeup").innerText = info.makeup;
  document.getElementById("desc").innerText = info.desc;
  document.getElementById("model").src = info.model;

  let html = "";
  info.products.forEach(p=>{
    html += `
      <div>
        <img src="${p.img}">
        <p>${p.name}</p>
      </div>
    `;
  });

  document.getElementById("products").innerHTML = html;
}
