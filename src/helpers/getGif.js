export const getGif = async (categorias) =>{
    const url =`https://api.giphy.com/v1/gifs/search?q=${encodeURI(categorias)}&limit=10&api_key=FrYPxXRECGT41MI4FzGDKgYWN3dryXHL`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gif = data.map( img =>{
        return{
            id:img.id,
            title: img.title,
            url:img.images?.downsized_medium.url, //el ? pregunta si ese atributo existe
        }
    })

    return gif;
}