import Gallery from './Gallery'
import Select from './Select'

const Shop  = () => {

    return (

        <div className='w-screen flex justify-center'>
            <div className='w-3/4 xl:w-3/5 flex justify-between items-center pt-16 gap-6 lg:gap-0'>
                <div className='w-6/12 lg:w-5/12'>
                    <Gallery/>
                </div>
                <div className='w-6/12 lg:w-5/12'>
                    <Select/>
                </div>
            </div>
        </div>

    )

}

export default Shop