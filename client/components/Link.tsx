import React from 'react'

interface IProps{
    text:string;
    lhref:string;
} 

const Link: React.FC<IProps> = ({text,lhref}) => {
    return (
        <a href={lhref}
            className="text-white font-light w-4/5 h-12 rounded flex justify-center items-center mb-3
                        bg-gradient-to-r from-pink-500 via-purple-500 to-green-500">
            {text}
        </a>    
    )
}

export default Link
