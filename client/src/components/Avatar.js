import React from 'react'

const Avatar = ({ children, backgroundColor,
    py, px,
    color,
    borderRadius,
    fontSize, }) => {

    const style = {
        backgroundColor,
        padding: `${py} ${px}`,
        color: color || 'black',
        borderRadius,
        fontSize,
        textAlign: 'center',
        textdecoration: 'none'
    }
    return (
        <div style={style}>{children}</div>
    )
}

export default Avatar