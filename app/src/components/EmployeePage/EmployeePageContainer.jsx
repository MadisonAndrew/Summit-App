import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class EmployeePageContainer extends Component {
    render() {
        return(
            <div>
                <ButtonToolbar>
                    <Link to='/AlertManagement'>
                        <Button bsStyle="primary">Alert Management</Button>
                    </Link>
                </ButtonToolbar>
            </div>
        )
    }
}
export default EmployeePageContainer;
