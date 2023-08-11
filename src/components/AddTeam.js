import React from 'react'
import TeamDataService from "../services/team.services"
import { useState } from 'react'

const AddTeam = () => {
    const [title , setTitle] = useState("")
    const [points , setPoints] = useState("");
    const [played , setPlayed] = useState("")
    const [won , setWon] = useState("")
    const [lost , setLost] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!title){
            console.log('kondo');
            return
        }

        const newTeam = {
            title ,
            points ,
            played ,
            won ,
            lost
        }

        try{
            await TeamDataService.addTeam(newTeam)
        } catch(err){
            console.log(err)
        }

        setTitle("");
        setPoints("");
        setPlayed("");
        setWon("");
        setLost("");
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
    <input
    type="number"
    placeholder="enter Matches played"
    value={played}
    onChange={(e)=>setPlayed(e.target.value)}></input>
    <input
    type="number"
    placeholder="enter Matches  won "
    value={won}
    onChange={(e)=>setWon(e.target.value)}></input>
       <input
    type="number"
    placeholder="enter Matches  Lost "
    value={lost}
    onChange={(e)=>setLost(e.target.value)}></input>
    <button type='submit'>submit</button>
  
    </form>
    </div>
  )
}

export default AddTeam
