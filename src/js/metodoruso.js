
var gridAxisStaggering;
/* 1.POP
 *      Dada una lista de objetos, devuelve el último
 * 
 *  ej:
 *  mr_ultimo([{nombre:"Aba", apellido:"Nos"}
 *    ,{nombre:"Res", apellido:"Tos"}
 *    ,{nombre:"Ser", apellido:"Pas"}]) 
 * 
 *  resultado:
 *  {nombre:"Ser", apellido:"Pas"}
 */
const mr_ultimo = (list) => {
    // TODO
};

/* 2.MAP
        Dada una lista de objetos con nombres, devolver una lista 
 *  de nombres.
*
 *  ej:
 *  mr_nombres([{nombre:"Aba", apellido:"Nos"}
 *    ,{nombre:"Res", apellido:"Tos"}
 *    ,{nombre:"Ser", apellido:"Pas"}]) 
 * 
 *  resultado:
 *  ["Aba", "Res", "Ser"]
 */
const mr_nombres =  (list) => {
    // TODO
};

/* 3.INDEXOF
   Dada una lista de objetos, y un nombre,
 * indicar si el hay algún objeto en la lista con dicho nombre.

 *  ej:
 *  mr_existeNombre([{nombre:"Aba", apellido:"Nos"}
 *    ,{nombre:"Res", apellido:"Tos"}
 *    ,{nombre:"Ser", apellido:"Pas"}], "Res") 
 * 
 *  resultado:
 *  True
 */
const mr_existeNombre = (list, nombre) => {
    // TODO
}

/* 4. FIND
        Dada una lista de objetos, y un apellido,
 *  indicar si el hay algún objeto en la lista con dicho apellido.

 *  ej:
 *  mr_existeApellido([{nombre:"Aba", apellido:"Nos"}
 *    ,{nombre:"Res", apellido:"Tos"}
 *    ,{nombre:"Ser", apellido:"Pas"}], "Nos") 
 * 
 *  resultado:
 *  True
 */
const mr_existeApellido = (list, apellido) => {
    // TODO
}


/* 5.MAP 
        Dada una lista de objetos con nombres y apellido
 *  devolver una lista de nombres y appellido juntos

 *  ej:
 *  mr_nombreCompleto([{nombre:"Aba", apellido:"Nos"}
 *    ,{nombre:"Res", apellido:"Tos"}
 *    ,{nombre:"Ser", apellido:"Pas"}]) 
 * 
 *  resultado:
 *  ["Aba Nos", "Res Tos", "Ser Pas"]
 */
const mr_nombreCompleto = (list) => {
    // TODO
}

/* 6.FILTER 
        Dada una lista de objetos con un campo edad,
    devolver solo aquellos con mas de 17 años
 *  ej:
 *  mr_mayoresDeEdad([{nombre:"Aba", edad:12}
 *    ,{nombre:"Res", edad:18}
 *    ,{nombre:"Ser", edad:55}]) 
 * 
 *  resultado:
 *  [{nombre:"Res", edad:18}, {nombre:"Ser", edad:55}]
 */
const mr_mayoresDeEdad = (list) => {
    // TODO
}

/* 7.FILTER y MAP.
        Dada una lista de objetos con un campo edad,
    devolver solo los nombres de aquellos con menos de 18 años
 *  ej:
 *  mr_menoresNombres([{nombre:"Aba", edad:12}
 *    ,{nombre:"Res", edad:18}
 *    ,{nombre:"Nen", edad:13}]) 
 * 
 *  resultado:
 *  ["Aba", "Nen"]
 */
const mr_menoresNombres = (list) => {
    // TODO
}

/* 8. REDUCE para sumar
*   Dada una lista de numeros, devolver la suma de todos
*  mr_sumarTodos([1, 5, -1, 0]) 
* 
*  resultado:
*  5
*/
const mr_sumarTodos = (list) => {
    // TODO
}

/* 9. JOIN para unir
*   Dada una lista de strings, unirlos por comas
*  mr_commaSepratedValuesCSV(["Aba", "Res","Nen"])

*  resultado:
*  ["Aba,Res,Nen"]
*/
const mr_commaSepratedValuesCSV = (list) => {
    // TODO
}

