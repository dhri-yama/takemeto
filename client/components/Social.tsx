import React from 'react'

interface IProps{
    sociallinks:string[]
}

const Social:React.FC<IProps> = ({sociallinks}) => {
    return (
        <div className="flex w-3/5 justify-evenly mt-5">
            <a href={sociallinks[0]}>
                <img src= "//logo.clearbit.com/https://www.instagram.com?size=120" style={{clipPath:"circle()"}} alt=""
                    className="w-8 h-8 object-cover"/>
            </a>
            <a href={sociallinks[1]}>
                <img src= "//logo.clearbit.com/https://www.spotify.com?size=120" style={{clipPath:"circle()"}} alt=""
                    className="w-8 h-8 object-cover"/>
            </a>
            <a href={sociallinks[2]}>
                <img src= "//logo.clearbit.com/https://soundcloud.com?size=120" style={{clipPath:"circle()"}} alt=""
                    className="w-8 h-8 object-cover"/>
            </a>
            <a href={sociallinks[3]}>
                <img src= "//logo.clearbit.com/https://www.twitch.tv?size=120" style={{clipPath:"circle()"}} alt=""
                    className="w-8 h-8 object-cover"/>
            </a>
        </div>
    )
}

export default Social
