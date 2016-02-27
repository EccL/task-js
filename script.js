/*var n = prompt('Enter number' + ' (1-5)');
switch (n) {
    case '1': console.log('One'); 
        break; 
    case '2': console.log('Two'); 
        break;
    case '3': console.log('Three'); 
        break;
    case '4': console.log('Four'); 
        break;
    case '5': console.log('Five'); 
        break;
}*/

/*function showMessage(message, name) {
    if (name === undefined) {
        name = 'Guest';
        console.log(message + ' ' + name);
    }
    else {
        console.log(message + ' ' + name);
    }
}
showMessage('Hello');
showMessage('Hello', 'World!');*/

/*var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var random = Math.floor(Math.random() * days.length);
console.log(days[random]);*/

function Student() {
    this.name = 'John';
    this.age = '20';
}
var stud = new Student();
console.log(stud.name + ', ' + stud.age + ' y.o');
