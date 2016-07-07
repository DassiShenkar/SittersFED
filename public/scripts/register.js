/**
 * Created by Arel on 29/06/2016.
 */

// clone childes field with click "add child"
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
  arrayJSON["email"] = localStorage.parentEmail;                // get email from G+
  //arrayJSON["password"] = "12gwgew3wwst4gwgew3g43";
  arrayJSON["name"] = localStorage.name;                        //get name from G+
  arrayJSON["profilePictureURL"] =  localStorage.profilePicture;//get profile picture from G+
  arrayJSON["partner"] = document.getElementById("partner").value;

  var childes = [];
  var names = $('.name');
  var ages = $('.age');
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
  //console.log(json);
  $.ajax({
    url: 'https://sitters-ws.herokuapp.com/insertParent',
    dataType: 'json',
    type : 'post',
    contentType: 'application/json',
    data: json,
    success: function (data) {
      console.log(data);
      window.location = "feed-before.html";
    }.bind(this),
    error: function(xhr, status, err) {
      //TODO: in error
      console.error(this.props.url, status, err.toString());
    }.bind(this)
  });
}


// arrayJSON["email"] = localStorage.parentEmail;//"parent19@gmail.com";
// arrayJSON["password"] = "12gwgew3wwst4gwgew3g43";
// arrayJSON["name"] = localStorage.name;//"Arel Gindos";
// arrayJSON["profilePictureURL"] =  localStorage.profilePicture;//"www.google.com";

function submitFormSitter() {
  var arrayJSON = {};
  arrayJSON["email"] = localStorage.parentEmail;
  arrayJSON["password"] = "1vfsrherhefwfwrhfwg3";
  arrayJSON["name"] = localStorage.name;
  arrayJSON["maxAge"] = document.getElementById("maxAge").value;
  arrayJSON["minAge"] = document.getElementById("minAge").value;
  arrayJSON["hourFee"] = document.getElementById("hourFee").value;
  arrayJSON["workingHours"] = $('input[name=workinghours]:checked', '#sitter-form').val();
  arrayJSON["gender"] = $('input[name=gender]:checked', '#sitter-form').val();
  arrayJSON["profilePictureURL"] = localStorage.profilePicture;
  arrayJSON["fullPictureURL"] = document.getElementById('pictureURL').value;
  arrayJSON["address"] = {
    "city": document.getElementById("sitter-city").value,
    "street": document.getElementById("sitter-street").value,
    "houseNumber": document.getElementById("sitter-houseNumber").value
  };

  var json = JSON.stringify(arrayJSON);
 // console.log(json);
  $.ajax({
    url: 'https://sitters-ws.herokuapp.com/insertSitter',
    dataType: 'json',
    type : 'post',
    contentType: 'application/json',
    data: json,
    success: function (data) {
      console.log(data);
      window.location = "feed-before.html";
    }.bind(this),
    error: function(xhr, status, err) {
      //TODO: in error
      console.error(this.props.url, status, err.toString());
    }.bind(this)
  });
}

