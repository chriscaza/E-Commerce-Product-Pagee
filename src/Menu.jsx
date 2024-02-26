import Logo from './assets/logo.svg'
import Avatar from './assets/image-avatar.png'
import Test from './assets/icon-cart.svg?react'

const Menu = () => {

    return (
        
        <div className='w-screen h-24 flex justify-center'>
            <div className='w-4/5 flex items-center justify-between border-b-2 border-grayishBlue'>
                <div className='h-full flex items-center'>
                    <div className='mr-7'>
                        <div>
                            <img src={ Logo } alt="Logo"/>
                        </div>
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
                            <button>
                                <Test className="fill-darkGrayishBlue hover:fill-veryDarkBlue"/>
                            </button>
                        </div>

                        <div className='ml-7'>
                            <button>
                                <img src={Avatar} alt="Avatar" onClick={ myfunction } className='w-12 hover:border-2 hover:border-orange rounded-full'/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

const myfunction = () => console.log("CLICKED");

export default Menu