import React from "react";
import { TextField, Button } from '@material-ui/core'

export const Form = props => {
 const {
   values: { name, email, password, confirmPassword },
   errors,
   touched,
   handleChange,
   isValid,
   setFieldTouched
 } = props;

 const change = (name, e) => {
   e.persist();
   handleChange(e);
   setFieldTouched(name, true, false);
 };
 return (
   <form
     onSubmit={() => {
       alert("submitted");
     }}
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
       id="email"
       name="email"
       helperText={touched.email ? errors.email : ""}
       error={touched.email && Boolean(errors.email)}
       label="Email"
       fullWidth
       value={email}
       onChange={change.bind(null, "email")}

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
   </form>
 );
};
