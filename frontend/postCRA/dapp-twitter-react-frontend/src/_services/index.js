export * from './user.service';


// The creator of this repo combines all files in this directory this way in order to call functions without having to designate specific file names prior to execution

//ie handleSubmit from the registration page

//      handleSubmit(event) {
//     event.preventDefault();

//     this.setState({ submitted: true });
//     const { user } = this.state;
//     const { dispatch } = this.props;
//     if (user.firstName && user.lastName && user.userid && user.password) {
//         dispatch(userActions.register(user));
//     }
// }
