import React from 'react'
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Favorite = () => {

  const [flag, setFlag] = React.useState(true);

  const handleClick = () => {
    setFlag(!flag);
  };
  return (
    <Fab onClick={handleClick} color={flag ? "success" : "secondary"} aria-label="like">
    <FavoriteIcon />
    </Fab>
  )
}

export default Favorite