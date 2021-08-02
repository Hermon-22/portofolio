import axios from 'axios'
import React, {useState,useEffect} from 'react'

function Repositories() {
    const [repo,reposList] = useState([])
    useEffect(()=>{
        axios.get('https://api.github.com/users/Hermon-22/repos')
        .then(res=>{
            reposList(res.data)
        })
        .catch(err=>console.log(err))
    },[])
    return (
        <div className='repo'>
            <h1 style={{fontFamily:'cursive'}}>This are some of my repositories on Github</h1><br /><br />
            {repo.length > 0 && repo.map(repos=>{                
                return(
                <div className='card' style={{width:'18rem'}}key={repos.id}>
                    <div  className='card-title'>
                        <a href={repos.html_url} target='_blank' style={{color:'yellow'}} rel="noreferrer"> 
                        <h4>  {repos.name}</h4></a>
                    </div>
                    <div key={repos.id} className='card-text'>
                        <p className='repo-p'> {repos.description} </p>
                    </div>
                </div>)
            })}
        </div>
    )
}
export default Repositories