import React, { Component } from 'react';

class NewClientFormRedirectContainer extends Component {
    render() {
        return(
          window.location = "JotForm://examplePath"
        )
    }
}


export default NewClientFormRedirectContainer;
