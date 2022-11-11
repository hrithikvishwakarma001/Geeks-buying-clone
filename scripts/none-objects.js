let hover = document.querySelectorAll(".h-top-child");
let noneParent1 = document.querySelector(".none-parent-1");
let noneParent2 = document.querySelector(".none-parent-2");
let noneParent3 = document.querySelector(".none-parent-3");
let select = document.querySelector("#select");
let dd = document.querySelectorAll("dd");
dd.forEach((item) => {
	item.onmouseover = () => {
		item.style.cursor = "pointer";
	};
});
let arrow = document.querySelectorAll(".upArrow");

hover[0].onmouseover = () => {
	noneParent1.style.display = "block";
};

hover[0].onmouseout = () => {
	noneParent1.style.display = "none";
};
hover[1].onmouseover = () => {
	noneParent2.style.display = "block";
};
hover[1].onmouseout = () => {
	noneParent2.style.display = "none";
};
hover[2].onmouseover = () => {
	noneParent3.style.display = "block";
};
hover[2].onmouseout = () => {
	noneParent3.style.display = "none";
};
noneParent1.onmouseover = () => {
	noneParent1.style.display = "block";
};
noneParent1.onmouseout = () => {
	noneParent1.style.display = "none";
};
noneParent2.onmouseover = () => {
	noneParent2.style.display = "block";
};
noneParent2.onmouseout = () => {
	noneParent2.style.display = "none";
};
noneParent3.onmouseover = () => {
	noneParent3.style.display = "block";
};
noneParent3.onmouseout = () => {
	noneParent3.style.display = "none";
};

// ------------------------------------------------------------

let sign = document.querySelector(".sign-up-box");
let signParent = document.querySelector(".sign-parent");

let signbtn = document.querySelector(".sign-up-child");
// signbtn.style.display = "none";

signbtn.onmouseover = () => {
   signParent.style.display = "block";
}
signbtn.onmouseout = () => {
   signParent.style.display = "none";
}
signParent.onmouseover = () => {
   signParent.style.display = "block";
}
signParent.onmouseout = () => {
   signParent.style.display = "none";
}

let btn1 = document.querySelector("#leftBtn");
let btn2 = document.querySelector("#rightBtn");
let google = document.querySelector("#google");
btn1.onclick = () => {
   window.open("/html/login-page.html", '_blank')
}
btn2.onclick = () => {
   window.open("/html/signup-page.html", '_blank')
}
google.onclick = () => {
   window.open("/html/signup-page.html", '_blank')
}
btn1.style.cursor = "pointer";
btn2.style.cursor = "pointer";



// ------------------------------


// INR

let inr = document.querySelector(".inr");

let ship = document.querySelector("#ship");

let inrarrow = document.querySelector("#inrArrow");
// inrarrow.style.display = "none";
inrarrow.onmouseover = () => {
	 inr.style.display = "block";
}
inrarrow.onmouseout = () => {
	 inr.style.display = "none";
}
ship.onmouseover = () => {
	   inr.style.display = "block";
}
ship.onmouseout = () => {
	   inr.style.display = "none";
}
inr.onmouseover = () => {
	   inr.style.display = "block";
}
inr.onmouseout = () => {
	   inr.style.display = "none";
}

// ------------------------------