let sticky = document.querySelector(".right-stikcy-box ");
sticky.style.display = "none";
window.onscroll = () => {
	setTimeout(() => {
		if (window.scrollY > 1000) {
			sticky.style.display = "block";
		} else {
			sticky.style.display = "none";
		}
	}, 1000);
};
