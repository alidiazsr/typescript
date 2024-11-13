// Typescript playground: https://www.typescriptlang.org/play 

// console.log(): https://developer.mozilla.org/en-US/docs/Web/API/console/log_static 

// forEach: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// filter(): https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 

// Más práctica online: https://www.w3schools.com/typescript/exercise.php?filename=exercise_intro1 


// Ejercicio 1
// Declarar una variable de tipo string llamada "nombre" y asignarle tu nombre.
// Declarar una variable de tipo number llamada "edad" y asignarle tu edad.
// Declarar una variable de tipo boolean llamada "esEstudiante" y asignarle true o false.
// Imprimir en consola el valor de cada variable usando console.log()

let nNombre : string = "Alicia";
let edad : number = 26;
let esEstudiante : boolean = true;

console.log("Nombre: ", nNombre, "Edad: ", edad, "Es estudiante: ", esEstudiante);


// Ejercicio 2
// Declarar una función que reciba dos números como parámetros y retorne su suma.
// Asegurar que los parámetros y el valor de retorno sean de tipo number.
// Llamar a la función e imprimir el resultado.
// Realizar otra función que reste dos números.
// Realizar otra función que multiplique dos números.
function suma(a: number, b: number): number {
    return a + b;
}
console.log("Suma: ", suma(5 , 5));

function restar(a: number, b: number): number {
    return a - b;
}

console.log("Resta: ", restar(5, 5));

function multiplicar(a: number, b: number): number {
    return a * b;
}

console.log("Multiplicación: ", multiplicar(5, 5));




// Ejercicio 3
// Crear un array de números llamado "numeros" y agregar algunos valores.
// Usa un bucle para imprimir cada número multiplicado por 2 (usando forEach())

let numeros: number[] = [1, 2, 3, 4, 5];

numeros.forEach(function(numero) {
    console.log(numero * 2);
});


// Ejercicio 4
// Declarar una interfaz "Persona" con las propiedades: nombre (string), edad (number), y esEstudiante (boolean).
// Crear tres objetos que sigan la estructura de la interfaz.
// Imprimir en consola.


interface Persona {
    nombre: string;
    edad: number;
    esEstudiante: boolean;
}

let persona1: Persona = {
    nombre: "Juan",
    edad: 25,
    esEstudiante: true
}

let persona2: Persona = {
    nombre: "Pedro",
    edad: 30,
    esEstudiante: false
}

let persona3: Persona = {
    nombre: "Maria",
    edad: 20,
    esEstudiante: true
}

console.log("Persona1: ", persona1);
console.log("Persona2: ", persona2);
console.log("Persona3: ", persona3);



// Ejercicio 5
// Declara una variable que pueda ser de tipo string o number.
// Asigna un valor string y luego cambia su valor a number.
// Imprimir en consola ambos casos.

let variablenueva: string | number = "Hola";
console.log("Variable: ", variablenueva);

variablenueva = 5;

console.log("Variable: ", variablenueva);


// Ejercicio 6
// Definir una interfaz "Producto" con propiedades: nombre (string), precio (number), y enStock (boolean).
// Crear un array de "productos" con seis objetos que sigan la interfaz.
// Crear una función que reciba el array y retorne los productos en stock (sólo en stock). 
// Crear otra función que reciba el array y retorne los productos sin stock (sólo sin stock). 
// Se puede usar método filter() para esto.


interface Producto {
    nombre: string;
    precio: number;
    enStock: boolean;
}

let producto1: Producto = {
    nombre: "Producto1",
    precio: 100,
    enStock: true
}

let producto2: Producto = {
    nombre: "Producto2",
    precio: 200,
    enStock: false
}

let producto3: Producto = {
    nombre: "Producto3",
    precio: 300,
    enStock: true
}

let producto4: Producto = {
    nombre: "Producto4",
    precio: 400,
    enStock: false
}

let producto5: Producto = {
    nombre: "Producto5",
    precio: 500,
    enStock: true
}

