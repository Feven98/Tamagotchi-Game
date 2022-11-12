// Instantiate class for tamagotchi(tamagotchi object)
console.log("please")

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
function addPoints(){
    hungerlevel+=1;
    hungryfeedBtn.innerHTML = 'Feed Level: ${hungerlevel}';
    }

for(let i=1; i<11; i++){

}
// Adding Event Listener
// For All action Level
const myBtn1 = document.getElementsByClassName('action');
console.log(myBtn1);
myBtn1[0].addEventListener("click", function onClick(){
console.log("the button was clicked");
});
// For All buttons Level
const myBtn2 = document.getElementsByClassName('buttons');
console.log(myBtn2);
myBtn2[0].addEventListener("click", function onClick(){
console.log("button clicked");
});
// for create pet
const myBtn3 = document.getElementsByClassName('name');
console.log(myBtn3);
myBtn3[0].addEventListener("click", function onClick(){
console.log("clicked");
});

// creating name button
function myName(){
    let enterName= document.querySelector("#enterName");
    let message= document.querySelector("#message");
    message.innerHTML= "Welcome To Tomogotchi Game " + enterName.value;
}
