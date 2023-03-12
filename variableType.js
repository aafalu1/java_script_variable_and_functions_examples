



function init() {

    let name = "Basanta";
    console.log("Data type of name: " + typeof (name));
    let age = 20;
    console.log("Data type of age: " + typeof (age));
    let isMarried = false;
    console.log("Data type of isMarried: " + typeof (isMarried));
    let person = {};
    console.log("Data type of Person: " + typeof (person));
    let people = [];
    console.log("Data type of people: " + typeof (people));

    let sayHello = function () {
        alert("hello");
    }
    console.log("Data type of sayHello is : " + typeof (sayHello));
    console.log(sayHello);
    console.log(sayHello());

}