import { Grid, Typography } from '@mui/material';
import React from 'react';
import CollectionCard from './CollectionCard';

const Creations = () => {
  return ( 
    <Grid container>
      <Grid item xs={12}>
        <Typography className='inviationHeaderTitle' variant='h6'>My Collection</Typography>
      </Grid>

      {[1, 2, 3].map(i => {
        return (
          <Grid item xs={12} style={{ marginTop: '10px' }}>
            <CollectionCard interactionBtns={true} />
          </Grid>
        );
      })}

      <Grid item xs={9}>
        <Typography className='inviationHeaderTitle invitationSentSection' variant='h6'>Trending Collections</Typography>

        {[1, 2, 3].map(i => {
          return (
            <Grid item xs={12} style={{ marginTop: '10px' }}>
              <CollectionCard interactionBtns={false} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
 
export default Creations;