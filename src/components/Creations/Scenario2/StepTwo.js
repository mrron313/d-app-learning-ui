import React from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import UserCard1 from '../UserCard1';
import UserCard2 from '../UserCard2';

export default function StepTwo() {
 return (
    <Grid item xs={12}>
        <Grid justifyContent="center" container className='createCollectionBox collectionBoxStep2 createCollectionBoxScenario2Step2'>
            <Grid xs={6}>
                <UserCard1 />
            </Grid>
            <Grid xs={6}>
                <UserCard2 />
            </Grid>

            <Grid xs={4} >
                <div className='humanCheckbox collectionStoreBoxFields'>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="I’m human" />
                </div>
            </Grid>
        </Grid>
    </Grid>
  );
};
