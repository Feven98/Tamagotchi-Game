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
 boerdomlevel:0,hungerlevel:0,}, birthpet(){
 myPet.hungerlevel= 0
 myPet.sleepinesslevel=0
 myPet.boerdomlevel=0
 myPet.name=prompt('name pet:')
 myPetNameText.innerHTML=pet.action.present
 myPet.age=0
 myPetAgeText.innerHTML=pet.age
 myPetAge
 myPetStatus
},}
//petStatus
//petAge

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
// Assigning interval for the declared variables
let petStatus =setInterval(() => {hungerlevelOne(), sleepinesslevelTwo(), boerdomlevelThree()},2000)
// let petAge=setInterval(() =>{petAgeCount()},1000)

// creating functions for the above values
function startGame(){
pet.action()
    startButton.disabled=true;
}

let playButton=document.querySelector(".play")
console.log(playButton.innerText)
let petBoaredomText=document.querySelector(".sleepBtn")
console.log(petBoaredomText.innerText)
// function stopTimer({
//     clearInterval()
// })
// function Feed(){
//     hungerlevel -=1;
//     if(hungerlevel<0){
//         hungerlevel=0;
//     }
// }
function hungerlevelOne() {
    if(myPet.action.boerdomlevel!==10){
        playButton.disabled= false
        myPet.action.boerdomlevel++
        petBoaredomText.innerHTML=myPet.action.boerdomlevel
    }
}




