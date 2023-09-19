import React, { useState } from 'react';
import { IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import {Typography} from '@mui/material';

function CloseButton() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
    // Navigate back to the root route ("/")
    navigate('/');
  };

  return (
    <>
    <div className="close-button-wrapper">
      <IconButton onClick={() => setOpen(true)}>
        <CloseIcon />
      </IconButton>
      <Dialog open={open} onClose={() => setOpen(false)} sx={{color:'#dfd3bc'}}>
        <DialogContent>
          <Typography variant="body2">Are you sure you want to navigate back to the home page? You will lose your progress</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Yes
          </Button>
          <Button onClick={() => setOpen(false)} color="primary">
            No
          </Button>
        </DialogActions>
      </Dialog>
      </div>
    </>
  );
}

export default CloseButton;
