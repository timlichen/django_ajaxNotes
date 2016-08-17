console.log("lol")
$(document).ready(function(){
  console.log("ready")
  // CREATE NOTE
  $('form').submit(function(e){
    e.preventDefault();
    var noteText = $('textarea').val()
    $.ajax({
      url: '/postNote',
      method: 'Post',
      data: $(this).serialize(),
      success: function(data){ $('.notePad').append(data) },
      dataType: 'html'
    })
  })
// DELETE NOTE
  $('.notePad').on('click', '.delete_button', function(){
    console.log("delete")
    var id = $(this).val();
    var note = $(this).parent();
    $.ajax({
      url: '/deleteNote/'+id,
      method: 'Get',
      data: $(this).serialize(),
      success: goodDelete(note),
      // dataType: 'html'
    })
  })
})

var goodPost = function(data){
  $('.notePad').append(data)
}

var goodDelete = function(note){
  console.log(note);
  $(note).remove()
}
