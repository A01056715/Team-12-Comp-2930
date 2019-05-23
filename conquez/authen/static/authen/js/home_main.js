/*
After discussions with flynn. The only working solution for onclick events on the globe to work we have to make
the globe and its configurations global.
 */
let configs = {
    color: {
        surface:0xFFFFFF,
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
controller.setInitCountry('CA').adjustOceanBrightness( 2 ).setTransparentBackground( true ).addHalo(0xFFF2CC);
controller.init();
controller.onCountryPicked(callback);
/*
Appends information on the banner according to the status of the country
 */
function callback(selectedCountry) {
    let available_countries = [ 'BRAZIL', 'CANADA', 'CHINA', 'INDIA', 'TURKEY', 'ANTARCTICA'];
    let nameCard = $( "#nameCard" );
    let infoBoard = $( "#infoBoard" );
    if( available_countries.includes(selectedCountry.name)){
        nameCard.text( selectedCountry.name+'\'s' + " EMPIRE" );
        if(selectedCountry.name === 'CHINA'){
            nameCard.append('<br/><a id="link" href="https://conquez.herokuapp.com/china">Conquer</a>');
        }
        if(selectedCountry.name === 'CANADA'){
            nameCard.append('<br/><a id="link" href="https://conquez.herokuapp.com/canada">Conquer</a>');
        }
        if(selectedCountry.name === 'INDIA'){
            nameCard.append('<br/><a id="link" href="https://conquez.herokuapp.com/india">Conquer</a>');
        }
        if(selectedCountry.name === 'TURKEY'){
            nameCard.append('<br/><a id="link" href="https://conquez.herokuapp.com/turkey">Conquer</a>');
        }
        if(selectedCountry.name === 'BRAZIL'){
            nameCard.append('<br/><a id="link" href="https://conquez.herokuapp.com/brazil">Conquer</a>');
        }
        if(selectedCountry.name === 'ANTARCTICA'){
            nameCard.append('<br/><a id="link" href="https://conquez.herokuapp.com/antarctica">Conquer</a>');
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

