
// Input fields entry validation check
function validation(key) {
  switch(key) {
    case ("location"):
      const locationValue = document.getElementById("location").value;
      if (locationValue.length < 5 || locationValue.length > 20) {
        document.getElementById(key).classList.add("is-invalid"); // add Bootstrap is-invalid class 
      } else {
        document.getElementById(key).classList.remove("is-invalid"); // remove Bootstrap is-invalid class 
      }
      break;
    
    case ("minPrice"):
      const minPrice = document.getElementById("minPrice").value;
      if (minPrice < 100 || minPrice > 5000){
        document.getElementById(key).classList.add("is-invalid");
      } else {
        document.getElementById(key).classList.remove("is-invalid");
      }
      break;

      case ("maxPrice"):
      const maxPrice = document.getElementById("maxPrice").value;
      if (maxPrice < 100 || maxPrice > 5000){
        document.getElementById(key).classList.add("is-invalid");
      } else {
        document.getElementById(key).classList.remove("is-invalid");
      }
      break;

    default:
      break;
  }
}

// Select fields entry validation check
function handleSelectChange(key) {
  switch(key) {
    case ("propertyType"):
      const propertyType = document.getElementById("propertyType").value;
      if (propertyType === "Any property") {
        document.getElementById(key).classList.add("is-invalid"); // add Bootstrap is-invalid class 
      } else {
        document.getElementById(key).classList.remove("is-invalid"); // remove Bootstrap is-invalid class 
      }
      break;

      case ("bedroom"):
      const bedroom = document.getElementById("bedroom").value;
      if (bedroom === "Any") {
        document.getElementById(key).classList.add("is-invalid"); 
      } else {
        document.getElementById(key).classList.remove("is-invalid");
      }
      break;

      case ("radius"):
      const radius = document.getElementById("radius").value;
      if (radius === "Select") {
        document.getElementById(key).classList.add("is-invalid"); 
      } else {
        document.getElementById(key).classList.remove("is-invalid");
      }
      break;

    default:
      break;
  }
}

// Properties search

function search () {
  // Input fields values
  const locationValue = document.getElementById("location").value;
  const propertyType = document.getElementById("propertyType").value;
  const bedroom = document.getElementById("bedroom").value;
  const minPrice = document.getElementById("minPrice").value;
  const maxPrice = document.getElementById("maxPrice").value;

  // Iterating throug array of properties and push only the properties to searchResults[] if condition is true
  // Mocked data is used to search properties
  let searchResults = [];
  for(i=0; i < properties.length; i++) {
    let item = properties[i];
    if (item.location === locationValue && item.type === propertyType
      && item.bedroomCount === bedroom && (item.price >= parseInt(minPrice) && item.price <= parseInt(maxPrice))) {
        searchResults.push(properties[i]);
      }
  }
  
  // Create search container wrapper
  let searchContainer = document.getElementById("search-results");
  searchContainer.innerHTML = "";

  // Create content container
  var content = document.createElement('div');
  // Add search heading to the search container
  var heading = document.createElement('div');

  if (searchResults.length > 0) {
    // Append to the element's content
    heading.innerHTML += '<div class="row"><div class="section-name" id="new-to-market"><p>Search results: </p></div></div>';
    searchContainer.appendChild(heading);
    var cardContainer = document.createElement('div');
    cardContainer.classList.add("row");
    cardContainer.classList.add("row-cols-1");   
    cardContainer.classList.add("row-cols-sm-1");
    cardContainer.classList.add("row-cols-md-2");
    cardContainer.classList.add("g-4");
    // Go through all properties found
    searchResults.forEach(property => {
      // Create card container for each property
      var card = document.createElement('div');
      card.innerHTML = ` <div class="col">
          <div class="card">
            <img src=${property.image} class="card-img-top" width="300px" height="300px" alt="apartment image">
            <div class="card-body card-text-box">
              <h5 class="card-title">${property.name}</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>`
      // Append a card to the view
      cardContainer.appendChild(card);
    })
    // Append content to the cardContainer
    content.appendChild(cardContainer);
    // Append content to the searchContainer
    searchContainer.appendChild(content);
  } else {
    // Append to the element's content
    heading.innerHTML += '<div class="row"><div class="section-name" id="new-to-market"><p>No properties found </p></div></div>';
    searchContainer.appendChild(heading);
  }
  // Add divider to the view
  var divider = document.createElement('div');
  divider.classList.add("section-divider");
  searchContainer.appendChild(divider);
}