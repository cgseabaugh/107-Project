var express = require("express");
var app = express(); // create an app


app.get('/', (req, res) => {
    console.log("Someone wants the ROOT page.");

    res.send("Hello, my friend!");

});

app.get('/contact', (req, res) =>{
    console.log("Someone wants the CONTACT page.")

    res.send("This will be the contact page!");
});

app.get('/aboutme', (req, res) => {
    console.log("Someone wants the ABOUTME page.");
    res.send("<h1 style='color:red;'>CGSeabaugh</h1>");
    res.send(vowels);
})

app.get('/exc/:message', (req, res) => {
    console.log("Message from client: ", req.params.message);

// send only the vowels back (GABE=AE)

    var msg = req.params.message;
    var vowels = '';
    var allVowels = ['a','e','i','o','u']

    // travel the msg string and print on console each letter
    for(var i=0; i<msg.length; i++){
        var letter = msg[i];
        console.log(letter);
        if(allVowels.indexOf(letter.toLowerCase()) != -1){

            if(vowels.includes(letter)){

            } else{
                vowels += letter;
            }

        };
        
    };

    //return each vowel only once
  

    res.status(202);
    res.send(vowels);
});










app.listen(8080, function(){
    console.log("Server running at http://localhost:8080");
    console.log("Press Ctrl+C to kill it");
});