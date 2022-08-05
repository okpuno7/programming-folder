let reviews = [
    {
        id : 1,
        job : "Web Developer",
        fullname : "Okpuno Solomon",
        img : "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: " God is good all the time. Just seek ye first the kingdom of God and all other things shall be added unto you oh ye." ,
    },

    {
        id : 2,
        job : "Car Developer",
        fullname : "Evans Junior",
        img : "https://www.rollingstone.com/wp-content/uploads/2022/02/0001x.jpg?resize=1800,1200&w=1200.jpg",
        text: " Only God can judge me.Keep ya head up and never give up Just seek ye first the kingdom of God and all other things shall be added unto you oh ye." ,
    },

    {
        id : 3,
        job : "Chemical Engineer",
        fullname : "Success Aiwoke",
        img : "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2017_48/2245231/171201-dmx-rd-1227a.jpg",
        text: "A chemical engineer can literally work any where and his main area of expertise is anything process production of edible and non edible items and main goal is towards solving problem and maximizing profit" ,
    },

    {
    id : 4,
    job : "Shoe Maker",
    fullname : "Okose Rita",
    img : "https://geo-media.beatport.com/image_size/590x404/5d4406bc-60e3-4636-b83b-6d021788cccc.jpg",
    text: " Shoe Maker is incharge of feed=t wears. He is the ones that ascembles the soul and the tp of the leather foot wear with sentetic gums and materials including dying the leather to the desired color." ,
    }
    ];
             // select item 
    const img = document.getElementById("person-img");
    const author = document.getElementById("author");
    const job = document.getElementById("job");
    const info = document.getElementById("info");

             //button types
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const randomBtn = document.querySelector(".random-btn");

             //set starting item
    let currentItem = 0;
             //show person based on item
        function showPerson (person){
            const item = reviews[person];
            img.src = item.img;
            author.textContent = item.fullname;
            job.textContent = item.job;
            info.textContent = item.text;
        }

              //load initial item
        window.addEventListener("DOMContentLoaded", function (){
            showPerson(currentItem);
        });

            // show next person
    nextBtn.addEventListener("click", function(){
        currentItem++;
        if(currentItem > reviews.lenght - 1){
            currentItem = 0;
        }
        showPerson(currentItem);
    });
       
           //show prev person
    
           prevBtn.addEventListener("click", function(){
            currentItem--;
            if(currentItem < 0 ){
                currentItem = reviews.length - 1 ;
            }
            showPerson(currentItem);
        });

           //show random person
        randomBtn.addEventListener("click", function(){
        currentItem = Math.floor(Math.random() * reviews.length);
        //console.log(showPerson());
        showPerson(currentItem);
    });
   