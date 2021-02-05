import React from 'react'
import axios from 'axios'


const Quotes =  async () =>{
    
        const {data} = await axios.get('https://api.quotable.io/random')
        
        return data
    
}
export default Quotes