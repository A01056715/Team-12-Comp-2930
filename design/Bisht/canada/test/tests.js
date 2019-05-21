/**
 * Created by BCIT on 2017-05-11.
 */
TestCase("factorial testTest", {
    "test factorial pos int": function(){
        assertEquals(true, checkAnswer1('A'));
    },

    "test factorial zero": function(){
        assertEquals(false, checkAnswer1('B'));
    }
});