// $(document).ready(function(){
//   alert('ready');
// });


$(document).keypress(function(e){
  if (e.which === 97) alert("Aaaaayyy...");
  console.log(e.which);
  if (e.which === 113) {
    chrome.runtime.sendMessage({shutdown: "THIS"}, function(){});
  };
  if (e.which === 120) {
    chrome.runtime.sendMessage({shutdown: "ALL"}, function(response){
      console.log(response.farewell);
    });
  };
});