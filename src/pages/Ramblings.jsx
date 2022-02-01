import React from 'react';
import {
  Box, Typography,
} from '@mui/material';
import ReadMoreCard from '../components/ReadMoreCard';

export default function Ramblings() {
  const rambles = require('../json_blobs/ramblings.json'); // eslint-disable-line global-require
  const rambleList = rambles.ramblings.map((ramble) => ramble);

  return (
    <Box>
      <Typography alignItems="center" justifyContent="center" display="flex" fontWeight="bold" fontSize={{ xs: '12vw', lg: '4vw' }}>Ramblings</Typography>
      {rambleList.map((ramble) => (
        <ReadMoreCard jsonEntry={ramble} key={ramble.id} />
      ))}
    </Box>
  );
}
