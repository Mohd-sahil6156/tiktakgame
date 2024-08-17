let boxes = document.querySelectorAll(".boxes");
let container=document.querySelector(".container");
let div1=document.querySelector("#welcome_div");
let div =document.createElement("div");
div.setAttribute("id","id_1");
let reset_button=document.querySelector("#reset_btn");
reset_button.style.marginRight="200px";
let new_button=document.querySelector("#new_btn");
let show_bttn=document.querySelector("#show_btn");
let p=document.querySelector("#p");
// div.style.fontSize="200px";
// div.style.textAlign="center";
let body= document.querySelector("body");
let player1=document.querySelector("#player1");
let player2=document.querySelector("#player2");
let p1=0,p2=0;
let t=true;
let player_1="Player 1";
let player_2="Player 2";
let o='Player 1';
let x='Player 2';
player_1=prompt("Enter the first player name",o);
player_2=prompt("Enter the second player name",x);
player1.innerText=`${player_1} = O`;
player2.innerText=`${player_2} = X`;

let win=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]
let a=0;
boxes.forEach((box)=>
{
  
  box.addEventListener("click",()=>
    {
      if(t==true)
      {
      box.style.color="aqua";
      box.innerText="o";
      t=false;
      p.innerText=`Now, ${player_2}`;
      console.log("now X");
      }
      else if(t==false)
      {
        console.log("now O");
        p.innerText=`Now, ${player_1}`;
        box.style.color="blue";
        box.innerText="x";
        t=true;
      }
      box.disabled=true;
      let d=checkwinner();  
      a++;
      draw();
      
      
  });
  // console.log(a);
});

const checkwinner=()=>
{
    // console.clear();
    for(let winner of win)
      {   
        let pos0= boxes[winner[0]].innerText;
        let pos1= boxes[winner[1]].innerText;
        let pos2= boxes[winner[2]].innerText;
      
    if(pos0!=""&&pos1!=""&&pos2!="")
    { 
      
        if(pos0==pos1&&pos1==pos2)
        {   
            console.clear();
            body.prepend(div);
            p.style.display="none";
            if(pos0=='o')
            {
              div.innerText=`Congratulation,
              Winner = ${player_1}`;
              // div.style.paddingBottom="200px";
              p1++;
              p2--;
              player1.innerText=`${player_1} Win = ${p1} Time`;
              player2.innerText=`${player_2} Win = ${p2} Time`;    
            }
            else
            {
              div.innerText=`Congratulation,
              Winner = ${player_2}`;
              p1--;
              p2++;
              player1.innerText=`${player_1} Win = ${p1} Time`;
              player2.innerText=`${player_2} Win = ${p2} Time`;
            }
            console.log(`winner = ${pos0}`);   
            container.style.display="none";
            reset_button.innerText="Play again";
            new_button.style.display="none";
            push();
            a=0;
            show_bttn.style.display="inline-block";
            break;
        }
     
      
    }
      }
   
};
 let push=(box)=>
{
 boxes.forEach((box)=>{
  box.disabled=true;
 }); 
}
const draw=()=>
{
  if(a==9)
  {
    console.log("draw");
    body.prepend(div);
    reset_button.innerText="Play again";
    // div.style.display="flex";
    div.innerText=`Draw`;
    container.style.display="none";
    p.style.display="none";
  }
}
new_button.addEventListener("click",()=>
{
  for(let box of boxes)
    {
      box.innerText="";
      box.disabled=false;
      a=0;
      div.innerText=``;
      // div.style.display=`none`;
      container.style.display="flex";
    }

});
reset_button.addEventListener("click",()=>{
  for(let box of boxes)
    {
      reset_button.innerText="Reset";
      show_bttn.style.display="none";
      box.innerText="";
      box.disabled=false;
      a=0;
      show_bttn.innerText="Show in";
      div.innerText=``;
      p.style.display="inline-block";
      // p.style.visibility="hidden";
      // div.style.display=`none`;
      container.style.display="flex";
    }
});
let c=true;

show_bttn.addEventListener("click",()=>
{
  
  if(c)
  {
  container.style.display="flex";
  show_bttn.innerText="Show out";
  c=false;
  

  }
  else
  {
    container.style.display="none";
    show_bttn.innerText="Show in";
    c=true;
  }
});
reset_button.addEventListener("dblclick",()=>
{
  p1=0;
  p2=0;
  player1.innerText=`${player_1} win = ${p1}`;    
  player2.innerText=`${player_2} win = ${p2}`;    
});