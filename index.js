/* 0-90-180-270-360

var ran = Math.floor(Math.random() * 9);*/
for(var i=1; i<=2; i++){
    var rotateCube = ["rotateY(0deg)","rotateY(90deg)","rotateY(180deg)","rotateY(270deg)",
                    "rotateX(-90deg)","rotateX(-180deg)","rotateX(-270deg)"];


    var randNum = rotateCube[Math.floor(Math.random() * 7)];
    console.log(rotateCube);
    console.log(randNum);

    if (i == 1){
        console.log("1. "+randNum);
        document.querySelector(":root")
        .style.setProperty('--div-transform', randNum);
    }else {
        console.log("2. "+randNum);
        document.querySelector(":root")
        .style.setProperty('--div-transform2', randNum);
    }
}







