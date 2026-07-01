import { useState } from "react";

export default function Accordion() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" onClick={() => handleToggle(1)}>
            <button
              className={
                isActive.key == 1
                  ? "accordion-button"
                  : "accordion-button collapsed"
              }
              type="button"
            >
              ICT Strategy &amp; Consulting
            </button>
          </h2>
          <div
            id="collapseOne"
            className={
              isActive.key == 1
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse"
            }
          >
            <div className="accordion-body">
              <p>
                We review your current ICT environment, identify gaps, and design
                a clear strategy and roadmap that fits your goals, budget, and
                team capacity.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" onClick={() => handleToggle(2)}>
            <button
              className={
                isActive.key == 2
                  ? "accordion-button"
                  : "accordion-button collapsed"
              }
              type="button"
            >
              Training &amp; Capacity Building
            </button>
          </h2>
          <div
            id="collapseTwo"
            className={
              isActive.key == 2
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse"
            }
          >
            <div className="accordion-body">
              <p>
                We design and deliver practical ICT and digital skills trainings
                so your staff can confidently use new systems, tools, and
                processes.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" onClick={() => handleToggle(3)}>
            <button
              className={
                isActive.key == 3
                  ? "accordion-button"
                  : "accordion-button collapsed"
              }
              type="button"
            >
              Digital Solutions &amp; Growth Support
            </button>
          </h2>
          <div
            id="collapseThree"
            className={
              isActive.key == 3
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse"
            }
          >
            <div className="accordion-body">
              <p>
                We help you choose and implement the right digital tools, improve
                your online presence, and use technology to grow your
                organisation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
