import React from 'react';
import { Card, CardContent, Typography, CircularProgress, Box } from '@mui/material';

/**
 * This component just shows a spinner and text inside a card.
 * It's all centered using MUI's <Box> component with flexbox.
 */
function LoadingComponent() {
  return (
    <Card sx={{ maxWidth: 500, width: '100%' }}>
      <CardContent sx={{ padding: '48px' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 3, // Adds space between the spinner and the text
          }}
        >
          {/* This is the MUI spinning progress circle */}
          <CircularProgress size={60} />
          
          <Typography variant="h6" sx={{ color: '#555555' }}>
            Analyzing Image...
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default LoadingComponent;