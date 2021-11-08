import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AuthContext from '../auth'
import { useContext,useState } from 'react';
import Alert from '@mui/material/Alert';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ErrorModal() {

  const { auth } = useContext(AuthContext);
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  const hideError = () => {
      auth.hideError();
  }
  let textError="Something Wrong"
  let component = "";
  if(auth.err)
    textError=auth.err

  if(auth.err) {
    component = <div>
           <Modal
          open={open}
          //onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h5" component="h2">
            ERROR
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Alert severity="error">{textError}</Alert>
            </Typography>
            <Button variant="outlined" onClick={hideError}>Confirmed</Button>
          </Box>
        </Modal>
      </div>
  }

  return (component);
}
