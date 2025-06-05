import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { setActiveNote } from "../../store/journal/journalSlice"

export const SideBarItem = ({ title, body, id, date, imageUrls = [] }) => {

    const dispatch = useDispatch();

    const activeNote = () => {
        dispatch( setActiveNote({title, body, id, date, imageUrls}) );
    }

    const newTitle = useMemo( () => {
        return title.length > 17 
        ? title.substring(0,17) + '...' 
        : title; // Si el titulo es mayor a 17 chars lo acorta y pone ...
    }, [title] )

  return (
    <ListItem disablePadding>
        <ListItemButton onClick={ activeNote }>
            <ListItemIcon>
                <TurnedInNot/>
            </ListItemIcon>
            <Grid container>
                <ListItemText  
                primary={ newTitle }
                secondary= { body }
                />
            </Grid>
        </ListItemButton>   
    </ListItem>
  )
}
