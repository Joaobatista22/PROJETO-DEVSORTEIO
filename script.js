function buttonSorteador(params) {

    const min = Math.ceil (document.querySelector('.value-min').value)
    const max = Math.floor (document.querySelector('.value-max').value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

   const text = document.querySelector ('.text-sorteador')
   text.innerHTML = result
}