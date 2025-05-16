import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView, NotView } from "../views"
import { AddOutlined } from "@mui/icons-material"



export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>joasd asdnasdioas asdjasifjaifnas ashfniasonfias ihnasoifhn ihioafn  jasfuij  uasbbfasfiuasfuasbf
        sjfbasufjaiufah afnaiufn
      </Typography> */}
      {/* <NothingSelectedView /> */}
      <NotView/>  

      <IconButton
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
