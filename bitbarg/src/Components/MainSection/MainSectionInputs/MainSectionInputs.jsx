import {  Grid, TextField} from "@mui/material";
import { useCallback } from "react";
import {useState} from "react";
import ModalBanner from "../../MainSectionModal/MainSectionModal";

const MainSectionInputs = () => {
    const [open, setOpen] =useState(false);
    const [inputCoin,setInputCoin]=useState({name:'Bitcoin',price:"20443.399793940775",icon:"https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg",})
    const [inputNum,setInputNum]=useState(1)
    const handleModal=useCallback(()=>{
        setOpen(true)
      },[open])
      const handlechangeInputNumber=useCallback((e)=>{
         setInputCoin({...inputCoin,[e.target.name]:e.target.value})
      },[inputCoin])
      const handleInputNum=useCallback((e)=>{
        setInputNum(e.target.value)
      })
    return ( 
     <Grid item>
        <Grid  container spacing={{xs:1,md:0.5}} sx={{mx:'auto'}} flexDirection={{xs:'column',md:'row'}} marginBottom={2}>
          <Grid item>
          <TextField
          id="outlined"
          size="small"
          label="تومان"
          name="price"
          value={Number((inputCoin.price)*inputNum*34000)}
          onChange={handlechangeInputNumber}
          fullWidth={true}
        />
          </Grid>
          <Grid item>
          <TextField
          id="outlined"
          size="small"
          label="واحد"
          name="number"
          value={inputNum}
          onChange={handleInputNum}
          fullWidth={true}
        />
          </Grid>
          <Grid item>
          <TextField
              onClick={handleModal}
              id="outlined-read-only-input"
              size="small"
              label="انتخاب ارز"
              value={inputCoin.name}
              sx={{ cursor: "pointer",paddingRight:'0' }}
              InputProps={{
                readOnly: true,
                startAdornment:<Grid sx={{width:'30%' ,display:'flex',justifyContent:'center'}}><img width={'30px'} height={'30px'}   src={inputCoin.icon} /></Grid> 

              }}
            />
            <ModalBanner open={open} setOpen={setOpen}  setInputCoin={setInputCoin} />
          </Grid>
        </Grid>
    </Grid>
     );
}
 
export default MainSectionInputs;