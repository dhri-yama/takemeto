import React from 'react'
import Link from './Link'

interface LinkInterface{
    text:string;
    href:string;
} 

interface IProps{
    links:LinkInterface[];
}

const LinkBox:React.FC<IProps> = ({links}) => {
    return (
        <div className="mt-8 w-full flex flex-col items-center">
            {
                links.map((link,index)=>{
                    return <Link key={index} text={link.text} lhref={link.href}/>
                })
            }
        </div>
    )
}

export default LinkBox
