let data = [
{
title:"Sayfa 1",
products:[
{name:"Ürün 1",price:100,img:"https://picsum.photos/200?1"},
{name:"Ürün 2",price:200,img:"https://picsum.photos/200?2"},
{name:"Ürün 3",price:300,img:"https://picsum.photos/200?3"},
{name:"Ürün 4",price:400,img:"https://picsum.photos/200?4"},
{name:"Ürün 5",price:500,img:"https://picsum.photos/200?5"}
]
},
{
title:"Sayfa 2",
products:[
{name:"Ürün 6",price:100,img:"https://picsum.photos/200?6"},
{name:"Ürün 7",price:200,img:"https://picsum.photos/200?7"},
{name:"Ürün 8",price:300,img:"https://picsum.photos/200?8"},
{name:"Ürün 9",price:400,img:"https://picsum.photos/200?9"},
{name:"Ürün 10",price:500,img:"https://picsum.photos/200?10"}
]
},
{
title:"Sayfa 3",
products:[
{name:"Ürün 11",price:100,img:"https://picsum.photos/200?11"},
{name:"Ürün 12",price:200,img:"https://picsum.photos/200?12"},
{name:"Ürün 13",price:300,img:"https://picsum.photos/200?13"},
{name:"Ürün 14",price:400,img:"https://picsum.photos/200?14"},
{name:"Ürün 15",price:500,img:"https://picsum.photos/200?15"}
]
},
{
title:"Sayfa 4",
products:[
{name:"Ürün 16",price:100,img:"https://picsum.photos/200?16"},
{name:"Ürün 17",price:200,img:"https://picsum.photos/200?17"},
{name:"Ürün 18",price:300,img:"https://picsum.photos/200?18"},
{name:"Ürün 19",price:400,img:"https://picsum.photos/200?19"},
{name:"Ürün 20",price:500,img:"https://picsum.photos/200?20"}
]
},
{
title:"Sayfa 5",
products:[
{name:"Ürün 21",price:100,img:"https://picsum.photos/200?21"},
{name:"Ürün 22",price:200,img:"https://picsum.photos/200?22"},
{name:"Ürün 23",price:300,img:"https://picsum.photos/200?23"},
{name:"Ürün 24",price:400,img:"https://picsum.photos/200?24"},
{name:"Ürün 25",price:500,img:"https://picsum.photos/200?25"}
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
<input placeholder="Ürün açıklaması">

<label>Kişiselleştirme</label>
<input placeholder="İsim / yazı">

<select>
<option>Standart</option>
<option>Özel (+50 TL)</option>
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
cart.push({name,price});
document.getElementById("cartCount").innerText=cart.length;
}

function sendOrder(){
let msg="Yeni Sipariş:%0A";

cart.forEach(c=>{
msg+=`- ${c.name} ${c.price}TL%0A`;
});

window.open("https://wa.me/90XXXXXXXXXX?text="+msg);
}

renderMenu();
render();
