import React, { useState } from 'react';
import { IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import {Typography} from '@mui/material';

function CloseMatch() {
  const navigate = useNavigate();

  const handleClose = () => {
    // Navigate back to the root route ("/")
    navigate('/mymatches');
  };

  return (
    <>
    <div className="close-button-wrapper">
      <IconButton onClick={handleClose}>
        <CloseIcon />
      </IconButton>
      </div>
    </>
  );
}

export default CloseMatch;