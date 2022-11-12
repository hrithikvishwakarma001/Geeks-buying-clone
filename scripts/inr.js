let url = "https://restcountries.com/v3.1/all";
		async function getdata() {
			let res = await fetch(url);
			let data = await res.json();
			display(data);
		}
		getdata();
        let select = document.querySelector("#selected");
        let display = (arr) => {
			arr.forEach((el) => {
				let {flags: { png }} = el;
                console.log(png)
				let option = document.createElement("option");
                // option.value = png;
                option.innerHTML = png;
                select.append(option);
			});
		};