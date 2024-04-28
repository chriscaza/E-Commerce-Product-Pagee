import Logo from './assets/logo.svg?react'
import Carrito from './assets/icon-cart.svg?react'
import Avatar from './assets/image-avatar.png'
import Cart from './Cart'
import Sandwich from './assets/icon-menu.svg?react'
import Close from './assets/icon-close.svg?react'
import { useState, useContext } from "react"
import { CantidadContext } from "./main"

const Menu = () => {

    const[bandera, setBandera] = useState(true);
    const { cantidad } = useContext( CantidadContext );
    const[menu, setMenu] = useState(true);

    return (
        
            <div className='w-full h-24 flex justify-center'>
                <div className='w-full md:w-3/4 flex items-center justify-between md:border-b-2 md:border-grayishBlue relative'>
                    <div className='h-full w-full flex items-center pl-6 md:pl-0 relative md:static'>
                        <button className='md:hidden' onClick={ () => setMenu(false) }>
                            <Sandwich className="fill-darkGrayishBlue hover:fill-veryDarkBlue"/>
                        </button>
                        
                        <div className='ml-4 md:ml-0 md:mr-3 lg:mr-7'>
                            <Logo/>
                        </div>
                        <div className='h-screen w-3/4 md:w-auto md:h-full md:flex md:items-center absolute md:static top-0 left-0 bg-white pl-8 md:pl-0 z-50' hidden={menu}>
                            <button className='md:hidden my-5' onClick={ () => setMenu(true) }>
                                <Close className="fill-darkGrayishBlue"/>
                            </button>
                            <button className='md:text-darkGrayishBlue hover:text-veryDarkBlue mr-3 md:h-full hover:border-b-4 hover:border-orange block text-black font-bold my-2 mt-3 md:my-0'>Collections</button>
                            <button className='md:text-darkGrayishBlue hover:text-veryDarkBlue mr-3 md:h-full hover:border-b-4 hover:border-orange block text-black font-bold my-2 md:my-0'>Men</button>
                            <button className='md:text-darkGrayishBlue hover:text-veryDarkBlue mr-3 md:h-full hover:border-b-4 hover:border-orange block text-black font-bold my-2 md:my-0'>Women</button>
                            <button className='md:text-darkGrayishBlue hover:text-veryDarkBlue mr-3 md:h-full hover:border-b-4 hover:border-orange block text-black font-bold my-2 md:my-0'>About</button>
                            <button className='md:text-darkGrayishBlue hover:text-veryDarkBlue md:h-full hover:border-b-4 hover:border-orange block text-black font-bold my-2 md:my-0'>Contact</button>
                        </div>
                    </div>
                    <div className='pr-6 md:pr-0'>
                        <div className='flex items-center'>
                            <div>
                                <button onClick={ () => setBandera(!bandera) } className='relative'>
                                    <Carrito className="fill-darkGrayishBlue hover:fill-veryDarkBlue"/>
                                    {cantidad > 0 && <div className='bg-orange text-xs font-medium text-white rounded-full leading-3 absolute -top-1 -right-1 px-1'>{cantidad}</div>}
                                </button>
                            </div>

                            <div className='ml-4 md:ml-3 lg:ml-7'>
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