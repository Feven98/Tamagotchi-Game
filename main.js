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
 const startBtn=document.querySelector(".start")
//  console.log(feedBtn.innerText);
//  console.log(playTag.innerText);
//  console.log(ageTag.innerText);

// Variables declaration that are going to be used in the program
let myPet={action :{ present:false,sleepinesslevel:0,
 boerdomlevel:0,hungerlevel:0,}, tamagotchi(){
 myPet.hungerlevel= 0
 myPet.sleepinesslevel=0
 myPet.boerdomlevel=0
 myPet.name=prompt('name pet:')
 myPetNameText.innerHTML=myPet.action.present
 myPet.action.present=true
 mypetCommentSection.innerHTML=myPet.action.present
 myPet.age=0
 myPetAgeText.innerHTML=myPet.age
 myPetAge
 myPetStatus
},}
// setInterval(() => {
//     if(hungerlevel<=10 && sleepinesslevel<=10 && boerdomlevel<=10){
//     hungerlevel++
//     sleepinesslevel++
//     boerdomlevel++
//      console.log(hungerlevel,sleepinesslevel,boerdomlevel)
// }
// },1000)
// setInterval(() => {
//     hungerlevel--
// },2000)
// setInterval(() => {
//     sleepinesslevel--
// },3000)
// setInterval(() => {
//     boerdomlevel--
// },4000)

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
const myBtn3 = document.getElementsByClassName('home-included');
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
// feedBtn.addEventListener('click', () =>{
//     hungerlevel +=1;
//     console.log(hungerlevel);
//     feedBtn.innerHTML = 'Feed Level: ${hungerlevel}'
// })

// tiredBtn.addEventListener('click', () =>{
//     sleepinesslevel +=1;
//     console.log(sleepinesslevel);
//     tiredBtn.innerHTML = 'Sleep Level: ${sleepinesslevel}'
// })
// playBtn.addEventListener('click', () =>{
//     boerdomlevel +=1;
//     console.log(boerdomlevel);
//     playBtn.innerHTML = 'Play Level: ${boerdomlevel.value}'
// })
// ageTag.addEventListener('click', () =>{
//     age +=1;
//     console.log(age);
//     ageTag.innerHTML ='Age: ${age}'
// })
// feedTag.addEventListener('click', () =>{
//      feed+=1;
//     console.log(feed);
//     feedTag.innerHTML = 'Feed Pet'
// })
// tiredTag.addEventListener('click', () =>{
//     tired +=1;
//     console.log(tired);
//     tiredTag.innerHTML = 'Turn Light Off'
// })
// playTag.addEventListener('click', () =>{
//     play +=1;
//     console.log(play);
//     playTag.innerHTML = 'Play'
// })
// Assigning interval for the declared variables
let petStatus =setInterval(() => {hungerlevelOne(), sleepinesslevelTwo(), boerdomlevelThree()},2000)
let petAge=setInterval(() =>{petAgeCount()},1000)

// creating functions for the above values
function startGame(){
pet.action()
    startButton.disabled=true;
}

function startGame(){
    myPet.tamagotchi()
    startButton.disabled=true;
}
function stopTimer(){
    clearInterval(myPetAge)
    clearInterval(myPetStatus)
    resetButton.disabled=true;
    startButton.disabled=false;
}
function myPetAgeValue(){
    myPet.age++
    myPetAgeText.innerHTML=myPet.age
}
function petAgeCount(){
    myPet.age++
    myPetAgeText.innerHTML=myPet.age
}

function hungerlevelOne() {
    if(myPet.action.hungerlevel!==10){
        feedButton.disabled= false
        myPet.action.hungerlevel++
        myPetHungerText.innerHTML=myPet.action.hungerlevel
    }checkmyPetAction()
}

function sleepinesslevelTwo() {
    if(myPet.action.sleepinesslevel!==10){
        sleepButton.disabled= false
        myPet.action.sleepinesslevel++
        myPetSleepText.innerHTML=myPet.action.sleepinesslevel
    }
}

function boerdomlevelThree() {
    if(myPet.action.boerdomlevel!==10){
        playButton.disabled= false
        myPet.action.boerdomlevel++
        myPetBoaredomText.innerHTML=myPet.action.boerdomlevel
    }
}
// Declaring variables for the variables above
let playButton=document.querySelector(".play")
console.log(playButton.innerText)
let myPetBoaredomText=document.querySelector("#sleeptext")
myPetBoaredomText.innerHTML=myPet.action.boerdomlevel
console.log(myPetBoaredomText.innerText)
let myPetAgeText=document.querySelector(".ageBtn")
console.log(myPetAgeText.innerHTML)
let feedButton=document.querySelector(".feedPet")
console.log(feedButton.innerText)
let myPetHungerText=document.querySelector("#hungertext")
console.log(myPetHungerText.innerText)
myPetHungerText.innerHTML=myPet.action.hungerlevel
let sleepButton=document.querySelector(".turnLightOff")
console.log(sleepButton.innerText)
let myPetSleepText=document.querySelector("#boardtext")
let startButton=document.querySelector(".start")

// for the game over(pet Deed)
function petDeed(){
    if(myPet.action.hungerlevel===10){
        myPet.action.present=false
mypetCommentSection.innerHTML="pet died with hunger"
stopTimer()
    }
else if(myPet.action.sleepinesslevel===10){
    myPet.action.present=false
mypetCommentSection.innerHTML="pet sleepy head"
stopTimer()
}else if(myPet.action.boerdomlevel===10){
    myPet.action.present=false
mypetCommentSection.innerHTML="pet died with boerd"
stopTimer()
}
}
startButton.addEventListener("click",startGame)
playButton.addEventListener("click",boerdomlevelThree)
sleepButton.addEventListener("click",sleepinesslevelTwo)
feedButton.addEventListener("click",hungerlevelOne)