let hover = document.querySelectorAll('.h-top-child');
let noneParent1 = document.querySelector('.none-parent-1');
let noneParent2 = document.querySelector('.none-parent-2');
let noneParent3 = document.querySelector('.none-parent-3');
let select = document.querySelector('#select');
   let dd = document.querySelectorAll('dd');
   dd.forEach((item)=>{
       item.onmouseover=()=>{
           item.style.cursor = 'pointer';
       }
   })
let arrow = document.querySelectorAll('.upArrow');
   
hover[0].onmouseover =  () => {
       noneParent1.style.display = 'block';
}

hover[0].onmouseout =  () => {
           noneParent1.style.display = 'none';
}
hover[1].onmouseover =  () => {
       noneParent2.style.display = 'block';
}
hover[1].onmouseout =  () => {
           noneParent2.style.display = 'none';
}
hover[2].onmouseover =  () => {
       noneParent3.style.display = 'block';
}
hover[2].onmouseout =  () => {
           noneParent3.style.display = 'none';
}
noneParent1.onmouseover = () => {
   noneParent1.style.display = 'block';
}
noneParent1.onmouseout = () => {
   noneParent1.style.display = 'none';
}
noneParent2.onmouseover = () => {
   noneParent2.style.display = 'block';
}
noneParent2.onmouseout = () => {
   noneParent2.style.display = 'none';
}
noneParent3.onmouseover = () => {
   noneParent3.style.display = 'block';
}
noneParent3.onmouseout = () => {
   noneParent3.style.display = 'none';
}