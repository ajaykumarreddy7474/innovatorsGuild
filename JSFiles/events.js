document.addEventListener('DOMContentLoaded', function () {
    fetch('/localData/events/updates.json') 
      .then(response => response.json()) 
      .then(data => {
        const updatesTemplate = document.querySelector('.updatesCard.updatesTemplate');
        const updatesCardContainer = document.getElementById('updatesCardContainer');
  
        data.forEach(item => {
          const updatesCard = updatesTemplate.cloneNode(true);
          updatesCard.classList.remove('updatesTemplate'); 
  
          updatesCard.querySelector('.updateTitle').textContent = item.title;
          updatesCard.querySelector('.updateContent').textContent = item.content;   
          updatesCard.querySelector('.firstTag').textContent = item.firstTag;   
          updatesCard.querySelector('.secondTag').textContent = item.secondTag;   
          updatesCard.querySelector(".imageFrameEvents img").src = `assets/events/updates/${item.image}`;
  
          updatesCardContainer.appendChild(updatesCard);
        });
      })
      .catch(error => console.error("Error loading data:", error));
  });