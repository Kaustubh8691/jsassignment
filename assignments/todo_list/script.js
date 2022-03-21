let completed =document.getElementById("completed");
let all=document.getElementById("todos");
let pending=document.getElementById("pending") ;
async function apitodo(){
    let res = await fetch('https://jsonplaceholder.typicode.com/todos');
    let data = await res.json();
    
    for(ele of data){
        let divElem = document.createElement('div');
        divElem.innerHTML = `<p><b>${ele.title}</b><p><p>userId:${ele.userId}</p><p>id:${ele.id}</p>`;
        divElem.setAttribute('style',"width: 45%; margin:5px;border: 1px solid white; padding:5px; display:inline-block;");
        all.appendChild(divElem);
        if (ele.completed===true){
            divElem.setAttribute('class','complete');
            // divElem.setAttribute('style',"color: rgb(79, 161, 79);")
            divElem.innerHTML += `<p>status:${ele.completed}`;
            completed.appendChild(divElem);
            
        }
        else if (ele.completed===false){
            divElem.setAttribute('class','pend');
            // divElem.setAttribute('style',"color: rgb(219, 62, 62);")
            divElem.innerHTML += `<p>status:${ele.completed}`;
            pending.appendChild(divElem);
            
        }
    }

}
      
        
apitodo();
let list=document.getElementById("btn1");
list.addEventListener("click",showall);

let com=document.getElementById("btn2");
com.addEventListener("click",showcom) ;

let pen=document.getElementById("btn3");
pen.addEventListener("click",showpend) ;

function showcom(){
    pending.setAttribute('style','display:None');
    completed.setAttribute('style','display:inline-block');
};
function showpend(){
    completed.setAttribute('style','display:None');
    pending.setAttribute('style','display:inline-block');
};
function showall(){
    all.setAttribute('style','display:inline-block')
    // completed.setAttribute('style','display:inline-block');
    // pending.setAttribute('style','display:inline-block');
};
      