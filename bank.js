/**
 *
 * ***********************************************
 * SUPER SWEET PAGE WHERE I PRACTICE JAVASCRIPT STUFF
 * --------- COPYRIGHT ALI KASHANI 2016 ----------
 * ***********************************************
 *
 */

// Pretty dope object

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

// BANK PROGRAM CHALLENGE

var accounts = [];

function createAccount(account) {
      accounts.push(account);
      return account;
}


function getAccount(username) {
      var matchedAccount;

      for (var i = 0; i < accounts.length; i++){
            if (accounts[i].username === username) {
                  matchedAccount = accounts[i];
            }
      }

      /*
      accounts.forEach(function(account) {
            if (account.username === username) {
                  matchedAccount = account;
            }
      });
      */
      return matchedAccount;
}


function deposit(acc, amt) {
      if (typeof amt === 'number') {
            return acc.balance += amt;
      } else {
            console.log('You can only deposit numbers!');
      }
}

function withdraw(acc, amt) {
      if (typeof amt === 'number') {
            return acc.balance -= amt;
      } else {
            console.log('You can only withdraw numbers!');
      }
}

function getBalance(acc) {
      console.log(acc.balance)
}

function createBalanceGetter(account) {
      return function() {
            return account.balance;
      }
}

var ali = createAccount({
      username: 'Ali',
      balance: 0
});

deposit(ali, 1000);
withdraw(ali, 100);

var aliTwo = getAccount('Ali');
var getAliTwoBal = createBalanceGetter(ali);

console.log(getAliTwoBal());
