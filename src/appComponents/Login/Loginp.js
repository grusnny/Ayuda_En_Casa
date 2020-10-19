import React from 'react';
import { Container } from 'reactstrap';
import Title from '../Components/Title';
import { Form, FormGroup } from 'reactstrap';
import Login from '../Components/Login';


function Loginp() {

  return (
    <div className="Menu">
      <Container className='text-center'>
        <Title />
        <Form>
          <FormGroup>
            <Container className='text-center'>
              <Login />
            </Container>
          </FormGroup>
          <FormGroup>
            <Container className='text-center'>
            </Container>
          </FormGroup>
        </Form>
      </Container>
    </div>
  );
}

export default Loginp;