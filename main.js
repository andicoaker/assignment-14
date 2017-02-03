document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})


// **********************


document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var answerPTagWithValue = document.querySelector('#compoundInvestment')
  // you do the rest

  var inputNum = answerPTagWithValue.textContent

  answerPTagWithValue.textContent = inputNum * 2

  // console.log(answerPTagWithValue)

})

// **********************


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3

  // use getComputedStyle to pull the obj styles first to read the current style property
  // use rgb() colors instead of hex

  // (1) Select the Element
  // (2) See if the background-color is WHITE
  //      (must READ the style values for the dom element )
  // (3) If true : change background-color to black


  var circleEl = document.querySelector('#circle-bw');
  // console.log(circleEl);

  var circleStyles = window.getComputedStyle(circleEl)
  // console.log(circleStyles);

    if( circleStyles.backgroundColor === 'rgb(255, 255, 255)' ) {
      circleEl.style.background = 'rgb( 0, 0, 0)'
    } else {
      circleEl.style.background = 'rgb(255, 255, 255)'
    }

})


// **********************


document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}


  // STEPS
  //   Part 1
  //     1) select circleEl with querySelector
  //     2) get pixel string value of width & height using getComputedStyle
  //     3) convert pixel string value into integer using (parseInt(...)
  //

  var circleEl = document.querySelector('.circle-red')

  var circleStyles = window.getComputedStyle(circleEl)
  var circleWidth = circleStyles.width
  var circleHeight = circleStyles.height

    // console.log(circleWidth)
    // console.log(circleHeight)

  var circleWidthNumVal = parseInt(circleWidth);
  var circleHeightNumVal = parseInt(circleHeight);
    // console.log(circleHeightNumVal);
    // console.log(circleWidthNumVal);

  // Part 2
    // 1) IF integer-width <= 320
    // 2) THEN mulitply integer-width * 2
    //      a) convert integer-width back to 'XXpx' string
    //      b) assign .circle-red .style.width & .style.height = 'XXpx' string
    // 3) ELSE assign circle-red .style.width & .style.height = '40px' string

  var nextWidth = 0
  if ( circleWidthNumVal < 320 ) {
    nextWidth = circleWidthNumVal * 2;
    circleEl.style.width = nextWidth + 'px';
    circleEl.style.height = nextWidth + 'px';

  } else {
    console.log(circleWidth)
    circleEl.style.width = '40px'
    circleEl.style.height = '40px'

    console.log(circleWidth)
  }
  console.log(circleWidth)

})


// **********************

var forEach = function(arr, func){
    for(var i = 0 ; i < arr.length; i++){
        func(arr[i], i, arr)
    }
}

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5

  // 1) select all the <li> elements under #user-list
  // 2) iterate over <li> elements using forEach
  // 3) on each iteration, check the class name on the DOM element to see if
  //      the value is .active
  // 4) If the DOM element has a class of .active, then append to a string
  // 5) When finished w/forEach loop, inject large-string as .innerHTML to
  //      #user-list (the list container)


  var userListEls = document.querySelectorAll('#user-list li')
  // console.log([inactiveLiEl])
  var userListContainerEl = document.querySelector('#user-list')

  forEach(userListEls, function(domElement, index, theArray) {

    if (domElement.className.indexOf('inactive')>= 0) {
      // console.log(domElement);
      userListContainerEl.removeChild(domElement)
    }

  })

})


// **********************


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6

  // 1) select all elements with .square class using querySelectorAll
  // 2) iterate over all .square elements backwards using for loop
        // for (var i = allSquares.length - 1; i >= 0; i-1)
  // 3) select the container #reverse-squares .answer-box and .appendChild (squareDomEl)

  // ALTERNATIVE
  // 1) create empty array
  // 2) iterate over elements and .unshift each element to begining of the array
  // 3) clear the #reverse-squares .answer-box (.innerHTML = '')
  // 4) iterate over reverseOrderSquaresList
  // 5) inside loop append element to reverse-squares .answer-box with .appendChild(squareDomEl)

  var squareEls = document.querySelectorAll('.square')

  for (var i = squareEls.length -1; i >=0; i--) {
    // console.log(squareEls[i])
    var squaresAnswerBox = document.querySelector('#reverse-squares .answer-box')
    // console.log(squaresAnswerContainer);
    // Do I need to create a new element before appending?
    squaresAnswerBox.appendChild(squareEls[i])

  }

})


// **********************


document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7

  // 1) select all the pig latin #tasks li elements using querySelectorAll
  // 2) for-loop over each li DOM element - check with console.log
  // 3) inside the for loop store the value of reversed string into a var
        // to reverse, split string into array of single characters
        // reverse array using .reverse()
        // join array back into a string

  // 4) inside of for-loop set domElement.innerHTML to the reversed string

  var tasksLiElements = document.querySelectorAll('#tasks li')
    // console.log(tasksLiElements);

  for (var i = 0; i < tasksLiElements.length; i++) {
      // console.log(tasksLiElements[i])

      var reverseArr = tasksLiElements[i];
      reverseArr.split("")
      console.log(reverseArr);


    // var reverseStr = tasksLiElements[i];
    //   // console.log(reverseStr);
    //
    //

  }
    // var reverseLiElsArr = lieElsArr.reverse()
    //   console.log(reverseLiElsArr);
    // var liElsJoinedStr = reverseLiElsArr.join()
    //   console.log(liElsJoinedStr);
    //
    // tasksLiElements.innerHTML += 'liElsJoinedStr'
    //
  //
  // }

})


// **********************


document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #8
})
