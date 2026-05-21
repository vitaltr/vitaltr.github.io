let data = JSON.parse(localStorage.getItem("data")||"[]");

function login(){
  if(pass.value=="1234"){
    panel.style.display="block";
  }
}

function add(){
  let obj = {
    title:"Yeni Kategori",
    products:[
      {
        name:name.value,
        basePrice:price.value,
        img:"https://picsum.photos/200"
      }
    ]
  };

  data.push(obj);
  localStorage.setItem("data",JSON.stringify(data));

  alert("eklendi");
}
