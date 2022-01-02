import React from 'react'
import './Steps.css'
import StepsBox from './StepsBox/StepsBox'
import StepsTitle from './StepsTitle/StepsTitle'

const Steps = () => {
    return (
        <div className='stepsDiv'>
            <StepsTitle />
            <StepsBox/>
        </div>
    )
}

export default Steps
