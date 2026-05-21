let data = JSON.parse(localStorage.getItem("data")) || [];

/* LOGIN */
function login(){
if(pass.value=="1234"){
panel.style.display="block";
renderCats();
renderList();
}
}

/* KATEGORİLER */
function renderCats(){
let cat=document.getElementById("cat");
cat.innerHTML="";

data.forEach((c,i)=>{
cat.innerHTML+=`<option value="${i}">${c.title}</option>`;
});
}

/* KATEGORİ EKLE */
function addCategory(){
data.push({
title:title.value,
products:[]
});

save();
renderCats();
renderList();
}

/* ÜRÜN EKLE */
function addProduct(){
let i=document.getElementById("cat").value;

data[i].products.push({
id:Date.now(),
name:name.value,
price:parseInt(price.value),
img:img.value
});

save();
renderList();
}

/* SİSTEM GÖRÜNTÜ */
function renderList(){
let list=document.getElementById("list");
list.innerHTML="";

data.forEach(c=>{
list.innerHTML+=`
<div class="box">
<h3>${c.title}</h3>
<p>${c.products.length} ürün</p>
</div>
`;
});
}

/* KAYDET */
function save(){
localStorage.setItem("data",JSON.stringify(data));
alert("Kaydedildi");
}
