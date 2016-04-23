var prompt = require("prompt");

var Bus = require("./bus.js");

var Student = require("./student.js");

prompt.start();

var myBus = new Bus("Mary", "red", "full");

// myBus.studentEntersBus("Carl","M","B",3.0,1,false,"Hi");
// myBus.studentEntersBus("Ellie","F","B",3.5,2,false,"Hello");
// myBus.studentEntersBus("Charming","M","C",2.5,11,false,"NOOO");
// myBus.studentEntersBus("Cinderella","F","A",0.5,10,true,"Midnight!");
// myBus.studentEntersBus("Flynn","M","F",0.5,7,false,"ugh");
// myBus.studentEntersBus("Rapunzel","F","B",3.5,4,false,"When will my life begin");
// myBus.studentEntersBus("Eric","M","F",0.5,8,false,"ugh");
// myBus.studentEntersBus("Ariel","F","C",3.0,2,false,"I want to be where the people are");
// myBus.studentEntersBus("Mulan","F","F",0.5,10,false,"For China!");
// myBus.studentEntersBus("Aurora","F","D",1.8,100,true,"snore");
// myBus.studentEntersBus("Mickey","M","A",4.0,2,false,"hello folks");
// myBus.studentEntersBus("Minnie","F","A",4.0,2,false,"hi everyone");
// myBus.studentEntersBus("Donald","M","A",4.0,2,false,"quack");
// myBus.studentEntersBus("Daisy","F","B",3.0,2,false,"quack!");
// myBus.studentEntersBus("Peter","M","B",2.5,1,false,"off to neverland");

function newStudent() {
	prompt.get(['name', 'gender', 'grade', 'GPA', 'detentions',
		'sleepingInClass', 'catchPhrase'], 
		function (err, result) {
			myBus.studentEntersBus(result.name, result.gender, result.grade, result.GPA, result.detentions, result.sleepingInClass, result.catchPhrase);
			myBus.studentsOnTheBus[0].canStudentHaveFun();
		}
	);
}

newStudent();

console.log(myBus);


