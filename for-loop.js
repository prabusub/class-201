var items =['car', 'truck', 'minivan', 'bus'];
var answer = prompt('what is in my garage');
var flag;

for (var i =1; i< < items.length; i++) {
console.log('current iteration', items[i]);

    if (answer === items[i]) {
        alert('You are correct');
        flag = true;
        break;

    }

    if(!flag) {
        alert('You guessed it wrong');
    }

}
