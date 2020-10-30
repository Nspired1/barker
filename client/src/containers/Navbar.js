import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from '../store/actions/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Navbar extends Component {
    logout = e => {
        e.preventDefault();
        this.props.logout();
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand">
                            <FontAwesomeIcon icon="dog" />
                        </Link>
                    </div>
                    {this.props.currentUser.isAuthenticated ? (
                        <ul className="nav-navbar-nav navbar-right">
                            <li>
                                <Link to={`/users/${this.props.currentUser.user.id}/messages/new`}>New Message</Link>
                            </li>
                            <li>
                                <a onClick={this.logout}>Log Out</a>
                            </li>
                        </ul>
                    )
                    : (
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <Link to="/signup">Sign Up</Link>
                            <Link to="/signin">Sign In</Link>
                        </li>
                    </ul>
                    )}
                </nav>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser
    };
}

export default connect(mapStateToProps, {logout})(Navbar);