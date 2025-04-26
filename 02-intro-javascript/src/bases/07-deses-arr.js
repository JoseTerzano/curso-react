

const personajes = ['Goku', 'Jose', 'Yo'];
const [ , , p3] = personajes;
console.log(p3);

const retornaArreglo = () =>{
    return ['ABC', 123];
};

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

//Tarea
//1. el primer valor del arr se llamara nombre
//2. el segundo se llamara setNombre

const useState = (valor) =>{
    return [valor, () => (console.log('Hola Mundo'))];
};

const arr = useState('Goku');


const [nombre, setNombre] = arr

console.log(nombre);
setNombre();
arr[1]();//llama a la funcion que esta en la posicion 2