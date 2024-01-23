let x= 0;
function left(){
    document.querySelector(".image-list").style.transform= "translateX(0px)";
    document.querySelector(".image-list").style.transition="all 1s"
    console.log("hi")
}
function right(){
    if(x<2380){
        x+=340
        document.querySelector(".image-list").style.transform= `translateX(${-x}px)`;
        document.querySelector(".image-list").style.transition="all 1s"
        console.log("hi hello")
    }
    else{
        x=0
    }
}