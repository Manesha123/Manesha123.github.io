window.st = ScrollReveal({ duration: 1000});
			st.reveal('.qc');
			st.reveal('.review-box');
			st.reveal('.name');
			st.reveal('.cast');
			st.reveal('.meet');
			st.reveal('.arrow');
      st.reveal('.video');


function scrollFunction2(identifier) {
    var elmnt = document.getElementById(identifier);
    elmnt.scrollIntoView({behavior: "smooth"});
}

function scrollFunction(identifier) {
    var elmnt = document.getElementById(identifier);
    elmnt.scrollIntoView();
}


document.getElementById("trailer").addEventListener("click", function(element) {

   // console.log(element);
    var scrollid = element.target.dataset.scroll;
    scrollFunction(scrollid);
    
});

document.getElementById("cast").addEventListener("click", function(element) {

   // console.log(element);
    var scrollid = element.target.dataset.scroll;
    scrollFunction(scrollid);
    
});

document.getElementById("review").addEventListener("click", function(element) {

   // console.log(element);
    var scrollid = element.target.dataset.scroll;
    scrollFunction(scrollid);
    
});

document.getElementById("arrow1").addEventListener("click", function(element) {

   // console.log(element);
    var scrollid = element.target.dataset.scroll;
    scrollFunction2(scrollid);
    
});

document.getElementById("arrow2").addEventListener("click", function(element) {

   // console.log(element);
    var scrollid = element.target.dataset.scroll;
    scrollFunction2(scrollid);
    
});

document.getElementById("arrow3").addEventListener("click", function(element) {

   // console.log(element);
    var scrollid = element.target.dataset.scroll;
    scrollFunction2(scrollid);
    
});

document.getElementById("arrow4").addEventListener("click", function(element) {

   // console.log(element);
    var scrollid = element.target.dataset.scroll;
    scrollFunction2(scrollid);
    
});

// document.getElementsByClassName("arrow").addEventListener("hover", function(element){


// });


document.getElementById("arrow5").addEventListener("click", function(element) {

   // console.log(element);
    var scrollid = element.target.dataset.scroll;
    scrollFunction2(scrollid);
    
});

document.getElementById("arrow6").addEventListener("click", function(element) {

   // console.log(element);
    var scrollid = element.target.dataset.scroll;
    scrollFunction2(scrollid);
    
});


document.getElementById("arrow7").addEventListener("click", function(element) {

   // console.log(element);
    var scrollid = element.target.dataset.scroll;
    scrollFunction2(scrollid);
    
});

