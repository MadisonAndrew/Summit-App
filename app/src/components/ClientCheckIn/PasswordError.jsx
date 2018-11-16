import React, { Component } from 'react';

class PasswordError extends Component {
    render() {
            
            return(
                this.props.showError
                    ?   <div>
                            <h1> Birthday is wrong </h1>
                        </div>
                    : null

            )
        
    }
}
export default PasswordError;