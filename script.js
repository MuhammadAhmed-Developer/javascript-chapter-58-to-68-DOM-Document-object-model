// object --------------------------------------------------------------------
// let user={
//     firstName:'Muhammad',
//     lastName:'Ahmed',
//     city:'Faisalabad'
// }
// console.log(user.city)
// overwrite or get karna
// let para= document.getElementsByTagName('p')
// console.log(para[0].innerHTML='abc')

// var newParagraph = document.createElement("p");
// console.log(newParagraph);
// var newText = document.createTextNode("Helow");
// console.log(newText);
// newParagraph.appendChild(newText);

// newParagraph.setAttribute("class", "red")
// document.getElementById('abc').appendChild(newParagraph);
// newParagraph.className += ' red'

var img = document.createElement('img');
img.setAttribute("src", "./acesst/images/vadim-bogulov-qzOA5q2-lL4-unsplash.png");
document.getElementById('abc').appendChild(img);
