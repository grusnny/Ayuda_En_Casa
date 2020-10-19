import React from 'react'
import firebase from 'firebase'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

export const CardWorker = ({ worker }) => {

    const [name, setName] = React.useState(worker.name)
    const [mail, setMail] = React.useState(worker.mail)
    const [telephone, setTelephone] = React.useState(worker.telephone)
    const [profession, setProfession] = React.useState(worker.profession)

    return (
        <>
            <div>
                <Card style={{ width: '18rem' }}>
                    <CardImg top width="100%" src="https://rosolutions.com.mx/blog/wp-content/uploads/2019/06/1-y6C4nSvy2Woe0m7bWEn4BA.png" />
                    <CardBody>
                        <CardTitle>Nombre: {name}</CardTitle>
                        <CardSubtitle>Correo: {mail}</CardSubtitle>
                        <CardSubtitle>Telefono: {telephone}</CardSubtitle>
                        <CardText>Profesión: {profession}</CardText>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}