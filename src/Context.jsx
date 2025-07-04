import { createContext } from "react";
import { useState, useEffect } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Context = createContext()
const ContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const [cargando, setCargando] = useState(true)

    function VaciarCarrito() { setCart([]) };

    const [products, setProducts] = useState([])

    const countProducts = cart.reduce((acc, el) => acc + el.cantidad, 0)

    const [active, setActive] = useState(false)

    const [busqueda, setBusqueda] = useState("")

    const productosFiltrados = products.filter((product) => product?.nombre.toLowerCase().includes(busqueda.toLowerCase()))

    const [isAuthenticated, setIsAuth] = useState(false)

    useEffect(() => {
        fetch('/Data.json')
            .then((res) => res.json())
            .then(datos => {
                setTimeout(() => {
                    setProducts(datos),
                        setCargando(false)
                },
                    1000)
            })
    }, [])

    const deleteProductCart = (product) => {

        toast.success('El producto fue eliminado!', {
            position: "top-right",
            autoClose: 1400,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            
        });

        ;
        <ToastContainer />
        setCart(prevCart => {
            return prevCart.map(el => {
                if (el.id === product.id) {
                    if (el.cantidad > 1) {
                        return { ...el, cantidad: el.cantidad - 1 };
                    } else {
                        return null; // Si quantity es 1, marcamos para eliminar
                    }
                } else {
                    return el; // Si no es el producto, lo dejamos igual
                }
            }).filter(el => el !== null); // Quitamos los productos nulos
        });
    };


    return (
        <Context.Provider value={{ cargando, setCargando, cart, setCart, VaciarCarrito, active, setActive, countProducts, products, setProducts, productosFiltrados, busqueda, setBusqueda, isAuthenticated, setIsAuth, deleteProductCart }}>
            {children}
            <ToastContainer />
        </Context.Provider>

    )
}

export default ContextProvider