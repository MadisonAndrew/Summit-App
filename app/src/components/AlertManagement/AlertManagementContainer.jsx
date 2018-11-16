import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class AlertManagementContainer extends Component {
    render() {
        return(
          <div>
              <ButtonToolbar>
                  <Link to='/CreateAlert'>
                      <Button bsStyle="primary">Create Alert</Button>
                  </Link>
              </ButtonToolbar>
          </div>
        )
    }
}

export default AlertManagementContainer;
