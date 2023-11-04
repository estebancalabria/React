import * as Mui from "@mui/material";

const Tabla = ({columnas, items}) => {
    return (<Mui.Table >
        <Mui.TableHead>
            <Mui.TableRow>
                {
                    columnas.map((col)=>(
                        <Mui.TableCell key={col}>
                            {col}
                        </Mui.TableCell>
                    ))
                }
            </Mui.TableRow>
        </Mui.TableHead>
        <Mui.TableBody>
                {
                    items.map((item,index)=>(
                        <Mui.TableRow key={index}>
                            {
                                columnas.map((col)=>(
                                    <Mui.TableCell key={col}>
                                        {item[col]}
                                    </Mui.TableCell>
                                ))
                            }
                        </Mui.TableRow>
                    ))
                }
        </Mui.TableBody>
    </Mui.Table>);
}
 
export default Tabla;