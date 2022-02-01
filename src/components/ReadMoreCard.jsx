import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card, CardActions, CardContent, Collapse, Typography,
} from '@mui/material';

function ReadMoreCard({
  jsonEntry,
}) {
  const [expanded, setExpanded] = useState(false);
  const expandedToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" color="primary">
          {jsonEntry.title}
        </Typography>
        <Typography variant="h6">
          {jsonEntry.preview}
        </Typography>
      </CardContent>
      <Collapse in={expanded}>
        <CardContent>
          <Typography variant="h6">
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
  }).isRequired,
};

export default ReadMoreCard;
