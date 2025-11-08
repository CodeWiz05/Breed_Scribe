import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Grid,
  CircularProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

/**
 * A small helper component to show the "Confidence" ring.
 * It uses a <Box> to superimpose the text over the spinner.
 */
function ConfidenceRing({ value }) {
  const percent = value * 100;
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress
        variant="determinate"
        value={percent}
        size={100}
        thickness={4}
        sx={{ color: 'primary.main' }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h5" component="div" color="text.secondary">
          {`${Math.round(percent)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

/**
 * The main Result Component.
 * It receives 'data' (the API results) and 'onNewAnalysis' (the reset function)
 * from App.js.
 */
function ResultComponent({ data, onNewAnalysis }) {
  return (
    <Box sx={{ width: '100%', maxWidth: 700 }}>
      <Typography variant="h4" sx={{ textAlign: 'center', mb: 3 }}>
        Classification Results
      </Typography>

      {/* --- Main Result Card --- */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Grid container spacing={3}>
            {/* Column 1: Image Placeholder */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: 250,
                  backgroundColor: '#e0e0e0',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#888',
                }}
              >
                (Analyzed Image)
              </Box>
            </Grid>
            
            {/* Column 2: Details */}
            <Grid item xs={12} md={6}>
              <Typography variant="overline" color="text.secondary">
                Detected Breed
              </Typography>
              <Typography variant="h4" gutterBottom>
                {data.breed}
              </Typography>

              <Typography variant="overline" color="text.secondary" sx={{ mt: 2 }}>
                Dairy Level
              </Typography>
              <Typography variant="h6" sx={{ color: 'primary.main' }}>
                {data.dairyLevel}
              </Typography>

              <Typography variant="overline" color="text.secondary" sx={{ mt: 2 }}>
                Purpose
              </Typography>
              <Typography variant="h6">{data.purpose}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* --- Confidence Card --- */}
      <Card sx={{ mb: 3 }}>
        <CardContent sx={{ textAlign: 'center' }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Confidence Score</Typography>
              <ConfidenceRing value={data.confidence} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Usability Score</Typography>
              <Typography variant="h3">{`${data.usabilityScore * 100}%`}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* --- Evidence Card --- */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Classification Evidence
          </Typography>
          <List dense>
            {data.evidence.map((text, index) => (
              <ListItem key={index}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>

      {/* --- Action Buttons --- */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button variant="contained" size="large" onClick={onNewAnalysis}>
          New Analysis
        </Button>
        <Button variant="outlined" size="large">
          Download PDF
        </Button>
      </Box>
    </Box>
  );
}

export default ResultComponent;