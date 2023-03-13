function riosNivel(){

    let rio = [];
    let rios = [['HIATO','X',51],['CHICAMOCHA','Y',10],['SOGAMOSO','X',5],['OPON','W',30],['LEBRIJA','E',2]];
    let riosR = [];
    let riosN = [];
    op = parseInt(prompt("Digite 0, para salir"));

    switch(op){

        case 1:
            do{
                let nombre = prompt('Ingrese el sitio del rio: ').toUpperCase();
                let ubicacion = prompt('Inserte ubicación del Río: ');
                let caudal = parseInt(prompt('Inserte profunudida del Río (m): '));
                rios.push([nombre, ubicacion, caudal]);

            }while(!isNaN(prompt('Ingrese cualquier numero para agregar otro rio, presione una letra para salir',"")));
        
        case 2:
            rio = [];
            riosR = rios.filter(rio => rio[2]>50);
            rio = [...riosR];
            console.table(rio);
            break;

        case 3:

            rio = [];
            riosN = rios.filter(rio = rio[2]>=30 && rio[2] <50);
            rio = [...riosN];
            console.table(rio);
            break;
        
        case 4: 

            let rioBuscar = prompt('Ingrese el nombre a buscar:').toUpperCase();
            rio = [];
            let riosE = rios.filter(rio => rio[0].toUpperCase.includes(rioBuscar));
            console.table(riosE);         
            // for(let i=0; i < rios.length;i++){
            //     if(rios[i][0]==rioBuscar){
            //         console.log(rios[i]);
            //     }
            // }
            break;


        case 5: 

        let rioDel = prompt('Ingrese el nombre a buscar:').toUpperCase();
        rio = [];
        let rioD = rios.splice(rios.indexOf(rioDel),1);
        console.warn("Eliminado"+rioD);  


            // for(let i=0; i < rios.length;i++){
            //     for(let r=1; r < rios[i].length;r++){
            //         if(rios[i][r]<3){
            //             console.log(rios.indexOf(rios[i]))
            //             rioEliminar.push(rios[i][0]);
            //         }
            //     }           
            // }

            // for(let i=0; i < rioEliminar.length;i++){
            //     rios.splice(rio.indexOf(rioEliminar[i][0]))
            // }

            console.log(rios);

        break;
        
        default:
            console.log('exit')
        
    }

}

riosNivel();
