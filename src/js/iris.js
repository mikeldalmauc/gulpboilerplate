let modeloComponente1 = {}

function initComponente1(){

    modeloComponente1 = {
        seleccionado: "virginica",
        medias: [
            {tipo:"setosa", petalLengthAvg:5.4, sepalLengthAvg:4.3},
            {tipo:"virginica", petalLengthAvg:4.7, sepalLengthAvg:7.3},
            {tipo:"versicolor", petalLengthAvg:3.4, sepalLengthAvg:2.3},
        ]
    }

    viewComponente1(modeloComponente1);
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
    modeloComponente1.seleccionado = document.getElementById("tipos-iris").value;

    viewComponente1(modeloComponente1);
}