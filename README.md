<h1>EX - Snack Custom Hooks</h1>

- <b> 🏆 Snack 1: useSwitch() – Toggle Booleano</b>

- Creare un custom hook per alternare un valore booleano tra true e false.

- - Cosa deve fare?

1. Inizialmente false.

2. Ritorna il valore attuale e una funzione toggle() per cambiarlo.

3. Quando toggle() viene chiamato, il valore passa da true → false e viceversa.


- <b> 🏆 Snack 2: useDate() – Ottenere la Data Attuale </b>

- Creare un custom hook che restituisca la data e l'ora correnti, aggiornandosi automaticamente ogni secondo.

- - Cosa deve fare?

1. Restituisce un oggetto con data e ora formattata.

2. Si aggiorna automaticamente ogni secondo.

3. Usa useEffect() per gestire l’aggiornamento.


- <b> 🏆 Snack 3: useCustomPointer() – Cambia il Cursore del Mouse </b>

- Creare un custom hook che sostituisca il cursore del mouse con un componente personalizzato.

- - Cosa deve fare?

1. Prende in input una stringa o un JSX component (es. un’emoji, un'icona, un'animazione).

2. Posiziona il componente al posto del puntatore del mouse.

3. Il componente segue i movimenti del mouse.


- <b> 🎯 Bonus: useKeyPress() – Rilevare un Tasto Premuto </b>

- Creare un custom hook che rilevi se un tasto specifico della tastiera è premuto.

- - Cosa deve fare?

1. Prende in input il nome di un tasto ("Enter", "Escape", ecc.).

2. Ritorna true quando il tasto è premuto e false quando viene rilasciato.

3. Usa event listener su keydown e keyup.
