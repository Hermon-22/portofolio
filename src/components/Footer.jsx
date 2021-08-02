import React from 'react'
import 'semantic-ui-css/semantic.min.css'

export default function Footer() {
    return (
        <footer>
            <div className='links'>
                <h5 className='copyright'>COPYRIGHT &copy; all rights Info 2021</h5>
                <button className="ui facebook button"><i aria-hidden="true" className="facebook icon"></i>Facebook </button>
                <button className="ui mail button"><i aria-hidden="true" className="mail icon"></i><a href="mailto:hermontesfa19@gmail.com" target='_blank' rel='noreferrer'>Gmail</a> </button>
                <button className="ui linkedin button"><i aria-hidden="true" className="linkedin icon"></i> LinkedIn</button>
                <button className="ui instagram button"><i aria-hidden="true" className="instagram icon"></i> Instagram</button>
                <button className="ui youtube button"><i aria-hidden="true" className="youtube icon"></i> YouTube</button>
                <button className="ui github button"><i aria-hidden="true" className="github icon"></i><a href="https://github.com/Hermon-22" target='_blank' rel='noreferrer'>GITHUB</a> </button>
            </div>
        </footer>
    )
}
