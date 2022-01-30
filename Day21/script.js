// Creating HTML elements
let h1 = document.createElement("h1")
document.body.appendChild(h1)

// logic
let time =10
h1.innerHTML = time

setTimeout(()=>{
    h1.innerHTML = time--;
    setTimeout(()=>{
        h1.innerHTML = time--;
        setTimeout(()=>{
            h1.innerHTML = time--;
            setTimeout(()=>{
                h1.innerHTML = time--;
                setTimeout(()=>{
                    h1.innerHTML = time--;
                    setTimeout(()=>{
                        h1.innerHTML = time--;
                        setTimeout(()=>{
                            h1.innerHTML = time--;
                            setTimeout(()=>{
                                h1.innerHTML = time--;
                                setTimeout(()=>{
                                    h1.innerHTML = time--;
                                    setTimeout(()=>{
                                        h1.innerHTML = time--;
                                        setTimeout(()=>{
                                            h1.innerHTML=`Happy Independence Day`
                                        },1000)   
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)
