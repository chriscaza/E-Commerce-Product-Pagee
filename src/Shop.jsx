import Gallery from './Gallery'
import Select from './Select'

const Shop  = () => {

    return (

        <div className='w-screen flex justify-center'>
            <div className='w-3/5 flex justify-between items-center pt-16'>
                <div className='w-5/12'>
                    <Gallery/>
                </div>
                <div className='w-5/12'>
                    <Select/>
                </div>
            </div>
        </div>

    )

}

export default Shop