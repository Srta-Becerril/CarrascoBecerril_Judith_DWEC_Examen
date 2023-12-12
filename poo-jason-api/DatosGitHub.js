const fs = require('fs');

class DatosGitHub {
    constructor(login, id, email, publicRepos) {
        this.login = login || 'No disponible';
        this.id = id || 'No disponible';
        this.email = email || 'No disponible';
        this.publicRepos = publicRepos || 'No disponible';
    }

    datosRecibidos() {
        console.log(`El Usuario de GitHub ${this.login} tiene un id ${this.id} cuyo correo es ${this.email} y tiene ${this.publicRepos} repositorios públicos.`);
    }
}

// Supongamos que esta es la cadena JSON obtenida de GitHub
const jsonStringFromGitHub = '{"login": "usuario", "id": 123, "email": "usuario@example.com", "public_repos": 10}';

// Transforma la cadena JSON a objeto JavaScript
const datosGitHub = JSON.parse(jsonStringFromGitHub);

// Crea una instancia de la clase DatosGitHub con los datos obtenidos
const datosGitHubInstancia = new DatosGitHub(datosGitHub.login, datosGitHub.id, datosGitHub.email, datosGitHub.public_repos);

// Muestra la información utilizando el método datosRecibidos
datosGitHubInstancia.datosRecibidos();


Para ejecutar este script, abre tu terminal, navega al directorio donde guardaste el archivo y ejecuta el siguiente comando:

bash
Copy code
node DatosGitHub.js
Esto ejecutará el script y deberías ver la salida en la consola. Asegúrate de ajustar el contenido de jsonStringFromGitHub con los datos reales que obtuviste de GitHub.