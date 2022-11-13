let allcategory = document.getElementById("allCatagory");
let dropbtn = document.querySelector(".dropbtn");

allcategory.style.display = "none";

setInterval(()=>{

    if (allcategory.style.display === "none") {
        dropbtn.onclick=()=>{
            allcategory.style.display = "block";
            allcategory.style.display = "flex";
        }
    }else if(allcategory.style.display === "flex"){
        dropbtn.onclick=()=>{
            allcategory.style.display = "none";
        }
    }

}, 1);

  
window.onscroll = ()=>{
    allcategory.style.display = "none";
}