import React from 'react';
import { Button, Container } from 'reactstrap';
import firebase from "../firebase";
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { CardWorker } from './CardWorker'


function WorkerElectricist() {

    const [worker, setWorker] = React.useState([])

    React.useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore()
            const data = await db.collection('worker').where('profession','==','Electricista').get()
            setWorker(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        }
        fetchData()
    }, [])



    return (
        <div className="App">
            <Container className='text-center'>
                <p>Esto no debería ir acá pero bueh :v</p>
                <ul>
                    {worker.map(worker => (
                        <li key={worker.mail}>
                            <CardWorker worker={worker} />
                        </li>
                    ))}
                </ul>
            </Container>
        </div>
    );

}

export default WorkerElectricist; 