//global variables
var quote = "";
var author = "";
var value = 1;
var quotes = "";

// Retrieving data from json file
var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            var response = JSON.parse(xmlhttp.responseText);
            quotes = response.quotes;
        }
    };

    xmlhttp.open("GET", "/js/quotes.json", true);
    xmlhttp.send();

function createQuote(b, m, e, a) {

    //randomly selecting sentence fragments
    var bNum = Math.floor(Math.random() * b.length);
    var mNum = Math.floor(Math.random() * m.length);
    var eNum = Math.floor(Math.random() * e.length);
    var aNum = Math.floor(Math.random() * a.length);

    var beginning = b[bNum];
    var middle = m[mNum];
    var end = e[eNum];
    author = a[aNum];

//assembles quote
    quote = '"' + beginning + middle + end + '"';

    return quote;
    return author;
}

function displayQuote() {

	event.preventDefault();

	$(".blockquote").children().remove();

//loop which checks which quote type is selected and displays the amount selected
	for (var i = 0; i < value; i++) {
	
    var check = document.getElementById("switch");
    var newQuote = "";
    if (check.checked == true) {
        newQuote = createQuote(quotes[1].beginning, quotes[1].middle, quotes[1].end, quotes[2].authors);
    } else {
        newQuote = createQuote(quotes[0].beginning, quotes[0].middle, quotes[0].end, quotes[2].authors);
    }
  
//displaying quotes
    $(".blockquote").append(

        "<p class='mb-0' id='quote"+i+"'>" + '\"aim for happiness\"' + "</p>" +
        "<footer class='blockquote-footer text-right' id='author"+i+"'>Some guy </footer>"
    )
	 var quoteId = "quote" + i;
	 var authorId = "author" + i;
     document.getElementById(quoteId.toString()).innerHTML = newQuote;
     document.getElementById(authorId.toString()).innerHTML = author;
 }
}

function quoteType() {
	$(".blockquote").children().remove();

//changing the css when the quote type is changed
    var check = document.getElementById("switch");
    var inspo = document.getElementById("inspo");
    var fact = document.getElementById("fact");
    var bg = document.getElementById("background");

    if (check.checked == true) {
        //changing "inspirational quote" color to dark
        inspo.classList.remove("text-light");
        inspo.classList.add("text-dark");
        //changing "factual quote" color to light
        fact.classList.remove("text-dark");
        fact.classList.add("text-light");
        // changing background to blue
        bg.classList.remove("yellow-background");
        bg.classList.add("blue-background");
    } else {
        //changing "inspirational quote" color to light
        inspo.classList.remove("text-dark");
        inspo.classList.add("text-light");
        //changing "factual quote" color to dark
        fact.classList.remove("text-light");
        fact.classList.add("text-dark");
        // changing background to yellow
        bg.classList.remove("blue-background");
        bg.classList.add("yellow-background");
    }
}

function getQuoteNum() {
	//retriving the amount of quotes selected
    var getVal = document.getElementById("select");
    var val = getVal.options[getVal.selectedIndex].value;
    value = parseInt(val);
    displayQuote();
}