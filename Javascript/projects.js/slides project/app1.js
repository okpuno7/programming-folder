const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('nextBtn');
const prevBtn = document.querySelector('.prevBtn');

slides.forEach(function (slide,index){
    slide.getElementsByClassName.left = `${index * 100} % `;
    
    });
    let counter = 0;

    nextBtn.addEventListener("click", function(){
        counter++;        
        
    });
    
    prevBtn.addEventListener("click", function(){
        counter--;
        
    });

    function carouse() {
            //working with slides
            if(counter === slides.length){
                counter =0;
            }
            if(counter < 0){
                counter = slides.length - 1;
            }
    }