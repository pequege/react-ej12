import React from 'react';
import {Card, Button} from 'react-bootstrap'


const Noticia = ({noticia, indiceNoticia}) => {
    return (
        <Card className='col-lg-3 col-md-4 col-6 m-2 px-0'>
            <Card.Img variant="top" src={noticia.image_url===null?"./src/img/image-not-found.jpg":noticia.image_url}/>
            <Card.Body>
                <Card.Title>{noticia.title}</Card.Title>
                <Card.Text className='d-block text-truncate'>
                {noticia.description}
                </Card.Text>
                <a href={noticia.link}>
                    <Button variant="primary">Ver noticia completa</Button>
                </a>
            </Card.Body>
        </Card>
    );
};

export default Noticia;