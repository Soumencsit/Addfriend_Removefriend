let doc=document.getElementById('card');
let  b1=document.getElementById('add')
let  btn=document.getElementById('btn')
let  h3=document.querySelector('h3')
let p=document.querySelector('p')

let flag=0;

b1.addEventListener("click",()=>{
    b1.style.visibility = "hidden"
    
    if(flag===0){
        btn.innerText="cancel"
        flag=1;
    }


    
})

btn.addEventListener("click",()=>{

    if(flag===1){
        b1.style.visibility = "visible"
        btn.innerText="Remove"
        flag=0;
    }
    else{
        b1.style.visibility = "hidden"
        doc.style.visibility="hidden"

    }
    
})
