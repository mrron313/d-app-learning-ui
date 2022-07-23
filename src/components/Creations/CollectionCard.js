import { Chip, Grid, Typography } from "@mui/material";
import CreationCardImg from '../../assets/creation-card.png';

function CollectionCard(props) {

  const { interactionBtns } = props;

  return (
    <Grid container className="invitationCard">
      <Grid item xs={interactionBtns? 6.5 : 9}>
        <div className="invitationCardLeft">
          <div className="invitationCardLeftImage">
            <img alt='collection-card' width='130' src={CreationCardImg} />
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
      <Grid item xs={interactionBtns? 5.5 : 3}>
        <div className="invitationCardRight">
          <div className="invitationCardRightUser">
            <Typography variant='h6'>
              Date Created
            </Typography>
            <Typography variant='span'>
              2022-01-01 00:00:00
            </Typography>
          </div>

          {interactionBtns && (
            <div className="invitationCardRightButton">

            </div>
          )}
        </div>
      </Grid>
    </Grid>
  );
}

export default CollectionCard;