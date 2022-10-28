const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");
 
 
searchInput.addEventListener('change', function(e){
  e.preventDefault();
  const value = e.target.value;
  try {
    if ( (!+value)) {
      throw new Error('is not number')
    }
    if (value < 5) {
      throw new Error('value is lower then 5')
    }
    if (value > 10) {
      throw new Error('value is higher then 10')
    }

  } catch (err) {
    console.log(err);
    resultsContainer.innerHTML = `<div class="response-container"> ${err} </div>`
  }

}) 
