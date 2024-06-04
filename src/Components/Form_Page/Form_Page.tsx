


import React, { Component } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
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

const countries = [
    { name: 'United States', code: '+1' },
    { name: 'United Kingdom', code: '+44' },
    { name: 'India', code: '+91' },
    { name: 'Australia', code: '+61' },
    { name: 'Canada', code: '+1' }
];

class Form_Page extends Component {
    state = {
        fullName: '',
        email: '',
        selectedCountry: '',
        phoneCode: '',
        fullNameError: '',
        emailError: '',
        countryError: ''
    };

    handleFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            fullName: event.target.value,
            fullNameError: ''
        });
    };

    handleFullNameBlur = () => {
        if (this.state.fullName.trim() === '') {
            this.setState({ fullNameError: 'Name is required' });
        }
    };

    handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            email: event.target.value,
            emailError: ''
        });
    };

    handleEmailBlur = () => {
        if (this.state.email.trim() === '') {
            this.setState({ emailError: "Email is required" })
        }
    }

    handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedCountry = event.target.value;
        const phoneCode = countries.find(country => country.name === selectedCountry)?.code || '';
        this.setState({
            selectedCountry,
            phoneCode,
            countryError: ''
        });
    };

    handleSubmit = () => {
        const { fullName, email, selectedCountry } = this.state;
        let valid = true;
        if (fullName.trim() === '') {
            this.setState({ fullNameError: 'Name is required' });
            valid = false;
        }
        if (email.trim() === '') {
            this.setState({ emailError: 'Email Address is required' });
            valid = false;
        }
        if (selectedCountry.trim() === '') {
            this.setState({ countryError: 'Country is required' });
            valid = false;
        }
        if (valid) {
            // Proceed with form submission or other logic
            alert(`Full Name: ${fullName}\nEmail: ${email}\nCountry: ${selectedCountry}`);
        }
    };

    render() {
        const { fullName, email, selectedCountry, phoneCode, fullNameError, emailError, countryError } = this.state;
        return (
            <>
                <Box sx={{ boxShadow: "5px" }}>
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: { sm: '1fr' },
                            gap: 2,
                            width: "30%",
                            margin: "0 auto"
                        }}
                    >
                        <Box sx={{ fontSize: "30px", fontWeight: "bold" }}>Need an Account - Sign Up</Box>
                        <Box sx={{ color: "#01BEFE", fontSize: "25px" }}>Basic Information</Box>
                        <ThemeProvider theme={customTheme}>
                            <TextField
                                label="Full Name"
                                variant="outlined"
                                value={fullName}
                                onChange={this.handleFullNameChange}
                                onBlur={this.handleFullNameBlur}
                                error={!!fullNameError}
                                helperText={fullNameError}
                                required
                            />

                            <TextField
                                label="Email Address"
                                variant="outlined"
                                value={email}
                                onChange={this.handleEmailChange}
                                onBlur={this.handleEmailBlur}
                                error={!!emailError}
                                helperText={emailError}
                                required
                            />

                            <TextField
                                select
                                label="Country"
                                variant="outlined"
                                value={selectedCountry}
                                onChange={this.handleCountryChange}
                                error={!!countryError}
                                helperText={countryError}
                                required
                            >
                                {countries.map((country) => (
                                    <MenuItem key={country.code} value={country.name}>
                                        {country.name}
                                    </MenuItem>
                                ))}
                            </TextField>

                            <TextField
                                label="Phone Code"
                                variant="outlined"
                                value={phoneCode}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />

                            <TextField
                                label="PassWord"
                                variant="outlined"
                                value={email}
                                onChange={this.handleEmailChange}
                                onBlur={this.handleEmailBlur}
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



// import React, { Component } from "react";
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import MenuItem from '@mui/material/MenuItem';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Button from '@mui/material/Button';

// const customTheme = createTheme({
//     components: {
//         MuiTextField: {
//             styleOverrides: {
//                 root: {
//                     '--TextField-brandBorderColor': '#E0E3E7',
//                     '--TextField-brandBorderHoverColor': '#B2BAC2',
//                     '--TextField-brandBorderFocusedColor': '#6F7E8C',
//                     '& label.Mui-focused': {
//                         color: 'var(--TextField-brandBorderFocusedColor)',
//                     },
//                 },
//             },
//         },
//     },
// });

// const countries = [
//     { name: 'United States', code: '+1' },
//     { name: 'United Kingdom', code: '+44' },
//     { name: 'India', code: '+91' },
//     { name: 'Australia', code: '+61' },
//     { name: 'Canada', code: '+1' }
// ];

// class Form_Page extends Component {
//     state = {
//         fullName: '',
//         email: '',
//         password: '',
//         selectedCountry: '',
//         phoneCode: '',
//         fullNameError: '',
//         emailError: '',
//         passwordError: '',
//         countryError: ''
//     };

