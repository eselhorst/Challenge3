//functie aanmaken met GetAPI
function getAPIactivity() {
	var url = "https://www.boredapi.com/api/activity/";

	// construct request
	var request = url;

	// get activity
	fetch(request)

	// parse to JSON format
	.then(function(response) {
		return response.json();
	})

	// render random activity
	.then(function(response) {
		console.log(response.activity);
		document.getElementById('getActivity').value = response.activity;
	})
	
}

//get random activity in text on the website
function getText(){
	var url = "https://www.boredapi.com/api/activity/";
	fetch(url)
	.then(function(response){
		return response.json();
	})
	.then(function(response){
		console.log(response.activity);
	});
}

getAPIactivity();