

$(document).ready( function() {

    $('button').click(function() {               
        var query_term = $('#query').val();
        requestData(query_term);
    });

    $(document).keydown(function(e) {
        if (e.keyCode == 13) {
            var query_term = $('#query').val();
            requestData(query_term);
        }   
    })

});

function requestData(query_term) {
    var params = {
        s: query_term,
        r: 'json'
    };
    var url = 'http://www.omdbapi.com';
    $.getJSON(url, params, function(data){
        showResults(data.Search);
    });
}
function showResults(data) {
    var results = "";
    $.each(data, function(index,value){
        if (value.Type == "movie") {
            var icon = "<i class=\"fa fa-film\"></i>";
        } else if (value.Type == "series") {
            var icon = "<i class=\"fa fa-desktop\"></i>";
        } else {
            var icon = "<i class=\"fa fa-square-o\"></i>";
        }
        results += "<div> " + icon + " &nbsp; <a href=\"http://www.imdb.com/title/" + value.imdbID + "/\" target=\"_blank\">" + value.Title + "</a></div>";
    });    
    var results_node = $(results);
    $('#results').append(results_node);
}
