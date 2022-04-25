import Arbol from './arbolsc.mjs';

class Main {

    main() {
        let arbol = new Arbol();

        arbol.insertar(5, "ponti: punto de partida");
        arbol.insertar(8, "cañaveral");
        arbol.insertar(3, "giron");
        arbol.insertar(4, "la 27");
        arbol.insertar(1, "el llano")
        arbol.insertar(9, "piedecuesta");
        arbol.insertar(7, "floridablanca");
        /*arbol: 
                5"ponti"
               /          \
           3"giron"        8"cañaveral"
          /    \                   /             \
1"el llano""     4" la 27"        7"floridablanca"  9"piedecuesta"

        */
        // arbol.buscarNodo(arbol.raiz, 4);
        // if (arbol.flag) {
        //     console.log("El elemento esta en el arbol");
        // } else {
        //     console.log("El elemento no esta en el arbol");
        // }
        console.log("La ruta más cercana es: ");
        arbol.printRuta(arbol.raiz, 11);//
    }
}

const main = new Main();
main.main()
