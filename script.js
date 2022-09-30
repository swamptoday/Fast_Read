var word_place = document.getElementById("myPara");

function changeText()
{
    var name = getText();

    var speed = getWPM();

    const ready_to_read = name.split(" ");

    displayWords(ready_to_read, speed);

}

function getText()
{
    var text = window.prompt("Enter your text: ");
    return text;
}

function getWPM()
{
    var speed = window.prompt("Enter WPM: ");

    if (speed == "")
    {
    speed = 300;
    }

    return speed;
}

async function displayWords(text, speed)
{
    var s_speed = (60/speed);
    var ms_speed = s_speed * 1000;
    for(var i = 0; i < text.length; i++)
    {
        var word = text[i];

        word_place.innerHTML = word;

        await sleep(ms_speed);
    }

}

function sleep(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}
  