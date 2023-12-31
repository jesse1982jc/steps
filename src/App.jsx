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

          {/* // 加入一個 StepMessage 組件，可重複使用 */}
          {/* {messages[step - 1]} 是 children */}
          <StepMessage step={step}>
            {messages[step - 1]}
            {/* 加入一個 Button 組件，可重複使用 */}
            <div className="buttons">
              <Button
                bgColor="#e7e7e7"
                textColor="#333"
                onClick={() => alert(`Learn how to: ${messages[step - 1]}`)}
              >
                {/* Learn how 是 children */}
                Learn how
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">
            {/* 真正要用 Button 組件的地方，props 直接賦予值 或 及 格式、內容、順序…… */}
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              {/* 以下這些元素都是 children */}
              <span>😻</span>
              <span>👈</span>Previous
              {/* 以上這些元素都是 children */}
            </Button>

            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              {/* 以下這些元素都是 children */}
              Next<span>👉</span>
              <span>😼</span>
              {/* 以上這些元素都是 children */}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

// 製作一個 StepMessage 組件，可重複使用
function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

// 製作一個 Button 的組件，可重複使用
// 定義好 props 屬性
function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children}
    </button>
  );
}
