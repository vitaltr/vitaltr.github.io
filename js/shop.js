let data = JSON.parse(localStorage.getItem("data")) || [];

let cart=[];
let active=0;

/* MENÜ */
function renderMenu(){
let menu=document.getElementById("menu");
menu.innerHTML="";

data.forEach((c,i)=>{
menu.innerHTML+=`
<button onclick="openPage(${i})">${c.title}</button>
`;
});
}

/* SAYFA */
function openPage(i){
active=i;
render();
}

/* ÜRÜN */
function render(){
let app=document.getElementById("app");
app.innerHTML="";

if(!data.length){
app.innerHTML="<p>Ürün yok</p>";
return;
}

data[active].products.forEach(p=>{
app.innerHTML+=`
<div class="product">
<img src="${p.img}" width="150">
<h3>${p.name}</h3>
<p>${p.price} TL</p>

<input id="c${p.id}" placeholder="Kişiselleştirme">

<select id="s${p.id}">
<option value="0">Standart</option>
<option value="50">Özel +50</option>
</select>

<button onclick="addCart('${p.name}',${p.price},'${p.id}')">
Sepete Ekle
</button>
</div>
`;
});

document.getElementById("cartCount").innerText=cart.length;
}

/* SEPET */
function addCart(name,price,id){
let extra=parseInt(document.getElementById("s"+id).value);
let custom=document.getElementById("c"+id).value;

cart.push({
name,
price:price+extra,
custom
});

document.getElementById("cartCount").innerText=cart.length;
}

/* SİPARİŞ */
function sendOrder(){
let msg="Sipariş:%0A";

cart.forEach(c=>{
msg+=`- ${c.name} ${c.price}TL ${c.custom}%0A`;
});

window.open("https://wa.me/90XXXXXXXXXX?text="+msg);
}

renderMenu();
render();
