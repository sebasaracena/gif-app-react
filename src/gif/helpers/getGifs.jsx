const getGifs = async( category , page ) => {
   
    const url=`https://api.giphy.com/v1/gifs/search?api_key=CZAns89dbu4HLwysBqHGH1kwWnPPLDxK&q=${ category }&limit=5&offset=${page}`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( (img ) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url

    }));
    
    return gifs;
}

export default getGifs;