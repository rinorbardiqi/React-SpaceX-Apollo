import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FaArrowDown  } from 'react-icons/fa';

function AccordionDetail({data}) {
    const data1 =data.launch;
  return (
    <>
    <Accordion>
        <AccordionSummary
          expandIcon={<FaArrowDown />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Rocket</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Name : {data1.rocket.rocket_name}
          </Typography>
          <Typography>
            Flights : {data1.rocket.first_stage.cores[0].flight}
          </Typography>
          <Typography>
            Status : {data1.rocket.first_stage.cores[0].core.status}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<FaArrowDown />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Links</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Youtube Video : <a href={data1.links.video_link} style={{textDecoration:"none"}}>Click Here</a>
          </Typography>
          <Typography>
            Wikipedia : <a href={data1.links.wikipedia} style={{textDecoration:"none"}}>Click Here</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </>
  )
}

export default AccordionDetail