var Student = require("./student.js");

var Bus = function (driverName,color,gas){

this.studentsOnTheBus = [];
this.driverName = driverName;
this.color = color;
this.gas = gas;

this.studentEntersBus = function (n, g, gr, GPA, d, s, c){
  this.studentsOnTheBus.push(new Student(n, g, gr, GPA, d, s, c));
}

this.busChatter = function(){
var catchPhrase = [];
		for (var i = 0; i < this.studentsOnTheBus.length; i++) {
			catchPhrase.push(this.studentsOnTheBus[i].canStudentHaveFun());
		}
		return catchPhrase;
}


module.exports = Bus;
