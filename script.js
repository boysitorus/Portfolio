// //MODAL
// Get the button that opens the modal
var btn = document.querySelectorAll("button.show-modal");

// All page modals
var modals = document.querySelectorAll('.modal-custom');
var overlay = document.querySelectorAll('.overlay');


// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close-modal");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    let modal = document.querySelector(e.target.getAttribute("href"));
    console.log(modal);
    let ovlay = modal.nextElementSibling;
    console.log(ovlay);
    modal.style.display = "block";
    ovlay.style.display = "block";
 }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
  spans[i].onclick = function() {
     for (var index in modals) {
       if (typeof modals[index].style !== 'undefined'){
        modals[index].style.display = "none";
        overlay[index].style.display = "none";
       }     
     }
  }
 }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
   for (var index in modals) {
    if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
   }
  }
}



// VALIDATION FORM
function validateForm() {
  let status = {
    nama: true,
    email: true,
    subject: true,
    pesan: true,
  };

  let elmntNama = document.getElementById("nama");
  let elmntEmail = document.getElementById("email");
  let elmntSubject = document.getElementById("subject");
  let elmntPesan = document.getElementById("pesan");

  elmntNama.classList.remove("is-invalid");
  elmntEmail.classList.remove("is-invalid");
  elmntSubject.classList.remove("is-invalid");
  elmntPesan.classList.remove("is-invalid");

  var nama = elmntNama.value.trim();
  var email = elmntEmail.value.trim();
  var subject = elmntSubject.value.trim();
  var pesan = elmntPesan.value.trim();

  var namaError = document.getElementById("namaError");
  var emailError = document.getElementById("emailError");
  var subjectError = document.getElementById("subjectError");
  var pesanError = document.getElementById("pesanError");

  namaError.innerHTML = "";
  emailError.innerHTML = "";
  subjectError.innerHTML = "";
  pesanError.innerHTML = "";

  if (nama === "") {
    namaError.innerHTML = "Name field must be filled!";
    status.nama = false;
  }

  if (email === "") {
    emailError.innerHTML = "Email field must be filled!";
    status.email = false;
  } else {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(email)) {
      emailError.innerHTML = "Email Format is not Valid!";
      status.email = false;
    }
  }

  if (subject === "") {
    subjectError.innerHTML = "Subject field must be filled!";
    status.subject = false;
  }

  if (pesan === "") {
    pesanError.innerHTML = "Message field must be filled!";
    status.pesan = false;
  } else if (pesan.length < 30) {
    pesanError.innerHTML = "Message field must be more than 30 character!";
    status.pesan = false;
  }

  if (!status.nama) {
    elmntNama.classList.add("is-invalid");
  }

  if (!status.email) {
    elmntEmail.classList.add("is-invalid");
  }

  if (!status.subject) {
    elmntSubject.classList.add("is-invalid");
  }

  if (!status.pesan) {
    elmntPesan.classList.add("is-invalid");
  }

  console.log(status);
  return status.nama && status.email && status.subject && status.pesan;
}

var form = document.getElementById("formContact");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);

// CAROUSEL
// Select all slides
const slides = document.querySelectorAll(".custom-slide");

// loop through slides and set each slides translateX property to index * 100%
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide = document.querySelector(".custom-slider-button-next");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  //   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// select prev slide button
const prevSlide = document.querySelector(".custom-slider-button-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});
