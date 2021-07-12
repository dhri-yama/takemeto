// import { useState,useEffect} from 'react'
// import data from '../data.json'
import Social from './Social'
import LinkBox from './LinkBox'



interface LinkInterface{
    text:string;
    href:string;
}

interface UserInterface{
    username: string;
    name: string;
    socials:string[];
    links:LinkInterface[];
};


const Container:React.FC<UserInterface & Container.defaultProps> = ({userData}: UserInterface) => {
    console.log(userData)
    return (
        <div style={{backgroundColor:"rgba(255,255,255,0.09)", backdropFilter: "blur(15px)"}}
            className=" w-4/5 max-w-md rounded flex flex-col items-center pt-8">
            
            <img src='/images/image.jpeg' style={{clipPath:"circle()"}}  alt="user"
                className="w-36 h-36 object-cover"/>
            
            <h1 className="text-3xl text-white font-light mt-1">{userData.username}</h1>
            
            <Social sociallinks={userData.socials}/>
            
            <LinkBox links={userData.links} />
        </div>
    )
}

export default Container
