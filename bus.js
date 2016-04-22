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
var phrase = [];
		for (var i = 0; i < this.studentsOnTheBus.length; i++) {
			phrase.push(this.studentsOnTheBus[i].canStudentHaveFun());
		}
		return phrase;
}


module.exports = Bus;
