import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card, CardActions, CardContent, Collapse, Link, Typography,
} from '@mui/material';

function ReadMoreCard({
  jsonEntry,
  project,
}) {
  const [expanded, setExpanded] = useState(false);
  const expandedToggle = () => {
    setExpanded(!expanded);
  };

  const projectUrl = () => (
    <Link rel="noopener noreferrer" target="_blank" underline="hover" href={jsonEntry.url}>{jsonEntry.title}</Link>
  );

  return (
    <Card>
      <CardContent style={{ paddingBottom: '0', marginLeft: '1vw', marginRight: '1vw' }}>
        <Typography variant="h4" color="primary" style={{ marginBottom: '2vw' }}>
          {project ? projectUrl() : jsonEntry.title}
        </Typography>
        <Typography variant="h6" style={{ whiteSpace: 'pre-wrap' }}>
          {jsonEntry.preview}
        </Typography>
      </CardContent>
      <Collapse in={expanded}>
        <CardContent style={{ marginLeft: '1vw', marginRight: '1vw' }}>
          <Typography variant="h6" style={{ whiteSpace: 'pre-wrap' }} component={jsonEntry.title === 'Stream of thought 1.0' ? 'i' : 'span'}>
            {jsonEntry.body}
          </Typography>
        </CardContent>
      </Collapse>
      <CardActions disableSpacing>
        <Button
          variant="text"
          size="medium"
          sx={{
            textTransform: 'none', marginLeft: 'auto', marginRight: '1vw',
          }}
          onClick={expandedToggle}
        >
          <Typography variant="h5">{expanded ? 'collapse' : 'read more'}</Typography>
        </Button>
      </CardActions>
    </Card>
  );
}

ReadMoreCard.propTypes = {
  jsonEntry: PropTypes.shape({
    title: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    url: PropTypes.string,
  }).isRequired,
  project: PropTypes.bool,
};

ReadMoreCard.defaultProps = {
  project: false,
};

export default ReadMoreCard;
