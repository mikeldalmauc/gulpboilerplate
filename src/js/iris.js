let modelo = {};

// Inicializamos todos los modelos de una
function init(){

    // Definimos el modelo inicial así vemos la estructura 
    modelo = {
            iris:[], // Base de datos entera
            modeloComponente1:{ // Modelo del componente 1
                seleccionado: "virginica",
                medias: [
                    {tipo:"setosa", petalLengthAvg:0, sepalLengthAvg:0},
                    {tipo:"virginica", petalLengthAvg:0, sepalLengthAvg:0},
                    {tipo:"versicolor", petalLengthAvg:0, sepalLengthAvg:0},
                ]},

            // valores que vamos a necesitar para los calculos
            sumas:[{tipo:"setosa", petalLengthSum:0, sepalLengthSum:0, count:0},
                    {tipo:"virginica", petalLengthSum:0, sepalLengthSum:0, count:0},
                    {tipo:"versicolor", petalLengthSum:0, sepalLengthSum:0, count:0}]
        };


    fetch("../src/data/iris.json")
    .then((response) => response.json())
    .then((iris) => {
        
        
        modelo.iris = iris;

        iris.reduce((acc, curr, i) => {
            sumarActual(acc, curr);
            if(i == iris.length - 1){

                calcularmedias(modelo);
                // copiar objeto sumas en medias, aunque nos sobren variables no importa
                modelo.modeloComponente1.medias = modelo.sumas;
            }
            return acc;
        }, modelo);
        
        // Se llama a la vista por primera vez
        view(modelo);
    });


} 
//  {"sepalLength": 5.1, "sepalWidth": 3.5, "petalLength": 1.4, "petalWidth": 0.2, "species": "setosa"},
    // {tipo:"setosa", petalLengthSum:0, sepalLengthSum:0, count:0

function sumarActual(modelo, florIris){
    modelo.sumas.forEach(counter => {
        if(florIris.species == counter.tipo){
            counter.petalLengthSum = counter.petalLengthSum +florIris.petalLength;
            counter.sepalLengthSum = counter.sepalLengthSum +florIris.sepalLength;
            counter.count = counter.count + 1;
        }
    });
}

function calcularmedias(modelo){
    modelo.sumas.forEach(counter => {
        counter.petalLengthAvg = counter.petalLengthSum/ counter.count;
        counter.sepalLengthAvg = counter.sepalLengthSum/ counter.count;
    });
}


function view(modelo){
    
    viewComponente1(modelo.modeloComponente1);
}

function viewComponente1(modelo){

    const selectedTipo = modelo.medias
    .filter(media => media.tipo == modelo.seleccionado)
    .pop();

    const html = "<p>Petal length average: "+selectedTipo.petalLengthAvg+"</p>"
    + "<p>Sepal length average: "+selectedTipo.sepalLengthAvg+"</p>";

    let componente1 = document.getElementById("component1");
    componente1.innerHTML = vistaDropDown(modelo) + html;
}

function vistaDropDown(modelo){

    const label = "<label for='tipos-iris'>Tipo Iris:</label>";
    
    const listaOpciones = 
    '<select name="tipos-iris" onchange="updateComponente1();" id="tipos-iris">'
    +
    modelo.medias
    .map(media => media.tipo)
    .map(tipo => {
        if(tipo == modelo.seleccionado)
           return "<option value='"+tipo+"' selected>"+tipo+"</option>";
        else
            return "<option value='"+tipo+"'>"+tipo+"</option>";
    })
    .reduce((acc, curr)=> acc+curr, "")
    +
    '</select>';

    return  label + listaOpciones;
}

function updateComponente1(){
    modelo.modeloComponente1.seleccionado = document.getElementById("tipos-iris").value;

    viewComponente1(modelo.modeloComponente1);
}