import React from 'react'
import Navigational from '../../components/Navigational/Navigational'
import Auxilary from '../../HOC/Auxilary/Auxilary'
import axios from '../../axios'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import ProfileViewer from '../../components/UI/ProfileViewer/ProfileViewer'

class Profile extends React.Component {
    state = {
        profile: null
    }
    componentDidMount() {
        if (this.props.auth) {
            const token = this.props.token
            axios.get('user', {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }).then(response => {
                this.setState({ profile: response.data })
            }).catch(error => {

            })
        }
        else {
            alert('Login First')
        }
    }
    render() {
        let login = null
        let profile = null
        if (!this.props.auth)
            login = <Redirect to='/login'></Redirect>
        if (this.state.profile)
            profile = <ProfileViewer
                name={this.state.profile.name}
                number={this.state.profile.phone}
                email={this.state.profile.email}
                address={this.state.profile.address}></ProfileViewer>
        return (
            <Auxilary>
                {login}
                <Navigational />
                <h1>Your Profile</h1>
                <div style={{ textAlign: 'center' }}>
                    {profile}
                </div>
            </Auxilary>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.authenticated,
        token: state.token
    }
}

export default connect(mapStateToProps)(Profile)