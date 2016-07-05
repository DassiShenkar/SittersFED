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
  arrayJSON["email"] = "parent19@gmail.com";
  arrayJSON["password"] = "123wwst43g43";
  arrayJSON["name"] = "Arel Gindos";
  arrayJSON["profilePictureURL"] = "www.google.com";
  arrayJSON["fullPictureURL"] = "www.google1.com";
  arrayJSON["partner"] = document.getElementById("partner").value;

  var childes = [];
  var names = $('.name');
  var ages = $('.age');
  //TODO: add picture when cloudinary is done
  var allergies = $('.allergies');
  var length = names.length;
  for(var i = 0; i < length; i ++){
    childes[i] = {
      "name": names[i].value,
      "age": ages[i].value,
      "allergies": allergies[i].value.split(',')
    }
  }
  arrayJSON["childes"] = childes;
  arrayJSON["address"] = {
    "city": document.getElementById("city").value,
    "street": document.getElementById("street").value,
    "houseNumber": document.getElementById("houseNumber").value
  };


  var json = JSON.stringify(arrayJSON);
  console.log(json);
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

function submitFormSitter() {
  var arrayJSON = {};
  arrayJSON["email"] = "sitter9@gmail.com";
  arrayJSON["password"] = "1vfsrherherhfwg3";
  arrayJSON["name"] = "Yoel kora";
  arrayJSON["maxAge"] = document.getElementById("maxAge").value;
  arrayJSON["minAge"] = document.getElementById("minAge").value;
  arrayJSON["hourFee"] = document.getElementById("hourFee").value;
  arrayJSON["workingHours"] = $('input[name=workinghours]:checked', '#sitter-form').val();
  arrayJSON["gender"] = $('input[name=gender]:checked', '#sitter-form').val();
  arrayJSON["profilePictureURL"] = "www.google.com";
  arrayJSON["fullPictureURL"] = "www.google1.com";
  arrayJSON["address"] = {
    "city": document.getElementById("sitter-city").value,
    "street": document.getElementById("sitter-street").value,
    "houseNumber": document.getElementById("sitter-houseNumber").value
  };


  var json = JSON.stringify(arrayJSON);
  console.log(json);
  $.ajax({
    url: 'https://sitters-ws.herokuapp.com/insertSitter',
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

