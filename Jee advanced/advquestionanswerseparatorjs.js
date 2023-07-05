const responseSheet = `
Q.1
OptionsA.
B.
C.
D.

Question Type : MS
Q

Question ID : 766776273
Chosen Option : --

Q.2
Options
A. 
B. 
C. 
D. 

Question Type : MS
Q

Question ID : 766776272
Chosen Option : A

Q.3
Options
A. 
B. 
C. 
D.

Question Type : MS
Q

Question ID : 766776271
Chosen Option : A,D

Q.1
Options
A. 
B. 
C. 
D. 

Question Type : MC
Q

Question ID : 766776274
Chosen Option : --

Q.3
Options
A. 
B. 
C. 
D. 

Question Type : MC
Q

Question ID : 766776275
Chosen Option : B

Q.3
Given
Answer :
--

Question Type : SA

Question ID : 766776281

Q.5
Given
Answer :
8

Question Type : SA

Question ID : 766776279


`;

//var Responses =[

//];

function questionAnswerSeparator(inputOfResponseSheet){
	function ValuesInRange(array, startIndex, endIndex) {
				let arrayForFinalWord=[];
		  for (let i = startIndex; i <= endIndex; i++) {
		    if (array[i] !== undefined) {
		      arrayForFinalWord.push(array[i]);
		    }
		  }
		  let finalWord= arrayForFinalWord.join('');
		  return finalWord;
		}

	let questionArray = []
	function questionObject(){
		return{
		questionType:null,
		questionNumber: null,
		questionID:null,
		chosenOption:null,
		integerAnswer:null
		};
    };

let questionTextArray = inputOfResponseSheet.split('Q.');
    questionTextArray.shift(); // because the first element of this array comes out to be a space


	

	

	//let indicesOfQuestionID =[];
	
	var counterForQuestionTextArray = 1 ;

	while (counterForQuestionTextArray <= questionTextArray.length){
		
		let questionTextArrayEachLineSeparate = questionTextArray[counterForQuestionTextArray-1].split('\n')
		
		
		
		let currentQuestionObject =questionObject();//creating object for this loop

		//question id
		
		let elementContainingQuestionID = questionTextArrayEachLineSeparate.find(elementContainingQuestionID => elementContainingQuestionID.includes('Question ID'));
		
		currentQuestionObject.questionID=ValuesInRange(elementContainingQuestionID, 14, 23); ///question id is of 11 digits answer id is of 12 digits
		//question number
		currentQuestionObject.questionNumber = counterForQuestionTextArray;
		

		//question type
		const elementContainingQuestionType = questionTextArrayEachLineSeparate.find(elementContainingQuestionType => elementContainingQuestionType.includes('Question Type'));
		currentQuestionObject.questionType= ValuesInRange(elementContainingQuestionType,16,18);


		//status for mcq
		 


		//chosenoption 
		if (currentQuestionObject.questionType != 'SA' ){
			const elementContaningChosenOption = questionTextArrayEachLineSeparate.find(elementContaningChosenOption=>elementContaningChosenOption.includes('Chosen'));
			currentQuestionObject.chosenOption = ValuesInRange(elementContaningChosenOption,16,100);
		};
		//integer answer
		if (currentQuestionObject.questionType == 'SA' ){
			const indexOfElementWithInteger = questionTextArrayEachLineSeparate.findIndex(indexOfElementWithInteger =>indexOfElementWithInteger.includes('Answer :'));
			currentQuestionObject.integerAnswer = ValuesInRange(questionTextArrayEachLineSeparate[indexOfElementWithInteger+1],0,100);
		};

			questionArray.push(currentQuestionObject);
		


		counterForQuestionTextArray = counterForQuestionTextArray+1;			
		
	}

			

			
			console.log(questionArray);
		}



questionAnswerSeparator(responseSheet)

