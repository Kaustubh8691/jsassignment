let addBtn = document.querySelector('button')
addBtn.addEventListener('click',add)
let parent1 = document.querySelector('div.todos')
let idx = 0
let content=''
function add(e){
    content = document.querySelector('input').value
    let paragraph = document.createElement('p')
    paragraph.setAttribute('key',String(idx))
    paragraph.innerHTML=content
    parent1.appendChild(paragraph)
    //paragraph.addEventListener('click',func2(idx))
    idx+=1

    document.querySelector((`p[key="${idx-1}"]`)).addEventListener('click',function(e){
        parent1.removeChild(this)
    })

    
}


//   let btn = document.querySelector("button");
// let idx = 0;
// btn.addEventListener("click", function (e) {
//     let todolist = document.querySelector('div.todos');
//     let input = document.querySelector('input');
//     let paragraph = document.createElement("p");
//     paragraph.innerHTML = input.value;
//     paragraph.setAttribute("key", idx);
//     todolist.appendChild(paragraph)
//     input.value = ""
//     idx += 1;
//     document.querySelector(`p[key="${idx-1}"]`).addEventListener("click", function(e){
//         let todolist = document.querySelector('div.todos');
//         todolist.removeChild(this);
//     })
// });

