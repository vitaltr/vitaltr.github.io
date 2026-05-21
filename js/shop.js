let data = [
  {
    title: "Elektronik",
    products: [
      {
        name: "PCB Kit",
        basePrice: 450,
        img: "https://picsum.photos/200"
      },
      {
        name: "IoT Kit",
        basePrice: 600,
        img: "https://picsum.photos/201"
      }
    ]
  },
  {
    title: "Yazılım",
    products: [
      {
        name: "AI Bot",
        basePrice: 900,
        img: "https://picsum.photos/202"
      }
    ]
  }
];

let cart = [];
let active = 0;

function renderMenu(){
  let menu = document.getElementById("menu");
  menu.innerHTML = "";

  data.forEach((c,i)=>{
    menu.innerHTML += `<button onclick="openCat(${i})">${c.title}</button>`;
  });
}

function openCat(i){
  active = i;
  render();
}

function render(){
  let app = document.getElementById("app");
  app.innerHTML = "";

  data[active].products.forEach(p=>{
    app.innerHTML += `
      <div class="product">
        <img src="${p.img}" width="150">
        <h3>${p.name}</h3>
        <p>${p.basePrice} TL</p>
        <button onclick="addCart('${p.name}',${p.basePrice})">Sepete Ekle</button>
      </div>
    `;
  });

  document.getElementById("cartCount").innerText = cart.length;
}

function addCart(name,price){
  cart.push({name,price});
  document.getElementById("cartCount").innerText = cart.length;
}

function sendOrder(){
  let msg = "Yeni Sipariş:%0A";

  cart.forEach(c=>{
    msg += `- ${c.name} ${c.price}TL%0A`;
  });

  window.open("https://wa.me/90XXXXXXXXXX?text="+msg);
}

renderMenu();
render();
