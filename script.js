
var countries =   ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua & Barbuda",
"Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
"Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan",
"Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei",
"Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde",
"Cayman Islands", "Central Arfrican Republic", "Chad", "Chile", "China", "Colombia", "Congo",
"Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cuba", "Curacao", "Cyprus",
"Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt",
"El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands",
"Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies",
"Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada",
"Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong",
"Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel",
"Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait",
"Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
"Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", 
"Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia",
"Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauro", "Nepal", "Netherlands", 
"Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", 
"Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", 
"Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", 
"Saint Pierre & Miquelon", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", 
"Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", 
"South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "St Kitts & Nevis", "St Lucia", 
"St Vincent", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", 
"Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", 
"Turkmenistan", "Turks & Caicos", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", 
"United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", 
"Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"]


var xDirection = "";
var yDirection = "";

var oldX = 0;
var oldY = 0;

document.addEventListener('DOMContentLoaded', () => {
 
  document.onscroll = () => {
    const nav = document.querySelector('#navbar');
    if (this.scrollY <= 10) {
      nav.className = '';
    } else {
      nav.className = 'scroll';
    }
  };

  });
 
var arr = [];

function myFunction2() {
  while (arr.length !== 0) {
    arr.pop();
  }
  var sahil = document.getElementById("country").value;
  var size = sahil.length;
  let variable = sahil.charAt(0).toUpperCase() + sahil.slice(1);
  if (size >= 3) {
    arr = countries.filter(item => (
      (item.substring(0, size) == variable)
      
    ));     
    $('#country').autocomplete({
      minLength: 3,
      source: arr
    });
    }  
}


window.onscroll = () => {
  console.log('----');
  console.log(window.innerHeight);
  console.log(window.scrollY);
  console.log(document.body.offsetHeight);
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    type();
  }
};

var i = 0;
var txt = 'Never miss any update from us.';
var speed = 100;

  function type() {
    if (i < txt.length) {
      document.getElementById("invisible").innerHTML += txt.charAt(i);
      i++;
      setTimeout(type, speed);
    }
 }

const add = document.getElementById('quote');
var bodyElement = document.querySelector("body");
bodyElement.addEventListener("mousemove", getMouseDirection, false);


function getMouseDirection(e) {
  //deal with the horizontal case
  if (oldX < e.pageX) {
    add.style.left = '-10px';
  } else {
    add.style.top = '10px';
  }

  //deal with the vertical case
  if (oldY < e.pageY) {
    add.style.top = '80px';
  } else {
    add.style.top = '120px';
  }

  oldX = e.pageX;
  oldY = e.pageY;
}


