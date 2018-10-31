import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class MainMenu extends Component {
    render() {
        return(
            <div>
                <ButtonToolbar>
                    <Link to='/GymInformation'>
                        <Button bsStyle="primary">Information</Button>
                    </Link>
                    <Link to='/CheckIn'>
                        <Button bsStyle="primary">Check In</Button>
                    </Link>
                    <Link to='/Login'>
                        <Button bsStyle="primary">Login</Button>
                    </Link>
                </ButtonToolbar>
            </div>
        )
    }
}

export default MainMenu;