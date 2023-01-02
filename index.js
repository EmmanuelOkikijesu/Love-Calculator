let yourName=document.getElementById("yourname")
let crushName=document.getElementById("crushname")
let calculate=document.getElementById("calculate")
let result=document.getElementById("result")
let reload = document.getElementById("reload")
let randomNumber= Math.floor(Math.random()*100)
let icon = document.getElementById("icon")

yourName.addEventListener("change",function(){
    yN=yourName.value.toUpperCase()
})
crushName.addEventListener("change",function(){
    cN=crushName.value.toUpperCase()
}) 

calculate.addEventListener("click", function(e){
    e.preventDefault()
    

    if(yourName.value=="" && crushName.value==""){
        alert("Please your name and His/Her Name")
        
    }
    if(yourName.value==""){
        alert("Please Enter Your Name")
        
        }
        if(crushName.value==""){
            alert("Please Enter His/Her Name")
            
        }
        icon.style.display="block"
   setTimeout( function(){ {
    
   } if(randomNumber>70){
        
        result.innerHTML= yN + " And "+ cN +   " Are   Very Compatible" 
        reload.style.display="inline-block"
        icon.className="fa-solid fa-heart"

    }
    else if(randomNumber=>50 && randomNumber<70){
        
        result.innerHTML=yN + " And "+ cN + " Are a Little bit Compatible,your Crush may not be the One For You" 
        reload.style.display="inline-block"
        icon.className="fa-solid fa-heart-half-stroke"
    }
    else if(randomNumber<50){
        result.innerHTML=yN + " And "+ cN + " Are not Little Compatible, Find Love ElseWhere" 
        reload.style.display="inline-block"
        icon.className="fa-solid fa-heart-crack"
    }

},3000)
})

























