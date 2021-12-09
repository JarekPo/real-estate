//vars
var house=document.getElementsByClassName("house");
var apartament=document.getElementsByClassName("apartament");
var bungalow=document.getElementsByClassName("bungalow");
var oneBed=document.getElementsByClassName("1-bed");
var twoBeds=document.getElementsByClassName("2-beds");
var threeBeds=document.getElementsByClassName("3-beds");
var fourBeds=document.getElementsByClassName("4-beds");
var fiveBeds=document.getElementsByClassName("5-beds");
var price100=document.getElementsByClassName("price-100");
var price200=document.getElementsByClassName("price-200");
var price300=document.getElementsByClassName("price-300");
var rent500=document.getElementsByClassName("rent-500");
var rent1000=document.getElementsByClassName("rent-1000");
var rent1500=document.getElementsByClassName("rent-1500");


//Hide max rent
function searchForSale(){
	document.getElementById("maxRentSearch").style.display="none";
	document.getElementById("maxPriceSearch").style.display="block";
}

//Hide max price
function searchToLet(){
	document.getElementById("maxPriceSearch").style.display="none";
	document.getElementById("maxRentSearch").style.display="block";
}

//Filter and search for selected properties
function searchSelected(){
	var checked=document.querySelector('input[name="radio"]:checked').value;
	var selectedType=document.getElementById("propertyType").value;
	var selectedBeds=document.getElementById("minBeds").value;
	var selectedPrice=document.getElementById("maxPriceSearch").value;
	var selectedRent=document.getElementById("maxRentSearch").value;
	
	var properties=document.getElementsByClassName("property-pic");
	for(i=0;i<properties.length;i++){
			properties[i].style.display="none";
	}
	
	if(selectedType=="House"){
		displayHouses();
	}
	else if(selectedType=="Apartament"){
		displayApartaments();
	}
	else if(selectedType=="Bungalow"){
		displayBungalows();
	}
	else if(selectedType=="All"){
		displayHouses();
		displayApartaments();
		displayBungalows();
	}
	
}

//Display selected cards functions
function displayHouses(){
	for(i=0;i<house.length;i++){
		house[i].style.display="block";
	}
}
function displayApartaments(){
	for(i=0;i<apartament.length;i++){
		apartament[i].style.display="block";
	}
}
function displayBungalows(){
	for(i=0;i<bungalow.length;i++){
		bungalow[i].style.display="block";
	}
}

//Aditional function for selecting cards - for further development in the future
function display1Bed(){
	for(i=0;i<oneBed.length;i++){
		oneBed[i].style.display="block";
	}
}

function display2Beds(){
	for(i=0;i<twoBeds.length;i++){
		twoBeds[i].style.display="block";
	}
}

function display3Beds(){
	for(i=0;i<threeBeds.length;i++){
		threeBeds[i].style.display="block";
	}
}

function display4Beds(){
	for(i=0;i<fourBeds.length;i++){
		fourBeds[i].style.display="block";
	}
}

function display5Beds(){
	for(i=0;i<fiveBeds.length;i++){
		fiveBeds[i].style.display="block";
	}
}

function displayPrice100(){
	for(i=0;i<price100.length;i++){
		price100[i].style.display="block";
	}
}

function displayPrice200(){
	for(i=0;i<price200.length;i++){
		price200[i].style.display="block";
	}
}

function displayPrice300(){
	for(i=0;i<price300.length;i++){
		price300[i].style.display="block";
	}
}

function displayRent500(){
	for(i=0;i<rent500.length;i++){
		rent500[i].style.display="block";
	}
}

function displayRent1000(){
	for(i=0;i<rent1000.length;i++){
		rent1000[i].style.display="block";
	}
}

function displayRent1500(){
	for(i=0;i<rent1500.length;i++){
		rent1500[i].style.display="block";
	}
}



