# Lesson 2: Arrays

An array is a type of variable used in pretty much all programming languages. It is essentially
a list of items like a grocery list. Let's say you need to go to the store and have the following list:

- Bread
- Milk
- Cereal
- Vegetables
- Steak

If you wanted to translate this into an array in javascript it would look like this:

`let myList = ["Bread", "Milk", "Cereal", "Vegetables", "Steak"]`

To define the array you use brackets [], and then separate all your values/variables by commas. It is generally
best practice to keep all the types the same in the array (ie. numbers, strings, booleans). If you want to get
an element from your array, you would use the following syntax:

`myList[0]` ---> "Bread"
`myList[1]` ---> "Milk"
etc...

The number that goes inside the bracket is the index of the item in the array starting from 0. Bread would be the first
item in the array so it would have an index of 0. You can even change the value at an index of the array by using the same
syntax but assignming it to a value:

`myList[0] = "Eggs"`

Items can also be added or removed from an array, but that is out of the scope of this project and will be explored at a later time.

Now that we know a little bit about how arrays work, we will apply it to creating our tic tac toe board. We need to keep track of
every square on the board and continually update its value as the game continues. This could be done by defining 9 different variables
and storing the values in each of them, but that would be tedious and inefficient. So instead we are going to use an array to represent
our board.

....
