let data = [];
let cart = [];
let active = 0;

async function load(){
  let res = await fetch("urunler.json");
  data = await res.json();

  renderMenu();
  render();
}

function renderMenu(){
  let menu = document.getElementById("menu");
  menu.innerHTML = "";

  data.forEach((p,i)=>{
    menu.innerHTML += `
      <button onclick="openPage(${i})">
        ${p.title}
      </button>
    `;
  });
}

function openPage(i){
  active = i;
  render();
}

function render(){
  let app = document.getElementById("app");
  app.innerHTML = "";

  let page = data[active];

  page.products.forEach(p=>{
    app.innerHTML += `
      <div class="product">
        <img src="${p.img}" width="150">

        <h3>${p.name}</h3>
        <p>${p.basePrice} TL</p>

        <input id="txt${p.ref}" placeholder="${p.inputHint}">

        <button onclick='addCart("${p.name}",${p.basePrice})'>
          Sepete Ekle
        </button>
      </div>
    `;
  });

  updateCart();
}

function addCart(name,price){
  cart.push({name,price});
  updateCart();
}

function updateCart(){
  document.getElementById("cartCount").innerText = cart.length;
}
