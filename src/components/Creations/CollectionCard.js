import { Chip, Grid, Typography } from "@mui/material";
import CreationCard from '../../assets/creation-card.png';

function InvitationCard() {
  return (
    <Grid container className="invitationCard">
      <Grid item xs={6.5}>
        <div className="invitationCardLeft">
          <div className="invitationCardLeftImage">
            <img width='130' src={CreationCard} />
          </div>
          <div className="invitationCardLeftText collectionCardLeftText">
            <Typography variant='h6'>
              Mobile App Design
            </Typography>
            <Typography variant='span'>
              1000+ free files you can duplicate,
              remix, and reuse
            </Typography>
          </div>
          <div className="invitationCardLeftButton">
            <Chip label='Preview' className='chipPreview' />
            <Chip label='Pending' className='chipPending'  />
          </div>
        </div>
      </Grid>
      <Grid item xs={5.5}>
        <div className="invitationCardRight">
          <div className="invitationCardRightUser">
            <Typography variant='h6'>
              Date Created
            </Typography>
            <Typography variant='span'>
              2022-01-01 00:00:00
            </Typography>
          </div>
          <div className="invitationCardRightButton">

          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default InvitationCard;