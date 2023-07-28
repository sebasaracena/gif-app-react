
import Card from 'react-bootstrap/Card';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifImage } from './index';
import Pagination from 'react-bootstrap/Pagination';





export const Gifitem=({item})=>{
  let active = 2;
  let items = [];
  const { images, isLoading  } = useFetchGifs(item,0);
 
  

  for (let number = 1; number <= 12; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

    return (<>
    
     <Card style={{ width: '100%', marginBottom: '10px'}}>  
           <Card.Body>
             <Card.Title>{item}</Card.Title><hr/>
             {
                isLoading && ( <div><h2>Cargando...</h2></div> )
            }
             {images.map( ( image ) => (
            <GifImage key={image.id} { ...image }/>
             ))}
             <div className='d-flex  justify-content-center mt-4'>
            
              {/*<Pagination>{items}</Pagination>*/}
            </div>
           </Card.Body>
         </Card>
    </>);
}