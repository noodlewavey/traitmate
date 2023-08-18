import QuizPage from "./QuizPage";
import { Transition, TransitionGroup, CSSTransition}  from "react-transition-group";

const QuizPageWithFade = () => {
    return (
      <TransitionGroup>
        <CSSTransition
          timeout={500} // Set the desired timeout
          classNames="fade-transition"
        >
          <QuizPage />
        </CSSTransition>
      </TransitionGroup>
    );
  };
  
  export default QuizPageWithFade ;
 