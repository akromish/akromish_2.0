import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card, CardActions, CardContent, Collapse, Typography,
} from '@mui/material';

function ReadMoreCard({
  jsonEntry,
}) {
  return (
    <Card
      elevation={0}
      sx={{
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: '1px',
        marginY: '2vw',
      }}
    >
      <CardContent>
        <Typography fontSize={{ xs: '8vw', lg: '2vw' }} color="primary">
          {jsonEntry.title}
        </Typography>
        <Typography fontSize={{ xs: '5vw', lg: '1.25vw' }}>
          {jsonEntry.preview}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          variant="text"
          size="large"
          sx={{
            textTransform: 'none', marginLeft: 'auto',
          }}
        >
          read more
        </Button>
      </CardActions>
      <Collapse>
        <CardContent>
          <Typography>
            {jsonEntry.body}
          </Typography>
        </CardContent>
      </Collapse>
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
