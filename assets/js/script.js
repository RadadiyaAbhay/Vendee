// Get the current date
var currentDate = new Date();
          
// Format the date as desired (optional)
var formattedDate = currentDate.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

// Update the content of the HTML element with the date
document.getElementById('date').textContent = formattedDate;

// sharedContent.js
window.addEventListener('DOMContentLoaded', function() {
    var sharedParagraph = "Philips announced the launch Philips CT 3500.";
    var paragraphs = document.querySelectorAll('.shared-paragraph');

    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].textContent = sharedParagraph;
    }
});

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
    searchResultsDiv.innerHTML = "";
    if (results.length > 0) {
      results.forEach(function(result) {
        var resultElement = document.createElement("p");
        resultElement.textContent = result;
        searchResultsDiv.appendChild(resultElement);
      });
    } else {
      searchResultsDiv.textContent = "No results found.";
    }
    
    // Prevent form submission
    return false;
  }
  
