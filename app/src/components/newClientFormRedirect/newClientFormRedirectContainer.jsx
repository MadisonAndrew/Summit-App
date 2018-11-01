import React, { Component } from 'react';

class newClientFormRedirectContainer extends Component {
    render() {
        return(
          window.location = "JotForm://examplePath"
        )
    }
}

export default newClientFormRedirectContainer;
