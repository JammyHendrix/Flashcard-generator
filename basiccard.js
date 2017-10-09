var inquirer = require('inquirer');

function BasicCard(front,back){
	this.front = front;
	this.back = back;

	this.printInfo = function(){
		console.log('Question: '+this.front+'\nAnswer: '+this.back);
	};
}

var front = [];
var back = [];
var repeat = 0;

var createCard = function(repeat) {
	if(repeat < 1){
		inquirer.prompt([{
			name:'question',
			message:'What is your question?: '
		},{
			name:'answer',
			message:'What is the answer?:'
		}]).then(function(answers){
			front.push(answers.question);
			back.push(answers.answer);
			repeat++;
			createCard(repeat);
			var newQuestion = new BasicCard(answers.question,answers.answer);
			newQuestion.printInfo();
		});
	}
};
	

createCard(repeat);