### Instrucciones:

Ir a la carpeta raiz del proyecto 

  - Instalar dependencias con ```npm i```

  - Crear un archivo **`.env`** en la carpeta back:

  ```env
#SERVER
PORT=Puerto en el cual se va a ejecutar el servidor
MONGO_URI=URL para la conexion a la base de datos
URL_FRON_END=Usada para la configuración de CORS (Solo en desarrollo)
CURRENCY_APIKEY=Api key del api de Monedas [Octener](https://apilayer.com/marketplace/exchangerates_data-api)

  ```
  - Para construir el frond ```npm run build```
  - Correr el servidor con ```npm run dev```(Desarrollo) o ```npm run start```(Producción)

  - La web correrá en el puesto especificado en la variable de entorno
<br/>


### Deploy 🚀🚀

Puedes encontrar la web en el siguiente link: [Ir a Ver](https://crypto-nwox.onrender.com)
