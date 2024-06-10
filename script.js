function enviarDatos() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var contrasena = document.getElementById('contrasena').value;

    // Aquí puedes enviar los datos a tu servidor usando AJAX o fetch API
    // Por ejemplo, puedes utilizar fetch para enviar los datos a un script PHP en el servidor
    fetch('registrar_usuario.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'nombre=' + encodeURIComponent(nombre) +
              '&email=' + encodeURIComponent(email) +
              '&contrasena=' + encodeURIComponent(contrasena)
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('mensaje').innerHTML = data;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
