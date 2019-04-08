import { userConstants } from '../_constants';

//actions that get dispatched regarding user authentication get funneled through this reducer

// reducers are extremely important to the overall operation flow of the redux pattern because this is where actions are funneled and a subsequent eventd are fired that will ultimately impact the store. For instance if an action get's dispatched from the login page as 'this.props.dispatch(userActions.logout());'

// this code will dispatch an action ; Specifically
// function logout() {
//    userService.logout();
//    return { type: userConstants.LOGOUT };
//})

// the reducer will catch this action and it will fire the neccessary logic below that will change the state of the application.

// this is the same pattern used in all of the React components

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}