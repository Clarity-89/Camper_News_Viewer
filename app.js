/**
 * Created by Alex on 03/11/2015.
 */

$(document).ready(function () {

    //get the data
    $.getJSON('http://www.freecodecamp.com/news/hot').then(
        function (data) {

            //Sort the data to get top rated headlines
            var topRated = data.concat().sort(function (a, b) {
                return b.rank - a.rank;
            });

            //Limit top rated headlines to 4
            topRated.length = 4;
            console.log('Success', data);
            var rest = data.filter(function (el) {
                return topRated.indexOf(el) == -1;
            });

            //Helper function to format time as Month Day Year
            Handlebars.registerHelper('date-format', function (inputDate) {
                //Make sure date is of type 'date'
                var date = new Date(inputDate);
                var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
                    'September', 'October', 'November', 'December'];
                return month[date.getMonth()] + ' ' + date.getDate() + ' ' + date.getFullYear();
            });

            //Ternary helper
            Handlebars.registerHelper('ternary', function(test, yes, no) {
                return test ? yes : no;
            });

            //Build template for top rated headlines
            var source = $('#display').html();
            var template = Handlebars.compile(source);
            var context = template({
                data: topRated
            });
            $('#news').html(context);


        },
        function () {
            console.log('Request failed');
        }
    );
});