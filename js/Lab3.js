function quiz(){
	var score = 0;
	var num;
	var question;
	var answer;
	var quizQuestions = [
	  'How many moons does Earth have?',
	  'How many moons does Saturn have?',
	  'How many moons does Venus have?'
	];
	var quizAnswers=[1, 31, 1];
	
	//get total number of questions
	var totalQuestion=quizQuestions.length;
	
	//generate random number for question
	num=Math.floor(Math.random()*3);
	for(count=0; count<totalQuestion; count++){
		question=quizQuestions[num];
		answer=prompt(question);
		answer = parseInt(answer,10); //https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/
		if (answer===quizAnswers[num]){
			score++;
			alert("Correct!");
		}
		else {
			alert("Wrong");
		}
		num++;
		if (num==totalQuestion){
			num=0;
		}
}

document.write('<p>You got ' + score + ' out of ' + totalQuestion + ' questions correct.</p>');
}
