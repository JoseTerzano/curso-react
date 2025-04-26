 

//const getImagenPromesa = () => new Promise (resolve => resolve('https//klmfaklsm;fka;mfa.com'));
//getImagenPromesa().then(console.log);

const getImagen = async() => {

    try {

        const apiKey = 'KYz3M3HSHgClVhM2mYsr5haRvjtMVsIr';
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        //el await dice que espera a ejecutar la peticion antes de ejecutar la siguiente linea de codigo
        const {data} = await respuesta.json();
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

    } catch (error) {

        //manejo del error
        console.error(error);
    }
    
}; //async hace que una funcion haga su return como promesa

getImagen();
