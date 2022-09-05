let user = prompt("Crea tu nombre de usuario");
do {
    if (!isNaN(user)) {
        condition = true;
        alert("Tu usuario debe contener letras")
        user = prompt("Crea tu nombre de usuario");
    }else{
        condition = false;
    }
} while (condition);

let password = prompt("Crea tu contraseña");

do{
    usuario = prompt("Ingresa tu usuario");
    contraseña = prompt("Ingresa tu contraseña");

    if (usuario != user || contraseña != password) {
        alert("Usuario o contraseña invalidos");
        c = true;
    } else{
        c = false;
        alert("Inicio de sesion exitoso");
    }
}while(c);



