TestCase("Correct answer Testtest", {
    "test correct answer for question 1": function(){
        assertEquals(true, checkAnswer1('A'));
    },

    "test wrong answer for question 1": function(){
        assertEquals(false, checkAnswer1('B'));
    },
    "test correct answer for question 2": function(){
        assertEquals(true, checkAnswer2('B'));
    },

    "test Wrong answer for question 2": function(){
        assertEquals(false, checkAnswer2('D'));
    },
    "test correct answer for question 3": function(){
        assertEquals(true, checkAnswer3('C'));
    },

    "test Wrong answer for question 3": function(){
        assertEquals(false, checkAnswer3('A'));
    },
    "test correct answer for question 4": function(){
        assertEquals(true, checkAnswer4('D'));
    },

    "test Wrong answer for question 4": function(){
        assertEquals(false, checkAnswer4('C'));
    },
});