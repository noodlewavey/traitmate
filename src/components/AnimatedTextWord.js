import React from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { useTheme } from '@mui/material/styles';

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

const AnimatedTextWord = ({ text }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.08 * i },
    }),
  };

  const child = {
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
    <ItalicText
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <AnimatedWord
          variants={child}
          key={index}
        >
          {word}
        </AnimatedWord>
      ))}
    </ItalicText>
  );
};

export default AnimatedTextWord;
