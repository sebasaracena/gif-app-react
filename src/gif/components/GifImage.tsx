export const GifImage=({ title, url }:any)=>{
    return (<>
    <img src={ url } alt={ title } className="img-fluid" />
        <p>{ title }</p>
    </>);
}