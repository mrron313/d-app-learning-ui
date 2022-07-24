import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import WithdrawIcon from '../../assets/withdraw-icon.png';
import ApproveIcon from '../../assets/approve-icon.png';
import UserImage from '../../assets/user-image-2.jpeg';
import UserImage2 from '../../assets/top-learner-user.png';
import { useNavigate } from 'react-router-dom';

const Litigation = () => {
  const navigate = useNavigate();
  
  const approve = () => {
    navigate('/litigation/closed');
  };

  return ( 
    <Grid container>

      <Grid item xs={12}>
        <Typography className='inviationHeaderTitle' variant='h6'>Litigation</Typography>
      </Grid>

      <Grid item xs={12} style={{ marginTop: '10px' }}>
        <Typography className='inviationSectionTitle' variant='h6'>Opened</Typography>
      </Grid>

      <table className='litigationBox'>
        <tr className='litigationBoxHeader'>
            <th>Creation Title</th>
            <th>Claimer</th>
            <th>Assumed Author</th>
            <th>Litigation Start</th>
            <th>Deadline</th>
            <th>Availabel jurors</th>
        </tr>

        <tr className='litigationBoxBody'>
            <td>I want reclaim my authorship of this media</td>
            <td>
                <div className='litigationUser'>
                    <div className='litigationUserImage'>
                        <img src={UserImage} alt='user-image' />
                    </div>
                    <div className='litigationUserText'>
                        <h6>Bobi</h6>
                        0X 3A5 EE2
                    </div>
                </div>
            </td>
            <td>
                <div className='litigationUser'>
                    <div className='litigationUserImage'>
                        <img src={UserImage2} alt='user-image' />
                    </div>
                    <div className='litigationUserText'>
                        <h6>Bobi</h6>
                        0X 3A5 EE2
                    </div>
                </div>
            </td>
            <td>01/05/2022</td>
            <td>01/07/2022</td>
            <td>9/10</td>
        </tr>

        <tr className='litigationBoxBody'>
            <td>I want reclaim my authorship of this media</td>
            <td>
                <div className='litigationUser'>
                    <div className='litigationUserImage'>
                        <img src={UserImage} alt='user-image' />
                    </div>
                    <div className='litigationUserText'>
                        <h6>Bobi</h6>
                        0X 3A5 EE2
                    </div>
                </div>
            </td>
            <td>
                <div className='litigationUser'>
                    <div className='litigationUserImage'>
                        <img src={UserImage2} alt='user-image' />
                    </div>
                    <div className='litigationUserText'>
                        <h6>Bobi</h6>
                        0X 3A5 EE2
                    </div>
                </div>
            </td>
            <td>01/05/2022</td>
            <td>01/07/2022</td>
            <td>9/10</td>
        </tr>
      </table>


      <Grid item xs={12} style={{ marginTop: '20px' }}>
        <Typography className='inviationSectionTitle' variant='h6'>Opening</Typography>
      </Grid>

      <table className='litigationBox'>
        <tr className='litigationBoxHeader'>
            <th>Creation Title</th>
            <th>Claimer</th>
            <th>Assumed Author</th>
            <th>Litigation Start</th>
            <th>Deadline</th>
            <th>Availabel jurors</th>
        </tr>

        <tr className='litigationBoxBody'>
            <td>I want reclaim my authorship of this media</td>
            <td>
                <div className='litigationUser'>
                    <div className='litigationUserImage'>
                        <img src={UserImage} alt='user-image' />
                    </div>
                    <div className='litigationUserText'>
                        <h6>Bobi</h6>
                        0X 3A5 EE2
                    </div>
                </div>
            </td>
            <td>
                <div className='litigationUser'>
                    <div className='litigationUserImage'>
                        <img src={UserImage2} alt='user-image' />
                    </div>
                    <div className='litigationUserText'>
                        <h6>Bobi</h6>
                        0X 3A5 EE2
                    </div>
                </div>
            </td>
            <td>01/05/2022</td>
            <td>01/07/2022</td>
            <td>
                <Button className='withdrawButton'>
                    <img src={WithdrawIcon} alt='withdraw' />    Withdraw
                </Button>
            </td>
        </tr>

        <tr className='litigationBoxBody'>
            <td>I want reclaim my authorship of this media</td>
            <td>
                <div className='litigationUser'>
                    <div className='litigationUserImage'>
                        <img src={UserImage} alt='user-image' />
                    </div>
                    <div className='litigationUserText'>
                        <h6>Bobi</h6>
                        0X 3A5 EE2
                    </div>
                </div>
            </td>
            <td>
                <div className='litigationUser'>
                    <div className='litigationUserImage'>
                        <img src={UserImage2} alt='user-image' />
                    </div>
                    <div className='litigationUserText'>
                        <h6>Bobi</h6>
                        0X 3A5 EE2
                    </div>
                </div>
            </td>
            <td>01/05/2022</td>
            <td>01/07/2022</td>
            <td>
                <Button onClick={approve} className='approveButton'>
                    <img src={ApproveIcon} alt='withdraw' />    Approve
                </Button>
            </td>
        </tr>
      </table>

      <Grid item xs={12} style={{ marginTop: '20px' }}>
        <Typography className='inviationSectionTitle' variant='h6'>Closed</Typography>
      </Grid>

      <table className='litigationBox'>
        <tr className='litigationBoxHeader'>
            <th>Creation Title</th>
            <th>Claimer</th>
            <th>Assumed Author</th>
            <th>Litigation Start</th>
            <th>Deadline</th>
            <th>Availabel jurors</th>
        </tr>

        <tr className='litigationBoxBody'>
            <td>I want reclaim my authorship of this media</td>
            <td>
                <div className='litigationUser'>
                    <div className='litigationUserImage'>
                        <img src={UserImage} alt='user-image' />
                    </div>
                    <div className='litigationUserText'>
                        <h6>Bobi</h6>
                        0X 3A5 EE2
                    </div>
                </div>
            </td>
            <td>
                <div className='litigationUser'>
                    <div className='litigationUserImage'>
                        <img src={UserImage2} alt='user-image' />
                    </div>
                    <div className='litigationUserText'>
                        <h6>Bobi</h6>
                        0X 3A5 EE2
                    </div>
                </div>
            </td>
            <td>01/05/2022</td>
            <td>01/07/2022</td>
            <td>9/10</td>
        </tr>

        <tr className='litigationBoxBody'>
            <td>I want reclaim my authorship of this media</td>
            <td>
                <div className='litigationUser'>
                    <div className='litigationUserImage'>
                        <img src={UserImage} alt='user-image' />
                    </div>
                    <div className='litigationUserText'>
                        <h6>Bobi</h6>
                        0X 3A5 EE2
                    </div>
                </div>
            </td>
            <td>
                <div className='litigationUser'>
                    <div className='litigationUserImage'>
                        <img src={UserImage2} alt='user-image' />
                    </div>
                    <div className='litigationUserText'>
                        <h6>Bobi</h6>
                        0X 3A5 EE2
                    </div>
                </div>
            </td>
            <td>01/05/2022</td>
            <td>01/07/2022</td>
            <td>9/10</td>
        </tr>
      </table>

    </Grid>
  );
}
 
export default Litigation;