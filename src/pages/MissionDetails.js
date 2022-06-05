import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { CardMedia } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Navbar from '../layout/navbar';
import {useQuery} from "@apollo/client"
import {  GET_MISSION } from '../graphql/queries';
import AccordionDetail from '../components/AccordionDetails';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function MissionDetails() {
  let { id } = useParams()
  const {loading,data,error} = useQuery(GET_MISSION,{
    variables:{
      id:id,
      
     }
  })
  if(error){
    return (<h1>Something went wrong</h1>)
  }
  if(loading === true){
    return(<Loading />)
  }
  
  
  return (
    <Navbar>
        <Box sx={{ flexGrow: 1 , mx	:'10%'} }>
        
        <Grid container spacing={2} columns={16} direction="column"
        style={{marginTop:50}}>
            
                
            <Grid item xs={8}>
            <Item>
            <CardMedia 
                component="img"
                height='300'
                image={data &&
                     data.launch.ships[0] && 
                     data.launch.ships[0].image ? 
                     data.launch.ships[0].image :
                     "https://www.spacex.com/static/images/share.jpg"
                    }
                />
                
            </Item>
            </Grid>
            <Grid item xs={8}>
            <Item>
                <h3>Mission name : {data.launch.mission_name}</h3>
                <p>Launch site : {data.launch.launch_site.site_name_long}</p>
                <p>Launch Year : {data.launch.launch_year}</p>
            </Item>
            
            <AccordionDetail data={data}/>
        </Grid>
        </Grid>
        </Box>
    </Navbar>
  );
}
