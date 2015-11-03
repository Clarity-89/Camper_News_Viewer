/**
 * Created by Alex on 03/11/2015.
 */
$(document).ready(function () {

    //get the data
    $.getJSON('http://www.freecodecamp.com/news/hot').then(
        function (data) {
            console.log('Success', '\n', data);
        },
        function () {
            console.log('Request failed');
        }
    );
});