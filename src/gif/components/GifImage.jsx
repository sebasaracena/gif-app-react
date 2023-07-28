import Proptypes from 'prop-types';

export const GifImage=({ title, url })=>{
    return (<>
    <img src={ url } alt={ title } className="img-fluid" />
        <p>{ title }</p>
    </>);
}


GifImage.Proptypes={
   title: Proptypes.string.isRequired,
   url: Proptypes.string.isRequired   

}