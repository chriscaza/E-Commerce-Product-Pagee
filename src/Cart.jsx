import PropTypes from  'prop-types';
import { useContext, useEffect, useState } from "react"
import { CantidadContext } from "./main"
import Producto from "./assets/chico-product-1.jpg"
import Delete from './assets/icon-delete.svg?react'

const Cart = ({show}) => {

    const { cantidad } = useContext( CantidadContext );
    //Estos datos estan aquí declarados porque en el caso que fuera un ecommerce real esto se debería obtener de una base de datos
    //El componente de Select solo debería mandar el SKU del producto y la CANTIDAD
    const precio = 125.00;
    const producto = "Fall Limited Edition Sneakers";
    const[empty, setEmpty] = useState(true);
    const[show1, setShow1] = useState(true);

    useEffect(() => {
        setEmpty(cantidad === 0);
    }, [cantidad] );

    return(
        <div className="w-80 rounded-xl drop-shadow-xl bg-white" hidden={show}>
            <div className='px-4 py-5 border-b-2 border-lightGrayishBlue'>
                <p className='font-bold'>Cart</p>
            </div>
            <div className='p-4' hidden={ empty }>
                <div className='flex mb-4 items-center justify-between'>
                    <div>
                        <img src={Producto} alt="producto" className='w-12 h-12 rounded-md' />
                    </div>
                    <div>
                        <p className='text-sm text-darkGrayishBlue'>{producto}</p>
                        <p className='inline'>${precio} x {cantidad}</p><p className='font-bold inline'> ${precio*cantidad}</p>
                    </div>
                    <div>
                        <button>
                            <Delete className="fill-darkGrayishBlue hover:fill-veryDarkBlue"/>
                        </button>
                    </div>
                </div>
                <div>
                    <button className='bg-orange w-full rounded-md py-4 font-semibold leading-3 text-white relative' onMouseOver={ () => setShow1( false ) } onMouseLeave={ () => setShow1( true ) } >
                        Checkout
                        <div className='absolute top-0 bg-paleOrange bg-opacity-25 w-full h-full rounded-md' hidden={show1}></div>
                    </button>
                </div>
            </div>
            <div className='flex justify-center'>
                <p className='font-bold text-darkGrayishBlue my-14' hidden={ !empty }>Your cart is empty.</p>
            </div>
        </div>
    )

}

Cart.propTypes = {
    show: PropTypes.bool
}

export default Cart