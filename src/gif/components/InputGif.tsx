import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';




export const InputGif=({onNewCategory}:any)=>{
    const [inputCategorie,setInputCategorie]=useState('');

    const onInputChange = ({ target }:any) => {
        setInputCategorie( target.value );
    }

    
    const onSubmit = ( event:any ) => {
        
        event.preventDefault();
        if( inputCategorie.trim().length <= 1) return;

        setInputCategorie('');
        onNewCategory( inputCategorie.trim() );
    }

    return (<>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Buscar categoria"
          value={inputCategorie}
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={ onInputChange }
        />
        <Button variant="outline-primary" id="button-addon2" onClick={onSubmit}>
        buscar
        </Button>
      </InputGroup>
    </>);
}

