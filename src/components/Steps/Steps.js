import React from 'react'
import './Steps.css'
import StepsBox from './StepsBox/StepsBox'
import StepsTitle from './StepsTitle/StepsTitle'

const Steps = ({eng}) => {
    return (
        <div className='stepsDiv'>
            <StepsTitle eng={eng}/>
            <StepsBox eng={eng}/>
        </div>
    )
}

export default Steps
