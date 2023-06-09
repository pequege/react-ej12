import React, { useEffect, useState } from "react";
import { Form, Spinner } from "react-bootstrap";
import ListaNoticia from "./ListaNoticia";


const Formulario = () => {
  const [mostrarSpinner, setMostrarSpinner] = useState(true);

  const consultarAPI = async () => {
    try {
      setMostrarSpinner(true)
      const respuesta = await fetch("https://newsdata.io/api/1/news?" + 
      "apiKey=pub_24220ba670749c9424e985965526f426225a6" + 
      "&language=es"+ `&category=${categoria || 'science'}`); //GET querie
      const dato = await respuesta.json();
      console.log(dato);
      setNoticias(dato.results);
      setMostrarSpinner(false);
    } catch (err) {
      console.log(err);
    }
  };
  
  const [noticias, setNoticias] = useState([]);
  const [categoria, setCategoria] = useState("");
  
  const componenteRenderizado = (mostrarSpinner)? (
    <div className="col-12 align-items-center">
          <Spinner animation="border" variant="primary" />
    </div>
    ) :
    (<ListaNoticia listaNoticias={noticias}></ListaNoticia>);

    useEffect(() => {
      consultarAPI();
    }, [categoria]);
  
  return (
    <>
      <Form.Label>Buscar por categoría</Form.Label>
      <Form.Select aria-label="Buscar por categoría"
        onChange={(e) =>setCategoria(e.target.value)}
        className="mb-3">
        <option value="science">Ciencia</option>
        <option value="food">Comida</option>
        <option value="sports">Deportes</option>
        <option value="entertainment">Entretenimiento</option>
        <option value="environment">Medioambiente</option>
        <option value="world">Mundial</option>
        <option value="business">Negocios</option>
        <option value="politics">Política</option>
        <option value="top">Principales</option>
        <option value="health">Salud</option>
        <option value="technology">Tecnología</option>
        <option value="tourism">Turismo</option>
      </Form.Select>
      {componenteRenderizado}
    </>
  );
};

export default Formulario;
