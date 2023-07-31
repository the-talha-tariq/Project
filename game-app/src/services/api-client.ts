import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api/',
    params:{
         key:'bfb513ac406f4ba18f8328835493fb3a' 
    }
})