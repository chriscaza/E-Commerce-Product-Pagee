import Logo from './assets/logo.svg?react'
import Carrito from './assets/icon-cart.svg?react'
import Avatar from './assets/image-avatar.png'
import Cart from './Cart'
import { useState, useContext } from "react"
import { CantidadContext } from "./main"

const Menu = () => {

    const[bandera, setBandera] = useState(true);
    const { cantidad } = useContext( CantidadContext );

    return (
        
            <div className='w-full h-24 flex justify-center'>
                <div className='w-3/4 flex items-center justify-between border-b-2 border-grayishBlue relative'>
                    <div className='h-full flex items-center'>
                        <div className='mr-3 lg:mr-7'>
                            <Logo/>
                        </div>
                        <div className='h-full flex items-center'>
                            <button className='text-darkGrayishBlue hover:text-veryDarkBlue mr-3 h-full hover:border-b-4 hover:border-orange'>Collections</button>
                            <button className='text-darkGrayishBlue hover:text-veryDarkBlue mr-3 h-full hover:border-b-4 hover:border-orange'>Men</button>
                            <button className='text-darkGrayishBlue hover:text-veryDarkBlue mr-3 h-full hover:border-b-4 hover:border-orange'>Women</button>
                            <button className='text-darkGrayishBlue hover:text-veryDarkBlue mr-3 h-full hover:border-b-4 hover:border-orange'>About</button>
                            <button className='text-darkGrayishBlue hover:text-veryDarkBlue h-full hover:border-b-4 hover:border-orange'>Contact</button>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center'>
                            <div>
                                <button onClick={ () => setBandera(!bandera) } className='relative'>
                                    <Carrito className="fill-darkGrayishBlue hover:fill-veryDarkBlue"/>
                                    {cantidad > 0 && <div className='bg-orange text-xs font-medium text-white rounded-full leading-3 absolute -top-1 -right-1 px-1'>{cantidad}</div>}
                                </button>
                            </div>

                            <div className='ml-3 lg:ml-7'>
                                <button>
                                    <img src={Avatar} alt="Avatar" className='w-12 hover:border-2 hover:border-orange rounded-full'/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='absolute top-24 right-0'>
                        <Cart show={bandera}/>
                    </div>
                </div>
            </div>
    )

}

export default Menu