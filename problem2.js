// Calculating avarage marks of Mathmetics, Biology, Chemistry, Physics, and Bangla for a student.

/* with variables */
// var math = parseFloat(prompt('Enter your Mathmetics marks here'));
// var biology = parseFloat(prompt('Enter your Biology marks here'));
// var chemistry = parseFloat(prompt('Enter your Chemistry marks here'));
// var physics = parseFloat(prompt('Enter your Physics marks here'));
// var bangla = parseFloat(prompt('Enter your Bangla marks here'));

// var sum = math + biology + chemistry + physics + bangla;
// var avarage = sum / 5;

// document.getElementById('result').innerHTML = `You got <span style="color:#1cff25;">${math}</span> in Mathmetics, 
// <span style="color:#1cff25;">${biology}</span> in Biology, 
// <span style="color:#1cff25;">${chemistry}</span> in Chemistry,
// <span style="color:#1cff25;">${physics}</span> in Phycics, 
// and <span style="color:#1cff25;">${bangla}</span> in Bangla.
// So your avarage marks are <span style="color:#ffba37;">${avarage.toFixed(2)}</span>`;


/* With a Function */
var math = parseFloat(prompt('Enter your Mathmetics marks here'));
var biology = parseFloat(prompt('Enter your Biology marks here'));
var chemistry = parseFloat(prompt('Enter your Chemistry marks here'));
var physics = parseFloat(prompt('Enter your Physics marks here'));
var bangla = parseFloat(prompt('Enter your Bangla marks here'));

function avarageMarks (math, biology, chemistry, physics, bangla) {
    var sum = math + biology + chemistry + physics + bangla;
    return sum / 5;
}
// Function arguments
 var result = avarageMarks(math,biology,chemistry,physics,bangla);
// Output
document.getElementById('result').innerHTML = `You got <span style="color:#1cff25;">${math}</span> in Mathmetics, 
<span style="color:#1cff25;">${biology}</span> in Biology, 
<span style="color:#1cff25;">${chemistry}</span> in Chemistry,
<span style="color:#1cff25;">${physics}</span> in Physics, 
and <span style="color:#1cff25;">${bangla}</span> in Bangla.
So your avarage marks are <span style="color:#ffba37;">${result.toFixed(2)}</span>`;