let producto6: Producto = {
    nombre: "Producto6",
    precio: 600,
    enStock: false
}

let productos: Producto[] = [producto1, producto2, producto3, producto4, producto5, producto6];

function productosEnStock(productos: Producto[]): Producto[] {
    return productos.filter(producto => producto.enStock);
}

function productosSinStock(productos: Producto[]): Producto[] {
    return productos.filter(producto => !producto.enStock);
}

console.log("Productos en stock: ", productosEnStock(productos));

console.log("Productos sin stock: ", productosSinStock(productos));





// Ejercicio 7
// Definir una interfaz "Cliente" con 4 propiedades a elección (por ahora solamente tipos string, booleanos y numbers).
// Crear un array de "clientes" con seis objetos que sigan la interfaz.
// Crear una función que reciba el array y retorne los clientes que cumplan una condición (segun el booleano que hayamos creado). 
// Crear otra función que reciba el array y retorne los clientes que cumplan la condición inversa al punto de arriba (mismo booleano que hayamos elegido). 
// Se puede usar método filter() para esto.


interface Cliente {
    nombre: string;
    edad: number;
    esEstudiante: boolean;
    provincia: string;
}

let cliente1: Cliente = {
    nombre: "Alicia",
    edad: 25,
    esEstudiante: false,
    provincia: "Santa Fe"
}

let cliente2: Cliente = {
    nombre: "Sol",
    edad: 22,
    esEstudiante: false,
    provincia: "Cordoba"
}

let cliente3: Cliente = {
    nombre: "Maria",
    edad: 24,
    esEstudiante: true,
    provincia: "Mendoza"
}

let cliente4: Cliente = {
    nombre: "Ana",
    edad: 35,
    esEstudiante: true,
    provincia: "Salta"
}

let cliente5: Cliente = {
    nombre: "Carla",
    edad: 20,
    esEstudiante: true,
    provincia: "Jujuy"
}

let cliente6: Cliente = {
    nombre: "Laura",
    edad: 45,
    esEstudiante: false,
    provincia: "Tucuman"
}

let clientes: Cliente[] = [cliente1, cliente2, cliente3, cliente4, cliente5, cliente6];

function clientesEstudiantes(clientes: Cliente[]): Cliente[] {
    return clientes.filter(cliente => cliente.esEstudiante);
}

function clientesNoEstudiantes(clientes: Cliente[]): Cliente[] {
    return clientes.filter(cliente => !cliente.esEstudiante);
}

console.log("Clientes estudiantes: ", clientesEstudiantes(clientes));

console.log("Clientes no estudiantes: ", clientesNoEstudiantes(clientes));


/*

Ejercicio 8: Catálogo de Productos - forEach
Crear un array llamado catalogo con varios objetos de productos. Cada producto debe tener las 
propiedades nombre (string) y precio (number).
Usar forEach para imprimir el nombre y el precio de cada producto. 
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach 
*/

let producto7: Producto = {
    nombre: "Producto7",
    precio: 700,
    enStock: true
}

let producto8: Producto = {
    nombre: "Producto8",
    precio: 800,
    enStock: false
}

let producto9: Producto = {
    nombre: "Producto9",
    precio: 900,
    enStock: true
}

let producto10: Producto = {
    nombre: "Producto10",
    precio: 1000,
    enStock: false
}

let catalogo: Producto[] = [producto7, producto8, producto9, producto10];

catalogo.forEach(function(producto) {
    console.log("Nombre: ", producto.nombre, "Precio: ", producto.precio);
});





/*

Ejercicio 9: Catálogo de Productos - filter
Utilizar filter para crear un nuevo array llamado productosBaratos que solo contenga los productos con precio menor a 50. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 
Imprimor productosBaratos en la consola.

*/


let producto11: Producto = {
    nombre: "Producto11",
    precio: 10,
    enStock: true
}

let producto12: Producto = {
    nombre: "Producto12",
    precio: 20,
    enStock: false
}

