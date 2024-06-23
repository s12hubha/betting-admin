import React from 'react'
import { Spinner } from './Spinner'


const FullPageSpinner = () => {
  return (
    <div className='absolute inset-0 bg-grey-light grid place-items-center w-full h-full'>
        <Spinner/>
    </div>
  )
}

export default FullPageSpinner