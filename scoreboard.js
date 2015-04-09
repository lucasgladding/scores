(function($){

$.scoreboard = function(options) {
    scoreboard.init(options);
};

var scoreboard = {
    init: function(op) {
        this.score = 0;
        var defaults = {
            responseSelector: '.response',
            scoreSelector: '#score'
        };
        var options = $.extend({}, defaults, op);
        this.registerResponseClickEvent(options);
        this.registerScoreUpdatedEvent(options);
        return this;
    },
    registerResponseClickEvent: function(options) {
        var context = this;
        $(options.responseSelector).click(function(event) {
            var $sender = $(this);
            var increment = $sender.data('increment');
            if (increment) {
                context.incrementScore(increment, options);
            }
            return false;
        });
    },
    incrementScore: function(increment, options) {
        this.score += increment;
        $(document).trigger('score.updated', [this.score]);
    },
    registerScoreUpdatedEvent: function(options) {
        $(document).bind('score.updated', function(event, score) {
            $(options.scoreSelector).text(score);
        });
    }
};

})(jQuery);