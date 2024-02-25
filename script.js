let button = document.getElementById("btm");
let image1 = document.getElementById("one");
let image2 = document.getElementById("two");
let image3 = document.getElementById("three");
let text = document.getElementById("txt");
let lives = 5;

function spin(){
    
    image1 =  Math.ceil(Math.random()*2);
        document.getElementById("one").src=`owl${image1}.jpg`;
    image2 =  Math.ceil(Math.random()*2);
        document.getElementById("two").src=`owl${image2}.jpg`;
    image3 =  Math.ceil(Math.random()*2);
        document.getElementById("three").src=`owl${image3}.jpg`;
   
        if (!((image1 == image2 && image2 == image3))) {
            lives--;
            text.innerText = `You have ${lives} lives`;
                if(lives === 0){
                    text.innerHTML = `You lose !`
            
        }
    }
        else{
            text.innerText = `You win`;
      }
      
   }


