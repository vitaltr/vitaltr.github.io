let data = JSON.parse(localStorage.getItem("data")) || [];

function login(){
if(pass.value=="1234"){
panel.style.display="block";
}
}

function addProduct(){

let page = data.find(x=>x.title==title.value);

let newProduct = {
name:name.value,
price:parseInt(price.value),
img:img.value
};

if(page){
page.products.push(newProduct);
}else{
data.push({
id:"p"+Date.now(),
title:title.value,
products:[newProduct]
});
}

save();
}

function deletePage(){
data = data.filter(x=>x.id !== del.value);
save();
}

function save(){
localStorage.setItem("data",JSON.stringify(data));
alert("Kaydedildi");
}
