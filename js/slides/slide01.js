(function () {  
  let imagePathsArray;
  quicker().fetchJSON('data/slide01.json', setSlide01);
  function setSlide01(data) {
    imagePathsArray = data;
    let slideShow = document.getElementsByClassName('slideShow')[1];
    let max = 2024;
    for(let i = 0; i < imagePathsArray.length; i++) {
      let img = document.createElement('img');
      img.src = imagePathsArray[i];
      img.style.animationDelay = `${i / 7.5}s`;
      if(i < imagePathsArray.length - 1) {
        img.style.left = `${quicker().makeFloatingRandom(0, max) - max / 2}px`;
        img.style.top = `${quicker().makeFloatingRandom(0, max) - max / 2}px`; 
      }
      slideShow.appendChild(img);
      // slideShow.insertBefore(img, slideShow.childNodes[0]);
    }
  }
}());