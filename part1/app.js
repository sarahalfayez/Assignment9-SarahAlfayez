var comments=[
    "This is a test comment!",
];
var addCommentFromInputBox = function(comments) {
    this.comments = ko.observableArray(comments);
    this.commentToAdd = ko.observable("");
    this.addComment = function() {
        if (this.commentToAdd() !== "") {
            this.comments.push({comments: this.commentToAdd()});
            this.commentToAdd("");
        }
    }.bind(this);
};

ko.applyBindings(new addCommentFromInputBox(comments, document.getElementById("comments")));

 var main = function () {
     "use strict";

    $(".comment-input input").on("keypress", function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox();
        }
    });
};

$(document).ready(main);
