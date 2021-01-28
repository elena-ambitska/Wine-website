document.getElementById("menu-btn").addEventListener("click",function(){
    document.getElementById("menu-wrap").classList.toggle("active");
});

//add tabs

let titles = document.querySelectorAll(".tabs-item");
let tabs = document.querySelectorAll('.tab-body');
for(let title of titles ){

    title.addEventListener("click", openTab);
}
function openTab(evt){
    for(let i= 0; i < titles.length; i++){
        titles[i].className=titles[i].className.replace("active", "");
        tabs[i].className=tabs[i].className.replace("active", "");
    }
    evt.currentTarget.className += " active";
    let tabId=evt.currentTarget.getAttribute("data-for");
    document.getElementById(tabId).className += " active";
}

$(".boutle").slick({
    "prevArrow":".prev",
    "nextArrow":".next",
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

$(".events-slider").slick({
    "prevArrow":".direction-left",
    "nextArrow":".direction-right",
    centerMode: true,
    slidesToShow: 1,
  slidesToScroll: 1,
    centerMode: true,


});