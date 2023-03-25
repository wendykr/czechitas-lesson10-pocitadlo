const updateCounter = (number) => {
    //console.log('funguju'); // vypisuju, zdali je funkce volána
    valueElm.textContent = number;
    console.log(valueElm.textContent); // vypisuju hodnotu, která je na prvku
  };
  
  const valueElm = document.querySelector('.counter__value');
  let value = String(valueElm.textContent).padStart(2, '0');
  const btnUp = document.querySelector('.counter__up');
  const btnDown = document.querySelector('.counter__down');
  
  btnUp.addEventListener('click', () => {
    console.log('click btnUp'); // vypisuju, zdali je předána událost na kliknutí tlačítka
    if (value < 99) {
      value++;
      console.log('value btnUp: ' + value); // vypisuju, hodnotu po kliknutí na tlačítko
      updateCounter(value);
    }
  });
  
  btnDown.addEventListener('click', () => {
    console.log('click btnDown'); // vypisuju, zdali je předána událost na kliknutí tlačítka
    if (value > 0) {
      value--;
      console.log('value btnDown: ' + value); // vypisuju, hodnotu po kliknutí na tlačítko
      updateCounter(value);
    }
  });
  
  updateCounter(value);