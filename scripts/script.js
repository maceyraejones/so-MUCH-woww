$(function() {
    console.log("document is ready!");

    $("#meme").draggable({
        containment: "#containment-wrapper",
        scroll: false,
        stop: function() {
            calculateWow();
        }
    });

    function calculateWow() {
        var x = $("#meme").position();
        var wow = x.top + x.left;

        if (wow < 500) {

            console.log('not much wow (' + wow + ')');
            $('#wow-output').html('<h2>not much wow (' + wow + ')</h2>')

        } else {
            console.log('so much wow (' + wow + ')!!!!');
            $('#wow-output').text('so much wow (' + wow + ')!!')
        }
    }

});
