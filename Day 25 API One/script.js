// declare variables
var data
// create html
document.body.innerHTML= `<div class="container"><button class="btn" onclick="getData()"> Click here to get random dog image</button></div>
<div id="container2"></div>`
// get Image container using DOM
let container2 = document.getElementById("container2")

// logic
async function getData(){
    try{
        let response = await fetch("https://dog.ceo/api/breeds/image/random")
        data = await response.json()
        display(data)
    }catch(error) {
        (error)=>console.log(error);
    }
};
// display function
const display = (obj)=>{
    container2.innerHTML =`<img src="${obj.message}" alt="dog image">`
}