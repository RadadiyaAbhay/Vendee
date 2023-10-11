function search() {
  // Retrieve the search query from the input field
  var query = document.getElementById("searchInput").value;

  switch (query.toLowerCase()){
    case mobile:
        console.log("done");;
        break;
  }
}


$(window).scroll(function(){
  if ($(window).scrollTop() >= 100) {
      $('.kai').addClass('head-after');

  }
  else {
     $('.kai').removeClass('head-after');
  }
})



function showSlide(slideIndex) {
  var slides = document.getElementsByClassName("slider");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

showSlide(0); 


let currentUnderlineId = 'name1';

function underlineName(nameId) {
  const nameElement = document.getElementById(nameId);

  if (currentUnderlineId !== null) {
    const previousUnderlineElement = document.getElementById(currentUnderlineId);
    previousUnderlineElement.classList.remove('underline');
  }

  nameElement.classList.add('underline');
  currentUnderlineId = nameId;
}