import * as React from 'react';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import RightBox from './RightBox.jsx';

const Wrapper = styled('div')({
    justifyContent: 'center',
    alignItems: 'center',
    height: '45rem',
    width: '80rem',
    overflowX: 'hidden',
    overflowY: 'hidden',
    position: 'relative' // This is important for the absolute positioning of the child.
});


//does putting position of top level copmonent as relative make all the child components, including grandchildren components, relative to the top level component? 

//this is relative position only deals with direct children that are absolutely positioned

//wrapper is outermost container...centers stuff in scree horizontall yand vefitcally
//overflowing content will be clipped
//relative means child elements will be positioned relative to wrapper
const CenterContainer = styled(Box)(({ theme }) => ({
    width: '95%',
    display: 'flex', //this ensures marginLeft: auto on right box pushes to right
    minHeight: '95%',
    height: '95%',
    margin: 'auto',
    overflowX: 'hidden',
    border: '1px solid black',
    overflowY: 'hidden',
    //if there isnt enough space, parent container forces horizonal scroll
  }));

  //this is immediate child of wrapper, contains right box
  //relative makes container point of ref to absolutely positioned children
  //overflowX: 'scroll' and overflowY: 'scroll': These styles force both horizontal and vertical scrollbars to appear if the content inside CenterContainer exceeds its boundaries.
  

export default function ProfileCreation({children}) {
  return (
    <Wrapper>
    <CenterContainer>
        <RightBox>
            <h1>Hello</h1>
        </RightBox>
    </CenterContainer>
    </Wrapper>
  );
}

//you can define a hook outside function call
//you can only call function or hook inside react function 

//when you define something, you're creating a blueprint
//when callign something, you're excuting it....(setting up state, fetching data, 
//creating a side effect)


//you use styled now instead of makestyles