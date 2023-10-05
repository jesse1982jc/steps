import { useState } from "react";
import "./App.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <StepMessage step={1}>
        <p>Pass in content</p>
        <p>🤟</p>
      </StepMessage>
      <StepMessage step={2}>
        <p>Read children prop</p>
        <p>💪</p>
      </StepMessage>
      {/* <Steps /> */}
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // const [test, setTest] = useState({ name: "Jesse" });

  const handlePrevious = () => {
    if (step > 1) setStep((prevStep) => prevStep - 1);
  };

  const handleNext = () => {
    if (step < 3) setStep((prevStep) => prevStep + 1);
    // setTest((prevTest) => {
    //   return { ...prevTest, name: "Mike" };
    // });
  };

  return (
    <div>
      <button
        className="close"
        onClick={() => setIsOpen((currIsOpen) => !currIsOpen)}
      >
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button
                bgColor="#e7e7e7"
                textColor="#333"
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
              >
                Learn how
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">
            {/* Button 組件因為使用 children prop，所以必須有 opening-tag，及 closing-tag */}
            <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrevious}>
              {/* children prop start */}
              <span>✈️</span>
              <span>👈</span>Previous
              {/* children prop end */}
            </Button>

            <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext}>
              {/* children prop start */}
              Next<span>👉</span>
              <span>🚀</span>
              {/* children prop end */}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

/* // 加入 children prop */
/* // Button component (reusable) */
function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children}
    </button>
  );
}
