document.addEventListener('DOMContentLoaded', function () {
    fetch('/localData/missionServicesData.json') 
      .then(response => response.json()) 
      .then(data => {
        const missionTemplate = document.querySelector('.missionCard.missionTemplate');
        const missionCardContainer = document.getElementById('missionCardContainer');
  
        data.forEach(item => {
          const missionCard = missionTemplate.cloneNode(true);
          missionCard.classList.remove('missionTemplate'); 
  
          missionCard.querySelector('.serviceTitle').textContent = item.title;
          missionCard.querySelector('.serviceContent').textContent = item.content;
          missionCard.querySelector('.mission-rating').textContent = item.left;
   
          missionCard.querySelector(".imageFrame img").src = `assets/mission/${item.image}`;
  
          missionCardContainer.appendChild(missionCard);
        });
      })
      .catch(error => console.error("Error loading data:", error));
  });