let myLeads = [];
const  inputBtn = document.querySelector('#input-btn');
const inputEl = document.querySelector('#input-el');
const deleteBtn = document.getElementById('delete-btn');
const tabBtn = document.getElementById('tab-btn');

tabBtn.addEventListener('click',function(){
    // console.log(tabs[0].url);
    chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads);
})
})



deleteBtn.addEventListener('dblclick', function(){
    localStorage.clear(); 
    myLeads =[];
    render(myLeads);
})
const ulEl = document.getElementById('ul-el');
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if(leadsFromLocalStorage ){
    myLeads= leadsFromLocalStorage;
    render(myLeads);
}

function render(leads){
    let listItems = "";
    leads.forEach(i => {
        listItems += `
        <li>
        <a href='${i}'target='_blank'>${i}</a>
        </li>`
    });
    ulEl.innerHTML = listItems;
}

inputBtn.addEventListener('click',() => {
   myLeads.push(inputEl.value); 
   inputEl.value = "";
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
   render(myLeads);
});
