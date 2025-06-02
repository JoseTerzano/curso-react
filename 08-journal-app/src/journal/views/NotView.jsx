import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components/ImageGallery"


export const NotView = () => {
  return (
    <Grid container direction='column' sx={{ mb:1 }} className= 'animate__animated animate__fadeIn animate__faster'>
        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
            <Typography fontSize={39} fontWeight='light'>
                28 de agosto, de 2025
            </Typography>
            <Button color='primary' sx={{padding: 2 }} startIcon={<SaveOutlined sx={{ fontSize: 30, mr: 1 }}/>}>
                Guardar
            </Button>
        </Grid>

        <Grid>
            <TextField
            type="text"
            variant="filled"
            fullWidth
            placeholder="Ingrese un Titulo"
            label='Titulo'
            sx={{ border: 'none', mb: 1, mt: 1 }}/>

            <TextField
            type="text"
            variant="filled"
            fullWidth
            multiline
            placeholder="Que sucedio en el dia de hoy?"
            minRows={5}/>
        </Grid>

        <ImageGallery/>
        
    </Grid>
  )
}
