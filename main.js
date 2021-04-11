var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();


recognition.onresult = function (event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(content = "take my selfie"){
        console.log("taking selfie");
        speak();
    }
}
function speak(){
    var synth = window.speechSynthesis;

    speak_data = "taking your selfie now";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function()
    {
take_snapshot();
save();
    },500
    );
}
camera = document.getElementById("camera");

Webcam.set({

width : 360,

hight : 250,

image_format : 'png',

png_quality : 90

});
function take_snapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id = "selfie_image" src = "'+data_uri+'">';
});


}
function save(){
    link = document.getElementById("link");

    image = document.getElementById("selfie_image").scroll;

    link.href = image;

    link.click();


    
}