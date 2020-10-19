import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import firebase from "../firebase";
import { CardPedidos } from './CardPedidos'
const db = firebase.firestore();

function Pedidos() {


  var usuario = JSON.parse(localStorage.getItem("data"));
  const [pedido, setPedido] = React.useState([]);


  React.useEffect(() => {


    const fetchData = async () => {
      const data = await db.collection('pedido').where("uid", "==", usuario.user.uid).get()
      setPedido(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    }
    fetchData()
  }, [])


  return (
    <div className="App">
      <Container className='text-center'>
        <p>Revisa las peticiones de trabajos que has solicitado: </p>
            {pedido.map(pedido => (
              <CardPedidos pedido={pedido} />
            ))}
      </Container>
    </div>
  );

}

export default Pedidos; 