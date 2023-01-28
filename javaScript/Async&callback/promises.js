// const posts = [
//     {title:'Post 1',body:"This is Post 1"},
//     {title:'Post 2',body:"This is Post 2"}
// ];
// function getPost(){
//     setTimeout(() => {
//         let output = '';    
//         posts.forEach((post) => {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     },1000)
// }
// function createPost(post){
//     return new Promise ((resolve,reject)=> {
//         setTimeout(()=> {
//         posts.push(post);
//         const error = false;
//         if(!error){
//             resolve();
//         }
//         else{
//             reject("Something went wrong please check")
//         }
//         },2000)
//     })
// }
// createPost({ title:"Post 3",body:"This is the post 3"}).then(getPost).catch(err => console.log(err));

// Async await 
// async function init(){
//    await createPost({ title:"Post 4", body:"This is the post 4" });
//     getPost();
// }
// init();



// const promise1 = Promise.resolve("Hello guyz");
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject) => 
//     setTimeout(resolve,2000,"By By")
// );
// const promise4 = fetch ("https://jsonplaceholder.typicode.com/todos/1").then(res => res.json())

// Promise.all([promise1,promise2,promise3]).then(values => console.log(values));

// Async Await with fetch 
async function fetchUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users/')
    const data = await res.json();
    console.log(data)
}

fetchUsers();

// async function fet