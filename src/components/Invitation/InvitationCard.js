import { Chip, Grid, Typography } from "@mui/material";
import InvitationCardImg from '../../assets/invitation-card.png';

function InvitationCard() {
  return (
    <Grid container className="invitationCard">
      <Grid item xs={6.5}>
        <div className="invitationCardLeft">
          <div className="invitationCardLeftImage">
            <img src={InvitationCardImg} />
          </div>
          <div className="invitationCardLeftText">
            <Typography variant='h6'>
              Pompeii
            </Typography>
            <Typography variant='span'>
              https://www.youtube.com/watch?v=dbMk9vWqgpc
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
              Pompeii
            </Typography>
            <Typography variant='span'>
              Posted By jack 58
            </Typography>
          </div>
          <div className="invitationCardRightButton">
            <Chip label='Accept' className='acceptButton' />
            <Chip label='Decline' className='declineButton'  />
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default InvitationCard;