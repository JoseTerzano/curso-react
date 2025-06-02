import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";


const formData = {
  email: '',
  password: '',
  displayName: ''
};

const formValidations = {
  email: [( value ) => value.includes ('@'), 'el correo debe tener un @'],
  password: [( value ) => value.length >= 6, 'el password debe tener minimo 6 caracteres'],
  displayName: [( value ) => value.length >= 1, 'el nombre es obligatorio'],
};


export const RegisterPage = () => {

  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status] );

  const { 
    displayName, email, password, onInputChange, formState,
    isFormValid, emailValid, passwordValid, displayNameValid
   } = useForm(formData, formValidations);

  
  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmitted(true);
    if( !isFormValid ) return;
    dispatch( startCreatingUserWithEmailPassword( formState ) );
  };

  return (
    <AuthLayout title="Register">
        <form onSubmit={onSubmit} className= 'animate__animated animate__fadeIn animate__faster'>
          <Grid columns={12}>
            <Grid size={{ xs: 12 }} sx={{ mt:2 } }>
              <TextField 
              label='Nombre Completo' 
              type="text" 
              placeholder="John Doe"
              fullWidth
              name="displayName"
              value={ displayName }
              onChange={ onInputChange }
              error={ !!displayNameValid && formSubmitted}
              helperText= { displayNameValid }
               />
            </Grid>

            <Grid size={{ xs: 12 }} sx={{ mt:2 } }>
              <TextField 
              label='Correo' 
              type="email" 
              placeholder="correo@gmail.com"
              fullWidth
              name="email"
              value={ email }
              onChange={ onInputChange }
              error={ !!emailValid && formSubmitted}
              helperText= { emailValid } />
            </Grid>

            <Grid size={{ xs:12 }} sx={{ mt:2 } }>
              <TextField 
              label='Contraseña' 
              type="password" 
              placeholder="password"
              fullWidth
              name="password"
              value={ password }
              onChange={ onInputChange }
              error={ !!passwordValid && formSubmitted}
              helperText= { passwordValid }
               />
            </Grid>

            <Grid container spacing={2} sx={{ mb:2, mt:1 }}>
              <Grid size={12} display={ !!errorMessage ? '' : 'none' } >
                <Alert severity="error">{ errorMessage }</Alert>
              </Grid>

              <Grid size={12} >
                <Button
                disabled={ isCheckingAuthentication }
                type="submit" 
                variant="contained" 
                fullWidth>
                  Crear Cuenta
                </Button>
              </Grid>
            </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr:1 }}>Ya Tienes Cuenta?</Typography>
            <Link component={ RouterLink } color="inherit" to='/auth/login'>
              Ingresar
            </Link>
          </Grid>

          </Grid>
        </form>

    </AuthLayout>

  )
}
