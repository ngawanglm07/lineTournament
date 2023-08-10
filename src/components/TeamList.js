import React, { useEffect, useState } from 'react'
import TeamDataService from "../services/team.services"

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

      {sortedTeams.map((doc , index ) =>{
        if(doc.points){
          return (
          
          <div key={doc.id}>
          <h2>{doc.title}</h2>

          <h3>{doc.points}</h3>
        </div>
        
      
      )
        }
       
      })}


    </div>
  )
}

export default TeamList




