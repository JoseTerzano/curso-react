import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";



export const LoginPage = () => {

  return (
    <AuthLayout title="Login">
        <form >
          <Grid columns={12}>
            <Grid size={{ xs: 12 }} sx={{ mt:2 } }>
              <TextField 
              required
              label='Correo' 
              type="email" 
              placeholder="correo@gmail.com"
              fullWidth />
            </Grid>

            <Grid size={{ xs:12 }} sx={{ mt:2 } }>
              <TextField 
              required
              label='Contraseña' 
              type="password" 
              placeholder="password"
              fullWidth />
            </Grid>

            <Grid container spacing={2} sx={{ mb:2, mt:1 }}>
              <Grid size={12} >
                <Button variant="contained" fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid size={12}>
                <Button variant="contained" fullWidth startIcon={<Google />}>
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
