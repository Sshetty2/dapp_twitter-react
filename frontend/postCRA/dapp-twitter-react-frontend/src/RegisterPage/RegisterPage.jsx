import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { MyForm } from './Form';
import { userActions } from '../_actions';


class RegisterPage extends React.Component {
    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                 <MyForm />
            </div>
        );
    }
}

// 'mapStateToProps' is a function that is provided by Redux when the component tree is wrapped. It will take the entire state tree as an argument the user can then decide what elements of state will be mapped to the target components props. 


// A higher order component is created using connect and mapStateToProps. mapDispatchToProps can also be used which will map dispatch functions to props. You will simply pass both 'mapStateToProps' and 'mapDispatchToProps' to connect inorder to instantiate a new component with the added props

const connectedRegisterPage = connect()(RegisterPage);
export { connectedRegisterPage as RegisterPage };




{/* <h2>Register</h2>
<form name="form" onSubmit={this.handleSubmit}>
    <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={this.handleChange} />
        {submitted && !user.firstName &&
            <div className="help-block">First Name is required</div>
        }
    </div>
    <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={this.handleChange} />
        {submitted && !user.lastName &&
            <div className="help-block">Last Name is required</div>
        }
    </div>
    <div className={'form-group' + (submitted && !user.userid ? ' has-error' : '')}>
        <label htmlFor="userid">Userid</label>
        <input type="text" className="form-control" name="userid" value={user.userid} onChange={this.handleChange} />
        {submitted && !user.userid &&
            <div className="help-block">Userid is required</div>
        }
    </div>
    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
        {submitted && !user.password &&
            <div className="help-block">Password is required</div>
        }
    </div>
    <div className="form-group">
        <button className="btn btn-primary">Register</button>
        {registering && 
            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
        }
        <Link to="/login" className="btn btn-link">Cancel</Link>
    </div>
</form> */}