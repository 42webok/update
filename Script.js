var child = document.getElementById("nav-child");
var back = document.getElementById("back");
child.onclick = function() {
  if (back.style.display === "none") {
    back.style.display = "block"; 
  } else {
    back.style.display = "none"; 
  }
};


var stick  = document.getElementById("stick");
window.onscroll = function(){
  if(document.body.scrollTop > 60 || document.documentElement.scrollTop > 60){
    stick.classList.add("sticky");
  }
  else{
    stick.classList.remove("sticky");
  }
}


var menu = document.getElementById("menus");
var bar  =document.getElementById("bar");
var cross  =document.getElementById("cross");
var body = document.querySelector("body");
bar.onclick = function(){
bar.style.display="none";
cross.style.display = "block";
menu.style.top = "0";
menu.classList.add("rotate");
};
cross.onclick = function(){
  bar.style.display="block";
  cross.style.display = "none";
  menu.style.top = "-100%";
  };



  var teco  = document.getElementById("teco");
  var teo  = document.getElementById("teo");
  var tcs  = document.getElementById("tcs");
  teo.onclick = function(){
  teco.style.display = "block";
  teo.style.display = "none";
  tcs.style.display = "block";
  }
  tcs.onclick = function(){
    teco.style.display = "none";
    teo.style.display = "block";
    tcs.style.display = "none";
    }







    const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});