import { useState } from 'react';
const messages = [
  'Learn React ⚛',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];
export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handlePrevious() {
    if (step > 1) setStep(currStep => currStep - 1);
  }
  function handleNext() {
    if (step < 3) setStep(currStep => currStep + 1);
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen(isOpen => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>
          {/* <p className="message">
            <h3>Step {step}</h3>
            {messages[step - 1]}
          </p> */}
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="buttons">
            <Button textColor="#FFF" bgColor="#7950F2" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>
            <Button textColor="#FFF" bgColor="#7950F2" onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function StepMessage({ step, children }) {
  return (
    <p className="message">
      <h3>Step {step}</h3>
      {children}
    </p>
  );
}
