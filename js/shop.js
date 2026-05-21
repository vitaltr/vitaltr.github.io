let data = JSON.parse(localStorage.getItem("data")) || [
{
id:"p1",
title:"Sayfa 1",
products:[
{name:"Ürün 1",price:100,img:"https://picsum.photos/200?1"},
{name:"Ürün 2",price:200,img:"https://picsum.photos/200?2"},
{name:"Ürün 3",price:300,img:"https://picsum.photos/200?3"},
{name:"Ürün 4",price:400,img:"https://picsum.photos/200?4"},
{name:"Ürün 5",price:500,img:"https://picsum.photos/200?5"}
]
}
];

let cart=[];
let active=0;

function renderMenu(){
let menu=document.getElementById("menu");
menu.innerHTML="";
data.forEach((p,i)=>{
menu.innerHTML+=`<button onclick="openPage(${i})">${p.title}</button>`;
});
}

function openPage(i){
active=i;
render();
}

function render(){
let app=document.getElementById("app");
app.innerHTML="";

data[active].products.forEach(p=>{
app.innerHTML+=`
<div class="product">
<img src="${p.img}" width="150">

<h3>${p.name}</h3>
<p>${p.price} TL</p>

<label>Açıklama</label>
<input id="desc${p.name}" placeholder="Ürün açıklaması">

<label>Kişiselleştirme</label>
<input id="custom${p.name}" placeholder="İsim / yazı">

<select id="opt${p.name}">
<option value="0">Standart</option>
<option value="50">Özel +50 TL</option>
</select>

<button onclick="addCart('${p.name}',${p.price})">
Sepete Ekle
</button>
</div>
`;
});

document.getElementById("cartCount").innerText=cart.length;
}

function addCart(name,price){
let opt=document.querySelector(`#opt${name}`).value;
let custom=document.querySelector(`#custom${name}`).value;

cart.push({
name,
price:price+parseInt(opt),
custom
});

document.getElementById("cartCount").innerText=cart.length;
}

function sendOrder(){
let msg="Yeni Sipariş:%0A";

cart.forEach(c=>{
msg+=`- ${c.name} (${c.price}TL) - ${c.custom}%0A`;
});

window.open("https://wa.me/90XXXXXXXXXX?text="+msg);
}

renderMenu();
render();
