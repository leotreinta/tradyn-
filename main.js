//calculos con 2 sliders
var slider1 = document.getElementById("myRange1");
var output1 = document.getElementById("value1");
var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("value2");
var output3 = document.getElementById("value3");

output1.innerHTML = slider1.value;
output2.innerHTML = slider2.value;
const formatterEuro = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR'
})

slider1.oninput = function() {
  output1.innerHTML = new Intl.NumberFormat().format(this.value);
  output3.innerHTML = new Intl.NumberFormat().format(Math.trunc(slider1.value*1 /100* slider2.value*1));
  
}
slider2.oninput = function() {
  output2.innerHTML = this.value ;
  output3.innerHTML = new Intl.NumberFormat().format(Math.trunc(slider1.value*1 /100* slider2.value*1));
}

var start_value1 = slider.getAttribute("value1");
var start_value2 = slider.getAttribute("value2");


function iniciarMap(){
  var coord = {lat:-39.424253 ,lng: -8.2976184};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 10,
    center: coord
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map
  });
}