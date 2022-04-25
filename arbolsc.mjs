export default class Arbol {

    raiz;
    flag;

    constructor() {
        this.raiz = null;
    }

    tieneRuta(raiz, arr, direcciones, x) {
        if (raiz === null) {
            return false;
        }
        arr.push(raiz.llave);
        direcciones.push(raiz.object);
        if (raiz.llave === x) {
            return true;
        }
        if (this.tieneRuta(raiz.izquierda, arr, direcciones, x) ||
            this.tieneRuta(raiz.derecha, arr, direcciones, x)) {
            return true;
        }
        arr.pop();
        direcciones.pop();
        return false;
    }

    printRuta(raiz, x) {
        let arr = [];
        let direcciones = [];

        if (this.tieneRuta(raiz, arr, direcciones, x)) {
            for (let i = 0; i <= arr.length - 1; i++) {
                if (i === arr.length -1){
                    console.log(direcciones[direcciones.length - 1]);  
                    return;
                }
                console.log(direcciones[i]);//-arr.get(i) + " " + 
                //1). ponti, 2). giron, 3) la 27
            }
        } else {
            console.log("No tiene ruta");
        }
    }

    buscarNodo(temp, valor) {
        if (this.raiz === null) {
            console.log("el arbol esta vacio");
        }
        else {
            //Si el valor se encuentra en el árbol binario dado, establezca el indicador en verdadero
            if (temp.llave === valor) {
                this.flag = true;
                return true;
            }
            //Buscar en el subárbol izquierdo
        } if (this.flag === false && temp.izquierda != null) {
            this.buscarNodo(temp.izquierda, valor);
            //Buscar en el subárbol derecho
        } if (this.flag === false && temp.derecha != null) {
            this.buscarNodo(temp.derecha, valor);
        }
    }
    //conocer las hojas e imprimirlas 
    hojasNodos(raiz) {
        if (raiz === null) {
            return;
        }
        if (raiz.izquierda === null && raiz.derecha === null) {
            console.log(raiz.object + " ");
            return;
        }

        if (raiz.izquierda != null) {
            this.hojasNodos(raiz.izquierda);
        }
        if (raiz.derecha != null) {
            this.hojasNodos(raiz.derecha);
        }
    }

    //contar cuantos nodos hay
    cuentaNodos(nodo) {

        let contador = 1;

        if (nodo.izquierda != null) {
            contador += this.cuentaNodos(nodo.izquierda);
        }
        if (nodo.derecha != null) {
            contador += this.cuentaNodos(nodo.derecha);
        }
        return contador;
    }

    //metodo insertar
    insertar(i, fruta) {
        let n = new Nodo(i);
        n.object = fruta;

        if (this.raiz === null) {
            this.raiz = n;

        } else {
            let aux = this.raiz;
            while (aux != null) {
                n.raiz = aux;
                if (n.llave >= aux.llave) {
                    aux = aux.derecha;
                } else {
                    aux = aux.izquierda;
                }
            }
            if (n.llave < n.raiz.llave) {
                n.raiz.izquierda = n;
            } else {
                n.raiz.derecha = n;
            }
        }
    }

    //metodo altura

    altura(temp) {
        if (raiz === null) {
            console.log("El arbol esta vacio");
            return 0;
        } else {
            let alturaIzquierda = 0, alturaDerecha = 0;

            if (temp.izquierda != null) {
                alturaIzquierda = this.altura(temp.izquierda);
            }
            if (temp.derecha != null) {
                alturaDerecha = this.altura(temp.derecha);
            }

            let max = (alturaIzquierda > alturaDerecha) ? alturaIzquierda : alturaDerecha;

            return (max + 1);
        }
    }


    //metodo recorrer
    recorrer(n) {
        if (n != null) {
            console.log("Indice " + n.llave + " objeto " + n.object);
            this.recorrer(n.izquierda);
            this.recorrer(n.derecha);
        }
    }

    //metodo PreOrder
    preOrder(n) {
        if (n != null) {
            console.log("Indice " + n.llave + " objeto " + n.object);
            this.recorrer(n.izquierda);
            this.recorrer(n.derecha);
        }
    }
    inOrder(n) {
        if (n != null) {
            this.recorrer(n.izquierda);
            console.log("Indice " + n.llave + " objeto " + n.object);
            this.recorrer(n.derecha);
        }
    }
    postOrder(n) {
        if (n != null) {
            this.recorrer(n.izquierda);
            this.recorrer(n.derecha);
            console.log("Indice " + n.llave + " objeto " + n.object);
        }
    }


    //metodo remuve 
    remuveLlave(llave) {
        this.raiz = remuveRec(this.raiz, llave);
    }

    remuveRec(raiz, llave) {
        if (raiz === null) {
            return raiz;
        }
        if (llave < raiz.llave) {
            raiz.izquierda = this.remuveRec(raiz.izquierda, llave);
        } else if (llave > raiz.llave) {
            raiz.derecha = this.remuveRec(raiz.derecha, llave);
        } else {
            if (raiz.izquierda === null) {
                return raiz.derecha;
            } else if (raiz.derecha === null) {
                return raiz.izquierda;
            }

            raiz.llave = this.valorMin(raiz.derecha);
            raiz.derecha = this.remuveRec(raiz.derecha, raiz.llave);
        }
        return raiz;
    }

    valorMin(raiz) {
        valm = raiz.llave;
        while (raiz.derecha != null) {
            valm = raiz.izquierda.llave;
            raiz = raiz.izquierda;
        }
        return valm;
    }
}

class Nodo {
    raiz;
    derecha;
    izquierda;
    llave;
    object;

    constructor(indice) {
        this.llave = indice;
        this.derecha = null;
        this.izquierda = null;
        this.raiz = null;
        this.object = null;
    }
}
