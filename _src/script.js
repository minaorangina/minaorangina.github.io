if (document.readyState !== 'loading') {
  ready();
} else {
  document.addEventListener('DOMContentLoaded', ready);
}

function ready () {
  const canvasContainer = document.querySelector('.canvas-container');
  document.documentElement.clientHeight;
  canvasContainer.style.height = `${document.documentElement.clientHeight * 0.7}px`;

  const granimInstance = new Granim({
    element: '.background',
    direction: 'top-bottom',
    opacity: [1, 0.5, 0],
    states: {
      'default-state': {
        gradients: [
          ['#160610', '#260725', '#cad0e0'],
          ['#030334', '#001f53', '#cad0e0']
        ],
        transitionSpeed: 5000
      }
    }
  });
}
