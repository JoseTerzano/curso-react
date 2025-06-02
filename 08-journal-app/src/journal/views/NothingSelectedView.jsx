import { StarOutlined } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"



export const NothingSelectedView = () => {
  return (
    <Grid
        className= 'animate__animated animate__fadeIn animate__faster'
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 3 }}
        >
        <Grid size={{ xs:12 }} sx={{ display: 'flex', justifyContent: 'center' }}>
            <StarOutlined sx={{fontSize: 100, color: 'white'}}/>
        </Grid>

        <Grid size={{ xs:12 }} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography color="white" variant="h5">Selecciona o crea una nota</Typography>
        </Grid>
    </Grid>
  )
}
