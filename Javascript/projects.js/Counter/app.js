let count = 0;
let value = document.getElementById("value");
let btns = document.querySelectorAll(".btn");

  
btns.forEach( function (btn) {
btn.addEventListener( "click", function (e){
const list = e.currentTarget.classList;
if(list.contains('decrease')){
  count--;
}else if(list.contains("increase")){
  count++;
}else{count = 0}
 if(count > 0){
     value.style.color = "green";
}
if(count < 0){
  value.style.color = "red";
}
value.textContent = count;
});
})