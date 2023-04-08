import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Inscr=()=>{
    return(<div className='ins'>
    <h1>Registration</h1>
    <div className="inscr">
    
     <Card style={{ backgroundColor:'red', width: '20rem' }}>
      <Card.Body>
      <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='inf'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='inf'>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='inf'>Phone</Form.Label>
        <Form.Control type="text" placeholder="Phone" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='inf'>Adress</Form.Label>
        <Form.Control type="text" placeholder="Adress" />
        
      </Form.Group>

     
     
      <Button style={{background : 'red', color:'white', borderColor: 'white' }} >
        Register
      </Button>
    </Form>
      </Card.Body>
    </Card>
    


    </div>
    </div>

    )
}
export default Inscr