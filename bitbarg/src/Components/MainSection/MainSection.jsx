import { Button, Container, Grid, Typography } from "@mui/material";
import banner from "../../Assets/images/banner.webp";
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';import MainSectionInputs from "./MainSectionInputs/MainSectionInputs";
import MainSectionButtons from "./MainSectionButtons/MainSectionButtons";

const MainSection = () => {


  return (
    <Container >
      <Grid container flexDirection={"column"} alignItems={"center"} mt={16} justifyContent={'center'}>
        <Grid item maxWidth={{ xs: "150px", md: "272px" }} m={1}>
          <img src={banner} width="100%" />
        </Grid>
        <MainSectionInputs/>
        <MainSectionButtons/>
        <Grid item my={2} mx={'auto'} container flexDirection={'column'} alignItems={'center'} justifyContent="center">
            <Grid item><Typography variant="subtitle1">پشتیبانــی ۲۴ ساعتـه
            <br />
            حتی در روزهای تعطیل
            </Typography> </Grid>
            <Button item sx={{textAlign:'center'}}>
                <Typography p={1} variant="subtitle1">{"۰۲۱-۹۱۰۷۹۶۷۷"}</Typography>
                <PhoneOutlinedIcon/>
            </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainSection;
