import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Card from "react-bootstrap/Card";
const Matr = () => {
  return (
    <div>
     <Card style={{ width: "98rem", height: "68rem" ,backgroundColor:'black'}}>
     <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.gettyimages.com/id/515238274/fr/photo/moderne-et-une-grande-salle-de-sport.jpg?s=612x612&w=gi&k=20&c=HOApF7ED0WgFDFALUzMNAIDcf5TalhH_1_t2kVr89GU="
          alt="First slide"
        />
         </Carousel.Item>
         <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.actu.fr/uploads/2020/10/salle-de-sport-fermeture-covid19-coronavirus-paris-iledefrance-perfecture-de-police.jpeg"
          alt="First slide"
        />
         </Carousel.Item>
         <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.gettyimages.com/id/1227598210/fr/photo/entra%C3%AEnement-dans-la-salle-de-gym-apr%C3%A8s-la-pand%C3%A9mie.jpg?s=612x612&w=gi&k=20&c=UOYKADI4JMek7r5nXUtAKjNxKYaXlP_nVK25AImA4og="
          alt="First slide"
        />
         </Carousel.Item>
         <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.shutterstock.com/image-photo/old-gym-interior-equipment-260nw-326627258.jpg"
          alt="First slide"
        />
         </Carousel.Item>
        </Carousel>
        </Card>
      
    </div>
  )
}

export default Matr
