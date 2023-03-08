import React, { useState } from 'react';

function LandingPage() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  }

  const renderOptions = () => {
    return (
      <div>
        <h2>Please select an option:</h2>
        <div>
          <button onClick={() => handleOptionClick('resume')}>Resume Builder</button>
        </div>
        <div>
          <button onClick={() => handleOptionClick('coverLetter')}>Cover Letter Generator</button>
        </div>
      </div>
    );
  }

  const renderResumeBuilder = () => {
    return (
      <div>
        <h2>Resume Builder</h2>
        <form>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" />

          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" />

          {/* Add more fields as needed */}

          <button type="submit">Build Resume</button>
        </form>
      </div>
    );
  }

  const renderCoverLetterGenerator = () => {
    return (
      <div>
        <h2>Cover Letter Generator</h2>
        <form>
          <label htmlFor="jobTitle">Job Title:</label>
          <input type="text" id="jobTitle" name="jobTitle" />

          <label htmlFor="companyName">Company Name:</label>
          <input type="text" id="companyName" name="companyName" />

          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" />

          {/* Add more fields as needed */}

          <button type="submit">Generate Cover Letter</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome to Resume and Cover Letter Builder by Qode LLC!</h1>
      {selectedOption ? (
        selectedOption === 'resume' ? renderResumeBuilder() : renderCoverLetterGenerator()
      ) : renderOptions()}
    </div>
  );
}

export default LandingPage;
