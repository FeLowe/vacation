$(document).ready(function() {
$("form#questions").submit(function(event){
 event.preventDefault();

  var countryInput = $("#country").val();
  var spotInput = $("#spot").val();
  var ageInput = $("#age").val();
  var daysInput = $("#days").val();
  var companyInput = $("#company").val();
  var last3Input = $("#last3").val();
  var bestPlacesInput = $("#bestPlaces").val();
  console.log(countryInput);
  console.log(spotInput);
  console.log(ageInput);
  console.log(daysInput);
  console.log(companyInput);
  console.log(last3Input);
  console.log(bestPlacesInput);

    if (countryInput === "overseas" && spotInput === "beach" && ageInput === "under30" && companyInput === "friend") {
      $(".rio").show();
    // } else if (ageInput  ==="over50") {
    //   $(".Obama, .John").show();
    // } else if ( ageInput  ==="over40") {
    //   $('.John').show();
    // } else if (ageInput  ==="under30") {
    //   $('.Matt').show();

    }
  // }
  //   else {
  //     if
  // }
  });
});
