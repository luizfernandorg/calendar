## Calendar API

This is a example based on Tim O'kellys's code, about calendar generate, still in construction

## Code Example

  ```js
  var calendar = require('./index');

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
  ```

## Installation

Will need install node

You can type the line bellow:

```
$ sudo apt-get install node
```
But, I prefer download the binary from https://nodejs.org/en/

Decompress the file:

```
$ tar -xvf node-vn.n.n-linux-xnn.tar.xz
```

Then, I move the directory to "~/" what means in Linux, /home/myname

```
$ mv node-vn.n.n-linux-xnn ~/node
```

So, for finish, in my profile file "~/home/myname/.profile",
I insert the follow line:

```
export PATH=$PATH:/home/myname/node/bin
```
Is necessary reboot the the system, or just type the line above in the terminal.
