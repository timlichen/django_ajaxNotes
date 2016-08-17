console.log("lol")
$(document).ready(function(){
  console.log("ready")
  $('form').submit(function(e){
    e.preventDefault();
    var noteText = $('textarea').val()
    $.ajax({
      url: '/postNote',
      method: 'Post',
      data: $(this).serialize(),
      success: successFunction(noteText)
    })
  })
})

var successFunction = function(noteText){
  console.log("yay!")
  $('.notePad').append("<div class='note'>" + noteText +"</div>")
}
