import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InputAdornment from '@mui/material/InputAdornment';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import {auth} from "../config/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useRef } from "react";
import PropTypes from "prop-types";



export default function AddressForm({ handleNext }) {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef();

  const handleNextClick = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Create the user account using Firebase
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // User account created successfully
      handleNext(); // Call the handleNext function passed as a prop
    } catch (error) {
      // Handle any errors during account creation
      console.error("Error creating user account:", error);
    }
  };

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            
            id="fullName"
            name="fullName"
            label="Full name"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <ErrorOutlineIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            inputRef={emailRef}
            fullWidth
            variant="outlined"
            helperText="Please input a real Email Address"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <ErrorOutlineIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="password"
            name="password"
            label="Password"
            inputRef={passwordRef}
            fullWidth
            autoComplete="shipping postal-code"
            variant="outlined"
            helperText="Please enter your password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <ErrorOutlineIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="passwordConfirm"
            name="passwordConfirm"
            label="Confirm Password"
            inputRef={passwordConfirmRef}
            fullWidth
            autoComplete="shipping country"
            variant="outlined"
            helperText="Password need to match"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <ErrorOutlineIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="primary" name="saveAddress" value="yes" />
            }
            label="I accept the Terms and Privacy Policy"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

AddressForm.propTypes = {
  handleNext: PropTypes.func.isRequired,
};