/**
 *
 * ***********************************************
 * SUPER SWEET PAGE WHERE I LEARN JAVASCRIPT STUFF
 * --------- COPYRIGHT ALI KASHANI 2016 ----------
 * ***********************************************
 *
 */

// Pretty sweet object

var food = {
      "vegetables" : {
            green : ['celery', 'lettuce', 'cucumber'],
            red : ['tomato', 'radish', 'beets']
      },

      "herbs" : ['cilantro', 'thyme', 'parsley', 'mint'],

      "fruits" : {
            "apples" : ['granny smith', 'fuji', 'dope'],
            "berries" : ['strawberry', 'raspberry', 'blueberry', 'grapes'],
            "citrus" : ['orange', 'tangerine', 'grapefruit', 'lemon', 'lime'],
            "melons" : ['watermelon', 'cantolope', 'honeydew']
      }
}

food.starch = 'potato';
food.favorites = ['pizza', 'cacio e pepe', 'rigatoni ragu', 'cheeseburger', 'cucumber'];


// HURRAY FOR ARRAY!

// var array = [true, false, 'orange', 21982, undefined, null];
// array.pop();
// array.forEach((val) => { console.log(val); });

var grades = [100, 50, 75];
var totalGrade = 0;

grades.forEach((x) => { totalGrade += x });

var avg = totalGrade / grades.length;
//console.log('Average grade is ' + avg);
