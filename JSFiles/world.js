document.addEventListener('DOMContentLoaded', function () {
    fetch('/localData/events/world.json') 
      .then(response => response.json()) 
      .then(data => {
        const worldsTemplate = document.querySelector('.worldsCard.worldsTemplate');
        const worldsCardContainer = document.getElementById('worldsCardContainer');
  
        data.forEach(item => {
          const worldsCard = worldsTemplate.cloneNode(true);
          worldsCard.classList.remove('worldsTemplate'); 
  
          worldsCard.querySelector('.worldTitle').textContent = item.title;
          worldsCard.querySelector('.worldContent').textContent = item.content;   
     
          worldsCard.querySelector(".imageFrameWorld img").src = `/assets/events/world/${item.image}`;
  
          worldsCardContainer.appendChild(worldsCard);
        });
      })
      .catch(error => console.error("Error loading data:", error));
  });