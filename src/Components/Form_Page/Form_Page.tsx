import React, { Component } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const customTheme = createTheme({
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    '--TextField-brandBorderColor': '#E0E3E7',
                    '--TextField-brandBorderHoverColor': '#B2BAC2',
                    '--TextField-brandBorderFocusedColor': '#6F7E8C',
                    '& label.Mui-focused': {
                        color: 'var(--TextField-brandBorderFocusedColor)',
                    },
                },
            },
        },
    },
});

class Form_Page extends Component {
    state = {
        fullName: '',
        email: '',
        fullNameError: '',
        emailError: ''
    };

    handleFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            fullName: event.target.value,
            fullNameError: ''
        });
    };

    handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            email: event.target.value,
            emailError: ''
        });
    };

    handleSubmit = () => {
        const { fullName, email } = this.state;
        let valid = true;
        if (fullName.trim() === '') {
            this.setState({ fullNameError: 'Name is required' });
            valid = false;
        }
        if (email.trim() === '') {
            this.setState({ emailError: 'Email Address is required' });
            valid = false;
        }
        if (valid) {
            // Proceed with form submission or other logic
            alert(`Full Name: ${fullName}\nEmail: ${email}`);
        }
    };

    render() {
        const { fullName, email, fullNameError, emailError } = this.state;
        return (
            <>
                <Box sx={{}}>
                    <Box sx={{ fontSize: "30px", fontWeight: "bold" }}>Need an Account - Sign Up</Box>
                    <Box sx={{ color: "#01BEFE", fontSize: "25px" }}>Basic Information</Box>
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: { sm: '1fr' },
                            gap: 2,
                            width: "30%"
                        }}
                    >
                        <ThemeProvider theme={customTheme}>
                            <TextField
                                label="Full Name"
                                variant="outlined"
                                value={fullName}
                                onChange={this.handleFullNameChange}
                                error={!!fullNameError}
                                helperText={fullNameError}
                                required
                            />

                            <TextField
                                label="Email Address"
                                variant="outlined"
                                value={email}
                                onChange={this.handleEmailChange}
                                error={!!emailError}
                                helperText={emailError}
                                required
                            />
                            <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                                Submit
                            </Button>
                        </ThemeProvider>
                    </Box>
                </Box>
            </>
        );
    }
}

export default Form_Page;
