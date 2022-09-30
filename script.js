//element, where words will be placed
var word_place = document.getElementById("myPara");

//when button clicked
function changeText()
{
    //variable to keep text
    var name = getText();

    //variable to keep speed
    var speed = getWPM();

    //creating array of words by splitting text
    const ready_to_read = name.split(" ");

    //sending array and speed to display function
    displayWords(ready_to_read, speed);

}

//getting text
function getText()
{
    var text = window.prompt("Enter your text: ");
    return text;
}


//getting speed
function getWPM()
{
    var speed = window.prompt("Enter WPM: ");

    if (speed == "")
    {
    speed = 300;
    }

    return speed;
}

//function for displaying words with needed speed
async function displayWords(text, speed)
{
    //getting speed in milliseconds for sleep function
    var ms_speed = (60/speed) * 1000;

    //displaying words from array one by one
    for(var i = 0; i < text.length; i++)
    {
        var word = text[i];

        word_place.innerHTML = word;

        await sleep(ms_speed);
    }

}

//creating sleep function with milliseconds as parameter
function sleep(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.onkeyup = function () {
    var e = e || window.event; // for IE to cover IEs window event-object
    if(e.which == 65) {
        changeText();
      return false;
    }
  }