import TextField from '@mui/material/TextField';
export default function CustomTextField({label}){
    return(<>
    <TextField id="outlined-basic" label={label} variant="outlined" />
    </>)
}