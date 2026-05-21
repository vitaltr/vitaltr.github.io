let data = JSON.parse(localStorage.getItem("data")) || [];

let cart=[];
let active=0;

function renderMenu(){
let menu=document.getElementById("menu");
menu.innerHTML="";

data.forEach((c,i)=>{
menu.innerHTML+=`<button onclick="openPage(${i})">${c.title}</button>`;
});
}

function openPage(i){
active=i;
render();
}

function render(){
let app=document.getElementById("app");
app.innerHTML="";

if(!data.length) return;

data[active].products.forEach(p=>{

app.innerHTML+=`
<div class="product">

<img src="${p.img}">

<div class="right">

<div class="title">${p.name}</div>
<div class="desc">${p.desc}</div>

<span class="badge">${p.price} TL</span>

${p.personalize ? `
<input id="c${p.id}" placeholder="Kişiselleştirme">
` : ""}

${p.options && p.options.length ? `
<select id="o${p.id}">
${p.options.map(o=>`
<option value="${o.price}">${o.name}</option>
`).join("")}
</select>
` : ""}

<button class="btn" onclick="addCart(${p.id})">Sepete Ekle</button>

</div>

</div>
`;
});

document.getElementById("cartCount").innerText=cart.length;
}

function addCart(id){
let product;

data.forEach(c=>{
c.products.forEach(p=>{
if(p.id==id) product=p;
});
});

let extra=0;
let optionName="";

if(product.options){
let sel=document.getElementById("o"+id);
extra=parseInt(sel.value);
optionName=sel.options[sel.selectedIndex].text;
}

let custom="";

if(product.personalize){
custom=document.getElementById("c"+id).value;
}

cart.push({
name:product.name,
price:product.price+extra,
option:optionName,
custom
});

document.getElementById("cartCount").innerText=cart.length;
}

function sendOrder(){
let msg="Yeni Sipariş:%0A";

cart.forEach(c=>{
msg+=`- ${c.name} ${c.price}TL ${c.option||""} ${c.custom||""}%0A`;
});

window.open("https://wa.me/90XXXXXXXXXX?text="+msg);
}

renderMenu();
render();
