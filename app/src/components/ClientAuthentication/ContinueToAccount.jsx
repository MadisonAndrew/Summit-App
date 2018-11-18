import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonToolbar } from 'react-bootstrap';

class ContinueToAccount extends Component {
    render() {
            const userId = this.props.userId;
            return(
                this.props.showQuestion
                    ?   <div>
                            <h3>Hi {this.props.name}! Would you like to continue to your account?</h3>
                            <ButtonToolbar>
                                <Link to={{
                                    pathname: '/ClientAccount',
                                    state: {
                                        userId: userId,
                                    },
                                }}>
                                    <Button bsStyle="primary">Yes</Button>
                                </Link>
                                <Link to='/Home'>
                                    <Button bsStyle="primary">No</Button>
                                </Link>
                            </ButtonToolbar>
                        </div>
                    : null

            )
        
    }
}
export default ContinueToAccount;
