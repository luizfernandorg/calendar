## Synopsis

This is a example based on Tim O'kellys's code, about calendar generate

## Code Example

  '''
  var calendar = require('./index')

  var months = calendar.buildYear(new Date().getFullYear());

  for(var k in months){
      var lines = '';
      var col = 0; //go to 6

      //print the name of month
      lines += k + ':\n';

      //loop for all the date in k month
      months[k].forEach(function(date){
          var mDate = new Date(date).getDate();

          //all the dates for the respective day
          lines += mDate;

          //if pass through all days of week create a new line
          if(col === 6){
              lines += '\n';
              col = 0;
          }else{
              lines += '\t';
              col++;
          }
      });

      //show the month in 6x7 format
      console.log(lines);
  }
  '''

## Motivation

A short description of the motivation behind the creation and maintenance of the project. This should explain **why** the project exists.

## Installation

Will need install node

'''
npm install node
'''

## API Reference

Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

## Tests

Describe and show how to run the tests with code examples.

## Contributors

Let people know how they can dive into the project, include important links to things like issue trackers, irc, twitter accounts if applicable.

## License

A short snippet describing the license (MIT, Apache, etc.)
