var searchedfor = document.getElementById('rsearch');
var searchbar = document.querySelector('input');
var searchbutton = document.querySelector('button');
var geocodingaddress = "https://maps.googleapis.com/maps/api/geocode/json?address=";
var apikey = "&key=AIzaSyC5KE-_OtO3zG2J0kAw_0fcVVGj_dVEG_o"
var lat;
var lon;

searchbutton.addEventListener("click", saveSearch);

function saveSearch(){
	var address = searchedfor.value;
	var searchaddress = geocodingaddress + address + apikey;
	$.getJSON(searchaddress, function(data){
		lat = data.results[0].geometry.location.lat;
		lon = data.results[0].geometry.location.lng;
		var location = "lat: " + lat + " lon: " + lon;
		alert(location);
	})
}
