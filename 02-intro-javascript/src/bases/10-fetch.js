

const apiKey = 'KYz3M3HSHgClVhM2mYsr5haRvjtMVsIr'

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion.then( resp => resp.json())//promesas en cadena con el siguiente then
.then( ({data}) => {
    const {url} = data.images.original;
    
    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);

})
.catch(console.warn);