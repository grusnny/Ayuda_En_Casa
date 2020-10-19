import React,{Component} from 'react';
import { Container } from 'reactstrap';
import firebase from '../firebase';

const axios = require('axios');

export default class Login extends Component{
    constructor(props){
        super(props);
        this.Login=this.Login.bind(this);
 
    }

    Login(){
        let provider= new firebase.auth.GoogleAuthProvider();
        var Uid;
        var valor;
        firebase.auth().signInWithPopup(provider).then(result=>{
            //console.log(result);
            console.log(JSON.stringify(result));
            Uid =result.user.uid;
            localStorage.setItem("data", JSON.stringify(result));

            const querystring = require('querystring');
            axios.post('https://microservicio-autenticacion.herokuapp.com/Exiuser', querystring.stringify({  
            uId: Uid }))
                .then(function(res) {
                    if(res.status==200) {
                        //mensaje.innerHTML = 'El nuevo Post ha sido almacenado con id: ' + res;
                        console.log(res.status);
                        valor=res.data;
                        console.log(result.user.uid);
                        console.log("valor");
                        console.log(valor);
                        if(valor==1){
                            window.location.href="/categorias";
                            console.log("el valor es: 1");
                        }else{
                            window.location.href="/logincorreo";
                            console.log("el valor es: 0");
                        }
                        
                    }
                    }).catch(function(err) {
                        console.log(err);
                        window.location.href="/categorias";
                    })
                    .then(function() {
                        //loading.style.display = 'none';
                        console.log("Estoy aqui");

                    });

        })
        
        
    }


    render(){
        return(
            <Container className='text-center'>
                <div>

                    <button type="button" class="btn btn-outline-primary" onClick={this.Login}>Iniciar sesión con google</button>

                </div>
            </Container>  
        )
 }
}