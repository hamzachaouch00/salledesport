import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Activite = () => {
  return (
    <div>
    <h1>Activity</h1>
      <div className="carts">
      
      <div className="cards">
        <Card style={{ width: "18rem", height: "25rem" }}>
          <Card.Img
            variant="top"
            height="250px"
            src="https://img.freepik.com/photos-gratuite/boxe-homme-boxe-dans-sac-boxe_155003-6125.jpg"
          />
          <Card.Body>
          <div className="crt">
            <Card.Title>Box</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
           
            <Button variant="warning">Abonner</Button>
            </div>
          </Card.Body>
        </Card>
    </div>
    
   
      
      <div className="cards">
        <Card style={{ width: "18rem", height: "25rem" }}>
          <Card.Img
            variant="top"
            height="250px"
            src="https://media.istockphoto.com/id/601902710/fr/photo/gros-plan-de-lhalt%C3%A9rophile-claqueant-des-mains-avant-lentra%C3%AEnement-dhalt%C3%A8res-un.jpg?s=612x612&w=0&k=20&c=v7UOz6bUpv162hO_aHahZuUjWSGr1XBTR-IvT3dhv4c="
          />
          <Card.Body>
          <div className="crt">
            <Card.Title>Musculation</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
           
            <Button variant="warning">Abonner</Button>
            </div>
          </Card.Body>
        </Card>
    </div>
   
   
      
      <div className="cards">
        <Card style={{ width: "18rem", height: "25rem" }}>
          <Card.Img
            variant="top"
            height="250px"
            src="https://www.grindfitness.fr/imgs/fitness-lesmills-saint-nazaire-bodypump-grind-1.jpg"
          />
          <Card.Body>
          <div className="crt">
            <Card.Title>Fitness</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
           
            <Button variant="warning">Abonner</Button>
            </div>
          </Card.Body>
        </Card>
    </div>
   
    
      
      <div className="cards">
        <Card style={{ width: "18rem", height: "25rem" }}>
          <Card.Img
            variant="top"
            height="250px"
            src="https://media.istockphoto.com/id/1182419812/fr/photo/joueurs-de-karat%C3%A9-en-comp%C3%A9tition-pendant-le-match.jpg?s=612x612&w=0&k=20&c=ZvBQLPjF1YQ1k9YWKfdNPaRCiVEf_g8DCulaOM2rQP4="
          />
          <Card.Body>
          <div className="crt">
            <Card.Title>Karate</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
           
            <Button variant="warning">Abonner</Button>
            </div>
          </Card.Body>
        </Card>
        <div className="cards">
        <Card style={{ width: "18rem", height: "25rem" }}>
          <Card.Img
            variant="top"
            height="250px"
            src="https://media.gettyimages.com/id/1252207646/fr/photo/homme-kick-boxeur-formation-seul-dans-la-salle-de-gym.jpg?s=612x612&w=gi&k=20&c=Ky1Z2VoTNptphlpmd5sQeGVM_Itkm8cHhSbqcu5ZMVo="
          />
          <Card.Body>
          <div className="crt">
            <Card.Title>kick Boxing</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
           
            <Button variant="warning">Abonner</Button>
            </div>
          </Card.Body>
        </Card>
    </div>
    <div className="cards">
        <Card style={{ width: "18rem", height: "25rem" }}>
          <Card.Img
            variant="top"
            height="250px"
            src="https://www.shutterstock.com/image-illustration/mma-fighting-side-slam-two-600w-2010803594.jpg"
          />
          <Card.Body>
          <div className="crt">
            <Card.Title>MMA</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
           
            <Button variant="warning">Abonner</Button>
            </div>
          </Card.Body>
        </Card>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Activite
