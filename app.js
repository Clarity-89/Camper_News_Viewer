/**
 * Created by Alex on 03/11/2015.
 */
$(document).ready(function () {

    //get the data
    $.getJSON('http://www.freecodecamp.com/news/hot').then(
        function (data) {
            console.log('Success');
            //Create lit of headlines with 20 or more than upvotes
            var topRated = data.filter(function (el) {
                return el.rank >= 20;
            });

            var rest = data.filter(function (el) {
                return topRated.indexOf(el) == -1;
            });
            console.log('rest', rest.length);
        },
        function () {
            console.log('Request failed');
        }
    );
});