//     handleFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         this.setState({
//             fullName: event.target.value,
//             fullNameError: ''
//         });
//     };

//     handleFullNameBlur = () => {
//         if (this.state.fullName.trim() === '') {
//             this.setState({ fullNameError: 'Name is required' });
//         }
//     };

//     handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         this.setState({
//             email: event.target.value,
//             emailError: ''
//         });
//     };

//     handleEmailBlur = () => {
//         if (this.state.email.trim() === '') {
//             this.setState({ emailError: "Email is required" })
//         }
//     }

//     handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const password = event.target.value;
//         let passwordError = '';
//         if (!/[a-z]/.test(password)) {
//             passwordError = 'Password must contain a lowercase letter.';
//         }
//         if (!/[A-Z]/.test(password)) {
//             passwordError = 'Password must contain an uppercase letter.';
//         }
//         this.setState({
//             password,
//             passwordError
//         });
//     };

//     handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const selectedCountry = event.target.value;
//         const phoneCode = countries.find(country => country.name === selectedCountry)?.code || '';
//         this.setState({
//             selectedCountry,
//             phoneCode,
//             countryError: ''
//         });
//     };

//     handleSubmit = () => {
//         const { fullName, email, password, selectedCountry } = this.state;
//         let valid = true;
//         if (fullName.trim() === '') {
//             this.setState({ fullNameError: 'Name is required' });
//             valid = false;
//         }
//         if (email.trim() === '') {
//             this.setState({ emailError: 'Email Address is required' });
//             valid = false;
//         }
//         if (password.trim() === '') {
//             this.setState({ passwordError: 'Password is required' });
//             valid = false;
//         }
//         if (selectedCountry.trim() === '') {
//             this.setState({ countryError: 'Country is required' });
//             valid = false;
//         }
//         if (valid) {
//             // Proceed with form submission or other logic
//             alert(`Full Name: ${fullName}\nEmail: ${email}\nPassword: ${password}\nCountry: ${selectedCountry}`);
//         }
//     };

//     render() {
//         const { fullName, email, password, selectedCountry, phoneCode, fullNameError, emailError, passwordError, countryError } = this.state;
//         return (
//             <>
//                 <Box sx={{ boxShadow: "5px" }}>
//                     <Box
//                         sx={{
//                             display: 'grid',
//                             gridTemplateColumns: { sm: '1fr' },
//                             gap: 2,
//                             width: "30%",
//                             margin: "0 auto"
//                         }}
//                     >
//                         <Box sx={{ fontSize: "30px", fontWeight: "bold" }}>Need an Account - Sign Up</Box>
//                         <Box sx={{ color: "#01BEFE", fontSize: "25px" }}>Basic Information</Box>
//                         <ThemeProvider theme={customTheme}>
//                             <TextField
//                                 label="Full Name"
//                                 variant="outlined"
//                                 value={fullName}
//                                 onChange={this.handleFullNameChange}
//                                 onBlur={this.handleFullNameBlur}
//                                 error={!!fullNameError}
//                                 helperText={fullNameError}
//                                 required
//                             />

//                             <TextField
//                                 label="Email Address"
//                                 variant="outlined"
//                                 value={email}
//                                 onChange={this.handleEmailChange}
//                                 onBlur={this.handleEmailBlur}
//                                 error={!!emailError}
//                                 helperText={emailError}
//                                 required
//                             />

//                             <TextField
//                                 label="Password"
//                                 variant="outlined"
//                                 type="password"
//                                 value={password}
//                                 onChange={this.handlePasswordChange}
//                                 error={!!passwordError}
//                                 helperText={passwordError || 'Must contain lowercase and uppercase letters'}
//                                 required
//                             />

//                             <TextField
//                                 select
//                                 label="Country"
//                                 variant="outlined"
//                                 value={selectedCountry}
//                                 onChange={this.handleCountryChange}
//                                 error={!!countryError}
//                                 helperText={countryError}
//                                 required
//                             >
//                                 {countries.map((country) => (
//                                     <MenuItem key={country.code} value={country.name}>
//                                         {country.name}
//                                     </MenuItem>
//                                 ))}
//                             </TextField>

//                             <TextField
//                                 label="Phone Code"
//                                 variant="outlined"
//                                 value={phoneCode}
//                                 InputProps={{
//                                     readOnly: true,
//                                 }}
//                             />

//                             <Button variant="contained" color="primary" onClick={this.handleSubmit}>
//                                 Submit
//                             </Button>
//                         </ThemeProvider>
//                     </Box>
//                 </Box>
//             </>
//         );
//     }
// }

// export default Form_Page;
