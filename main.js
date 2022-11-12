// Instantiate class for tamagotchi(tamagotchi object)
console.log("please")

// variables
 const feedBtn= document.querySelector(".hungerBtn")
 const feedTag= document.querySelector(".feedPet")
 const tiredBtn= document.querySelector(".sleepBtn")
 const tiredTag= document.querySelector(".turnLightOff")
 const playBtn=document.querySelector(".boardBtn")
 const playTag= document.querySelector(".play")
 const resetTag=document.querySelector(".reset")
 const ageTag= document.querySelector(".ageBtn")
 console.log(feedBtn.innerText);
 console.log(playTag.innerText);
 console.log(ageTag.innerText);

let hungerlevel = 1;
let sleepinesslevel=1;
let boerdomlevel=1;
let agelevel= 0;
let feed=0;
let play=0;
let tired=0;
let age=0;

setInterval(() => {
    if(hungerlevel<=10 && sleepinesslevel<=10 && boerdomlevel<=10){
    hungerlevel++
    sleepinesslevel++
    boerdomlevel++
     //console.log(hungerlevel,sleepinesslevel,boerdomlevel)
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
// function addPoints(){
//     hungerlevel+=1;
//     hungryfeedBtn.innerHTML = 'Feed Level: ${hungerlevel}';
//     }

// for(let i=1; i<11; i++){

// }
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
const myBtn3 = document.getElementsByClassName('home');
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
// To Make My Buttons give value When I Clicked them
feedBtn.addEventListener('click', () =>{
    hungerlevel +=1;
    console.log(hungerlevel);
    feedBtn.innerHTML = 'Feed Level: ${hungerlevel}'
})

tiredBtn.addEventListener('click', () =>{
    sleepinesslevel +=1;
    console.log(sleepinesslevel);
    tiredBtn.innerHTML = 'Sleep Level: ${sleepinesslevel}'
})
playBtn.addEventListener('click', () =>{
    boerdomlevel +=1;
    console.log(boerdomlevel);
    playBtn.innerHTML = 'Play Level: ${boerdomlevel.value}'
})
ageTag.addEventListener('click', () =>{
    agelevel +=1;
    console.log(agelevel);
    ageTag.innerHTML ='Age: ${agelevel}'
})
feedTag.addEventListener('click', () =>{
     feed+=1;
    console.log(feed);
    feedTag.innerHTML = 'Feed Pet'
})
tiredTag.addEventListener('click', () =>{
    tired +=1;
    console.log(tired);
    tiredTag.innerHTML = 'Turn Light Off'
})
playTag.addEventListener('click', () =>{
    play +=1;
    console.log(play);
    playTag.innerHTML = 'Play'
})



