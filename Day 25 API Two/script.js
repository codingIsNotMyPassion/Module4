// Create Html elements
document.body.innerHTML=`<button id="btn" onClick="getData()">Show some animal with details</button>
<div id="animal"></div>
`

// logic 
let getData = async function(){
    try{
        let raw = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand")
        let data = await raw.json()
        // console.log(data)
        display(data)
    }catch{
        (error)=>{
            console.log(error)
        }
    }
}

let display = (obj)=>{
    document.getElementById("animal").innerHTML=`
    <div id="image"><img src="${obj.image_link}" alt="animal"></div>
    <p><h5>Name: </h5> ${obj.name}</p>
    <p><h5>Type of animal: </h5>${obj.animal_type}</p>
    <p><h5>Active: </h5>${obj.active_time}</p>
    <p><h5>Lifespan: </h5>${obj.lifespan}</p>
    <p><h5>Diet: </h5>${obj.diet}</p>
    <p><h5>Range: </h5>${obj.geo_range}</p>
    <p><h5>Habitat: </h5>${obj.habitat}</p>
    `
}