import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { useDispatch } from "react-redux";
import { startlogout } from "../../store/auth/thunks";


export const NavBar = ({ drawerWidth = 240}) => {

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(startlogout());
    };

  return (
    <AppBar 
    sx={{
        width: { sm: `calc(100% - ${ drawerWidth }px)` },
        ml: { sm: `${ drawerWidth }px`}
    }}
    position="fixed"
    >
        <Toolbar>
            <IconButton
                color="inherit"
                edge='start'
                sx={{ mr:2, display: { sm: 'none' } }}
            >
                <MenuOutlined />
            </IconButton>
            <Grid container sx={{width: '100%'}} direction='row' justifyContent='space-between' alignItems='center'>
                <Typography variant="h6" noWrap component='div'> JournalApp </Typography>
                <IconButton color="error"
                onClick={onLogout}>
                    <LogoutOutlined />
                </IconButton>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}
