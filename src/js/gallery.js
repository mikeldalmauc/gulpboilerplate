
  // Lista de imagenes con datos adicionales
  // los formatos de los que se disponen imagenes
  // y los tamaños de los que se disponen imagenes
let modelo = {
  formats: []
  ,breakpoints:[]
  ,images: []
};

const imagesPath = 'assets/gallery/';

// Se inicializa el modelo  
function init() {

  fetch('src/data/galleryImages.json')
    .then((response) => response.json())
    .then((gallery) => {
        modelo = gallery.data

        // Se llama a la vista por primera vez
        view(modelo);
    });
}
    
/**
*   Esta función renderiza la galería
*
* Si os fijais el nombre de la variable es igual a la declarada arriba,
* esto quiere decir, que en nuestra función no podremos usar la variable modelo
* a menos que hagamos this.modelo, esto nos hace conscientes de cuando usamos 
* datos compartidos y mutables en nuestras funciones. Para que las funciones no tengan resultados
* impredecibles es mejor evitar datos compartidos.
*
* @param {*} model
*/
function view(model) {
  let gallery = document.getElementById("gallery");
  let ul = document.createElement("ul");
  gallery.appendChild(ul);

  model.images
  .map(img => img.name)
  .forEach((imageName) => {
    let li = document.createElement("li");

    let link = document.createElement("a");
    link.href = defaultImageSourcePath(imageName);
    link.target = "_blank";

    // Se genera el html de la imagen
    link.innerHTML = pictureView(model, imageName);
    li.appendChild(link);
    ul.append(li);
  });
}


function pictureView(model, filename){

  let path = buildImgPath(filename);
  
  return "<picture>"+
  model.formats.map(f => 
    model.breakpoints.map(bp => "<source srcset='"+path+"-"+bp.name+"."+f+"' media='(max-width: "+bp.size+"em)' type='image/"+f+"' />")
  )
  .flatMap(imageVariation => imageVariation)
  .reduce((prev, curr) => prev + curr, "")
  // Default image
  + "<img src='"+path+"-md.jpg' alt='image'></img>"
  // wrapp on picutre
    +"</picture>";
}

function buildImgPath(filename){
  return this.imagesPath+filename+'/' +filename;
}

function defaultImageSourcePath(imageName){
  return buildImgPath(imageName)+"-"+model.breakpoints.slice(-1)+"."+model.breakpoints.slice(-1);
}