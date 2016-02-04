

google.load('search','1', {style: google.loader.themes.MINIMALIST});

function searchbar(){

$(results).css("display","inline-block");

var adoptionInfo = new google.search.SearchControl();
var careInfo = new google.search.SearchControl();
var medicalInfo = new google.search.SearchControl();

adoptionInfo.addSearcher(new google.search.WebSearch());
careInfo.addSearcher(new google.search.WebSearch());
medicalInfo.addSearcher(new google.search.WebSearch());

adoptionInfo.draw(document.getElementById("adoption_div"));
careInfo.draw(document.getElementById("care_div"));
medicalInfo.draw(document.getElementById("medical_div"));

var query = document.getElementById("text").value
var adoption = query + " pet adoption";
var care = "pet " + query + " care";
var medical = "pet " + query + " medical care";
adoptionInfo.execute([adoption]);
careInfo.execute([care]);
medicalInfo.execute([medical]);
}


