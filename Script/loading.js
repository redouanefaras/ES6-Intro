const parent=document.getElementById("parent");
const loading=document.getElementById("load");
const listBtn=document.getElementsByTagName("button");
const loginBTN=listBtn[0];

loginBTN.addEventListener("click", function(){
    loading.innerText="loading .....";
    loginBTN.style.display="none";
    setTimeout(()=>{
        loading.innerText="please be patient";
    }, 5000);
    setTimeout(()=>{
        loading.innerText="Welcome";
        loginBTN.innerText="log out";
        loginBTN.style.display="block";
    },10000);
});

