import React from 'react'
import './styles/List.css'

const COLOR = ['blue', 'red', 'yellow', 'green', 'orange'];

export const List = ({children, onClick, type, imageFile, listColor, title}) => {
    const checkListColor = COLOR.includes(listColor) ? listColor : null;
    return(
        <React.Fragment>
            <div className={`list ${checkListColor}`}
                onClick={onClick}
                type={type}>
                <div className='list-image-box'>
                    <img src={imageFile} alt='this image' className='imageFile' />
                </div>
                <div className='list-title'>
                    {title}
                </div>
                {children}
            </div>
        </React.Fragment>
    )
}

export default List