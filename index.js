function addingEventListener() {
    // Select the button element by its id
    const input = document.getElementById('button');
  
    // Define the function that will be called when the button is clicked
    function clickAlert() {
      alert('I was clicked!');
    }
  
    // Add an event listener to the button element
    input.addEventListener('click', clickAlert);
  }
  