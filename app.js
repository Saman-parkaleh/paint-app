const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const brushwhidth=document.querySelector('#brushwhidth');
const brushcoler=document.querySelector('#colerpider');
const brush=document.querySelector('.brush');
const eraser=document.querySelector('.eraser');
const clear=document.querySelector('#clear');
const save=document.querySelector('#save');


let isdrawing=false;
let CurrenWhidth=5;
let Currencoler='';
window.addEventListener("load", () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  ctx.fillStyle=' aliceblue'
  ctx.fillRect(0,0,canvas.width,canvas.height)
});
function startdraw(){
 isdrawing=true
 ctx.beginPath();
 ctx.lineWidth=CurrenWhidth;
 
}
function drwing(e) {
   if(!isdrawing)return
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.strokeStyle=`${Currencoler}`
    ctx.stroke();
}
function enddrwing(){
    isdrawing=false
}
canvas.addEventListener('mousedown',startdraw)
canvas.addEventListener("mousemove", drwing);
canvas.addEventListener("mouseup", enddrwing);

brushwhidth.addEventListener('change', ()=>{
        CurrenWhidth=brushwhidth.value;
})
brushcoler.addEventListener('change',()=>{
    
      Currencoler=brushcoler.value;
})
brush.addEventListener('click',()=>{
  brush.classList.add('activ');
  eraser.classList.remove('activ');
  Currencoler=brushcoler.value;

})
eraser.addEventListener('click',()=>{
  eraser.classList.add('activ');
  brush.classList.remove('activ');
  Currencoler=' aliceblue';

})
clear.addEventListener('click',()=>{
  ctx.fillStyle=' aliceblue'
  ctx.fillRect(0,0,canvas.width,canvas.height)
    
})
save.addEventListener('click',()=>{
var link=document.createElement('a');
link.download=`${Date.now()}.jpg`;

link.href=canvas.toDataURL()
link.click()

})