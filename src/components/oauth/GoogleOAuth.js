import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../actions/index';

class GoogleOAuth extends Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:
                    '1012191909543-80r5uenv5pjlu7dvoddmolnr7ghl2c69.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onSignIn = () => {
        console.log(this.auth);
        this.auth.signIn();
    }

    onSignOut = () => {
        console.log(this.auth);
        this.auth.signOut();
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return <div>Loading</div>;
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOut} className="ui red google button">
                    <i className="google icon " />
                    Sign out
                </button>
            );
        } else {
            return (
                <button onClick={this.onSignIn} className="ui red google button">
                    <i className="google icon " />
                    Sign in
                </button>
            );
        }
    }

    onAuthChange = isSignedIn => {
        if (isSignedIn) {
            const user = createUser(this.auth.currentUser.get().getBasicProfile())
            this.props.signIn(user);
        } else {
            this.props.signOut();
        }
    };

    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

const createUser = (profile) => {
    return {
        name: profile.getName(),
        emailAddress: profile.getEmail(),
        authId: profile.getId(),
        profileImage: profile.getImageUrl()
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(
    mapStateToProps,
    { signIn, signOut }
)(GoogleOAuth);