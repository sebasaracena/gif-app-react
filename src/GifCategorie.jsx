import { useState } from "react";
import PropTypes from 'prop-types';

import {InputGif} from "./gif/components";
import {Gifitem}  from "./gif/components";


const  GifCategorie= ({categoria})=>{
    const [categorie, setCategories]=useState(categoria);

    const onAddCategory = ( newCategory ) => {
        //hace el componente del nuevo valor unico 
        if ( categorie.includes(newCategory) ) return;

        setCategories([ newCategory, ...categorie ]);
    }

  

    return (
         <>
         <h2 style={{color:'#1616b7'}}>Listado de gif por categoria</h2>
         <hr/>
         {<InputGif onNewCategory={ (value ) => onAddCategory(value)}/>}
          {
        
          categorie.map((item)=>(
           <Gifitem item={item} key={item}/>
          
          ))}
         
         </>

    );

}

GifCategorie.prototype={
    categoria:PropTypes.array
 }
 GifCategorie.defaultProps={
    categoria:['Dragon ball', 'Saitama']
 }
export default GifCategorie;