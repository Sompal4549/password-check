import React, { useState } from "react";
import "./accordion.css";
import AccordionContainer from "./AccordionContainer";
const accData = [
  {
    id: "1",
    accQue: "what should be first question?",
    answer:
      "Question should be just question, but when we talk about answer then it should be brief to the point. like this.",
  },
  {
    id: "2",
    accQue: "How we can save water?",
    answer:
      "To save water we shall quit drinking water.Please do not stop us to play Holi.",
  },
  {
    id: "3",
    accQue: "How to stop pollution?",
    answer:
      "If we have pollution the only reason for this is that we don't have right technology to turn trash into power we should learn it from other countries",
  },
];

const Accordion = ({}) => {

  return (
    <>
      <div>
        {React.Children.toArray(
          accData.map((accordion, index) => {
            return (
              <>
                <AccordionContainer accordion={accordion} index={index} />
              
              </>
            );
          })
        )}
      </div>
    </>
  );
};
export default Accordion;
