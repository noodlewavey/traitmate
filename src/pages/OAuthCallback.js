import { AnimatePresence} from 'framer-motion';
import {motion} from 'framer-motion';

function OAuthCallback() {

    return (
      <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0, transition: {duration: 0.4}}}>
      <h1>hello</h1>
      </motion.div>
    );
  }
  
  
  export default OAuthCallback;