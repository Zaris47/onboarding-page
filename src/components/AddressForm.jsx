import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InputAdornment from '@mui/material/InputAdornment';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import {auth} from "../config/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

export default function AddressForm() {
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
