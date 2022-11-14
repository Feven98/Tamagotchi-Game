// Instantiate class for tamagotchi(tamagotchi object)

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

// Variables declaration that are going to be used in the program
let myPet={
    action :{ 
        present:false,
        sleepinesslevel:0,
        boerdomlevel:0,
        hungerlevel:0,  
        age:0,
     }, 
    tamagotchi(){
        myPetname=prompt('name pet:')
        myPetNameText.innerHTML=myPet.action.enterName
        myPet.action.present=true
        myPetCommentSection.innerHTML=myPet.action.present
        myPetAgeText=myPet.age
        myPetAge
        myPetStatus
    },}
    let hungercount=1;
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
feedBtn.addEventListener('click', () =>{
    hungerlevel +=1;
    console.log(hungerlevel);
    feedBtn.innerHTML = 'Feed Level: ${hungerlevel}'
})

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
let myPetStatus =setInterval(() => {hungerlevelOne(), sleepinesslevelTwo(), boerdomlevelThree()},1000)
let myPetAge=setInterval(() =>{myPetAgeCount()},1000)

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
function myPetAgeCount(){
    myPet.action.age++
    myPetAgeText.innerHTML=myPet.action.age
}

// Declaring variables for the variables above
let playButton=document.querySelector(".play")
console.log(playButton.innerText)
let myPetBoaredomText=document.querySelector("#sleeptext")
myPetBoaredomText.innerHTML=myPet.action.boerdomlevel
console.log(myPetBoaredomText.innerText)
let myPetAgeText=document.querySelector("#age")
 myPetAgeText.innerHTML=myPet.age
console.log(myPetAgeText.innerHTML)
let ageButton=document.querySelector(".ageBtn")
let feedButton=document.querySelector(".feedPet")
console.log(feedButton.innerText)
let myPetHungerText=document.querySelector("#hungertext")
console.log(myPetHungerText.innerText)
myPetHungerText.innerHTML=myPet.action.hungerlevel
let sleepButton=document.querySelector(".turnLightOff")
console.log(sleepButton.innerText)
let myPetSleepText=document.querySelector("#boardtext")
let startButton=document.querySelector(".start")
let resetButton=document.querySelector(".reset")
let myPetCommentSection=document.querySelector(".commentSection")
console.log(myPetCommentSection.innerText)
myPetCommentSection.innerHTML=myPet.action.present
let myPetNameText=document.querySelector("#myPet")
// console.log(myPetNameText.innerText)
// myPetNameText.innerHTML=myPet.myPet
// console.log(myPetCommentSection.innerText)
// for the game over(pet Deed)
function myPetDead(){
    if(myPet.action.hungerlevel===10){
        myPet.action.present=false
myPetCommentSection.innerHTML="pet died with hunger"
stopTimer()
    }
else if(myPet.action.sleepinesslevel===10){
    myPet.action.present=false
myPetCommentSection.innerHTML="pet sleepy head"
stopTimer()
}else if(myPet.action.boerdomlevel===10){
    myPet.action.present=false
myPetCommentSection.innerHTML="pet died with boerd"
stopTimer()
}
}

startButton.addEventListener("click",startGame)
resetButton.addEventListener("click",stopTimer)
//playButton.addEventListener("click",boerdomlevelThree)
playButton.addEventListener("click",decreaseBored)
//sleepButton.addEventListener("click",sleepinesslevelTwo)
sleepButton.addEventListener("click",decreaseSleepiness)
//  feedButton.addEventListener("click",hungerlevelOne)
feedButton.addEventListener("click",decreaseHunger)


 function decreaseHunger(){
if(myPet.action.hungerlevel===0){
    feedButton.disabled=true
}else{
    myPet.action.hungerlevel--
    myPetHungerText.innerHTML=myPet.action.hungerlevel
    checkmyPetAction()
}
 }
 function decreaseSleepiness(){
    if(myPet.action.sleepinesslevel===0){
        sleepButton.disabled=true
    }else{
        myPet.action.sleepinesslevel--
        myPetSleepText.innerHTML=myPet.action.sleepinesslevel
        checkmyPetAction()
    }
     }
     function decreaseBored(){
        if(myPet.action.boerdomlevel===0){
            playButton.disabled=true
        }else{
            myPet.action.boerdomlevel--
            myPetBoaredomText.innerHTML=myPet.action.boerdomlevel
            checkmyPetAction()
        }
         }
    
// To check for mypet actions(status)

function checkmyPetAction(){
    if(myPet.action.hungerlevel===0){
        feedButton.disabled=true;
    }else if(myPet.action.sleepinesslevel===0){
        sleepButton.disabled=true;
    }else if(myPet.action.boerdomlevel===0){
        playButton.disabled=true;
    }
    else if(myPet.action.hungerlevel===10){
        myPetDead()
    }else if(myPet.action.sleepinesslevel===10){
        myPetDead()
    }else if(myPet.action.boerdomlevel===10){
        myPetDead()
    }
}

