const navToggle = document.querySelector(".nav-toggle");
const links = document.getElementById("links")


navToggle.addEventListener("click", function(){
    if(links.classList.contains("links-show")){
        links.classList.remove("links-show")
    }
    else{
        links.classList.add("links-show")
    }})


setInterval(function() {
  var cursor = document.getElementById("cursor");
  cursor.classList.toggle("blink");
}, 1000);



const formBtn = document.querySelector(".btn-1");
const modal = document.querySelector(".modal-overlay");
const formBtnClose = document.querySelector(".close-btn")

formBtn.addEventListener("click", function(){
    if(modal.classList.contains("modal-overlay-open")){
        modal.classList.remove("modal-overlay-open")
    }
    else{
        modal.classList.add("modal-overlay-open")
    }
})

formBtnClose.addEventListener("click", function(){
    modal.classList.remove("modal-overlay-open")
})

