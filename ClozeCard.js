var inquirer = require('inquirer');

function ClozeCard(text,cloze) {
	this.text = text;
	this.cloze = cloze;
	this.full = cloze + text;

	this.printInfo = function(){
		console.log(this.cloze + this.text);
	};

}

var text = [];
var cloze = [];
var partial = [];
var loop = 0;

var getQuestion = function(loop){
	if(loop < 1){
		inquirer.prompt([{
			name:'partial',
			message:'...What is the clue to the answer?'
		},{
			name:'answer',
			message:'What is the answer?'
		}]).then(function(answers){
			cloze.push(answers.answer);
			partial.push(answers.push);
			loop++;
			getQuestion(loop);
			var completeQuestion = new ClozeCard(answers.answer,answers.partial);
			completeQuestion.printInfo();
		});
	}
};

getQuestion(loop);