import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";


function Contact(props) {
  return (
    <Box component="form">
      <Grid container sx={{ background: "100%", height: "100vh" }}>
        <Grid item md={8} sx={{ padding: "20px" }}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-name">
              {" "}
              Full Name{" "}
            </InputLabel>
            <OutlinedInput id="outlined-adornment-name" label="Full Name" />
          </FormControl>

          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-email">
              {" "}
              Email Address
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-email"
              label="Email Address"
            />
          </FormControl>

          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-mobile">
              Mobile Number{" "}
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-mobile"
              label="Mobile Number "
            />
          </FormControl>

          <FormControl fullWidth sx={{ m: 1 }}>
            <TextareaAutosize
              aria-label="empty textarea"
              placeholder="Write your review "
              minRows={5}
            />
          </FormControl>
          <FormControl>
          <Button
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
                variant='contained'
              >
                Submit
              
              </Button>
          </FormControl>
          
        </Grid>
        <Grid item md={4} align='center' pt={5}>
          <Typography variant="h5" color={'blue'} gutterBottom>Contact us : </Typography>
          <Typography variant="body2">Email: dev_kart@info.in</Typography>
          <Typography variant="body2">Ph.no : 8975145685</Typography>

          <Typography variant="h5" color={'blue'} gutterBottom pt={6}>Postal address : </Typography>
          <Typography variant="body2">#31, 4th main street, gandhi nagar, Bangalore-560018</Typography>

        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;
