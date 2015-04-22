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
    },
    {
        question: '6. Which answer is correct?',
        answers: [
            'A',
            'B',
            'C',
            'D'
        ],
        correct: 0
    },
    {
        question: '7. Which answer is correct?',
        answers: [
            'A',
            'B',
            'C',
            'D'
        ],
        correct: 0
    },
    {
        question: '8. Which answer is correct?',
        answers: [
            'A',
            'B',
            'C',
            'D'
        ],
        correct: 0
    },
    {
        question: '9. Which answer is correct?',
        answers: [
            'A',
            'B',
            'C',
            'D'
        ],
        correct: 0
    },
    {
        question: '10. Which answer is correct?',
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
    registerEventsForStart();
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
    $('.question').text(text);
}

function updateAnswerTextUsingQuestion(question) {
    $('.answer').each(function(i) {
        var $answer = $(this);
        var text = question.answers[i];
        $answer.text(text);
    });
}

function updateCurrentScore() {
    $('.score').text(score);
}

function registerEventsForStart() {
    $('.button-start').click(function() {
        indexForCurrentQuestion = 0;
        score = 0;
        update();
    });
}

function registerEventsForAnswers() {
    $('.answer').each(function(i) {
        var $answer = $(this);
        $answer.click(function(event) {
            var correct = checkAnswerIndexForCurrentQuestion(i);
            if (correct == true) {
                score++;
            }
            next();
            return false;
        })
    })
}

function checkAnswerIndexForCurrentQuestion(i) {
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
        updateConclusionScoreText();
        navigate('#conclusion');
    }
}

function updateConclusionScoreText() {
    $('#conclusion-score').text(score);
}

function navigate(page) {
    window.location = page;
}

$(function() {
    run(); 
});