/*
 * Example of use of calendar.js
 * will save in file a representation of the months for the year
 * For Example, I will save this model in year2016.txt
 * 2016
 * January:
 * S   M   T   W   T   F   S
 * 27  28  29  30  31  1   2
 * 3   4   5   6   7   8   9
 * 10  11  12  13  14  15  16
 * 17  18  19  20  21  22  23
 * 24  25  26  27  28  29  30
 * 31  1   2   3   4   5   6
 *
 * This model will repeat for all months in 2016
 */
var calendar = require('../../index');
var fs = require('fs');

fs.open('./year2016.txt','w+', function(err, fd){
    var months = calendar.buildYear(new Date().getFullYear());

    for(var k in months){
        var lines = '';
        var col = 0; //go to 6
        lines += k + ':\n';
        months[k].forEach(function(date){
            var mDate = new Date(date).getDate();

            lines += mDate;

            if(col === 6){
                lines += '\n';
                col = 0;
            }else{
                lines += '\t';
                col++;
            }
        });
        fs.write(fd, lines);
    }
    fs.close(fd);
})
// console.log(calendar.getMonth(new Date()));
// console.log(calendar.buildMonth(new Date()));
// console.log(calendar.buildYear(2016));
