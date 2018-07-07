$("document").ready(function(){
  let canvasPixel = $('#pixelCanvas');
  //Making the grid
  function makeGrid() {
    // Selecting size input
    const inputHeight = $('#inputHeight').val();
    const inputWidth = $('#inputWidth').val();
    //Making existing grid empty
    canvasPixel.empty();
    //creating new grid
    //creating rows
    for(let i=0;i<inputHeight;i++){
      canvasPixel.append('<tr></tr>');
    }
    let newRows=$('tr');
    //creating columns
    for(let j=0;j<inputWidth;j++){
      newRows.append('<td></td>');
    }
  }
  // size is submitted by the user, calling makeGrid()
  $('#sizePicker').submit(function(event) {
    event.preventDefault();
    makeGrid();
  });
  //Grid created
  //Changing the background color which peforms event listening
  canvasPixel.on( "click", "td", function( event ) {
      $(this).css("background-color", $("#colorPicker").val());
  });
  //to remove the colors from grid on double-click
  canvasPixel.on('dblclick','td',function(){
    $(this).css("background-color","");
  });
  //to remove the grid 
  $( ".clearGrid" ).click(function() {
    $("#pixelCanvas" ).html('');
  });
  // //to show the grid
  // $( ".showGrid" ).click(function() {
  //   $("#pixelCanvas" ).show();
  // });
 // to toggle the grid
  $( ".toogleGrid" ).click(function() {
    $("#pixelCanvas" ).toggle();
  });  
});



