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

function submitFormParent() {
  var arrayJSON = {};
  arrayJSON["email"] = "parent18@gmail.com";
  arrayJSON["password"] = "123443t43g43";
  arrayJSON["name"] = "Arel Gindos";
  arrayJSON["profilePictureURL"] = "www.google.com";
  arrayJSON["fullPictureURL"] = "www.google1.com";
  arrayJSON["partner"] = document.getElementById("partner").value;
  //arrayJSON["childes"] = ;
  arrayJSON["address"] = {
    "city": document.getElementById("city").value,
    "street": document.getElementById("street").value,
    "houseNumber": document.getElementById("houseNumber").value
  };
  

  var json = JSON.stringify(arrayJSON);
  alert('before ajax');
  $.ajax({
    url: 'https://sitters-ws.herokuapp.com/insertParent',
    dataType: 'json',
    type : 'post',
    contentType: 'application/json',
    data: json,
    success: function (data) {
      console.log(data);
    }.bind(this),
    error: function(xhr, status, err) {
      console.error(this.props.url, status, err.toString());
    }.bind(this)
  });
}


