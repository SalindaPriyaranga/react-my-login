import React from "react";
import { Avatar, Button, Grid, Paper, TextField } from "@material-ui/core";
import LockSharpIcon from '@material-ui/icons/LockSharp';
import { green } from "@material-ui/core/colors";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Login = () => {
    const paperStyle = { paddig: 20, height: '55vh', width: 300, margin: "20px auto" }
    const avatarStyle = { backgroundColor: 'green' }
    return (

        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center" >
                    <Avatar style={avatarStyle}><LockSharpIcon /></Avatar>
                    <h2>LOG IN</h2>
                </Grid>



                <TextField id="standard-basic" label="User Name" />
                <TextField id="standard-basic" type="password" label="Password" />
                <Grid  >
                    <FormControlLabel
                        control={
                            <Checkbox

                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Remind Me"
                    />
                   
                </Grid>
                <Button type='submit' size='large' color='primary' variant="contained" >Log In</Button>
            </Paper>
        </Grid>
    )
}

export default Login