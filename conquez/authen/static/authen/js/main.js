let configs = {
    color: {
        surface:0xFF0000,
        //selected: 2141154,
    }
};
let container = document.getElementById( "globalArea" );
let controller = new GIO.Controller( container, configs );

let data = [
    {
        "e": "CA",
        "i": "IN",
    },
    {
        "e": "CA",
        "i": "CN",
    },
    {
        "e": "CA",
        "i": "TR",
    },
    {
        "e": "CA",
        "i": "BR",
    },
    {
        "e": "IN",
        "i": "CN",
    },
    {
        "e": "IN",
        "i": "TR",
    },
    {
        "e": "IN",
        "i": "BR",
    },
    {
        "e": "CN",
        "i": "BR",
    },
    {
        "e": "CN",
        "i": "TR",
    },
    {
        "e": "BR",
        "i": "TR",
    },

];
controller.addData(data);
controller.setInitCountry('CA').adjustOceanBrightness( 2 ).setTransparentBackground( true ).addHalo(0xFF0000);
controller.init();
controller.onCountryPicked(callback);

function callback(selectedCountry) {
    let available_countries = [ 'BRAZIL', 'CANADA', 'CHINA', 'INDIA', 'TURKEY'];
    let nameCard = $( "#nameCard" );
    let infoBoard = $( "#infoBoard" );
    if( available_countries.includes(selectedCountry.name)){
        nameCard.text( selectedCountry.name+'\'s' + " EMPIRE" );
        if(selectedCountry.name === 'CHINA'){
            nameCard.append('<br/><a id="link" href="{% url \'china\' %}">Conquer</a>');
        }
        if(selectedCountry.name === 'CANADA'){
            nameCard.append('<br/><a id="link" href="{% url \'canada\' %}">Conquer</a>');
        }
        if(selectedCountry.name === 'INDIA'){
            nameCard.append('<br/><a id="link" href="{% url \'india\' %}">Conquer</a>');
        }
        if(selectedCountry.name === 'TURKEY'){
            nameCard.append('<br/><a id="link" href="{% url \'turkey\' %}">Conquer</a>');
        }
        if(selectedCountry.name === 'BRAZIL'){
            nameCard.append('<br/><a id="link" href="{% url \'brazil\' %}">Conquer</a>');
        }
        infoBoard.fadeIn( 1000 );

        setTimeout( function () {

            $( "#infoBoard" ).fadeOut( 1000 );

        }, 3500 );

    }

    else{
        nameCard.text( controller.getSelectedCountry().name+'\'s' + ' quiz is not available' );
        infoBoard.fadeIn( 1000 );

        setTimeout( function () {

            $( "#infoBoard" ).fadeOut( 1000 );

        }, 3500 );

    }


    console.log(controller.getSelectedCountry().name);

}
function explode() {
    $('#globalArea').toggle('explode')

}

