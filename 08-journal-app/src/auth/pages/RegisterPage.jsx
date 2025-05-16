import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";



export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
        <form >
          <Grid columns={12}>
            <Grid size={{ xs: 12 }} sx={{ mt:2 } }>
              <TextField 
              label='Nombre Completo' 
              type="text" 
              placeholder="John Doe"
              fullWidth />
            </Grid>

            <Grid size={{ xs: 12 }} sx={{ mt:2 } }>
              <TextField 
              label='Correo' 
              type="email" 
              placeholder="correo@gmail.com"
              fullWidth />
            </Grid>

            <Grid size={{ xs:12 }} sx={{ mt:2 } }>
              <TextField 
              label='Contraseña' 
              type="password" 
              placeholder="password"
              fullWidth />
            </Grid>

            <Grid container spacing={2} sx={{ mb:2, mt:1 }}>
              <Grid size={12} >
                <Button variant="contained" fullWidth>
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
