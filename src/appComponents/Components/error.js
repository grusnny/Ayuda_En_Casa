import React from 'react';

function Error({mensaje}){
    return(
        <div class="card text-white bg-danger mb-3">
            {mensaje}
        </div>
    )
}
export default Error;