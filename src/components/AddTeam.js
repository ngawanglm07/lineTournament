import React from 'react'
import TeamDataService from "../services/team.services"
import { useState } from 'react'

const AddTeam = () => {
    const [title , setTitle] = useState("")
    const [points , setPoints] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!title){
            console.log('kondo');
            return
        }

        const newTeam = {
            title ,
            points
        }

        try{
            await TeamDataService.addTeam(newTeam)
        } catch(err){
            console.log(err)
        }

        setTitle("");
    }
  return (
    <div>
    <form onSubmit={handleSubmit}>
    <input
    type="text"
    placeholder="enter a Team name"
    value={title}
    onChange={(e)=>setTitle(e.target.value)}></input>
     <input
    type="number"
    placeholder="enter points"
    value={points}
    onChange={(e)=>setPoints(e.target.value)}></input>
    <button type='submit'>submit</button>
    </form>
    </div>
  )
}

export default AddTeam
