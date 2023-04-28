import React from 'react'
import { useQuery, gql } from '@apollo/client';

const GET_ALL_USERS = gql`
query UserList {
    getUsers{
      email
      lastName
      firstName
      cityPortal {
        createdAt
        updatedAt
      }
      profile {
        occupation
      }
    }
  }


`
const GET_CITY_PORTALS = gql`
query getCityPortals{
  getCityPortals{
    createdAt
    users{
      email
      firstName
      lastName
      _id
    }
    updatedAt
    city
    state
  }
}
      
    

`
const GET_BOOKINGS = gql`
query{
    bookings {
      _id
      createdAt
      
        
        
      }
    }
  
`
const GET_EVENTS = gql`
query Events {
    events {
      title
      date
      _id
      creator {
        _id
        email
        createdEvents {
          title
        }
      }
    }
  }

`
const GET_THREADS = gql`
query getThreads{
  getThreads(messageBoardId:"64013c5996ce61901efcded7"){
    _id
    createdAt
    updatedAt
    creator{
      email
      firstName
      lastName
    } subscribers{
        firstName
      	lastName
      	email
      }
    comments{
      comment
    }
      
    }
  }



`

const Admindashboard = () => {

 const {data:cityportals} = useQuery(GET_CITY_PORTALS)
 const {data:bookings} = useQuery(GET_BOOKINGS)
 const {data:users} = useQuery(GET_ALL_USERS)
 const {data:events} = useQuery(GET_EVENTS)
 const {data:threads}= useQuery(GET_THREADS)
if(events){
    console.log(events)
}

if(bookings){
  console.log(bookings)
}

if(users){
  console.log(users)
}
if(threads){
  console.log(threads)
}
  return (
    <div>
      Admindashboard
    </div>
  )
}

export default Admindashboard
