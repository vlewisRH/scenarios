import React from 'react';
import Image from 'react-bootstrap/Image';
import email from '../../images/email.png'

class Home extends React.Component {
    render(){

        return(
            <div>
                <Image src={email} height='100%' width='100%'/>
            </div>
        );
    }
}

export default Home;