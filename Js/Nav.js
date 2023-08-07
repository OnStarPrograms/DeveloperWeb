function w3_open() {
  
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
  $("#TopBlock").slideUp("medium");
  $("#mySidebar").animate({left: '0%'});
    // document.getElementById("TopBlock").style.display = "none";
}

function w3_close() {
  document.getElementById("myOverlay").style.display = "none";
  $("#TopBlock").slideDown("slow");
  $("#mySidebar").animate({left: '-60%'});
  }
