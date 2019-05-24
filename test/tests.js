TestCase("Correct answer Testtest", {
    "test Correct answer question 1": function(){
        assertEquals(true, checkAnswer('A', 1));
    },

    "test Wrong answer question 1": function(){
        assertEquals(false, checkAnswer('B', 1));
    },
    "test Correct answer question 2": function(){
        assertEquals(true, checkAnswer('B', 2));
    },

    "test Wrong answer question 2": function(){
        assertEquals(false, checkAnswer('D', 2));
    },
    "test Correct answer question 3": function(){
        assertEquals(true, checkAnswer('C', 3));
    },

    "test Wrong answer question 3": function(){
        assertEquals(false, checkAnswer('A', 3));
    },
    "test Correct answer question 4": function(){
        assertEquals(true, checkAnswer('D', 4));
    },

    "test Wrong answer question 4": function(){
        assertEquals(false, checkAnswer('C', 4));
    },
});