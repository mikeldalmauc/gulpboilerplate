let iris_modelo = {};

// Inicializamos todos los modelos de una
function iris_init(){

    // Definimos el modelo inicial así vemos la estructura que va a tener
    iris_modelo = {
            iris:[], // Base de datos entera
            tipos:["setosa","virginica","versicolor"],
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
        
        iris_modelo.iris = iris;

        iris.reduce((acc, curr, i) => {
            iris_sumarActual(acc, curr);
            if(i == iris.length - 1){

                iris_calcularmedias(iris_modelo);
                // copiar objeto sumas en medias, aunque nos sobren variables no importa
                iris_modelo.modeloComponente1.medias = iris_modelo.sumas;
            }
            return acc;
        }, iris_modelo);
        
        // Se llama a la vista por primera vez
        iris_view(iris_modelo);
        iris_viewComponente2(iris_modelo);
    });


} 
//  {"sepalLength": 5.1, "sepalWidth": 3.5, "petalLength": 1.4, "petalWidth": 0.2, "species": "setosa"},
    // {tipo:"setosa", petalLengthSum:0, sepalLengthSum:0, count:0

function iris_sumarActual(modelo, florIris){
    modelo.sumas.forEach(counter => {
        if(florIris.species == counter.tipo){
            counter.petalLengthSum = counter.petalLengthSum +florIris.petalLength;
            counter.sepalLengthSum = counter.sepalLengthSum +florIris.sepalLength;
            counter.count = counter.count + 1;
        }
    });
}

function iris_calcularmedias(modelo){
    modelo.sumas.forEach(counter => {
        counter.petalLengthAvg = counter.petalLengthSum/ counter.count;
        counter.sepalLengthAvg = counter.sepalLengthSum/ counter.count;
    });
}


function iris_view(modelo){
    
    iris_viewComponente1(modelo.modeloComponente1);
    
}

function iris_viewComponente1(modelo){

    const selectedTipo = modelo.medias
    .filter(media => media.tipo == modelo.seleccionado)
    .pop();

    const html = "<p>Petal length average: "+selectedTipo.petalLengthAvg+"</p>"
    + "<p>Sepal length average: "+selectedTipo.sepalLengthAvg+"</p>";

    let componente1 = document.getElementById("component1");
    componente1.innerHTML = iris_vistaDropDown(modelo) + html;
}

function iris_vistaDropDown(modelo){

    const label = "<label for='tipos-iris'>Tipo Iris:</label>";
    
    const listaOpciones = 
    '<select name="tipos-iris" onchange="iris_updateComponente1();" id="tipos-iris">'
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

function iris_updateComponente1(){
    iris_modelo.modeloComponente1.seleccionado = document.getElementById("tipos-iris").value;

    iris_viewComponente1(iris_modelo.modeloComponente1);
}

function iris_viewComponente2(modelo){
    polt(modelo, flor => flor.petalLength, flor => flor.sepalLength, "p1", [0, 7], [4, 8.2]);
    polt(modelo, flor => flor.petalWidth, flor => flor.sepalWidth, "p2", [0, 4], [0, 5]);
    polt(modelo, flor => flor.petalLength, flor => flor.sepalWidth, "p3", [0, 8], [0, 5]);
    polt(modelo, flor => flor.petalWidth, flor => flor.sepalLength, "p4", [0, 4], [4, 8.2]);
}

function polt(modelo, attr1, attr2, componente, rangex, rangey){

    var data = modelo.tipos.map(type => {
        const filtered = modelo.iris.filter(flor => flor.species==type);
        return {
            x: filtered.map(attr1),
            y: filtered.map(attr2),
            mode: 'markers',
            type: 'scatter',
            name: type,
            marker: { size: 12 }
          };
    });
    
    var layout = {
    xaxis: {
        range: rangex
    },
    yaxis: {
        range: rangey
    },
    title:'Sepal vs Petal lengths',
    autosize: false,
    width: 500,
    height: 500,
    margin: {
      l: 50,
      r: 50,
      b: 100,
      t: 100,
      pad: 4
    },
    };
    
    Plotly.newPlot(componente, data, layout);
}