/* 10. REDUCE para unir
*   Dada una lista de strings, unir por comas todos los que no empiezen por A
*  mr_commaSepratedValuesCSVFilter(["Aba", "Res","Nen"])

*  resultado:
*  ["Res,Nen"]
*/
const mr_commaSepratedValuesCSVFilter = (list) => {
    // TODO
}


/* 11. SORT 
*   Dada una lista de numeros ordernarla de mayor a menor
*  mr_sortBS([2,5,4,7,8,2])

*  resultado:
*  [8,7,5,4,2,2]
*/
const mr_sortBS = (list) => {
    // TODO
}

/* 12. SORT AND INVERT
*   Dada una lista de numeros ordernarla de menor a mayor
*  mr_sortSB([2,5,4,7,8,2])

*  resultado:
*  [2,2,4,5,7,8]
*/
const mr_sortSB = (list) =>{
    // TODO
}

/* 13. SORT
*
*       Dada una lista de numeros ordernarla tal que 
*  los sietes, siempre estén delante, el resto no importa el orden
*  mr_sortSeven([2,5,4,7,8,2])

*  resultado:
*  [7,2,2,4,8,5]
*/
const mr_sortSeven = (list) => {
    // TODO
}


/* 14. REDUCE como alternativa al FOR

*       Dada una lista de objetos, devolver un objeto que contenga
*   el numero de alumnos,
*   la suma de las edades, 
*   la suma de las alturas,  
*   numero de rubios,
*   numero de morenos
*   tipos de mascota distintos
*
*
*  contarDatos([{nombre:"Aba", edad:12, altura:130, pelo:"rubio", mascota:"perro"}
 *    ,{nombre:"Res", edad:18, altura:140, pelo:"rubio", mascota:"gato" }
 *    ,{nombre:"Ser", edad:13, altura:150, pelo:"moreno", mascota:""}]) 

*  resultado:
*  {alumnos:3, sumaEdades:43, sumaAlturas:420, rubios:2, morenos:1, mascotas:["perro", "gato"]}
*/
const mr_contarDatos = (list) => {
// TODO
}

