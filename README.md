## Synopsis

This is a example based on Tim O'kellys's code, about calendar generate

## Code Example

For now the library provide tree pricipal methods and one auxilary method:
  > buildMonth(date)
  ## This method take an object Date to generate the hole month for the calendar,
  retornig an array with all date present in respective calendar month.
  all itens in the array will be an object Date type

  > buildYear(year)
  ## This method take a type number that represent the year, and will return the follow object
  {
   'monthName': [dates objects, ...] // all months will have the name and the array created by buildMonth
  }

## Motivation

A short description of the motivation behind the creation and maintenance of the project. This should explain **why** the project exists.

## Installation

Provide code examples and explanations of how to get the project.

## API Reference

Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

## Tests

Describe and show how to run the tests with code examples.

## Contributors

Let people know how they can dive into the project, include important links to things like issue trackers, irc, twitter accounts if applicable.

## License

A short snippet describing the license (MIT, Apache, etc.)
