//TYPE 1

//beginning sentence array
var inspoArrayB = ['aim for happiness and ', 'Keep growing, ', 'believe that ', 'together, ', 'with hard work '];

//middle sentence array
var inspoArrayM = ['you ', 'it ', 'things ', 'we ', 'your dreams '];

//end sentence array
var inspoArrayE = ['will be happy!', 'will stay young.', 'can make sense.', 'can do anything!', 'make mountains.'];


//TYPE 2

//beginning sentence array
var factArrayB = ['8 out of 10 ', 'on a full moon, ', 'Nearly all ', 'most ', '10 percent of ']

//middle sentence array
var factArrayM = ['cats ', 'monsters ', 'Amreicans ', 'home owners ', 'unused furniture ']

//end sentence array
var factArrayE = ['get hit by cars.', 'grows faster than usual.', 'can smell fear.', 'cant spell mississippi.', 'are millionaires.']


//authors array
var authors = ['Yo Momma', 'Me', 'Some guy']
var quote = "";
var author = "";
var value = 1;
var quotes = "";

// var xmlhttp = new XMLHttpRequest();
//     xmlhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {

//             var response = JSON.parse(xmlhttp.responseText);
//             quotes = response.quotes;
//         }
//     };
//     xmlhttp.open("GET", "js/quotes.json", true);
//     xmlhttp.send();

//     console.log(quotes);

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

    quote = '"' + beginning + middle + end + '"';

    console.log(quote + '\n' + '-' + author);
    return quote;
    return author;
}

function displayQuote() {

	event.preventDefault();

	$(".blockquote").children().remove();

	for (var i = 0; i < value; i++) {
	
    var check = document.getElementById("switch");
    var newQuote = "";
    if (check.checked == true) {
        newQuote = createQuote(factArrayB, factArrayM, factArrayE, authors);
    } else {
        newQuote = createQuote(inspoArrayB, inspoArrayM, inspoArrayE, authors);
    }
  
    $(".blockquote").append(

        //'<p class="mb-0" id="quote" '+' i>'+"aim for happiness and you can do anything!"+'</p>' +
        "<p class='mb-0' id='quote"+i+"'>" + '\"aim for happiness\"' + "</p>" +
        "<footer class='blockquote-footer text-right' id='author"+i+"'>Some guy </footer>"
    )
	 var quoteId = "quote" + i;
	 var authorId = "author" + i;
     document.getElementById(quoteId.toString()).innerHTML = newQuote;
     document.getElementById(authorId.toString()).innerHTML = author;
     console.log(value);
 }
}

function quoteType() {
	$(".blockquote").children().remove();

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
        displayQuote();
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
         displayQuote();
    }
}

function getQuoteNum() {
    var getVal = document.getElementById("select");

    var val = getVal.options[getVal.selectedIndex].value;
    value = parseInt(val);
    displayQuote();
}