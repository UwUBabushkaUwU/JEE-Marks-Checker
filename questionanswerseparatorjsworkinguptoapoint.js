const responseSheet = `
Q.1
Options
1. 
2. 
3. 
4. 

Question Type : MC
Q

Question ID : 3666947189
Option 1 ID : 36669422627
Option 2 ID : 36669422626
Option 3 ID : 36669422628
Option 4 ID : 36669422625
Status : Answered
Chosen Option : 1

Q.2
Options
1. 
2. 
3. 
4. 

Question Type : MC
Q

Question ID : 3666947183
Option 1 ID : 36669422602
Option 2 ID : 36669422601
Option 3 ID : 36669422603
Option 4 ID : 36669422604
Status : Not Answered
Chosen Option : --


Q.5
Options
1. 
2. 
3. 
4. 

Question Type : MC
Q

Question ID : 3666947202
Option 1 ID : 36669422679
Option 2 ID : 36669422677
Option 3 ID : 36669422678
Option 4 ID : 36669422680
Status : Marked For Review
Chosen Option : 2


Q.12
Options
1. 
2. 
3. 
4. 

Question Type : MC
Q

Question ID : 3666947184
Option 1 ID : 36669422606
Option 2 ID : 36669422607
Option 3 ID : 36669422608
Option 4 ID : 36669422605
Status : 
Not Attempted and
Marked For Review
Chosen Option : --



Q.22
Given
Answer :
--

Question Type : SA

Question ID : 3666947207
Status : Not Answered

Q.23
Given
Answer :
36

Question Type : SA

Question ID : 3666947205
Status : Answered

Q.51
Given
Answer :
3

Question Type : SA

Question ID : 3666947234
Status : Marked For Review


Q.52
Given
Answer :
2

Question Type : SA

Question ID : 3666947233
Status : Not Attempted and
Marked For Review


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
		questionNumber: null,
		questionID:null,
		status:null,
		chosenOption:null,
		IDOfChosenOption:null,
		integerAnswer:null
		};
    };

let questionTextArray = inputOfResponseSheet.split('Q.');
    questionTextArray.shift(); // because the first element of this array comes out to be a space

	

	

	//let indicesOfQuestionID =[];
	
	var counterForQuestionTextArray = 1 ;

	while (counterForQuestionTextArray <= questionTextArray.length){
		let responseSheetSingleLine = questionTextArray[counterForQuestionTextArray-1].replace(/\n/g,' ');
		
		
		
		let currentQuestionObject =questionObject();//creating object for this loop

		//question id
		const indexOfQuestionID = responseSheetSingleLine.indexOf('Question ID');
		currentQuestionObject.questionID=ValuesInRange(responseSheetSingleLine, indexOfQuestionID+ 14, indexOfQuestionID+23); ///question id is of 11 digits answer id is of 12 digits
		//question number
		currentQuestionObject.questionNumber = counterForQuestionTextArray;
		//question status
		//const indexOfStatus = responseSheetSingleLine.indexOf('Status');
		//currentQuestionObject.status=ValuesInRange(responseSheetSingleLine, indexOfStatus+ 9, indexOfStatus+40)
			//questionArray.push(currentQuestionObject);


		counterForQuestionTextArray = counterForQuestionTextArray+1			
		
	}

			

			
			console.log(questionArray)
		}



questionAnswerSeparator(responseSheet)

