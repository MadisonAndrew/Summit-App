import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class MainMenu extends Component {
    render() {
        return(
            <div>
                <h2>Welcome to the Summit Customer Management App Main Menu!</h2>
                    <Link to='/GymInformation'>
                        <Button bsStyle="primary" >
                            Information
                        </Button>
                    </Link>
                    <Link to='/CheckIn'>
                        <Button bsStyle="primary" >
                            Check In
                        </Button>
                    </Link>
                    <Link to='/Login'>
                        <Button bsStyle="primary" >
                            Login
                        </Button>
                    </Link>
            </div>
        )
    }
}

export default MainMenu;