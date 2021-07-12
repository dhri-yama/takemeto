import React from 'react'
import { ApolloClient,InMemoryCache, gql } from '@apollo/client';

import Container from '../components/Container'

export const username = ({data}) => {
    return (
        <div 
            style={{ 
                backgroundImage: `url('/images/Hinterrhein.png')`,
                backgroundRepeat: 'repeat',
            }}
      className="h-screen w-screen bg-black max-w-full bg-contain bg-center py-12 flex justify-center">
        <Container userData={data}/>
    </div>
    )
}

export const getServerSideProps =async context=>{
    const username  = context.query.username
    const client = new ApolloClient({
        uri:'http://localhost:3001/graphql',
        cache: new InMemoryCache()
    })
    const query=gql`
    query getLinkdata($username: String){
          getLinkdata(username: $username){
            username,
            name,
            socials,
            links{
              text,
              href
            }
          }
      }
    `
    const {data} = await client.query({
        query:query,
        variables:{
            username: username,
        }
    })
    return{
        props:{
            data: data.getLinkdata[0]
        }
    }
}


export default username
