import React from 'react';
import {
  Box, Typography,
} from '@mui/material';
import ReadMoreCard from '../components/ReadMoreCard';

export default function Projects() {
  const projects = require('../json_blobs/projects.json'); // eslint-disable-line global-require
  const projectList = projects.projects.map((project) => project);

  return (
    <Box>
      <Typography alignItems="center" justifyContent="center" display="flex" fontWeight="bold" fontSize={{ xs: '12vw', lg: '4vw' }}>Projects</Typography>
      {projectList.map((project) => (
        <ReadMoreCard jsonEntry={project} key={project.id} />
      ))}
    </Box>
  );
}
