// ---------------------------------------
// Exersize 4: Create an array with a list of your skillsets
// Loop through them and append each one to
// append them to the <ul class="skillsets"> as <li> elements

var skillsets = ['Lizard Enthusiast', 'Professional Casual Gamer', 'Crazy good at eating brownies'];

/* function radSkills(){	
	var skills = document.getElementById("skillsets");	
		for (var i = 0; i < skillsets.length; i++){
			var item = document.createElement("li")
			item.innerHTML = skillsets[i];
			skills.appendChild(item);
		}
} */

/* for (var i = 0; i < skillsets.length; i++){
	$('.skillsets').append('<li>' + skillsets[i] + '</li>');
} */

skillsets.forEach(function (skillset, index){
	$('skillsets').append('<li>' + skillsets[i] + '</li>');
});