import React from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { useTheme } from '@mui/material/styles';
import {memo} from 'react';
import { useEffect } from "react";
import { useState } from "react";


const ItalicText = styled(motion.div)(({ theme }) => ({
  fontFamily: theme.typography.h1.fontFamily,
  fontStyle: 'italic',
  fontSize: '8rem',
  color: theme.palette.accent.main,  // Accessing the accent.main color
  lineHeight: '0.9',
  whiteSpace: 'normal', // This ensures that the text will wrap
  maxWidth: '100%',
  display: 'flex',
  flexWrap: 'wrap',     // This ensures the container won't exceed its parent's width
  paddingBottom: '5rem',
  paddingLeft: '1rem',
}));

const AnimatedWord = styled(motion.span)(({ theme }) => ({
  marginRight: '1.3rem',
  fontFamily: theme.typography.h1.fontFamily,
  fontStyle: 'italic',
  fontSize: '8rem',
  color: theme.palette.accent.main,  // Accessing the accent.main color
  lineHeight: '0.9',
  wordWrap: "break-word",
  overflowWrap: "break-word",
}));

const AnimatedTextWord = ({ text, hasAnimated }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: hasAnimated
      ? { opacity: 1 }
      : (i = 1) => ({
          opacity: 1,
          transition: { staggerChildren: 0.2, delayChildren: 0.08 * i },
        }),
  };

  const child = hasAnimated
    ? {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 1, x: 0 },
      }
    : {
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
          },
        },
        hidden: {
          opacity: 0,
          x: 20,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
          },
        },
      };

  return (
    <ItalicText variants={container} initial="hidden" animate="visible">
      {words.map((word, index) => (
        <AnimatedWord variants={child} key={index}>
          {word}
        </AnimatedWord>
      ))}
    </ItalicText>
  );
};

export default AnimatedTextWord;

//By default, if your component wrapped in memo renders the same result given the same props, it will reuse the last rendered result, helping to avoid unnecessary renders. This means that as long as the text prop doesn't change, the component won't re-render.


