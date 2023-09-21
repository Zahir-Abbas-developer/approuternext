import { Grid } from "@mui/material";
import CustomTextField from "../../atoms/CustomTextField";
import PrimaryButton from "../../atoms/PrimaryButton";

export default function Login(){
   
    return (<>
    
   
        <form >
        <Grid container spacing={2}>
        <Grid item xs={12}>
        <CustomTextField  label="First Name"  />
        </Grid>
        </Grid>
        <PrimaryButton >
        Sign In
        </PrimaryButton>
    </form>
   
    </>)
}