$(document).ready(function() {
  $(".profile").submit(function(event){
    event.preventDefault();

    var countryInput = $ ("input:radio[name=country]:checked").val();
    var spotInput = $("input:radio[name=spot]:checked").val();
    var ageInput = $("#age").val();
    var daysInput = $("#days").val();
    var companyInput = $("#company").val();
    var lastPlacesInput = $("#lastPlaces").val();
    var bestPlacesInput = $("#bestPlaces").val();
    console.log(countryInput);
    console.log(spotInput);
    console.log(ageInput);
    console.log(daysInput);
    console.log(companyInput);
    console.log(lastPlacesInput);
    console.log(bestPlacesInput);

    if (countryInput === "overseas" && spotInput === "beach" && ageInput === "under40" && companyInput === "friend") {
      $(".rio, .tahiti").show();

    } else if (countryInput === "us" && spotInput === "beach" && ageInput === "under40" && companyInput === "family") {
      $(".hawaii").show();

    } else if (countryInput === "us"){
      $(".hawaii, .oregon, .aspen").show();

    } else if (countryInput === "overseas"){
      $(".rio, .tahiti, .greenland, .machu").show();

    } else if (spotInput === "beach"){
      $(".rio, .tahiti, .hawaii").show();

    } else if (spotInput === "snow"){
      $(".greenland, .aspen").show();

    } else if (spotInput === "mountain"){
      $(".oregon, .machu").show();

    } else if (ageInput === "age"){
      $(".allResults").show();
    }

  });

});
