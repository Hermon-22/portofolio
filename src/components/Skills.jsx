import React from 'react'

export default function Skills() {
    return (
        <div className='skills' style={{width: '55%',marginTop:'20px',marginLeft:'20px'}}>
            
            <h4>HTML/CSS (95%)</h4>
            <div className="progress"style={{height: '6px'}}>            
                <div className="progress-bar bg-info" role="progressbar" style={{width: '95%'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
            </div>

            <h4>Vanilla JS (70%)</h4>
            <div className="progress" style={{height: '6px'}}>            
                <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" style={{width: '70%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
            </div>

            <h4>Jquery/AJAX (80%)</h4>
            <div className="progress"style={{height: '6px'}}>            
                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
            </div>

            <h4>Advanced JS (89%)</h4>
            <div className="progress"style={{height: '6px'}}>            
                <div className="progress-bar progress-bar-striped progress-bar-animated " role="progressbar" style={{width: '89%'}} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
            </div>

            <h4>Object Oriented Programming (59%)</h4>
            <div className="progress"style={{height: '6px'}}>            
                <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" style={{width: '59%'}} aria-valuenow="59" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            
            <h4>React (62%)</h4>
            <div className="progress"style={{height: '6px'}}>            
                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '62%'}} aria-valuenow="62" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            


        </div>
    )
}
