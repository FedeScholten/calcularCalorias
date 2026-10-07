class Comida{
    constructor(calorias,carbos,grasa,fibra,proteinas){
        this.calorias = calorias;
        this.carbos = carbos;
        this.grasa = grasa;
        this.fibra = fibra;
        this.proteinas = proteinas;
    }
    calcular_calorias(gramos){
        return (this.calorias * gramos)/100;
    }
    calcular_carbos(gramos){
        return (this.carbos * gramos)/100;
    }
    calcular_grasa(gramos){
        return (this.grasa * gramos)/100;
    }
    calcular_fibra(gramos){
        return (this.fibra * gramos)/100;
    }
    calcular_proteinas(gramos){
        return (this.proteinas * gramos)/100;
    }
    
}

let calorias_buscadas = 1850;
let proteinas_buscadas = 175; 
let grasas_buscadas = 65;
let carbohidratos_buscados = 150;
class Huevo extends Comida{
        calcular_calorias(cantidad){
        return this.calorias*cantidad;
    }
    calcular_carbos(cantidad){
        return this.carbos*cantidad;
    }
    calcular_grasa(cantidad){
        return this.grasa*cantidad;
    }
    calcular_fibra(cantidad){
        return this.fibra*cantidad;
    }
    calcular_proteinas(cantidad){
        return this.proteinas*cantidad;
    }
}


let peso_fede = 84;


let fideos_integrales = new Comida(345,62,2.4,10,13.5);
let fideos_lentejas = new Comida(334,50,1.7,7.6,26)
let lentejas = new Comida(320,48,1.2,9.6,24.5);
let arroz = new Comida(345,76,0.7,0,7.9);
let arroz2 = new Comida(101,21,0.4,1.3,2.8);
let papa = new Comida(62,12.4,0.5,2.3,1.8);
let pan_integral = new Comida(223,38,2.5,7,9.1);
let proteina_disec = new Comida(385,1.2,1,0,93);
let mani_disec = new Comida(416,21,13.2,13.3,46.7);



let pollo = new Comida(108,0.5,1.8,0,22);
let lomo = new Comida(152,0,8.9,0,18);
let pescado = new Comida(82,0.5,1.2,0,18);
let atun = new Comida(98,0.9,1.2,0,21);
let crusto = new Comida(129,0.5,3.8,0,22);
let jamon_crudo = new Comida(268,0,15,0,33);
let jamon = new Comida(102,0.9,2.5,0,19);
let pavo = new Comida(102,0,0.9,0,24)
let huevo = new Comida(150,0,11,0,12,5);
let queso_light =  new Comida(267,1.6,17,0,27);
let leche_soja = new Comida(36,1.2,1.9,0.4,3.4);
let salmon = new Comida(171,0,9.1,0,22);
let AOVE = new Comida(822,0,91.4,0,0);


let brocoli = new Comida(29,1.8,0.4,3,3);
let zanahoria = new Comida(41,9.6,0,2.8,0.9);
let pimientos = new Comida(25,4,0,1.5,1);
let cebolla = new Comida(42,8,0,2,1.2);
let arandano = new Comida(42,8,0.5,3,0.5);
let manzana = new Comida(52,14,0.2,2.4,0.2);
let frutilla = new Comida(33,7.5,0.3,2,0.7);
let chocolate = new Comida(525,35,42,9.7,8.7);
let frutaCongelada = new Comida(65,9.7,0,6.7,2);
function calcular(lista){
    let kcal = 0;
    lista.forEach(element => {
        let caloriaTemporal = element[0].calcular_calorias(element[1]);
        kcal = kcal + caloriaTemporal;
    });
    let cH = 0;
    lista.forEach(element => {
        let cHTemporal = element[0].calcular_carbos(element[1]);
        cH = cH + cHTemporal;
    });
    let gras = 0;
    lista.forEach(element => {
        let grasaTemporal = element[0].calcular_grasa(element[1]);
        gras = gras + grasaTemporal;
    });
    let fib = 0;
    lista.forEach(element => {
        let fibraTemporal = element[0].calcular_fibra(element[1]);
        fib = fib + fibraTemporal;
    });
    let prot = 0;
    lista.forEach(element => {
        let protTemporal = element[0].calcular_proteinas(element[1]);
        prot = prot + protTemporal;
    });
    let res = [kcal,cH,gras,fib,prot];
    // let res = `En esta comida consumiste, ${kcal} calorias, ${cH}g de carbohidratos, ${gras}g de grasa, ${fib}g de fibra y ${prot}g de proteina .`;
    return res; 
}

