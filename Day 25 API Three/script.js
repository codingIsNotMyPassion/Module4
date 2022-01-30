// create html elements using dom

document.body.innerHTML=
`<nav class="nav-container">
<h1>Cat facts<h1></nav>
<div id="container" class="main-container"></div>`

// logic to get
async function getData(){
    try{
        let response = await fetch("https://cat-fact.herokuapp.com/facts")
        let data = await response.json()
        console.log(data)
        container.innerHTML="" 
        data.forEach((dataObj)=>{
           display(dataObj)
        })
    }catch(error) {
        (error)=>console.log(error);
    }
};
getData()

// diaplay to create 10 books containers
const display = (obj)=>{
    container.innerHTML +=`
    <div id="childContainer" class="child-container">
    <p>${obj.text}</p>
    </div>
    `
}