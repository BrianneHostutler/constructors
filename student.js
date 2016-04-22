var Student = function (name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase){

this.name = name;
this.gender = gender;
this.grade = grade;
this.GPA = GPA;
this.detentions = detentions;
this.sleepingInClass =sleepingInClass;
this.catchPhrase = catchPhrase;
this.canStudentHaveFun = function(detentions, GPA){
    if(detentions<10 && GPA >= 2){
      console.log("Can have fun!");
    }
    else {
    	console.log("No fun for you!")
    }
}


module.exports = Student;
