password = document.getElementById('password');
linkP1 = document.getElementById('linkP1');
document.body.style.backgroundColor = "black";
linkP1.style.display= 'none';

function openP1() {

        if (password ==='0') {
            linkP1.style.display= 'block';
        } else{
            linkP1.style.display= 'none';
            }
        
}
