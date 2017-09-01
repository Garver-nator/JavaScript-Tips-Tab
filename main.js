// List of JavaScript tips
var tipsList = [
	"Don't forget the <span class='code'>var</span> keyword when assigning a<span class='code'>Variable or Object.<br><span class='code-block'>var myNumber = 10;<br>var myString = 'Hello';<br>var myConstructorObject = new Object();<br>var myLiteralNotationObject = {};",

	"<span class='code'>undefined</span>, <span class='code'>null</span>, <span class='code'>0</span>, <span class='code'>false</span>, <span class='code'>NaN</span>, and <span class='code'>''</span> (empty string) are all falsy.",

	"Declare a function with<br/> <span class='code-block'>function <em>myFunctionName</em>() { <br>&nbsp;&nbsp;...<br> }</span>",

	"<span class='code'>if</span>/<span class='code'>else</span> statements look like <br/> <span class='code-block'>if (<em>condition</em>) { <br/>&nbsp;&nbsp;...<br/>} else { <br/>&nbsp;&nbsp;...<br/>}",

	"You can return the result of a function into a variable with <span class='code'>return</span>:<br><span class='code-block'>function timesFive(inputNumber) {<br> &nbsp;&nbsp;return inputNumber * 5; <br>}<br>console.log(timesFive(6));<br>// Output: 30</span> ",

	"A <span class='code'>for</span> has three condtions: a start condition, a stop condition, and an iterator: <br> <span class='code-block'>for (var i = 0; i < myArray.length; i++) { <br>&nbsp;&nbsp;...<br>}</span>",

	"To interpolate (add) a variable into a string, use the <span class='code'>+</span> operator, like this: <br> <span class='code-block'>var myName = 'Jon';<br/> 'Hello, my name is ' + myName;</span>",

	"To generate a random number, use JavaScript's built in function:<br> <span class='code'>function generateNumber() {<br> return Math.random(); }</span>.",

	"Arrays hold lists of data. You can access any of the list items by using bracket notation, like this: <br> <span class='code-block'>var myArray = ['pears', 'asparagus', 'bananas'];<br>myArray[1]; // asparagus</span>",
	
	"Create <span class='code'>Objects</span> using literal notation: <br> <span class='code-block'>var objectName = <br>{ propNameOfStrings: 'valueNameOfString', <br>propNumber: valueNumber };</span>",
	
	"Access <span class='code'>Object properties</span> using dot notation: <br> <span class='code-block'>var objectName = { age: 22; }<br> var objectAge = objectName.age;</span>",
	
	"Access <span class='code'>Object properties</span> using bracket notation: <br> <span class='code-block'>var objectName = { age: 0; }<br> var age = objectName[22];</span>",
	
	"The FizzBuzz Challenge:<br><span class='code'>Count to 15,<br> print fizz @ every 3rd number,<br>print buzz @ every 5th number,<br>print fizzbuzz @ every 15th: <span class='code-block'> for (var i=0;i<16;i++)<br>{ if (i%15===0)<br>{console.log('fizzbuzz!');}<br>else if(i%5===0)<br>{console.log('buzz');}<br>else if(i%3===0)<br>{console.log('fizz');}<br>else<br>console.log(i);<br>};</span>",
	
	"Access the<span class='code'>value</span>of an HTML input using its ID: <br> <span class='code-block'>	var myInputValue = document.getElementById('myInputBox').value;</span>",
	
	"Add text to HTML using the <span class='code'>innerHTML</span> method: <br> <span class='code-block'>document.getElementById('myInputBox').innerHTML = 'Hello World!';</span>"

];

var generateNumber = (function() {
    var nums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
    var current = [];
    function rand(n) {
        return (Math.random() * n)|0;
    }
    return function() {
      if (!current.length) current = nums.slice();
      return current.splice(rand(current.length), 1);
    }
}
());

function generateTip() {
	var tip = tipsList[generateNumber()];
	var tipElement = document.querySelector('.js-tip');
	tipElement.innerHTML = tip;

}
generateTip();

function onTipButtonClick() {
  var tipButton = document.querySelector('.tip-button');
  tipButton.addEventListener('click', function() {

	generateTip()
	
  });
}

onTipButtonClick();

