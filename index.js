// var btns=document.querySelectorAll("button");

// btns.forEach(function(i){
//     i.addEventListener("click",function(){
//         alert("clickedd");
//     });
// });

for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
    
        var innerhtmlbtn=this.innerHTML;
        makesound(innerhtmlbtn);
        buttonAnimation(innerhtmlbtn);

       
        
});
}

document.addEventListener("keydown",function(e){
    makesound(e.key);
    buttonAnimation(e.key);
    
});

function makesound(key){
     switch(key){
            case "w":
                var drum1=new Audio('./sounds/tom-1.mp3');
                drum1.play();
                
            break;
            
            case "a":
              
                var drum2=new Audio('./sounds/tom-2.mp3');
                drum2.play();
            break;
            
                
            case "s":
                var drum3=new Audio('./sounds/tom-3.mp3');
                drum3.play();
                break;

            case "d":
                var drum4=new Audio('./sounds/tom-4.mp3');
                drum4.play();
                break;


            case "j":
                var drum5=new Audio('./sounds/snare.mp3');
                drum5.play();
                break;


            case "k":
                var drum6=new Audio('./sounds/crash.mp3');
                drum6.play();
                break;


            case "l":
                var drum7=new Audio('./sounds/kick-bass.mp3');
                drum7.play();
                break;


             default:   console.log(innerhtmlbtn);

        }

}


function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    if(activeButton){
        activeButton.classList.add("pressed");
        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100); // removes class after 100ms
    }
}