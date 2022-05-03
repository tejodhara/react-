// var url = "https://jsonplaceholder.typicode.com/posts"

async function aw(){
    let x= await fetch("https://jsonplaceholder.typicode.com/posts")
    let fetch1= await x.json();
    
    let posts=document.getElementById("posts")
    fetch1.map((val)=>
    {
        let {title}=val
        posts.innerHTML += `<p>${title}</p>`
        
    })
    console.log(fetch1);
}
aw()