function mr_test(){
    const numbers = [2,5,4,7,8,2,-1,22,666,12];
    const listNombres = [{nombre:"Aba", apellido:"Nos", edad:15}
                        ,{nombre:"Res", apellido:"Tos", edad:18}
                        ,{nombre:"Ser", apellido:"Pas", edad:13}
                        ,{nombre:"Anh", apellido:"Kas", edad:23}
                        ,{nombre:"Tes", apellido:"Tos", edad:24}
                        ,{nombre:"Win", apellido:"Dow", edad:15}
                        ,{nombre:"Fio", apellido:"Rdo", edad:16}];
                        
    const contarDatos = [{nombre:"Aba", edad:12, altura:130, pelo:"rubio", mascota:"perro"}
                        ,{nombre:"Res", edad:18, altura:140, pelo:"rubio", mascota:"gato" }
                        ,{nombre:"Res", edad:18, altura:140, pelo:"rubio", mascota:"perro" }
                        ,{nombre:"Res", edad:18, altura:140, pelo:"moreno", mascota:"gato" }
                        ,{nombre:"Res", edad:18, altura:140, pelo:"moreno", mascota:"huron" }
                        ,{nombre:"Ser", edad:13, altura:150, pelo:"moreno", mascota:""}];

    const contarDatosRes = {alumnos:6, sumaEdades:97, sumaAlturas:840, 
        rubios:3, morenos:3, mascotas:["perro", "gato", "huron"]};

   const tests =  
    [{data:[listNombres], res:listNombres[listNombres.length-1], fun:mr_ultimo}   
    ,{data:[listNombres], res:["Aba", "Res", "Ser", "Anh", "Tes", "Win","Fio"],fun:mr_nombres}
    ,{data:[listNombres, "Tes"], res:true, fun: mr_existeNombre}
    ,{data:[listNombres, "Yos"], res:false, fun: mr_existeNombre}
    ,{data:[listNombres, "Dow"], res:true, fun: mr_existeApellido}
    ,{data:[listNombres, "Chow"], res:false, fun: mr_existeApellido}
    ,{data:[listNombres], res:   ["Aba Nos", "Res Tos", "Ser Pas","Anh Kas","Tes Tos", "Win Dow","Fio Rdo"]
                               , fun: mr_nombreCompleto}
    ,{data:[listNombres], res:listNombres, fun: mr_mayoresDeEdad}
    ,{data:[listNombres], res:["Nos","Pas","Dow","Rdo"], fun: mr_menoresNombres}
    ,{data:[[1, 0, 500, 17, 123,-55] ], res:586, fun: mr_sumarTodos}
    ,{data:[["Nos","Pas","Dow","Rdo"]], res:"Nos,Pas,Dow,Rdo", fun: mr_commaSepratedValuesCSV}
    ,{data:[["Aos","Pas","Aow","Rdo"]], res:"Pas,Rdo", fun: mr_commaSepratedValuesCSVFilter}
    ,{data:[numbers], res:[666,22,12,8,7,5,4,2,2,-1], fun: mr_sortBS}    
    ,{data:[numbers], res:[666,22,12,8,7,5,4,2,2,-1].reverse(), fun: mr_sortSB}    
    ,{data:[numbers], res:[7,2,5,4,8,2,-1,22,666,12], fun: mr_sortSeven}
    ,{data:[contarDatos], res:contarDatosRes, fun: mr_contarDatos}
    ];

    let correct = 0;
    let id = 1;

    let results = 
    {
        list: tests.map(test => {
            const result = test.data[0].length <2? test.fun(test.data[0]): test.fun(test.data[0], test.data[1]);

            if(JSON.stringify(result) ==JSON.stringify(test.res)){
                correct++;
                return {id: id++, t_name: test.fun.name, t_result:"t-succ", expected:test.res, result:result}
            }else{
                return {id: id++, t_name: test.fun.name, t_result:"t-fail", expected:test.res, result:result}
            }})
    };

    results.total = tests.length;
    results.correct = correct;
    
    mr_view(results);
}

function mr_view(results){
    // crear la lista
    let container = document.getElementById("test-results");
    let ul = document.createElement("ol");
    ul.innerHTML = results.list
        .map(r =>
              "<li class="+r.t_result+">"+r.t_name
            + "<span class='tooltip-text'>"+"Expected: " + JSON.stringify(r.expected)+"\n Actual: "+ JSON.stringify(r.result)+"</span>"
            + "</li>")
        .join("");
    
    container.append(ul);

    // Resumen
    let summary = document.createElement("div");
    summary.className = "mr-summary";
    summary.innerHTML = results.correct + "/" + results.total;

    // Animación
    container.append(summary);

    const grid = document.createElement("div");
    grid.id = "mr-grid";

    container.append(grid);
    $("#mr-grid").load("staggeringGrid.html", (callback) => {
                
        const squares = $('.staggering-axis-grid-demo .el').length;

        $('.staggering-axis-grid-demo .el').each(function(index, element) {
            if((results.correct> 0 && index/squares < results.correct/results.total) || results.correct==results.total){
                $( element ).css( "backgroundColor", "#00AA00");
            }else{
                $( element ).css( "backgroundColor", "#AA0000");
            }
        });
    }); 


    gridAxisStaggering = function() {  
        anime({
            targets: '.staggering-axis-grid-demo .el',
            translateX: anime.stagger(10, {grid: [14, 5], from: 'center', axis: 'x'}),
            translateY: anime.stagger(10, {grid: [14, 5], from: 'center', axis: 'y'}),
            rotateZ: anime.stagger([0, 90], {grid: [14, 5], from: 'center', axis: 'x'}),
            delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
            easing: 'easeInOutQuad'
        });
    };
    
}

function stagger(){
    gridAxisStaggering();
};

function restartGrid(){
    $('.staggering-axis-grid-demo .el').css({'transform': ''});
};