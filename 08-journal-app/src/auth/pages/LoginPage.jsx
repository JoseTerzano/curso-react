import { Google } from "@mui/icons-material";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth/thunks";
import { useMemo } from "react";


const formData = {
  email: '',
  password: '' 
}

export const LoginPage = () => {

  const { status, errorMessage } = useSelector( state => state.auth );

  const dispatch = useDispatch()

  const { email, password, onInputChange, formState } = useForm(formData);

  const isAuthenticating = useMemo( () => status === 'checking', [status] );

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch( startLoginWithEmailPassword({ email, password }) )
  };

  const onGoogleSingIn = () => {
    dispatch(startGoogleSignIn())
  }

  return (
    <AuthLayout title="Login">
        <form onSubmit={ onSubmit }className= 'animate__animated animate__fadeIn animate__faster'>
          <Grid columns={12}>
            <Grid size={{ xs: 12 }} sx={{ mt:2 } }>
              <TextField 
              label='Correo' 
              type="email" 
              placeholder="correo@gmail.com"
              fullWidth
              name="email"
              value={ email }
              onChange={ onInputChange } />
            </Grid>

            <Grid size={{ xs:12 }} sx={{ mt:2 } }>
              <TextField 
              label='Contraseña' 
              type="password" 
              placeholder="password"
              fullWidth
              name="password"
              value={ password }
              onChange={ onInputChange } />
            </Grid>

            <Grid sx={{ mt:1, mb:1 }} size={12} display={ !!errorMessage ? '' : 'none' } >
              <Alert severity="error">{ errorMessage }</Alert>
            </Grid>

            <Grid container spacing={2} sx={{ mb:2, mt:1 }}>
              <Grid size={12} >
                <Button 
                disabled= { isAuthenticating }
                type="submit" variant="contained" fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid size={12}>
                <Button 
                disabled= { isAuthenticating }
                onClick={ onGoogleSingIn } variant="contained" fullWidth startIcon={<Google />}>
                  Google
                </Button>
              </Grid>
            </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Link component={ RouterLink } color="inherit" to='/auth/register'>
              Crear una Cuenta
            </Link>
          </Grid>

          </Grid>
        </form>

    </AuthLayout>

  )
}
