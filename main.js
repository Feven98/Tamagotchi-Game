// Instantiate class for tamagotchi(tamagotchi object)
// window.onload = function(){
//  let myAge= 5; //characters age
//  let ageincrease= setInterval(myAge, 1) // incremental age of character by 1 min
//  let name="";
// }  
console.log("please")
// const actionElement = document.querySelectorAll("feed");
// actionElement.forEach(feed =>{
//     feed.addEventListener('click'), handClick, {once:true}}
//     )
// variables
 const feedBtn= document.querySelector(".hunger-btn")
 const feedTag= document.querySelector(".feed-pet")
 const tiredBtn= document.querySelector(".sleep-btn")
 const tiredTag= document.querySelector(".turn-light-off")
 const playBtn=document.querySelector(".board-btn")
 const playTag= document.querySelector(".play")
 const resetTag=document.querySelector(".reset")
 console.log(feedBtn.innerText);
 console.log(playTag.innerText);
 console.log(feedTag.innerText);
// let timerDisplay=document.getElementById('timer')
// let reset_timer_btn= document.getElementById('reset_timer_btn')
// const timer= setInterval(()=> {
//     const time= parseInt(timerDisplay)
// time=timerDisplay
// }, 1000)

// const resettimer =(() =>{

// })
// timer()
let hungerlevel = 1;
let sleepinesslevel=1;
let boerdomlevel=1;
setInterval(() => {
    if(hungerlevel<=10 && sleepinesslevel<=10 && boerdomlevel<=10){
    hungerlevel++
    sleepinesslevel++
    boerdomlevel++
    console.log(hungerlevel,sleepinesslevel,boerdomlevel)
}
},1000)
setInterval(() => {
    hungerlevel--
},2000)
setInterval(() => {
    sleepinesslevel--
},3000)
setInterval(() => {
    boerdomlevel--
},4000)