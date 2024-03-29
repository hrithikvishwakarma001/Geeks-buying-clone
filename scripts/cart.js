
let div = document.querySelectorAll(".container-box-child")
let cart_box = document.querySelector("#cart-box")
let logo = document.querySelector("#logo")
logo.onclick = () => {
    
    setInterval(() => {
        window.location.href = "/html/index.html"
    }, 1500)
}
cart_box.style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px"


for(let i=0;i<div.length;i++){
   
    let btn = document.createElement("button")
     
    btn.innerHTML = "Add to Cart"
    btn.className = "btn"
    btn.id = "btn"+i
    btn.style.backgroundColor = "green"
    btn.style.color = "white"
    btn.style.cursor = "pointer"
    // btn.onmouseover = () =>{
    //     btn.style.backgroundColor = "darkgreen"
    //     btn.style.color = "white"
    // }
    // btn.onmouseout = () =>{
    //     btn.style.backgroundColor = "green"
    //     btn.style.color = "white"
    // }
    div[i].appendChild(btn)
}


let count = localStorage.getItem("count") || 0
let cartNumber = document.querySelector(".cart-number")
cartNumber.innerHTML = count

let para = document.querySelector("#cart-box>div p")
para.innerHTML = `You have ${count} items in your cart`


let btn = document.querySelectorAll(".btn")
for (let i = 0; i < btn.length; i++) {
    let button = btn[i];
    button.onclick = () => {
        alert("Item added to cart")
        console.log("clicked")
        count++
        cartNumber.innerHTML = count
        para.innerHTML = `You have ${count} items in your cart`
        localStorage.setItem("count", count)
        button.style.backgroundColor = "red"
        button.style.color = "white"
        button.innerHTML = "Added"
        localStorage.setItem("btn"+i, "Added")
    }
}
 
for (let i = 0; i < btn.length; i++) {
    let button = btn[i];
    if(localStorage.getItem("btn"+i) == "Added"){
        button.style.backgroundColor = "yellow"
        button.style.color = "black"
        button.style.border = "1px solid black"
        button.innerHTML = "Remove"
        
    }
    button.onclick = () => {
        if(button.innerHTML == "Remove"){
            alert("Item removed from cart")
            count--
            cartNumber.innerHTML = count
            para.innerHTML = `You have ${count} items in your cart`
            localStorage.setItem("count", count)
            button.style.backgroundColor = "green"
            button.style.color = "white"
            button.innerHTML = "Add to Cart"
            localStorage.setItem("btn"+i, "Remove")
        }
        else{
            alert("Item added to cart")
            count++
            cartNumber.innerHTML = count
            para.innerHTML = `You have ${count} items in your cart`
            localStorage.setItem("count", count)
            button.style.backgroundColor = "yellow"
            button.style.color = "black"
            button.style.border = "1px solid black"
            button.innerHTML = "Added"
            localStorage.setItem("btn"+i, "Added")
        }
        

        let cartItemsArray = JSON.parse(localStorage.getItem("cartItems")) || []

        let productDetails = document.querySelectorAll(".container-box-child")
        let product = productDetails[i]
        let productImage = product.querySelector("img").src
        let productName = product.querySelector("span").innerHTML
        let productPrice = Number(product.querySelector("p").innerHTML.slice(1))
        let productQuantity = 1
        let productObject = {
            image: productImage,
            name: productName,
            price: productPrice,
            quantity: productQuantity,
        }
        cartItemsArray.push(productObject)
        localStorage.setItem("cartItems", JSON.stringify(cartItemsArray))
    }
}


// for (let i = 0; i < btn.length; i++) {
//     let button = btn[i];
//     button.onclick = () => {
          
//         let productDetails = document.querySelectorAll(".container-box-child")
//         let product = productDetails[i]
//         let productImage = product.querySelector("img").src
//         let productPrice = product.querySelector("p").innerHTML
//         let productQuantity = 1
//         let productTotal = productPrice
//         let productObject = {
//             image: productImage,
//             price: productPrice,
//             quantity: productQuantity,
//             total: productTotal
//         }
//         let cartItems = localStorage.getItem("cartItems") || "[]"
//         let cartItemsArray = JSON.parse(cartItems)
//         cartItemsArray.push(productObject)
//         localStorage.setItem("cartItems", JSON.stringify(cartItemsArray))
//     }
// }