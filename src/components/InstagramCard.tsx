import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';

interface InstagramCardProps {
  image: string;
  instagramUrl: string;
}

const InstagramCard: React.FC<InstagramCardProps> = ({ image, instagramUrl }) => {
  return (
    <Card sx={{ maxWidth: 345, transition: 'all 0.3s ease-in-out', border:'3px solid #FCC9CD', borderRadius: '5%'}}>
      <CardActionArea 
      onClick={() => window.open(instagramUrl, '_blank')}
      sx={{
        '&:hover': {
      transform: 'scale(1.05)',
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
      border:'3px solid #FCC9CD',
    },
      }}
    >
        <CardMedia
          component="img"
          height="300"
          image={image}
        />
        <CardContent>
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default InstagramCard;
