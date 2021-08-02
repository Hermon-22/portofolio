import React from 'react'
import { List } from 'semantic-ui-react'
import below from "../img/below.gif"

    function Contact() {
    return (
        <div className='contact'>
            <h2>Contact me anytime</h2>
            <List>
                <List.Item icon='user' content='HERMON SAMSON' />
                <List.Item icon='marker' content='Zaandam, Netherlands' />
                <List.Item icon='phone volume' content= '+31-687320597' />
                <List.Item icon='linkify' content={<a href='https://matrixmaster.info/'>Matrix-master.info</a>} />
            </List>
            <hr />
            <h3>You Can contact me through social medias below</h3>
            <br />
            <img src={below} alt="below gif"  width='200px'/>
        </div>
    )
}
export default Contact