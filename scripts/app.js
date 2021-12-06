
// Imput and select fields entry validation check

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