import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateProfile, updateStatus} from "../../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";


function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {

    getUserId() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if(!userId){
                this.props.history.push('/login');
            }
        }
        return userId
    }

    componentDidMount() {
        this.props.getUserProfile(this.getUserId());
        this.props.getStatus(this.getUserId());
    }

    componentDidUpdate(prevProps) {
        this.props.updateProfile(prevProps, this.getUserId())
    }

    render() {
        return (
            <Profile
                {...this.props}
                status={this.props.status}
                profile={this.props.profile}
                updateStatus={this.props.updateStatus}
            />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {getUserProfile, updateProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
