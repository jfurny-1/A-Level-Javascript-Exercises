
let doorMan = Math.floor(Math.random() * 3) + 1;
let door1Click = false;
let door2Click = false;
let door3Click = false;
let image1 = document.getElementById('door1')
let image2 = document.getElementById('door2')
let image3 = document.getElementById('door3')

function door1Clicked(){
    
     door1Click = true;
    
    if (doorMan === 1) {
        image1.src="man.jpg"
        alert(doorMan)
        
    }

    };

    function door2Clicked(){
        
         door2Click = true
        if (doorMan === 2) {
            image2.src="man.jpg"
            alert(doorMan)
        }
        
    };

    function door3Clicked(){
        
         door3Click = true
        if (doorMan === 3) {
            image3.src="man.jpg"
            alert(doorMan)
        }
        
    };




