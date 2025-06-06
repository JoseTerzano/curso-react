

export const fileUpload = async( file ) => {
    if(!file) throw new Error('No ehay archivo para subir');

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dvalwljzu/upload';
    const formdata = new FormData();
    formdata.append('upload_preset','react-journal');
    formdata.append('file', file);
    try {
        
        const resp = await fetch( cloudUrl, { method: 'POST', body: formdata } );
        if (!resp.ok) throw new Error('No se pudo subir')

        const {secure_url} = await resp.json();

        return secure_url

    } catch (error) {
        console.log(error)
        throw new Error(error.message);
    }

}