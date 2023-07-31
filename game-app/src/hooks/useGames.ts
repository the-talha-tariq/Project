import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";


export interface Platform{
  id:number;
  name:string;
  slug:string
}
export interface Game {
    id: number;
    name: string;
    background_image:string;
    parent_platforms:{platform:Platform}[];
    metacritic:number
  }
  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }
  

const useGames=()=>{
    const[isLoading,setLoading]=useState(false)
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
      setLoading(true);
        const controller=new AbortController();
      apiClient
        .get<FetchGamesResponse>("/games",{signal:controller.signal})
        .then((res) =>{ setGames(res.data.results);
        setLoading(false);
      })
        .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message)});
        return ()=>controller.abort();
    },[]);

    return{
        games,error,isLoading
    }
}

export default useGames;