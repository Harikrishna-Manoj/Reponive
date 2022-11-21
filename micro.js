const button=document.getElementById("btn");
const list=document.getElementById("list");
list.style.display='none';

button.addEventListener("click",(Event)
=> {
    if(list.style.dispaly=="none"){
        list.style.dispaly=="block";
    }else{
        list.style.dispaly=="none";
    }
})