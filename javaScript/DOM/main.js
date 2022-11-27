// console.dir(document)
// console.dir(document.URL)
// console.dir(document.domain)
// console.dir(document.title)
// document.title = 500;
// console.log(document.doctype)
// console.log(document.all[9]);
// console.log(document.forms)
// console.log(document.links)
// let group = document.getElementsByClassName('list-group-item')
// console.log(group)
// console.log(group[2]);

// for(let i = 0; i < group.length;i++){
//     group[i].style.backgroundColor = 'yellow';
// }

// let tag = document.getElementsByTagName('li')
// console.log(tag)

// tag.style.backgroundColor = 'yellow';


// Query Selector
// let title = document.querySelector('.list-group-item');
// title.style.backgroundColor = 'blue'

// let input  = document.querySelector('input');
// input.value = "Danish is great"


// let submit = document.querySelector('input[type="submit"]')
// submit.value = "Have fun"


// let item = document.querySelector('.list-group-item:nth-child(4)')
// item.style.backgroundColor = "orange"

// let Selector = document.querySelectorAll('.list-group-item')
// console.log(Selector)
// Selector[2].style.backgroundColor = "grey"
// let odd = document.querySelectorAll('li:nth-child(odd)')
// for(let i = 0;i <odd.length ;i++){
//     odd[i].style.backgroundColor='grey';
// }

// Traversing the DOM

// let itemList = document.querySelector('#items');
// Parent node property
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor = "lightgrey"
// console.log(itemList.parentNode.parentNode)
// console.log(itemList.parentElement)

// console.log(itemList.childNodes)
// console.log(itemList.children)
// itemList.children[0].style.color = "red"

// console.log(itemList.lastElementChild)
// console.log(itemList.nextElementSibling)
// console.log(itemList.previousElementSibling)


// Create Element
// let newDiv = document.createElement('div')
// newDiv.className='Hellow'
// newDiv.id= "id"
// newDiv.setAttribute('title','nana')

// let newDivText = document.createTextNode('Hellow world')

// newDiv.appendChild(newDivText)
// console.log(newDiv)
// let container = document.querySelector('header .container')
// let h1 = document.querySelector('header h1');

// newDiv.style.fontSize = '50px'
// container.insertBefore(newDiv,h1)
// const btn = document.getElementById('btn')
// btn.addEventListener('click',btnClick);

// function btnClick(e){
    // document.getElementById('header-title').textContent = "Changed";
    // document.querySelector('.main-header').style.backgroundColor = "black";
    // console.log(e)
    // console.log(e.target.id)
    // console.log(e.target.className)
    // console.log(e.type)
    // console.log(e.clientX)
    // console.log(e.offsetX)
    // console.log(e.altKey)
    // console.log(e.shiftKey)
    // console.log(e.ctrlKey)  }
    // let output = document.getElementById('output');
    // let div = document.getElementById('box')
// let btn = document.getElementById('btn')
// let input = document.querySelector('input[type="text"]');
// let form  = document.querySelector('form')
// let select = document.querySelector('select');

// form.addEventListener('submit',runEvent);
// select.addEventListener('change',runEvent)
// input.addEventListener('blur',runEvent);
// btn.addEventListener('click',runEvent);
// btn.addEventListener('dblclick',runEvent)
// btn.addEventListener('mousedown',runEvent)
// btn.addEventListener('mouseup',runEvent)
// div.addEventListener('mouseenter',runEvent)
// div.addEventListener('mouseleave',runEvent)
// div.addEventListener('mouseout',runEvent)
// div.addEventListener('mousemove',runEvent);
// function runEvent(e){
//     e.preventDefault();
// console.log('event type: '+e.type);
// console.log(e.target.value)
// box.innerHTML = `<h1> ${e.target.value} </h1>`
// output.innerHTML = `<h3>MouseX:`+e.offsetX+`</h3> <h3>MouseY:`+e.offsetY+`</h3>` 
// div.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",20)"
// document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",200)"}

let form = document.querySelector('form')
let ul  = document.querySelector('ul');
form.addEventListener('submit',addItem);
ul.addEventListener('click',removeItem)

function addItem (e){
    e.preventDefault()
    let newItem = document.getElementById('input').value;
    let li = document.createElement('li')
    li.className = 'list-group-item'
    li.appendChild(document.createTextNode(newItem));
    let deleteBtn = document.createElement('button')
    deleteBtn.className = 'danger'
    deleteBtn.appendChild(document.createTextNode('X'))
    li.appendChild(deleteBtn)
    ul.appendChild(li);
}
function removeItem(e) {
    if(e.target.classList.contains('danger')){
        if(confirm("are u sure")){
            let list = e.target.parentElement;
            ul.removeChild(list);
        }
    }
}