let producto13: Producto = {
    nombre: "Producto13",
    precio: 30,
    enStock: true
}

let producto14: Producto = {
    nombre: "Producto14",
    precio: 40,
    enStock: false
}

let catalogo2: Producto[] = [producto11, producto12, producto13, producto14];

let productosBaratos = catalogo2.filter(producto => producto.precio < 50);

console.log("Productos baratos: ", productosBaratos);



/*
Ejercicio 10: Actualización de Inventario - map
Utilizar map para crear un nuevo array catalogoConDescuento, donde cada producto tenga un 10% menos de precio. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map 
Imprimir catalogoConDescuento en la consola.
*/

let catalogoConDescuento = catalogo.map(producto => {
    return {
        nombre: producto.nombre,
        precio: producto.precio * 0.9
    }
});

console.log("Catalogo con descuento: ", catalogoConDescuento);





/*

Ejercicio 11: Búsqueda de Usuario - find
Crear un array llamado usuarios con varios objetos de usuario. Cada usuario debe tener id (number), nombre (string) y activo (boolean).
Usar find para buscar el usuario con el id 3. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find 
Imprimir en la consola el objeto del usuario encontrado.
*/

let usuario1 = {
    id: 1,
    nombre: "Usuario1",
    activo: true
}

let usuario2 = {
    id: 2,
    nombre: "Usuario2",
    activo: false
}

let usuario3 = {
    id: 3,
    nombre: "Usuario3",
    activo: true
}

let usuario4 = {
    id: 4,
    nombre: "Usuario4",
    activo: false
}

let usuarios = [usuario1, usuario2, usuario3, usuario4];

let usuarioEncontrado = usuarios.find(usuario => usuario.id === 3);

console.log("Usuario encontrado: ", usuarioEncontrado);


/*

Ejercicio 12: Contador de Usuarios Activos - filter y length
Utilizar filter para crear un nuevo array usuariosActivos que contenga solo los usuarios con activo: true.
Usar la propiedad length para contar cuántos usuarios activos hay y muestra el resultado en la consola. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length 
*/

let usuariosActivos = usuarios.filter(usuario => usuario.activo);

console.log("Usuarios activos: ", usuariosActivos.length);



/*

Ejercicio 13: Actualización de Estado de Usuarios
Usando un bucle forEach, cambiar la propiedad activo de cada usuario a false.
Imprimir el array usuarios para verificar que todos los usuarios están inactivos.
*/

usuarios.forEach(usuario => usuario.activo = false);

console.log("Usuarios inactivos: ", usuarios);



/*

Ejercicio 14: Formateo de Productos para Mostrar - map
Usar el array catalogo.
Utilizar map para crear un nuevo array productosFormato que contenga el nombre y precio de cada producto como un string en el formato "Producto: [nombre], Precio: $[precio]".
Para esto podemos usar template strings `string text ${expression} string text`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals 
Imprimir el array productosFormato en la consola.

*/

let productosFormato = catalogo.map(producto => `Producto: ${producto.nombre}, Precio: $${producto.precio}`);

console.log("Productos formato: ", productosFormato);



/*



Ejercicio 15:
Con los datos que tenemos, crear una interfaz "User" y aplicarla, para que el siguiente codigo compile sin errores:


const users: unknown[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

function logPerson(user: unknown) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);

*/


interface User {
    name: string;
    age: number;
    occupation: string;
}

const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');

users.forEach(logPerson);


console.log(users);




/*


Ejercicio 16:
Vamos a volver a usar la interfaz User del ejercicio anterior.
Crear una nueva interfaz Admin segun los datos que tenemos.
Corregir el type Person para que acepte dos tipos: User y la nueva interfaz. 
Corregir la implementacion para aplicar el type Person para que el siguiente codigo compile sin errores. 

type Person = User;
const persons: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);


*/


interface Admin {
    name: string;
    age: number;
    role: string;
}

type Person = User | Admin;

const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

function logPerson2(user: Person) {
    console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson2);


console.log(persons);



