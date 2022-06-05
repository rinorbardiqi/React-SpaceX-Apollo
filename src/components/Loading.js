import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loading() {
  return (
    <Box sx={{minHeight:'100vh',
     padding:'0',
     margin:'0',width:'100%',      
     display: 'flex' ,
     backgroundColor:"#364156",
     justifyContent:'center',
     alignItems:'center'}}>
      <CircularProgress />
    </Box>
  );
}