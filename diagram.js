// function highlightArea(coords) {

//     // Get the image element
//     const image = document.getElementById('image-map');

//     // Get the image dimensions
//     const imageWidth = image.offsetWidth;
//     const imageHeight = image.offsetHeight;

//     // get image scaler based on original size
//     var xScaler = imageWidth/724;
//     var yScaler = imageHeight/409;

//     // // Scale provided cords to image size
//     var d = 18 * xScaler;
//     console.log('new diamater: ', d);
//     var x = arguments[0] * xScaler - 9;
//     var y = arguments[1] * yScaler - 9;
    

//     // show highlight
//     document.getElementById('highlight').style.backgroundColor = "rgba(255,0,0,0.5)";
//     document.getElementById('highlight').style.transform = `translate(${x}px,${y}px)`;
//     document.getElementById('highlight').style.width = `${d}px`;
//     document.getElementById('highlight').style.height = `${d}px`;
// }
  
// function unhighlightArea() {
//     document.getElementById('highlight').style.backgroundColor = "transparent";
//     document.getElementById('highlight').style.transform = "translate(0,0)";
// }



function scaleOverlays() {

    // get all overlays
    const overlays = document.getElementsByClassName("overlay");

    // Get the image element
    const image = document.getElementById('image-map');

    // Get the image dimensions
    const imageWidth = image.offsetWidth;
    const imageHeight = image.offsetHeight;

    console.log("image width: ", imageWidth);
    console.log("image height: ", imageHeight);
    

    // get image scaler based on original size
    var xScaler = imageWidth/720;
    var yScaler = imageHeight/405;
    console.log("xScaler: ", xScaler, " yScaler: ", yScaler);

    // scale overlays
    for (let i = 0; i < overlays.length; i++) {

        // resize overlay to match scaled image
        w = 18 * xScaler;
        overlays[i].style.width =  w + 'px';
        overlays[i].style.height = w + 'px';
        
        // reposition overlay to match scaled image
        x = overlays[i].offsetLeft * xScaler - overlays[i].offsetLeft - w/2;
        y = overlays[i].offsetTop * yScaler - overlays[i].offsetTop - w/2;
        console.log("new x: ", x, " y: ", y);
        overlays[i].style.transform = `translate(${x}px,${y}px)`

    }
}


window.addEventListener('resize', function(event){
    scaleOverlays();
});

scaleOverlays();

