/**
 * Created by Arel on 29/06/2016.
 */

$('.multi-field-wrapper').each(function() {
  var $wrapper = $('.multi-fields', this);
  $(".add-field", $(this)).click(function(e) {
    $('.multi-field:first-child', $wrapper).clone(true).appendTo($wrapper).find('input').val('').focus();
  });
  $('.multi-field .remove-field', $wrapper).click(function() {
    if ($('.multi-field', $wrapper).length > 1)
      $(this).parent('.multi-field').remove();
  });
});

$('#controller input').on('change', function() {
  var type = $('input[name="radiochoose"]:checked', '#controller').val();
  if(type == "parent"){
    document.getElementById('sitter-register').style.display = "none";
    document.getElementById('parent-register').style.display = "inline";
  }
  else{
    document.getElementById('parent-register').style.display = "none";
    document.getElementById('sitter-register').style.display = "inline";
  }

});

function submitFormSitter(){
  var arrayJSON = {};

  arrayJSON["email"] = "Bob";
  arrayJSON["name"] = ;
  arrayJSON["profilePictureURL"] = ;
  arrayJSON["fullPictureURL"] = ;
  arrayJSON["partner"] = ;
  arrayJSON["childes"] = ;
  arrayJSON["address"] = {
    "city" : ;
    "street" : ;
    "houseNumber" : ;
  };
  arrayJSON[""] = ;
  arrayJSON[""] = ;
  arrayJSON["last_name"] = "Smith";
  var json = JSON.stringify(arrayJSON);

}
