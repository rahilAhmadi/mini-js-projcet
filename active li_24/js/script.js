const allLis = [...document.getElementsByTagName('li')];
allLis.forEach(element => {
  element.addEventListener("click", function() {
    allLis.forEach(li => {
        li.classList.remove('active')
    });
    element.classList.add('active')
  });
});