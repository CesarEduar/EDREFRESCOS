function ingresar()
{

var usuario="CESAR"
var contraseña="examen"; 

if (document.frmingreso.txtusuario.value==usuario &&
    document.frmingreso.txtcontraseña.value==contraseña)   
{
    document.location="inicio.html"
}
else
{
    alert("Usuario o Contraseña correcta, porfavor ingrese datos correctos")
}

}


