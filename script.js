// Align images vertically within the columns
const alignImages = () => {
    const columns = document.querySelectorAll('.column');
    columns.forEach(column => {
      const image = column.querySelector('img');
      const heightDiff = column.clientHeight - image.clientHeight;
      const marginValue = heightDiff / 2;
      image.style.marginTop = marginValue + 'px';
    });
  };
  
  window.addEventListener('load', alignImages);
  window.addEventListener('resize', alignImages);
  