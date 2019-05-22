
/**
 * Created by BCIT on 2017-05-11.
 */

TestCase("Check for correct questions", {

    "test factorial pos int": function(){
        console.log(document.getElementById('heading1'));
        assertEquals(true, checkAnswer1('A'));
    },

    "test factorial zero": function(){
        assertEquals(false, checkAnswer1('B'));
    }

});