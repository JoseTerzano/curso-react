import { useMemo, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"

import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.css';

import { ImageGallery } from "../components/ImageGallery"
import { useForm } from "../../hooks/useForm"
import { setActiveNote, startDeletingNote, startSaveNote, startUploadinFiles } from "../../store/journal"


export const NotView = () => {

    const dispatch = useDispatch();
    const { activeNote, messageSaved, isSaving } = useSelector( state => state.journal )
    const { body, title, onInputChange, formState, date } = useForm( activeNote );

    const dateString = useMemo( () => {
        const newDate = new Date( date );
        return newDate.toUTCString();
    }, [date] )

    const fileInputRef = useRef();

    useEffect(() => {
      dispatch( setActiveNote(formState) );
    }, [formState]);
    
    const onSaveNote = () => {
        dispatch(startSaveNote())
    };

    useEffect(() => {
      if ( messageSaved.length > 0 ){
        Swal.fire('Nota actualizada', messageSaved, 'success');
      }
    }, [messageSaved]);
    

    const onFileInputChange = ({target}) => {
        if(target.files === 0) return;
        dispatch( startUploadinFiles( target.files ) );
    };

    const onDelete = () => {
        dispatch( startDeletingNote() );
    }

  return (
    <Grid container direction='column' sx={{ mb:1 }} className= 'animate__animated animate__fadeIn animate__faster'>
        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
            <Typography fontSize={39} fontWeight='light'>
                { dateString }
            </Typography>
            <input 
                type="file"
                multiple
                ref={ fileInputRef }
                onChange={ onFileInputChange }
                style={{ display: 'none' }}
            />
            <IconButton
            color = 'primary'
            disabled = { isSaving }
            onClick={ () => fileInputRef.current.click() }>
                <UploadOutlined />
            </IconButton>
            <Button 
            disabled = { isSaving }
            onClick={ onSaveNote }
            color='primary' 
            sx={{padding: 2 }} 
            startIcon={<SaveOutlined sx={{ fontSize: 30, mr: 1 }}/>}>
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
            sx={{ border: 'none', mb: 1, mt: 1 }}
            name="title"
            value={ title }
            onChange={ onInputChange }
            />

            <TextField
            type="text"
            variant="filled"
            fullWidth
            multiline
            placeholder="Que sucedio en el dia de hoy?"
            minRows={5}
            name="body"
            value={ body }
            onChange={ onInputChange }
            />
        </Grid>

        <Grid container justifyContent = 'end'>
            <Button
            onClick={ onDelete }
            sx={{ mt:2 }}
            color="error">
                <DeleteOutline />
                Borrar
            </Button>
        </Grid>

        <ImageGallery
            images = { activeNote.imageUrls }
        />
        
    </Grid>
  )
}
