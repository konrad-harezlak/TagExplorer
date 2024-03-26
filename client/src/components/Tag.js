import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Tag = ({ name, postCount }) => {
  return (
    <Card variant="outlined" style={{ marginBottom: '10px' }}>
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body1">Post Count: {postCount}</Typography>
      </CardContent>
    </Card>
  );
};

export default Tag;
