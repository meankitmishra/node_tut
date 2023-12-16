const posts = [
    {title : "Post One" , body: "this is post one"},
    {title : "Post Two" , body: "this is post two"},
]

function createPosts(post,cb){
    setTimeout(()=>{
        posts.push(post);
        cb();
    },3000)
}

function getPosts(){
    setTimeout(()=>{
        posts.forEach(function (posts) {
            const div = document.createElement('div');
            div.innerHTML=`<strong> ${posts.title}</strong> - ${posts.body}`
            document.querySelector('#posts').appendChild(div);
        });
    },2000)
}

document.querySelector('button').addEventListener('click',createPosts({title:"Post Three", body:'this is post three'}, getPosts))