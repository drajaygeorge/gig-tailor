import React, { useState } from 'react';
import {
  Button,
  TextField,
  Radio,
  FormControl,
  FormControlLabel,
  RadioGroup,
} from '@material-ui/core';
import Header from './components/Header/Header';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';

const LandingPageWrapper = styled('div')(({ theme }) => ({
  background: theme.palette.background.default,
  color: theme.palette.text.primary,
  transition: 'background 0.3s ease-in-out, color 0.3s ease-in-out',
}));

function LandingPage() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [themeMode, setThemeMode] = useState('light');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  const toggleTheme = () => {
    if (themeMode === 'light') {
      setThemeMode('dark');
    } else {
      setThemeMode('light');
    }
  };

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <LandingPageWrapper>
        <Header toggleTheme={toggleTheme} />
        <h1>Welcome to our Resume Builder and Cover Letter Generator</h1>
        <div className="buttons">
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleOptionClick('resume')}
          >
            Build a Resume
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleOptionClick('cover-letter')}
          >
            Generate a Cover Letter
          </Button>
        </div>
        {selectedOption === 'resume' && (
          <form onSubmit={handleFormSubmit}>
            <TextField label="Current Resume" fullWidth />
            <TextField
              label="Details of job you are applying for"
              fullWidth
            />
            <FormControl component="fieldset">
              <RadioGroup>
                <FormControlLabel
                  value="yes"
                  control={<Radio />}
                  label="Roles summarized in bullet points?"
                />
                <FormControlLabel
                  value="no"
                  control={<Radio />}
                  label="Roles not summarized in bullet points?"
                />
              </RadioGroup>
            </FormControl>
            <Button variant="contained" color="primary" type="submit">
              Build Resume
            </Button>
          </form>
        )}
        {selectedOption === 'cover-letter' && (
          <form onSubmit={handleFormSubmit}>
            <TextField label="Resume" fullWidth />
            <TextField
              label="Current Cover Letter (optional)"
              fullWidth
              multiline
              rows={4}
            />
            <TextField
              label="Details of job you are applying for"
              fullWidth
            />
            <Button variant="contained" color="primary" type="submit">
              Generate Cover Letter
            </Button>
          </form>
        )}
      </LandingPageWrapper>
    </ThemeProvider>
  );
}

export default LandingPage;
