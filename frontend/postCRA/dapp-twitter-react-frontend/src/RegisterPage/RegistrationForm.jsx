import React from 'react';
import { Form, Field } from 'react-final-form';
import { TextField } from 'final-form-material-ui';
import { userActions } from '../_actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Typography,
  Paper,
  Grid,
  Button,
  CssBaseline,
} from '@material-ui/core';
// Picker


const validate = values => {
  const errors = {};
  if (!values.UserId) {
    errors.userid = 'Required';
  }
  if (!values.Password) {
    errors.Password = 'Required';
  }
  if (!values.Retype_Password) {
    errors.Retype_Password = 'Required';
  }
  return errors;
};

const RegistrationForm = (props) => {

  const onSubmit = async values => {
    
    let userid = values['userid']
    let password = values['password']
    let retype_password = values['retype_password']
    let user = {userid, password, retype_password}
    console.log(user)
    if (password === retype_password) {
      props.register(user);
    } else {
      const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
      await sleep(300);
      window.alert('Your Passwords need to match');
    }
  };

  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
      <CssBaseline />
      <Typography variant="h5" align="left" component="h2" gutterBottom>
        Registration Screen
      </Typography>
      <Form
        onSubmit={onSubmit}
        // validate={validate}
        render={({ handleSubmit, reset, submitting, pristine, values, form }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper style={{ padding: 16 }}>
              <Grid container alignItems="flex-start" spacing={8}>
                <Grid item xs={12}>
                  <Field
                    name="userid"
                    fullWidth
                    required
                    component={TextField}
                    type="UserId"
                    label="UserId"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="password"
                    component={TextField}
                    label="Password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="retype_password"
                    component={TextField}
                    label="Retype Password"
                  />
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    type="button"
                    variant="contained"
                    onClick={form.reset}
                    disabled={submitting || pristine}
                  >
                    Reset
                  </Button>
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={submitting}
                  >
                    Submit
                  </Button>
                  {submitting && 
                        <img alt= 'loading gif' src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                   }
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                      type = "button"
                      variant="text"
                      color="primary"
                      >   
                      <Link to="/login" className="btn btn-link">Cancel</Link>
                  </Button>
                </Grid>
              </Grid>
            </Paper>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    </div>
  );
}


const mapDispatchToProps = dispatch => ({
  register(user) {
    dispatch(userActions.register(user));
  },
});

const connectedFormComponent = connect(null, mapDispatchToProps)(RegistrationForm);
export { connectedFormComponent as RegistrationForm };
