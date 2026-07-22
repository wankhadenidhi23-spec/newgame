let userscore=0;
let compscore=0;
let userscorepara=document.querySelector("#userscore");
let compscorepara=document.querySelector("#compscore");
const choises=document.querySelectorAll(".choice");
let msg =document.querySelector("#msg");


const showwinner=(userwin,compchoice,userchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText =userscore;
        console.log("user is the winner");
        msg.innerText=` you win !${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
        
    }else{
         compscore++;
        compscorepara.innerText =compscore;
        console.log("computer win");
        msg.innerText=` you lost. ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}
const draw=()=>{
    console.log("draw");
    msg.innerText="draw,play again";
    msg.style.backgroundColor="blue";
;
}
const gencompchoice=()=>{
    const options = ["rock","paper","scissor"];
    const randindx=  Math.floor(Math.random()*3);  
    return options[randindx];
}
const playgame = (userchoice)=>{
     console.log( "user choice" , userchoice);
const compchoice=gencompchoice();
 console.log( "compchoice" ,compchoice);

 if(userchoice===compchoice){
    draw();
  
 }else{
    userwin = true;
    if(userchoice==="rock") {
        //paper,scissor
      userwin= compchoice==="paper"? false:true;
    }
    else if(userchoice==="paper") {
     userwin=compchoice==="scissor"?true:false;
    }else{
        //user=sci
        //comp=rock,paperr
        userwin=compchoice==="rock"?false:true;
    }
showwinner(userwin,compchoice,userchoice);
}
 };
 
choises.forEach((choice)=>{  
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        
        playgame(userchoice);
});
});

