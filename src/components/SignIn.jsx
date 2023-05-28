import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Account from "./Account";
import { Link as RouterLink } from "react-router-dom";
import { auth } from "../config/firebase";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";
import { useEffect, useRef } from "react";
import { Google } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  //States

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  //Routing and if the user exist to go to dashboard
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      // Redirect to another page if user is already logged in
      navigate("/dashboard"); // Replace "/dashboard" with the desired URL of the page
    }
  }, [user, navigate]);

  // main Auth functions
  //console.log(auth?.currentUser.email)

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
    } catch (err) {
      alert(err.message);
    }
  };

  //Creating new provide here, can also create it in firebase config
  const googleProvider = new GoogleAuthProvider();

  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
    } catch (error) {
      console.log(error);
    }
  };
  // const signInWithGoogle = async () => {
  //   try {
  //     await signInWithPopup(
  //       auth,
  //       googleProvider
  //     );
  //   } catch (err) {
  //     alert(err.message);
  //   }
  // };

  // Handling functions
  const handleSubmit = (event) => {
    event.preventDefault();
    // const emailValue = emailRef.current.value;
    // const passwordValue = passwordRef.current.value;
    signIn();
  };

  const handleSignUp = () => {
    return <Account />;
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              inputRef={emailRef}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              inputRef={passwordRef}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  component={RouterLink}
                  to="/SignUp"
                  variant="body2"
                  onClick={handleSignUp}
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Grid
          container
          justifyContent="center"
          sx={{
            my: { xs: 3, md: 6 },
            p: { xs: 2, md: 3 },
            borderRadius: "10px",
          }}
        >
          <Button
            variant="outlined"
            startIcon={<Google />}
            onClick={googleLogin}
          >
            Sign in with Google
          </Button>
        </Grid>

        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
