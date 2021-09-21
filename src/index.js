import giphyApi from "./bases/axios";

// Creamos un nuevo elemento
const img = document.createElement("img");

// Obtenemos el botón creado en el index y le añadimos un evento de escucha
const btn = document.querySelector(".myBtn");
btn.addEventListener("click", () => {
  console.log("Click");
  getImage();
});

// creamos la Imagen obtenida de un API
const getImage = async () => {
  try {
    const { data } = (await giphyApi.get("/random")).data;
    const { url } = data.images.original;

    // Añadimos la imagen a la web
    img.src = url;
    document.body.append(img);
    //  En caso e error lanza el Error
  } catch (error) {
    console.log("Error en la petición: ", error);
    throw error;
  }
};
