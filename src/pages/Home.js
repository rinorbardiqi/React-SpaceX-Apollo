import { useState } from 'react';
import {useQuery} from '@apollo/client';
import { CardMedia } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import { GET_SPACE_MISSIONS } from '../graphql/queries';
import Navbar from '../layout/navbar';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Loading from '../components/Loading';
const Item = styled(Paper)(({ theme }) => ({
    
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#364156',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color:"#fff",
  }));
const PAGE_SIZE = 12;
const SpaceMission=()=>{
        const [page, setPage] = useState(0)
        
        const {error,loading,data} = useQuery(GET_SPACE_MISSIONS,{
            variables:{
                limit:PAGE_SIZE,
                offset:page*PAGE_SIZE,
            }
        })
        let disabled;
        if(page*PAGE_SIZE > 100){
            disabled = true;
        }
        if(error){
            <h1>Something went wrong</h1>
        }
        if(loading === true){
            return(<Loading />)
        }
        
        return(
        <div style={{minHeight:"100vh"}}>
        <Navbar >
        <Grid container spacing={{ xs: 2, md: 3 }} 
                columns={{ xs: 4, sm: 8, md: 12 }} 
                style={{backgroundColor:"#212D40",marginTop:50,minHeight:"100vh"}}>
            {data.launchesPast.map((data) => (
            
            <Grid item xs={2} sm={4} md={4} key={data.id}>
            <Item>
                <Link to={`/mission/${data.id}`} >
                <CardMedia 
                component="img"
                height='240'
                image={data &&
                     data.ships[0] && 
                     data.ships[0].image ? 
                     data.ships[0].image :
                     "https://www.spacex.com/static/images/share.jpg"
                    }
                />
                </Link>
                <h3>{data.mission_name}</h3>
                <p>{data.launch_site.site_name_long}</p> 
                </Item>
                
            </Grid>
            ))}
            <Stack direction="row" spacing={2} style={{marginTop:'auto',marginBottom:"auto",width:"100%",justifyContent:'center'}}>
                <Button variant="outlined"  onClick={()=>{setPage((prev)=>prev-1)}} disabled={!page}>Previous</Button>
                <Button variant="outlined" disabled style={{color:'#fff'}}>
                    Page {page+1}

                </Button>
                <Button variant="outlined" onClick={()=>{setPage((prev)=>prev+1)}}disabled={disabled ===true}>
                    Next
                </Button>
            </Stack>
            
        </Grid>
        </Navbar>
        
        </div> 
        )
    }
export default  SpaceMission;