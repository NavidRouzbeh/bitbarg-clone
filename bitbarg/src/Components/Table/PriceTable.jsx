import {
  useTheme,
  useMediaQuery,
  Box
} from "@mui/material";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useContext } from "react";
import { CoinContext } from "../../Context/CoinProvider";
import { useState } from "react";
import { useEffect } from "react";
import TableLogic from "../TableLogic/TableLogic";
import DesktopTable from "./DesktopTable";
import MobileTable from "./MobileTable";
import columns from "../../Data/dataTableHeader";

const PriceTable = () => {
  const theme = useTheme();
  const [search, setSearch] = useState("");
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const { coins, setCoins } = useContext(CoinContext);
  const [unit, setUnit] = useState('Toman');
  const [status, setStatus] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const handleStar = (id) => {
    setCoins(
      coins.map((coin) =>
        coin.uuid === id ? { ...coin, star: !coin.star } : coin
      )
    );
  };

  const handleStatus = () => {
    if (status) {
      setFiltered(coins.filter((coin) => coin.star === true));
    } else {
      setFiltered(coins);
    }
  };

 
  useEffect(() => {
    handleStatus();
   
  }, [status, coins]);

  return (

    <Box >
        <TableLogic setSearch={setSearch} setUnit={setUnit} setStatus={setStatus} status={status} setFiltered={setFiltered} filtered={filtered}  unit={unit}/>
        <Table stickyHeader aria-label="sticky table">
        {isDesktop?
         <TableHead >
         <TableRow >
           {columns.map((col,index) => (
             <TableCell
               sx={{
                 border: "none",
                 textAlign: "center",
                 backgroundColor: "secondary.main",
               }}
               key={index}
             >
               {col.label}
             </TableCell>
           ))}
         </TableRow>
        </TableHead>             
             :null   } 
          <TableBody>
            {filtered
              .filter((item) => item.name.toLowerCase().includes(search))
              .map((coin) => (
                (isDesktop?
                  (<DesktopTable coin={coin} key={coin.uuid} handleStar={handleStar} unit={unit}/>):
                  (<MobileTable coin={coin} key={coin.uuid} handleStar={handleStar} unit={unit}/>)

                )
              ))}
          </TableBody>
        </Table>
     </Box>
  );
};

export default PriceTable;