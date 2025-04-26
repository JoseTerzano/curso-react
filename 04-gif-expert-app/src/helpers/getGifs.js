
export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=bHu8gs6e16VGxsdMyza0cB1sz2H7bTYn&q=${category}&limit=10`;
    const resp = await fetch( url);
    const {data} = await resp.json();
    
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
return gifs;
};
