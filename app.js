/**
 * Created by Alex on 03/11/2015.
 */

$(document).ready(function () {

    //get the data
    $.getJSON('http://www.freecodecamp.com/news/hot').then(
        function (data) {
            console.log('Success', data);
            //Create lit of headlines with 20 or more than upvotes
            var topRated = data.filter(function (el) {
                return el.rank >= 20;
            }).sort(function (a, b) {
                return b.rank - a.rank;
            });

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