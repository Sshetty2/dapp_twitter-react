import React from "react";
import { TextField, Button } from '@material-ui/core'

export const Form = props => {
 const {
   values: { 
     name,
     userid, 
     password, 
     confirmPassword },
   errors,
   touched,
   handleChange,
   isValid,
   setFieldTouched,
   onSubmit,
   isSubmitting
 } = props;

 const change = (name, e) => {
   e.persist();
   handleChange(e);
   setFieldTouched(name, true, false);
 };
 return (
   <form
     onSubmit={onSubmit}
   >
     <TextField
       id="name"
       name="name"
       helperText={touched.name ? errors.name : ""}
       error={touched.name && Boolean(errors.name)}
       label="Name"
       value={name}
       onChange={change.bind(null, "name")}
       fullWidth

     />
     <TextField
       id="userid"
       name="userid"
       helperText={touched.userid ? errors.userid : ""}
       error={touched.userid && Boolean(errors.userid)}
       label="User Id"
       fullWidth
       value={userid}
       onChange={change.bind(null, "userid")}

     />
     <TextField
       id="password"
       name="password"
       helperText={touched.password ? errors.password : ""}
       error={touched.password && Boolean(errors.password)}
       label="Password"
       fullWidth
       type="password"
       value={password}
       onChange={change.bind(null, "password")}

     />
     <TextField
       id="confirmPassword"
       name="confirmPassword"
       helperText={touched.confirmPassword ? errors.confirmPassword : ""}
       error={touched.confirmPassword && Boolean(errors.confirmPassword)}
       label="Confirm Password"
       fullWidth
       type="password"
       value={confirmPassword}
       onChange={change.bind(null, "confirmPassword")}

     />
     <Button
       type="submit"
       fullWidth
       variant="raised"
       color="primary"
       disabled={!isValid}
     >
       Submit
     </Button>
     {isSubmitting && 
            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
    }
   </form>
 );
};
