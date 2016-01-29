
$(document).ready(function(){

$( "#cityfield" ).keyup(function() {
     var url = "https://students.cs.byu.edu/~clement/CS360/ajax/getcity.cgi?q="+$("#cityfield").val();
  $.getJSON(url,function(data) {    
      
      var everything;
      everything = "<ul>";
      $.each(data, function(i,item) {
         everything += "<li> "+data[i].city;
      });   
      everything += "</ul>";
      $("#txtHint").html(everything);
    });
      $("#button").click(function(e){
      var value = $("#cityfield").val();
      console.log(value);
      e.preventDefault();
      $("#dispcity").text(value);
   
     var myurl= "https://api.wunderground.com/api/42f3dc0e0a7e03ec/geolookup/conditions/q/UT/";
  myurl += value;
  myurl += ".json";
 // console.log(myurl);
  $.ajax({
    url : myurl,
    dataType : "jsonp",
    success : function(parsed_json) {
      var location = parsed_json['location']['city'];
      var temp_string = parsed_json['current_observation']['temperature_string'];
      var current_weather = parsed_json['current_observation']['weather'];
      everything = "<ul>";
      everything += "<li>Location: "+location;
      everything += "<li>Temperature: "+temp_string;
      everything += "<li>Weather: "+current_weather;
      everything += "</ul>";
      $("#weather").html(everything);
    }
    });

   });
  });
});



