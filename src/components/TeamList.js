import React, { useEffect, useState } from 'react'
import TeamDataService from "../services/team.services"
import "../components/a.css"
function TeamList() {
  const [Teams , setTeams]= useState([])


   console.log(Teams)
 useEffect(()=>{
  getTeams();
  },[])

  const getTeams =  async () => {
   const data = await TeamDataService.getAllTeam();
  
 
   setTeams(data.docs.map((doc) => ({
     ...doc.data() , id: doc.id
   })))  }

   const sortedTeams = [...Teams].sort((a, b) => parseInt(b.points, 10) - parseInt(a.points, 10));
   
  return (
    <div>
    <table className='tabs'>
  <tr>
    <th>Teams</th>
    <th> Played </th>
    <th>Won </th>
    <th>Lost</th>
    <th>Points</th>
  </tr>
  {sortedTeams.map((doc , index ) =>{
        if(doc.points){
          return (
          <tr key={doc.id}>
            <td>{doc.title}</td>
            <td>{doc.played}</td>
            <td>{doc.won}</td>
            <td>{doc.lost}</td>
            <td>{doc.points}</td>
          </tr>
    
      )
        }
       
      })}
  

</table>

      {/* {sortedTeams.map((doc , index ) =>{
        if(doc.points){
          return (
          <tr key={doc.id}>
            <td>{doc.title}</td>
            <td>{doc.played}</td>
            <td>{doc.won}</td>
            <td>{doc.lost}</td>
            <td>{doc.points}</td>
          </tr>
    
      )
        }
       
      })} */}


    </div>
  )
}

export default TeamList




