import * as React from 'react'

export const InfoSection = ({title, children})=> {
    return (
        <div className='info-section'>
            <div className='info-title'>{title}</div>
            <div className='info-text'>{children}</div>
        </div>
    )
}