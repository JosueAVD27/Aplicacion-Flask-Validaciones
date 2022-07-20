//Formato de correo electronico
var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

//Crea la funcion
$(document).ready(function(){
    $("#fEnviar").click(function(){
        //crea Variables y obtiene los campos del formulario de validaciones 
        var nombre = $("#fNombre").val();
        var apellido = $("#fApellido").val();
        var edad = $("#fedad").val();
        var email = $("#femail").val();

        //Validacion de nombre
        if (nombre == ""){
            $("#mensaje1").fadeIn();        //Muestra el campo de validacion
            return false;
        }else{
            $("#mensaje1").fadeOut();        //Oculta el campo de validacion
            //Validacion de apellido
            if(apellido == ""){
                $("#mensaje2").fadeIn();        //Muestra el campo de validacion
                return false;
            }else{
                $("#mensaje2").fadeOut();        //Oculta el campo de validacion
                //Validacion de edad
                if(edad == "" ){
                    $("#mensaje3").fadeIn();        //Muestra el campo de validacion
                    return false;
                }else{
                    //Validacion cuando la edad esta fuera del rango de 0 a 100
                    if(edad > 0 && edad < 100){
                        $("#mensaje3").fadeOut();        //Oculta el campo de validacion
                    }else{
                        $("#mensaje3").fadeIn();        //Muestra el campo de validacion
                        return false;
                    }
                    //Validacion de correo
                    if(email == "" || !expr.test(email)){
                        $("#mensaje4").fadeIn();        //Muestra el campo de validacion
                        return false;
                    }else{
                        $("#mensaje4").fadeOut();        //Oculta el campo de validacion
                    }
                }
            }
        }
    })
})