if (document.readyState !== 'loading') {
  ready();
} else {
  document.addEventListener('DOMContentLoaded', ready);
}

function ready () {
  const canvasContainer = document.querySelector('.canvas-container');
  document.documentElement.clientHeight;
  canvasContainer.style.height = `${document.documentElement.clientHeight * 0.95}px`;

  const granimInstance = new Granim({
    element: '.background',
    direction: 'left-right',
    opacity: [1, 0.5],
    states: {
      'default-state': {
        gradients: [
          ['#42303b', '#441342'],
          ['#0e337d', '#084e42'],
          ['#584b21', '#827532']
        ],
        transitionSpeed: 5000
      }
    }
  });
}
