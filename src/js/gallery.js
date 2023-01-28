// Lista de imagenes con datos adicionales
// los formatos de los que se disponen imagenes
// y los tamaños de los que se disponen imagenes

// "data": {
//   "quality": 50,
//   "formats": [
//     "avif",
//     "webp",
//     "jpg"
//   ],
//   "breakpoints": [
//     {
//       "name": "xs",
//       "size": "30"
//     },
//     {
//       "name": "sm",
//       "size": "48"
//     },
//     {
//       "name": "md",
//       "size": "65"
//     },
//     {
//       "name": "lg",
//       "size": "120"
//     },
//     {
//       "name": "xl",
//       "size": "160"
//     }
//   ],
//   "images": [
//     {
//       "name": "325353816_604511428072874_1192079328282077433_n",
//       "title": ""
//     },
//     {
//       "name": "322442835_1106905926670101_2896423528754986374_n",
//       "title": ""
//     },
/*    */
let gallery_modelo = {
  formats: [],
  breakpoints: [],
  images: [],
};

const imagesPath = "../assets/gallery/";

// Se inicializa el modelo
function gallery_init() {
  fetch(imagesPath+"galleryImages.json")
    .then((response) => response.json())
    .then((gallery) => {
      gallery_modelo = gallery.data;

      // Se llama a la vista por primera vez
      gallery_view(gallery_modelo);
    });
}

/**
 *   Esta función renderiza la galería
 *
 * Si os fijais el nombre de la variable es igual a la declarada arriba,
 * esto quiere decir, que en nuestra función no podremos usar la variable modelo
 * a menos que hagamos this.modelo, esto nos hace conscientes de cuando usamos
 * datos compartidos y mutables en nuestras funciones. Para que las funciones no tengan resultados
 * impredecibles es mejor evitar datos compartidos
 *
 * @param {*} model
 */
function gallery_view(gallery_model) {
  let gallery = document.getElementById("gallery");
  let ul = document.createElement("ul");
  gallery.appendChild(ul);

  gallery_model.images
    .map((img) => img.name)
    .forEach((imageName) => {
      let li = document.createElement("li");

      let link = document.createElement("a");
      link.href = defaultImageSourcePath(gallery_model, imageName);
      link.target = "_blank";

      // Se genera el html de la imagen
      link.innerHTML = gallery_pictureView(gallery_model, imageName);
      li.appendChild(link);
      ul.append(li);
    });
}

/**
 * Tweak this function as needed, forms image htlm using format and 
 * breakpoints arrays for source names
 * 
 *  "formats": [
      "avif",
      "webp",
      "jpeg"
    ],
    "breakpoints": [
    {
      "name": "sm",
      "size": "48"
    },
    {
      "name": "md",
      "size": "65"
    }

 * @param {*} model 
 * @param {*} filename 
 * @returns 
 */
function gallery_pictureView(gallery_model, filename) {
  let path = buildImgPath(filename);

  return (
    "<picture>" +
    gallery_model.formats
      .map((f) =>
        gallery_model.breakpoints.map(
          (bp) =>
            "<source srcset='" +
            path +
            "-" +
            bp.name +
            "." +
            f +
            "' media='(max-width: " +
            bp.size +
            "em)' type='image/" +
            f +
            "' />"
        )
      )
      .flatMap((imageVariation) => imageVariation)
      .reduce((prev, curr) => prev + curr, "") +
    // Default image
    "<img src='" +
    path +
    "-md.jpg' alt='image'></img>" +
    // wrapp on picutre
    "</picture>"
  );
}

function buildImgPath(filename) {
  return "../assets/gallery/" +filename + "/" + filename;
}

function defaultImageSourcePath(model, imageName) {
  
  const lastBp = model.breakpoints.at(model.breakpoints.length -1);
  const lastF = model.formats.at(model.formats.length -1);

  return (
    buildImgPath(imageName) +
    "-" + lastBp.name+
    "." + "jpg"
  );
}
