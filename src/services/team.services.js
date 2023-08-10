import { db } from "../firebase-config";

import {
    collection ,
    getDocs,
    addDoc,
} from 'firebase/firestore';



const teamCollectionRef = collection(db , "teams");

class TeamDataService{
  addTeam = (newTeam) => {
    return addDoc(teamCollectionRef , newTeam)
  }

  getAllTeam = ()=>{
    return getDocs(teamCollectionRef);
  }
}

export default new TeamDataService; 