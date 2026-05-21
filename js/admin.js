let data = JSON.parse(localStorage.getItem("data")) || [];

function login(){
if(pass.value==="1234"){
panel.style.display="block";
renderCats();
renderList();
}
}

function renderCats(){
let c=document.getElementById("category");
c.innerHTML="";

data.forEach((x,i)=>{
c.innerHTML+=`<option value="${i}">${x.title}</option>`;
});
}

function addCat(){
data.push({title:cat.value,products:[]});
save();
renderCats();
renderList();
}

function addProduct(){
let i=document.getElementById("category").value;

let optText=options.value.split("\n").filter(x=>x);

let opts=optText.map(x=>{
let [name,price]=x.split(":");
return {name,price:parseInt(price)||0};
});

data[i].products.push({
id:Date.now(),
name:name.value,
price:parseInt(price.value),
img:img.value,
desc:desc.value,
personalize:personalize.checked,
options:opts
});

save();
renderList();
}

function renderList(){
let list=document.getElementById("list");
list.innerHTML="";

data.forEach((c,i)=>{
list.innerHTML+=`
<div style="border:1px solid #ddd;padding:10px;margin:10px">
<h3>${c.title}</h3>

${c.products.map(p=>`
<div>
${p.name} - ${p.price} TL
</div>
`).join("")}

</div>
`;
});
}

function save(){
localStorage.setItem("data",JSON.stringify(data));
}
