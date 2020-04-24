let select1 = document.getElementById('sel1')
let select2 = document.getElementById('sel2')
let select3 = document.getElementById('sel3')
let color = document.getElementById('color')
let main = document.getElementById('main')

let frame = document.getElementById('frame')
let url = document.getElementById('website')
let btn = document.getElementById('btn')
let refresh = document.getElementById('refresh')
let custom = document.getElementById('custom')
let customWidth = document.getElementById('width')
let customHeight = document.getElementById('height')

custom.addEventListener("click",()=>{
    frame.width = customWidth.value
    frame.height = customHeight.value
})


btn.addEventListener("click",()=>{
    let website = url.value
    frame.src = website
})

refresh.addEventListener("click",()=>{
    document.getElementById("frame").src=frame.src;
})

window.addEventListener("keyup",(e)=>{
    if(e.keyCode==82){
        document.getElementById("frame").src=frame.src;
    }
    if(e.keyCode==68){
        //Desktop
        frame.width=1440
        frame.height=900
    }
    if(e.keyCode==84){
        //Tablet
        frame.width=1280
        frame.height=850
    }
    if(e.keyCode==77){
        //Mobile
        frame.width=412
        frame.height=732
    }
})

color.addEventListener("input",()=>{
    main.style.backgroundColor= color.value
})

select1.addEventListener("click",()=>{
    let val = select1.value.split("X")
    frame.width = val[0]
    frame.height = val[1]
})

select2.addEventListener("click",()=>{
    let val = select2.value.split("X")
    frame.width = val[0]
    frame.height = val[1]
})


select3.addEventListener("click",()=>{
    let val = select3.value.split("X")
    frame.width = val[0]
    frame.height = val[1]
})
