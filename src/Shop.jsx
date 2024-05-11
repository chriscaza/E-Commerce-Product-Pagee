import Gallery from './Gallery'
import Select from './Select'

const Shop  = () => {

    return (

        <div className='w-full flex justify-center'>
            <div className='md:w-3/4 md:flex justify-between items-center md:pt-16 xl:py-10 gap-6 lg:gap-0 xl:gap-16 '>
                <div className='md:w-6/12 lg:w-5/12 xl:w-6/12 xl:pl-8'>
                    <Gallery/>
                </div>
                <div className='md:w-6/12 lg:w-5/12 xl:w-6/12 xl:pr-8'>
                    <Select/>
                </div>
            </div>
        </div>

    )

}

export default Shop