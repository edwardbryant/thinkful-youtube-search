

$(document).ready( function() {

    $.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json', function(data){

        var result = data.Search[0].Title;
        console.log(result);

    });

});