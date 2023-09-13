import { Box } from '@mui/material';
import styled from '@emotion/styled';

function LeftBox({ children }) {
    const StyledLeftBox = styled(Box)(({ theme }) => ({
      width: '39rem',
      height: '45rem',
      position: 'relative',
      //position: 'absolute',: doing this will take out of document flow and pin it to right side of screen or its nearest positioned ancestor
      marginRight: 'auto',
      //This is a nifty trick when you're working with flex or grid containers. When used in a flex container with flex-direction: row, it pushes the item (in this case, RightBox) to the far right side of the container. If the parent is a regular block container, this won't have any effect.
      height: '100%',
      display: 'flex', // Add display flex to center children
      justifyContent: 'center', // Center horizontally, this affects children
      alignItems: 'center', // Center vertically
    }));

  return (
    <StyledLeftBox>
      {children}
    </StyledLeftBox>
  );
}

export default LeftBox;