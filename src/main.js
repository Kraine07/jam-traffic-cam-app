// Render a responsive grid of YouTube iframes
(function(){
  const videoLinks = {
    "Little London": "SPwW9xN3e1M",
    "May Pen": "oB-FPjPS14Q",
    "Flat Bridge": "k4Lt_iev8x4",
    "Kingston Harbour": "jVr7_V4Tohw",
    "Cross Roads": "jJ6C03WtBJE",
    "Half Way Tree Clock": "U67jHOGjH70",
    "Half Way Tree Transport Center": "07cPJ4VZGdE",
    "Devon House": "F6oDQm5XQwQ",
    "Barbican": "I0w-636mEDY",
    "Downtown Kingston West Parade": "u70ySp4OuHY"
  };

  const gridEl = document.getElementById('grid');
  if(!gridEl) return;

  function renderGrid() {
    gridEl.innerHTML = '';
    if(Object.keys(videoLinks).length === 0) {
      gridEl.innerHTML = '<p class="muted">No videos to display.</p>';
      return;
    }

    Object.entries(videoLinks).forEach(([location, id]) => {
      const card = document.createElement('div');
      // card.className = 'video-card';

      const heading = document.createElement('p');
      heading.textContent = location;

      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=1&loop=0`;
      iframe.title = location;
      iframe.loading = 'lazy';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.setAttribute('allowfullscreen', '');

      card.appendChild(heading);
      card.appendChild(iframe);
      gridEl.appendChild(card);
    });
  }

  renderGrid();
})();
