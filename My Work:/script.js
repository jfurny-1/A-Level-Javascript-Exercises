
let doorMan = Math.floor(Math.random() * 4);
let door1Click = false;
let door2Click = false;
let door3Click = false;
let image1 = document.getElementById('door1')
let image2 = document.getElementById('door2')
let image3 = document.getElementById('door3')

function door1Clicked(){
    
     door1Click = True;

    if (doorMan.value === 1) {
        image1.src="OIP (1).jpg"
    }

    };

    function door2Clicked(){

         door2Click = True
        if (doorMan.value === 2) {
            image2.src="OIP (1).jpg"
        }
        
    };

    function door3Clicked(){

         door3Click = True
        if (doorMan.value === 3) {
            image3.src="OIP (1).jpg"
        }
        
    };





