import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';




const Login = (props:any) => {  
    const { classes } = props;
    return (
        <div className={classes.root}>
        <Grid container spacing={24}>
            <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
                Login
            </Typography>
            </Grid>
            <Grid item xs={12}>
            <TextField
                required
                id="email"
                name="email"
                label="Email"
                fullWidth
                autoComplete="email"
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                required
                id="password"
                name="password"
                label="Password"
                fullWidth
                autoComplete="current-password"
            />
            </Grid>
            <Grid item xs={12}>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Login
            </Button>
            </Grid>
        </Grid>
        </div>
    );
    }

    export default Login;