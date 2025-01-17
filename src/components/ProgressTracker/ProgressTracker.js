import React from "react";
import "./ProgressTracker.scss";
import { formatDate } from "../../utils/dateUtils";

const ProgressTracker = ({ currentStatus, expectedDeliveryDate }) => {
  const statuses = [
    "Shipment created",
    "Picked up",
    "In transit",
    "Out for delivery",
    "Delivered",
  ];

  // Determine if the step is the current one
  const isStepCurrent = (index) => statuses[index] === currentStatus.state;
  const isStepCompleted = (index) => {
    const currentStepIndex = statuses.indexOf(currentStatus.state);
    return index <= currentStepIndex;
  };
  // Get the class names for each step based on status
  const getStepClassNames = (index) => {
    let result = "stepProgressBar__step";

    if (isStepCurrent(index)) {
      result = `${result} stepProgressBar__step--current`;
    }
    if (isStepCompleted(index)) {
      result = `${result} stepProgressBar__step--completed`;
    }

    return result;
  };


  return (
    <div className="progressTracker">
      <ol className="stepProgressBar">
        {statuses.map((step, index) => (
          <li key={step} className={getStepClassNames(index)}>
            {/* Add the step line only for steps after the first one */}
            {index > 0 && index !== statuses.length && (
              <div
                className={`stepProgressBar__step__line ${
                  isStepCompleted(index)
                    ? "stepProgressBar__step__line--active"
                    : ""
                }`}
              ></div>
            )}

            <span className="stepProgressBar__step__indicator">
              {/* Show the completed icon only if the step is completed */}
              {isStepCompleted(index) && (
                <svg
                  className="stepProgressBar__step__indicator__icon-completed"
                  width="10"
                  height="7"
                  viewBox="0 0 12 9"
                  fill="currentColor"
                >
                  <path d="M1.05025 3.70714C1.44077 3.31661 2.07394 3.31661 2.46446 3.70714L5.29289 6.53556C5.68341 6.92609 5.68341 7.55925 5.29289 7.94978C4.90236 8.3403 4.2692 8.3403 3.87867 7.94978L1.05025 5.12135C0.659724 4.73083 0.659724 4.09766 1.05025 3.70714Z" />
                  <path d="M10.9498 0.878709C11.3403 1.26923 11.3403 1.9024 10.9498 2.29292L5.29289 7.94978C4.90236 8.3403 4.2692 8.3403 3.87867 7.94978C3.48815 7.55925 3.48816 6.92609 3.87869 6.53556L9.53554 0.878709C9.92606 0.488184 10.5592 0.488184 10.9498 0.878709Z" />
                </svg>
              )}
            </span>

            <p className="stepProgressBar__step__title">
              <span className="stepProgressBar__step__title__label">{step}</span>

              {isStepCurrent(index) && (
                <span className="stepProgressBar__step__title__date">
                  {formatDate(currentStatus.timestamp)}
                </span>
              )}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ProgressTracker;
