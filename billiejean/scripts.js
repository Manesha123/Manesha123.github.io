window.st = ScrollReveal({ duration: 1000});
			st.reveal('.qc');
			st.reveal('.review-box');
			st.reveal('.name');
			st.reveal('.cast');
			st.reveal('.meet');
			st.reveal('.arrow');


// function myFunction(identifier) {
//     var elmnt = document.getElementById(identifier);
//     elmnt.scrollIntoView();
// }



document.getElementById("trailer").addEventListener("click", function myFunction() {
    var elmnt = document.getElementById("Trailer");
    elmnt.scrollIntoView();
});

document.getElementById("cast").addEventListener("click", function myFunction() {
    var elmnt = document.getElementById("Cast");
    elmnt.scrollIntoView();
});

document.getElementById("review").addEventListener("click", function myFunction() {
    var elmnt = document.getElementById("Review");
    elmnt.scrollIntoView();
});

document.getElementById("arrow1").addEventListener("click", function myFunction() {
    var elmnt = document.getElementById("first");
    elmnt.scrollIntoView();
});

document.getElementById("arrow2").addEventListener("click", function myFunction() {
    var elmnt = document.getElementById("Cast");
    elmnt.scrollIntoView();
});