import React, { Component } from 'react';

class DateError extends Component {
    render() {
            
            return(
                this.props.showError
                    ?   <div>
                            <h1> Date is in the future </h1>
                        </div>
                    : null

            )
        
    }
}
export default DateError;