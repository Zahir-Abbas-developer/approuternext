import Button from '@mui/material/Button';
export default function PrimaryButton ({children,onClick}) {
  return   (
    <Button variant="contained" color="primary" >
    {children}
    </Button>
  )
} 