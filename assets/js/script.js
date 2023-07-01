function search() {
  // Retrieve the search query from the input field
  var query = document.getElementById("searchInput").value;

  // Perform search operation (replace this with your own logic)
  // For demonstration purposes, let's assume we have an array of data
  var data = [
    "mobiles",
    "Consectetur adipiscing elit",
    "Sed do eiusmod tempor incididunt",
    "Ut labore et dolore magna aliqua"
  ];

  var results = data.filter(function(item) {
    return item.toLowerCase().includes(query.toLowerCase());
  });

  // Display search results
  var searchResultsDiv = document.getElementById("searchResults");
  searchResultsDiv.innerHTML = ("#back");
  if (results.length > 0) {
    results.forEach(function(result) {
      var resultElement = document.createElement("p");
      resultElement.textContent = result;
      searchResultsDiv.appendChild(resultElement);
    });
  } else {
    var noResultsElement = document.createElement("p");
    noResultsElement.textContent = "No results found.";
    searchResultsDiv.appendChild(noResultsElement);
  }

  // Prevent form submission
  return false;
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