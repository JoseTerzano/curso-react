import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView, NotView } from "../views"
import { AddOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/journal/thunks"



export const JournalPage = () => {

  const { isSaving, activeNote } = useSelector(state => state.journal)

  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch(startNewNote());
  }

  return (
    <JournalLayout>
      {
        !!activeNote ? <NotView/> :  <NothingSelectedView />
      }
      <IconButton
      disabled={ isSaving }
      onClick={ onClickNewNote }
      size="large"
      sx={{
        color:'white',
        backgroundColor: 'error.main',
        ':hover': {backgroundColor: 'error.main', opacity: 0.9},
        position: 'fixed',
        right: 50,
        bottom: 50
      }}>
        <AddOutlined sx={{ fontSize: 30 }}/>
      </IconButton>
    </ JournalLayout>

  )
}
