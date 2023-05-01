import * as React from "react";
import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddressForm from "./AddressForm";
import AddressForm2 from "./AddressForm2";
import PaymentForm from "./PaymentForm";
import logo from "../assets/logo.png";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import useMediaQuery from '@mui/material/useMediaQuery';

// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
// import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
// import RecommendOutlinedIcon from '@mui/icons-material/RecommendOutlined';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const steps = ["Account", "Personal", "Billing", "Done"];

// const iconArray = [
//   LockOutlinedIcon,
//   AccountCircleOutlinedIcon,
//   AttachMoneyOutlinedIcon,
//   RecommendOutlinedIcon
// ];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1: 
      return <AddressForm2 />;
    case 2:
      return <PaymentForm />;
    default:
      throw new Error("Unknown step");
  }
}

// const theme = createTheme();

export default function Account() {
  const isMobile = useMediaQuery('(max-width:600px)'); // set the breakpoint to your preference

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

  
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Tooltip title="Theme" placement="top-end">
      <IconButton onClick={handleThemeToggle}>
      {isDarkMode ? <WbSunnyIcon /> : <DarkModeIcon />}
      </IconButton>
    </Tooltip>
      <Box
        component="span"
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
        <img src={logo} className="App-logo" alt="logo" />
      </Box>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, borderRadius: '10px' }}
        >
          {/* Incase to add icons  */}
          {/* <Stepper alternativeLabel  activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel StepIconComponent={iconArray[index]} icon={iconArray[index]}></StepLabel>
              </Step>
            ))}
          </Stepper> */}
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                          {isMobile ? (
            <StepLabel />
          ) : (
            <StepLabel>{label}</StepLabel>
          )}
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length - 1 ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Your account has been created
              </Typography>
              <Typography variant="subtitle1">
                Your account is created. We have emailed you a confirmation,
                please click on the link to activate your account.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end"}}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 2 ? "Sign up" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
