import { Box } from '@mui/material';
import styled from '@emotion/styled';

function RightBox({ children }) {
    const StyledRightBox = styled(Box)(({ theme }) => ({
      width: '39rem',
      height: '45rem',
      position: 'relative',
      //position: 'absolute',: doing this will take out of document flow and pin it to right side of screen or its nearest positioned ancestor
      marginLeft: 'auto',
      //This is a nifty trick when you're working with flex or grid containers. When used in a flex container with flex-direction: row, it pushes the item (in this case, RightBox) to the far right side of the container. If the parent is a regular block container, this won't have any effect.
      height: '100%',
      display: 'flex', // Add display flex to center children
      justifyContent: 'center', // Center horizontally, this affects children
      alignItems: 'center', 
      gap: '1rem', //this gives gap to child elements
      flexDirection: 'column' //stacks children top to bottom
    }));

  return (
    <StyledRightBox>
      {children}
    </StyledRightBox>
  );
}

export default RightBox;
