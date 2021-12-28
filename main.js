compare.set({
    width:50,
    height:75,
    image_format:'png',
    image_quality:100
});

camera = document.getElementById("camera");
compare.attach('camera');
console.log('ml5:', ml5.version);

function photoTake(){
  save="img.png";
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/FYfDuc8EM/',modelLoaded);


function check(){
photoTake = 'https://teachablemachine.withgoogle.com/models/FYfDuc8EM/';
classify(photoTake, gotResult);
}

function gotResult(error, results){
if(error){
console.error(error);
}
console.log(results);
}