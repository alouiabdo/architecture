var carts = document.querySelectorAll(".floor");
console.log(carts);
var overlay1 = document.querySelectorAll(".left");
var overlay2 = document.querySelectorAll(".right")
var p = document.querySelectorAll('p');
count = 0;
var curentid = "";
var varible = false;
var openedclass = '';
var score = 0
carts.forEach((element, i) => {
    element.addEventListener('click', function() {
        // var current = p[i].id;
            
        if (overlay[i].classList.contains('overr')) {
            varible = false
            overlay[i].style.bottom = "0";
            overlay[i].classList.remove('overr');
            count--;
        } else {
            if ( count === 2 && varible == false) {
                overlay.forEach(overl => {
                    overl.style.bottom = "0";
                    overl.classList.remove('overr');
                    
                });
                count = 0;
            }
            overlay[i].style.bottom = "100%";
            overlay[i].classList.add('overr');
            count++;
            if (curentid == p[i].id){
                console.log("oky")
                varible = true;
                score++
                overlay[i].classList.remove('overal');
                openedclass.classList.remove('overal');
                
                count--;
            }if(score == 4){
                alert('you are wine')
            }
            else{
                console.log("not oky") 
                varible = false
            }
            curentid = p[i].id
            openedclass = overlay[i];
        }
        console.log(openedclass);
        console.log(overlay[i]);
        console.log(score)

    });
    // carts.forEach((check) => {
    //     check.classList.contains('overal')
    //     console.log(check);
    //     if(check.classList.contains('overal')){
    //        alert('you are wine')
    //     }
    // });
    
});