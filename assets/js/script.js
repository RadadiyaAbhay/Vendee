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
