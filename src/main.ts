// import { name, age } from './bases/01-types';
// import { bulbasaur, pokemons } from './bases/02-objects'
// import { charmander } from './bases/03-classes';
import { charmander } from './bases/04-injection';
import './style.css'



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hello Vite ${charmander.name} </h1>
  </div>  
`

