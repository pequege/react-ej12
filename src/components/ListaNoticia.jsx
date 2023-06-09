import React from 'react';
import Noticia from './Noticia';
import { ListGroup } from 'react-bootstrap';

const ListaNoticia = ({listaNoticias}) => {
    return (
        <>  
            <div className='row justify-content-center border'>
                {listaNoticias.map((noticia, indiceNoticia)=>
                    <Noticia noticia={noticia} key={indiceNoticia}></Noticia>
                )}
                {listaNoticias.length===0?<p className='text-secondary'>No se encontraron noticias en esa categoria</p>:""}
            </div>
        </>
    );
};

export default ListaNoticia;