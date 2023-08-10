import React, { useEffect, useState } from 'react'
import TeamDataService from "../services/team.services"

function TeamList() {
  const [Teams , setTeams]= useState([])
  useEffect(()=>{
  getTeams();
  },[])

  const getTeams =  async () => {
   const data = await TeamDataService.getAllTeam();
   console.log(data.docs)
   setTeams(data.docs.map((doc) => ({
     ...doc.data() , id: doc.id
   })))  }

  return (
    <div>

      {Teams.map((doc , index ) =>{
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

