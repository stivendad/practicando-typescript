
export let name: string = 'Daniel Tejada';
export const age: number = 34;
export const isValid: boolean = true;

name = 'Stiven';

export const templateString = `Esto es un string
multilinea
que puede tener
" dobles
' simples
inyectar valores ${name}
expresiones ${1 + 1}
números: ${age}
booleanos: ${isValid}`;

console.log(templateString);
