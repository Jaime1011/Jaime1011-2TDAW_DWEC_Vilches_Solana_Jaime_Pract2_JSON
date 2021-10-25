"use strict"

const mostrarbarcos=(barcos)=>{
    document.write(`<div class="item">
                        <div id="datos_barcos"> 
                            <h1>Nombre: ${barcos["nombre"]}</h1>
                            <h2>Capitan: ${barcos["capitan"]}</h2>
                            <p>Numero de cañones: ${barcos["cañones"]}</p>
                            <br>
                            <p>Categoria: ${barcos["categoria"]}</p>
                            <br>
                            <p>Descripción: ${barcos["descripcion"]}</p>
                            <br>
                            <img src="${barcos["imagen"]}">
                        </div>

                        <br><br>

                        <div>
                            <fieldset>
                                <legend>Actualizar ${barcos["nombre"]}</legend>
                                <br>
                                <form>
                                    <label for="barcos">
                                        Barco: <input type="text" name="barcos" value="${barcos["nombre"]}">
                                    </label>                      
                                    <br><br>
                                    <label for="capitan">
                                        Capitan: <input type="text" name="capitan" value="${barcos["capitan"]}">
                                    </label>
                                    <br><br>
                                    <label for="cañones">
                                        Cañones: <input type="number" name="cañones" value="${barcos["cañones"]}">
                                    </label>
                                    <br><br>
                                    <label for="categoria">
                                        Categoria: <input type="text" name="categoria" value="${barcos["categoria"]}">
                                    </label>
                                    <br><br>
                                    <label for="descripion">
                                        Descripción: <textarea name="descrip">${barcos["descripcion"]}</textarea>
                                    </label>
                                    <br><br>
                                    <label for="enviar">
                                        <center><input type="submit" name="enviar" value="Modificar"></center>
                                    </label>
                                </form>
                            </fieldset>
                        </div>
                    </div>`);                                    
}

navios.forEach(mostrarbarcos);

const mostrarForeach=(barcos)=>{
    document.write(mostrarbarcos(barcos));
}

let ordenar=prompt("Según del número de cañones... ¿Quieres la pagina ascendente o descendente?");

if(ordenar.toLowerCase()==="ascendente" || "asc"){
    filtroBarco.sort(
        (a,b)=>{
            return a["cañones"]-b["cañones"];
        }
    )
    
}else if(ordenar.toLowerCase()==="descendente" || "desc"){
    filtroBarco.sort(
        (a,b)=>{
            return b["cañones"]-a["cañones"];
        }
    )
}