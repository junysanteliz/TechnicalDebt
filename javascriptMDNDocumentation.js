const myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

function showProps(obj, objName) {
    let result = ``;
    for (var i in obj) {
      // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
      if (obj.hasOwnProperty(i)) {
        result += `${objName}.${i} = ${obj[i]}\n`;
      }
    }
    return result;
  }

  var myHyundai = {
                color: 'red', 
                wheels: 4, 
                engine: {
                    cylinders: 4, 
                    hybrid: false,
                    size: 2.2},
                year: 2014
                };

function Person(name, age, sex, salary, iQ) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.salary = salary;
    this.iQ = iQ;
}

let person1 = new Person('Bob', 30, 'M', 40000, 120);
console.log(person1);
console.log(showProps(person1, "PersonObject1"));

  console.log(showProps(myCar, "car1"));
  console.log("My Hyundai Sonata: ");
  console.log(myHyundai);