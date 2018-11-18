import React, { Component } from 'react';
import getUserInfo from './ClientAccountVirtualController'

class ClientAccountContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: 'N/A',
            userInfo: undefined,
        }

        this.onFinish = this.onFinish.bind(this);
    }

    componentDidMount() {
        const { userId } = this.props.location.state;

        this.setState({
            userId: userId,
        });

        getUserInfo(userId, this.onFinish);
    }

    onFinish(userInfo) {
        this.setState({
            userInfo: userInfo,
        });
    }

    render() {
        if(this.state.userInfo) {
            const { first_name, last_name, date_of_birth} = this.state.userInfo;
            const userName = first_name + ' ' + last_name;

            return(
                <div>
                    <h2>Client Account Page</h2>
                    <h3>Name: {userName}</h3>
                    <h3>Date of Birth: {date_of_birth}</h3>
                </div>
            );
        }

        return (
            <div>
                <h2>Loading</h2>
            </div>
        );
    }
}

export default ClientAccountContainer;
