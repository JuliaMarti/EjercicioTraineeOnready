
class Vehiculo{

    constructor(marca, modelo, precio){
        var __marca = marca;
        var __modelo = modelo; 
        var __precio = precio; 


        this.setMarca = (newMarca) => {  
            __marca = newMarca;
        }

        this.getMarca = () => {
            return __marca;
        }

        
        this.setModelo = (newModelo) => {  
                __modelo = newModelo;
        }

        this.getModelo = () => {
            return __modelo;
        }


        this.setPrecio = (newPrecio) => {  
                __precio = newPrecio;
        }

        this.getPrecio = () => {
            return __precio;
        }



        this.precioFormateado = () => {

            var numPrecio = this.getPrecio();
            var precioFormateado = numPrecio.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });

            // Para que la consola se exactamente igual no debería haber espacio entre el $ y el numero
            // Para eso substraemos los dos primeros caracteres "$ " y le volvemos a agregar "$"
            return '$' + precioFormateado.substr(2);
        }

        this.imprimirMarcaModelo = () => {
            return `${this.getMarca()} ${this.getModelo()}`;
        }

    }
}




class Auto extends Vehiculo{
    constructor(marca, modelo, precio, puertas){
        super(marca, modelo, precio);
        var __puertas = puertas;
    
        this.setPuertas = (newPuertas) => {  
            __puertas = newPuertas;
        }

        this.getPuertas = () => {
            return __puertas;
        }

        this.imprimirDescripcion = () => {
            const descripcionAuto = `Marca: ${this.getMarca()} // Modelo: ${this.getModelo()} // Puertas: ${this.getPuertas()} // Precio: ${this.precioFormateado()}`;
            console.log(descripcionAuto);
        }
    }
}




class Moto extends Vehiculo{
    constructor(marca, modelo, precio, cilindrada){
        super(marca, modelo, precio);
        var __cilindrada = cilindrada;
    
        this.setCilindrada = (newCilindrada) => {  
            __cilindrada = newCilindrada;
        }

        this.getCilindrada = () => {
            return __cilindrada;
        }

        this.imprimirDescripcion = () => {
            const descripcionMoto = `Marca: ${this.getMarca()} // Modelo: ${this.getModelo()} // Cilindrada: ${this.getCilindrada()}cc // Precio: ${this.precioFormateado()}`;
            console.log(descripcionMoto);
        }
    }
}




const programa = {

    vehiculos: [],

    instanciarVehiculos: function(){
        programa.vehiculos.push(new Auto("Peugeot", "206", 200000.00, 4));
        programa.vehiculos.push(new Auto("Peugeot", "208", 250000.00, 5));
        programa.vehiculos.push(new Moto("Honda","Titan", 60000.00, 125));
        programa.vehiculos.push(new Moto("Yamaha", "YBR", 80500.50, 160));
    },


    imprimirDescripciones: function(){
        programa.vehiculos.forEach(v => v.imprimirDescripcion())
    },



    imprimirSeparador: function(){
        console.log("=============================");
    },


    ordenarVehiculosDeMayorAMenorPrecio: function(){
        programa.vehiculos.sort((v1, v2) => v2.getPrecio() - v1.getPrecio());
    },



    imprimirVehiculoMasCaro: function(){
        const vehiculo = programa.vehiculos[0];
        const elMasCaro = `Vehículo más caro: ${vehiculo.imprimirMarcaModelo()}`;
        console.log(elMasCaro);
    }, 


    imprimirVehiculoMasBarato: function(){
        const indice = programa.vehiculos.length - 1 ;
        const vehiculo = programa.vehiculos[indice];
        const elMasBarato = `Vehículo más barato: ${vehiculo.imprimirMarcaModelo()}`;
        console.log(elMasBarato);
    }, 


    imprimirVehiculoConYEnModelo: function(){
        const vehiculo = programa.vehiculos.find(v => (v.getModelo().includes('Y')));
        const elQueContieneY = `Vehículo que contiene en el modelo la letra ‘Y’: ${vehiculo.imprimirMarcaModelo()} ${vehiculo.precioFormateado()}`;
        console.log(elQueContieneY);

    },


    imprimirVehiculosMayorAMenorPrecio: function(){
        console.log('Vehículos ordenados por precio de mayor a menor:')
        programa.vehiculos.forEach(vehiculo => {
            console.log(vehiculo.imprimirMarcaModelo());
        });
    }


}


programa.instanciarVehiculos();

programa.imprimirDescripciones();

programa.imprimirSeparador();

programa.ordenarVehiculosDeMayorAMenorPrecio();

programa.imprimirVehiculoMasCaro();

programa.imprimirVehiculoMasBarato();

programa.imprimirVehiculoConYEnModelo();

programa.imprimirSeparador();

programa.imprimirVehiculosMayorAMenorPrecio();