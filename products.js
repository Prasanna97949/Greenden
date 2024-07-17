// selectind side nav , menu
var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("close-nav")
menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})
closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})
// product search
var productContainer = document.getElementById("productcontainer")
var searchbox = document.getElementById("searchbox")
var productlist = productContainer.querySelectorAll("div")

    searchbox.addEventListener("keyup",function(){
var enteredValue = event.target.value.toUpperCase()

for(count =0; count<productlist.length; count = count+1)
    {
    var productname = productlist[count].querySelector("h1").textContent

    if(productname.toUpperCase().indexOf(enteredValue)<0){
    productlist[count].style.display = "none"
    }
else{
    productlist[count].style.display = "block"
}
}

    })