import Menu from './Menu'
import Shop from  './Shop'

const Sneakers = () => {

    return(
        <div className='w-screen h-screen flex justify-center items-center xl:bg-fondo xl:bg-no-repeat xl:bg-cover xl:bg-center'>
            <div className='xl:w-9/12 xl:drop-shadow-xl bg-white rounded-md'>
                <Menu />
                <Shop />
            </div>
        </div>
    )

}

export default Sneakers