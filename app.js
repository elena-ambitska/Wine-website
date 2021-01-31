document.getElementById("menu-btn").addEventListener("click", function () {
    document.getElementById("menu-wrap").classList.toggle("active");
});

//add tabs

let titles = document.querySelectorAll(".tabs-item");
let tabs = document.querySelectorAll('.tab-body');
for (let title of titles) {

    title.addEventListener("click", openTab);
}

function openTab(evt) {
    for (let i = 0; i < titles.length; i++) {
        titles[i].className = titles[i].className.replace("active", "");
        tabs[i].className = tabs[i].className.replace("active", "");
    }
    evt.currentTarget.className += " active";
    let tabId = evt.currentTarget.getAttribute("data-for");
    document.getElementById(tabId).className += " active";
}

$(".boutle").slick({
    "prevArrow": ".prev",
    "nextArrow": ".next",
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true

});

$(".review-slide").slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
})

// $(".events-slider").slick({
//     "prevArrow":".direction-left",
//     "nextArrow":".direction-right",
//     centerMode: true,
//     slidesToShow: 1,
//   slidesToScroll: 1,
//     centerMode: true,


// });

let productsCountEl = document.getElementById("product-count");
let addToCartButtons = document.querySelectorAll(".add-to-cart");

for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", function (event) {


        let count = +event.target.closest(".product").querySelector(".product-quantity input").value;
        productsCountEl.textContent = +productsCountEl.textContent + count;
    })


}

// filter 
let filter = function () {
    let grade = document.querySelectorAll(".categories a");
    grade.forEach(function (el) {
        el.addEventListener("click", function (event) {
            event.preventDefault();
            let category=event.currentTarget.getAttribute("data-filter");
            let filterItems = document.querySelectorAll(".product-wrap");
           
            filterItems.forEach(item => {
                if (category === 'all' || item.className.toLowerCase().indexOf(category) > -1) {
                    item.style.display = "block";
                } else {
                    item.style.display = 'none';
                }
            })
            for (let i = 0; i <grade.length; i++) {
                grade[i].parentElement.className = grade[i].parentElement.className.replace("active", "");
                
            }
            event.currentTarget.parentElement.className += " active";
        })
    })
   
};
filter();

let viewMore = function(){
    let button= document.getElementById("view-more");
    button.addEventListener("click", function(el){
el.preventDefault();
let list = document.getElementById("products");
list.innerHTML+=list.innerHTML;
    })
}
viewMore();