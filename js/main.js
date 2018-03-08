/*o44AAyxbKoR8nesBD77gPWhBUYK4ktBEWiS7LBeq*/
//-nasa api key

//- api: https://api.nasa.gov/planetary/earth/imagery


$("#enter").submit(function(e){
  e.preventDefault();
var apiURL = "https://api.nasa.gov/planetary/apod?api_key=o44AAyxbKoR8nesBD77gPWhBUYK4ktBEWiS7LBeq&date="; //"&date=";
var item = $("#date").val();
document.getElementById("date").value = "" ;//clears input after user presses enter
$.ajax({
      url: apiURL + item,
      success: function(responce){
        console.log(responce);
      $("#img").attr("src", responce.url);
      },
      error: function(r){
        console.log(r);
      },

});

})
