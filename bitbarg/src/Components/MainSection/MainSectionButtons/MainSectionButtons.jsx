import { Button,  Grid } from "@mui/material";

const MainSectionButtons = () => {
    
    return ( 
    <Grid item width='100%' sx={{mx:'auto'}}>
        <Grid  container spacing={2} justifyContent={'center'} width='50%' sx={{mx:'auto'}} className="flexDir" alignItems={'center'}>
            <Grid item xs={12} md={4} >
            <Button variant="mainButton" item sx={{minWidth:'125px',mx:'auto'}} >{"درخواست خرید"}</Button>
            </Grid>
            <Grid item xs={12} md={4}  >
            <Button variant="secondaryButton" item sx={{backgroundColor:'secondary.main',width:'100%',minWidth:'125px'}} >{"فروش"}</Button>
            </Grid>
        </Grid>
    </Grid>
     );
}
 
export default MainSectionButtons;