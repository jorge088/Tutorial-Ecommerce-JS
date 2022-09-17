//Clases
class Producto{
    constructor(id,nombre,precio, categoria){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
}

//Variables
let productos =[
    new Producto(1,"Notebook Asus",180000,"Notebooks"),
    new Producto(2,"Mouse Logitech",9000,"Mouse"),
    new Producto(3,"Teclado Redragon",12000,"Teclado"),
    new Producto(4,"Monitor",40000,"Monitores"),
]

let carrito = [];


// productos.forEach(producto =>{
//     alert(`Producto ${producto.nombre} - ${producto.precio}`);
// })


//Maneja todo el funcionamiento de comprar productos
const comprarProductos = () =>{
    let respuesta = '';
    
    do{
        let nombreProducto = prompt(generarMenuProductos());

        let producto = productoExiste(nombreProducto);

        //Si el producto existe dentro del array se lo agrega
        if ( producto ){
            alert(`El producto agregado es: ${producto.nombre}`);
            carrito.push(producto);
        }else{
            //Si no existe, se muestra un mensaje de error
            alert(`El producto no existe! Escriba bien el nombre`);
            continue;
        }

        respuesta = prompt(`¿Quiere comprar otro producto? (SI - NO)`);
    }while(respuesta.toLowerCase() != "no");
    mostrarCarrito();
    carrito = [];
    
}

//Genera y formatea la cadena de texto con la información de los productos disponibles
const generarMenuProductos = () =>{
    let menu =`Estos productos tenemos para ofrecerte\n\n`
    productos.forEach(producto =>{
        menu+=`* ${producto.nombre} - $${producto.precio} \n`
    });
    menu+=`\nIngrese el nombre del producto que quiere comprar.`
    return menu;
}

//Verifica si un producto está dentro del array productos
const productoExiste = (nombre) =>{
    return productos.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());
}

//Muesta un alert con un resumen del carrito de compras: productos y precio final
const mostrarCarrito = () =>{
    let texto = `El resumen de su compra es: \n\n`
    carrito.forEach(item =>{
        texto += `* ${item.nombre} - $${item.precio} \n`
    });
    texto += `\n\nEl precio total es : $${calcularPrecioFinal()}`;
    alert(texto);
}

//Calcula y devuelve el total de los precios de los productos agregados en el carrito
const calcularPrecioFinal = () =>{
    let total = 0;
    carrito.forEach(producto =>{
        total+=producto.precio;
    })
    return total;
}

alert(`¡Bienvenido a Compumundo!`)

let respuesta = parseInt(prompt(`Que operacion va a realizar, escriba el numero
1 - Comprar productos.
2 - Registrar productos.
3 - Salir`));

while(respuesta != 3){

    switch(respuesta){
        case 1:
            alert(`Ingresando al menu de compra...`);
            comprarProductos();
            break;
        case 2:
            alert(`Ingresando al registro de productos...`);
            //proximamente
            break;
        default:
            alert(`Opcion incorrecta!`);
            break
    }
    respuesta = parseInt(prompt(`Que operacion va a realizar, escriba el numero
1 - Comprar productos.
2 - Registrar productos.
3 - Salir`));
}

alert(`Fin del programa`);

