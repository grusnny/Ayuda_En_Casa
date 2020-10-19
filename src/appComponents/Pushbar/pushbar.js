import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import "../NavBar/NavBar.css";
import firebase from 'firebase'
const Example = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  const onLogOut = () => {

  firebase.auth().signOut().then(function () {
    console.log("Log Out correcto");
    window.localStorage.clear()
    window.location.href = "/loginp";
  }).catch(function (error) {
      // An error happened.
  });
  }
  return (
    <Dropdown class="navbar-toggler" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle>
        <span class="navbar-toggler-icon"></span> 
      </DropdownToggle>
      <DropdownMenu right >
        <h6 align="center"> Menú</h6>
        <DropdownItem divider />
        <DropdownItem href="/categorias">Buscador</DropdownItem>
        <DropdownItem divider />
        <DropdownItem href="/accountController">Mi Cuenta</DropdownItem>
        <DropdownItem divider />
        <DropdownItem href="/pedidos">Trabajos</DropdownItem>
        <DropdownItem divider />
        <DropdownItem href="/loginp">Iniciar sesión</DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={onLogOut}>Cerrar sesión</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default Example;