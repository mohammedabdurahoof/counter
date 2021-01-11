var upordown=0
var a=document.querySelector("h1").innerHTML.toUpperCase()
document.querySelector("h1").innerHTML=a
var x=0
var i=0
document.getElementById("btn").addEventListener("click",function(){
    document.getElementById("child").innerHTML=""
        document.getElementById("child").style=""
    if (upordown==1) {
        x--
    document.getElementById("count").innerHTML=x
        if (x==0) {
            alert("Reched")
            upordown=0
        }
    
    }
    
    else{
        x++
    document.getElementById("count").innerHTML=x
    }
    
})

document.getElementById("btnre").addEventListener("click",function(){
    document.getElementById("child").innerHTML=""
    document.getElementById("child").style=""
    document.getElementById("count").innerHTML=0
    x=0
})

document.getElementById("set").addEventListener("click",function(){
    
   
    abc()
    document.getElementById("num").addEventListener("keyup",function(){
   
        i=document.getElementById("num")
         x=i.value
         document.getElementById("count").innerHTML=x
     })
    
})

function abc(){
    var y=""
    var u=""
    u=u+"border: solid 1px;width: 179px;padding: 10px 10px 10px 10px;background-color: blanchedalmond;margin-left: 65px;"
    y=y+"<input id='num' type='number'><br><input type='radio' name='' id='up'>UP<input type='radio' name='' id='down'>DOWN"
    document.getElementById("child").innerHTML=y
    document.getElementById("child").style=u
    document.getElementById("down").addEventListener("click",function(){
        upordown=1
        document.getElementById("child").innerHTML=""
        document.getElementById("child").style=""
    })
    document.getElementById("up").addEventListener("click",function(){
        upordown=0
        document.getElementById("child").innerHTML=""
        document.getElementById("child").style=""
    })
}