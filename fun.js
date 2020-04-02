
function checkIfValidCss() {
    var myInput = document.getElementById("myInput")
    var myButton = document.getElementById('myButton')
    console.log(myInput.value)
    if (myInput.value.includes(":")) {
      let myArray = myInput.value.split(';');
      console.log(myArray)
      for (let i = 0; i < myArray.length; i++) {
            if (true) {
              if (myArray[i].split(":")[0].trim() in myButton.style) {
                  console.log(myArray[i].split(":")[0].trim())
                  console.log('good')
              }
              else {
                alert('incorrect property added')
              }
          }
      }
    }
    else {
        alert("jibberish added")
    }
}


