var questions = [
    {
        question: '1. Which answer is correct?',
        answers: [
            'A',
            'B',
            'C',
            'D'
        ],
        correct: 0
    },
    {
        question: '2. Which answer is correct?',
        answers: [
            'A',
            'B',
            'C',
            'D'
        ],
        correct: 0
    },
    {
        question: '3. Which answer is correct?',
        answers: [
            'A',
            'B',
            'C',
            'D'
        ],
        correct: 0
    },
    {
        question: '4. Which answer is correct?',
        answers: [
            'A',
            'B',
            'C',
            'D'
        ],
        correct: 0
    },
    {
        question: '5. Which answer is correct?',
        answers: [
            'A',
            'B',
            'C',
            'D'
        ],
        correct: 0
    }
];

var indexForCurrentQuestion = 0;

var score = 0;

function run() {
    update();
    registerEventsForAnswers();
}

function update() {
    var question = getCurrentQuestion();
    updateQuestionTextUsingQuestion(question);
    updateAnswerTextUsingQuestion(question);
    updateCurrentScore();
}

function getCurrentQuestion() {
    var i = indexForCurrentQuestion;
    if (questions.length > i) {
        return questions[i];
    } else {
        return null;
    }
}

function updateQuestionTextUsingQuestion(question) {
    var text = question.question;
    $('#question').text(text);
}

function updateAnswerTextUsingQuestion(question) {
    $('#answers > *').each(function(i) {
        var $answer = $(this);
        var text = question.answers[i];
        $answer.text(text);
    });
}

function updateCurrentScore() {
    $('#score').text(score);
}

function registerEventsForAnswers() {
    $('#answers > *').each(function(i) {
        var $answer = $(this);
        $answer.click(function(event) {
            var correct = checkAnswerIndex(i);
            if (correct == true) {
                score++;
            }
            next();
            return false;
        })
    })
}

function checkAnswerIndex(i) {
    var question = getCurrentQuestion();
    return (question.correct == i);
}

function next() {
    incrementCurrentQuestion();
    update();
}

function incrementCurrentQuestion() {
    var i = indexForCurrentQuestion + 1;
    if (questions.length > i) {
        indexForCurrentQuestion = i;
    } else {
        indexForCurrentQuestion = 0;
    }
}
