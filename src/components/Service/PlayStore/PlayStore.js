import React from 'react'
import './PlayStore.css'

const PlayStore = ({img, link}) => {
    return (
        <div className='playDiv'>
            <img src={img} alt="play/app store" className='playImg' onClick={()=> window.open(link, "_blank")} />
        </div>
    )
}

export default PlayStore
