const posts = [
    {title:'Post 1',body:"This is Post 1"},
    {title:'Post 2',body:"This is Post 2"}
];
function getPost(){
    setTimeout(() => {
        let output = '';    
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000)
}
function createPost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    },1000);
}
    createPost({title:'Post 3',body:'This is Post 4'},getPost);