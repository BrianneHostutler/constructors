var prompt = require("prompt");

var Bus = require("./bus.js");

prompt.start();

var myBus = new Bus("Mary", "red", "full");

myBus.studentEntersBus("Carl","M","B",3.0,1,true,"Hi");
myBus.studentEntersBus("Ellie","F","B",3.5,2,true,"Hello");
myBus.studentEntersBus("John","M","C",2.5,11,true,"NOOO");
myBus.studentEntersBus("Cinderella","F","A",3.5,2,true,"Hey");
myBus.studentEntersBus("Bob","M","F",0.5,25,true,"ugh");
myBus.studentEntersBus("Rapunzel","F","B",3.5,2,true,"Yay");
