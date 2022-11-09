import React, { useContext, useEffect } from 'react';
import { options} from '../../Api/api';
import { CoinContext } from '../../Context/CoinProvider';
import MainSection from '../../Components/MainSection/MainSection';

const Home = () => {
    const {setCoins}=useContext(CoinContext)

    const handleGetData= async()=>{
      const data=await options('/coins').then(data=>data.data.data.coins)
    setCoins(data.map((coin)=>({...coin,star:false})))
    }

    useEffect(()=>{
      handleGetData()
      },[])

    return ( 
        <MainSection  />
     );
}
 
export default Home;