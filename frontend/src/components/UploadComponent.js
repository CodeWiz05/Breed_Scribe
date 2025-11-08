import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';

/**
 * This is the "dropzone" area.
 * We'll use MUI's 'sx' prop for highly custom styling,
 * like the dashed border.
 */
const DropzoneBox = ({ onUpload }) => (
  <Box
    onClick={onUpload} // Trigger the upload on click
    sx={{
      border: '2px dashed #bbbbbb',
      borderRadius: '8px',
      padding: '40px 20px',
      textAlign: 'center',
      cursor: 'pointer',
      backgroundColor: '#fafafa',
      transition: 'background-color 0.2s',
      '&:hover': {
        backgroundColor: '#f0f0f0',
      },
    }}
  >
    <UploadFileIcon sx={{ fontSize: 48, color: '#888888' }} />
    <Typography variant="h6" sx={{ mt: 2, color: '#555555' }}>
      Drag and drop your image here
    </Typography>
    <Typography variant="body2" sx={{ color: '#777777' }}>
      Max size: 15MB • Min resolution: 640x640px
    </Typography>
  </Box>
);

/**
 * This is the main Upload Component.
 * It receives the 'onUpload' function from App.js as a prop.
 */
function UploadComponent({ onUpload }) {
  return (
    <Card sx={{ maxWidth: 500, width: '100%' }}>
      <CardContent sx={{ padding: '24px' }}>
        {/* Header Text */}
        <Typography variant="h5" component="div" sx={{ textAlign: 'center', mb: 1 }}>
          Upload Cattle Photo
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', mb: 3, color: '#666666' }}>
          Get instant AI-powered breed classification
        </Typography>

        {/* The Dropzone */}
        <DropzoneBox onUpload={onUpload} />

        {/* "OR" divider */}
        <Typography variant="body1" sx={{ textAlign: 'center', my: 2, color: '#888888' }}>
          or
        </Typography>

        {/* "Browse Files" Button */}
        <Button
          variant="contained"
          component="label" // This is a trick to make it act like a file input
          fullWidth
          size="large"
          onClick={onUpload} // For our demo, this just triggers the simulated upload
          sx={{ textTransform: 'none', fontSize: '1rem' }}
        >
          Browse Files
          {/* <input type="file" hidden /> */}
        </Button>
      </CardContent>
    </Card>
  );
}

export default UploadComponent;