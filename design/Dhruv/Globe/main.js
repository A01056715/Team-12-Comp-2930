
function initGlobe() {
    let configurations = {
        color: {
            surface: 0xFF0000,
            //selected: 2141154,
        },
    };
    let container = document.getElementById( "globalArea" );
    let controller = new GIO.Controller( container, configurations );
    controller.setInitCountry('CA').adjustOceanBrightness( 2 ).setTransparentBackground( true );
    controller.addHalo(0xFF0000);
    let data = [
        {
            "e": "CA",
            "i": "IN",
            // "v": 100000,
            // "inColor": "#0000FF",
            // "outColor": "#00FF00",
        },
        {
            "e": "CA",
            "i": "CN",
            // "v": 3000000,
            // "inColor": "#EE0E00",
            // "outColor": "#FFFF00"
        },
        {
            "e": "CA",
            "i": "TR",
            // "v": 3000000,
            // "inColor": "#EE0E00",
            // "outColor": "#FFFF00"
        },
        {
            "e": "CA",
            "i": "BR",
            // "v": 3000000,
            // "inColor": "#EE0E00",
            // "outColor": "#FFFF00"
        },
    ];
    controller.addData(data);
    //controller.setAutoRotation( true, 1 );
    controller.init();
    return controller
}



function callBack(controller) {
    let selectedCountry = controller.getSelectedCountry();
    let available_countries =['brazil', 'canada','china', 'india', 'turkey']; // countries with quizzes available
    let nameCard =   $( "#nameCard" );
    if(available_countries.includes((selectedCountry.name).toLowerCase())) {
      nameCard.text(selectedCountry.name);
      nameCard.append('<a href="#" id="quizLink"><br/>Conquer</a>');

        $( "#infoBoard" ).fadeIn(1000);

        setTimeout(function () {
            $( "#infoBoard" ).fadeOut(1000)

        }, 3000)
    }
    else{
        nameCard.text(selectedCountry.name + ' quiz is not available');
        $( "#infoBoard" ).fadeIn(1000);

        setTimeout(function () {
            $( "#infoBoard" ).fadeOut(1000)

        }, 3000)
    }
    //controller.switchCountry("IN");
}



