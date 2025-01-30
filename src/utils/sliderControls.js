export function initializeSliderControls() {
    const movieSlider = document.querySelector('.movies-slider');
    const eventSlider = document.querySelector('.events-slider');
    
    // Movies navigation
    document.querySelector('.prev-movies')?.addEventListener('click', () => {
      movieSlider?.scrollBy({ left: -300, behavior: 'smooth' });
    });
    
    document.querySelector('.next-movies')?.addEventListener('click', () => {
      movieSlider?.scrollBy({ left: 300, behavior: 'smooth' });
    });
    
    // Events navigation
    document.querySelector('.prev-events')?.addEventListener('click', () => {
      eventSlider?.scrollBy({ left: -300, behavior: 'smooth' });
    });
    
    document.querySelector('.next-events')?.addEventListener('click', () => {
      eventSlider?.scrollBy({ left: 300, behavior: 'smooth' });
    });
  }