let L = [[fideos_integrales,100],[huevo,200],[pan_integral,82.5],[jamon_crudo,30],[jamon,50],[papa,350],[pollo,150],[AOVE,10],[leche_soja,350],[proteina_disec,30],[mani_disec,30],[arroz,100],[atun,55],[frutaCongelada,100]];
let M = [[fideos_integrales,100],[huevo,200],[pan_integral,82.5],[jamon_crudo,30],[jamon,50],[papa,350],[pavo,150],[AOVE,10],[leche_soja,350],[proteina_disec,30],[mani_disec,30],[arroz,100],[salmon,50],[frutaCongelada,100]];
let x = [[fideos_integrales,100],[huevo,200],[pan_integral,82.5],[jamon_crudo,30],[jamon,50],[papa,350],[crusto,100],[AOVE,10],[leche_soja,350],[proteina_disec,30],[mani_disec,30],[arroz,100],[pescado,100],[frutaCongelada,100]];
let J = [[fideos_integrales,100],[huevo,200],[pan_integral,82.5],[jamon_crudo,30],[jamon,50],[papa,350],[pollo,150],[AOVE,10],[leche_soja,350],[proteina_disec,30],[mani_disec,30],[arroz,100],[atun,55],[frutaCongelada,100]];
let V = [[fideos_integrales,100],[huevo,200],[pan_integral,82.5],[jamon_crudo,30],[jamon,50],[papa,350],[pavo,150],[AOVE,10],[leche_soja,350],[proteina_disec,30],[mani_disec,30],[arroz,100],[salmon,50],[frutaCongelada,100]];
let S = [[fideos_integrales,100],[huevo,200],[pan_integral,82.5],[jamon_crudo,30],[jamon,50],[papa,350],[crusto,100],[AOVE,10],[leche_soja,350],[proteina_disec,30],[mani_disec,30],[arroz,100],[pescado,100],[frutaCongelada,100]];
let D = [[fideos_integrales,100],[huevo,200],[pan_integral,82.5],[jamon_crudo,30],[jamon,50],[papa,350],[AOVE,10],[leche_soja,350],[proteina_disec,30],[mani_disec,30],[arroz,100],[frutaCongelada,100]];
// let desayunoLunes = [[pan_integral,82.5],[jamon_crudo,30],[jamon,50],[papa,350],[pollo,150],[AOVE,10]];
// let meriendaLunes = [[leche_soja,350],[proteina_disec,30],[mani_disec,30]];
// let cenaLunes = [[arroz,100],[atun,100]];
let lunesFinal = calcular(L);
let martesFinal = calcular(M);
let miercolesFinal = calcular(x);
let juevesFinal = calcular(J);
let viernesFinal = calcular(V);
let sabadoFinal = calcular(S);
let domingoFinal = calcular(D);


function raiz_cuadrada(num,numeroEstimativo){
    let potencialRaiz = (Math.round((num/numeroEstimativo)*100000000000))/100000000000;
    let numeroAbuscar = Math.floor(potencialRaiz * potencialRaiz);
    if( numeroAbuscar == num){
        return potencialRaiz;
    }else{
        let nuevoNumeroEstimativo = (numeroEstimativo + potencialRaiz)/2;
        return raiz_cuadrada(num,nuevoNumeroEstimativo);
    }   
}

function final(lista){
    let res = `En este dia consumiste, ${lista[0]} calorias, ${lista[1]}g de carbohidratos, ${lista[2]}g de grasa, ${lista[3]}g de fibra y ${lista[4]}g de proteina .`;
    return res;
}
console.log("Lunes: " + final(lunesFinal));
console.log("Martes: " + final(martesFinal));
console.log("Miercoles: " + final(miercolesFinal));
console.log("Jueves: " + final(juevesFinal));
console.log("Viernes: " + final(viernesFinal));
console.log("Sabado: " + final(sabadoFinal));
console.log("Domingo: " + final(domingoFinal));
