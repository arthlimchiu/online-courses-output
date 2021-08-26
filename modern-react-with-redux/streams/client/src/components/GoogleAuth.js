import React from 'react';

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '172926852787-vec1vjt86nkqgd5uckfb3jbd8dpk45qj.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }

    render() {
        return (
            <div>Google Auth</div>
        );
    }
}

export default GoogleAuth;