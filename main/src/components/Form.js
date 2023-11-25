// Form.js

// Import necessary dependencies
import React, { useState } from 'react';
import '../styles/Form.css';

// Main StartupForm component
const StartupForm = () => {
  // State for form fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [date, setDate] = useState('');
  const [daySelection, setDaySelection] = useState('');
  const [startupIdea, setStartupIdea] = useState('');
  const [b2bOrB2c, setB2bOrB2c] = useState('');
  const [ideaType, setIdeaType] = useState('');
  const [ideaExplanation, setIdeaExplanation] = useState('');
  const [businessModel, setBusinessModel] = useState('');

  // State for form submission status
  const [submissionStatus, setSubmissionStatus] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that all fields are filled
    if (
      !fullName.trim() ||
      !email.trim() ||
      !mobileNumber.trim() ||
      !date.trim() ||
      !daySelection.trim() ||
      !startupIdea.trim() ||
      !b2bOrB2c.trim() ||
      !ideaType.trim() ||
      !ideaExplanation.trim() ||
      !businessModel.trim()
    ) {
      // Display an error message or handle validation as needed
      console.error('Please fill in all the fields');
      setSubmissionStatus('Error: Please fill in all the fields');
      return;
    }

    // If all fields are filled, proceed with form submission
    console.log('Form submitted:', {
      fullName,
      email,
      mobileNumber,
      date,
      daySelection,
      startupIdea,
      b2bOrB2c,
      ideaType,
      ideaExplanation,
      businessModel,
    });

    // Reset form fields
    setFullName('');
    setEmail('');
    setMobileNumber('');
    setDate('');
    setDaySelection('');
    setStartupIdea('');
    setB2bOrB2c('');
    setIdeaType('');
    setIdeaExplanation('');
    setBusinessModel('');

    // Set submission success message
    setSubmissionStatus('Form submitted successfully!');
  };

  return (
    <section id="Form">
      <form onSubmit={handleSubmit}>
        <h1>Idea Submission Form</h1>

        {/* Field 1: First Name and Email */}
        <div className="input-container">
          <div>
            <label>Full Name:</label>
            <input type="text" placeholder="Enter Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
        </div>

        {/* Field 2: Mobile Number */}
        <div>
          <label>Mobile Number:</label>
          <input type="tel" placeholder="Enter Mobile Number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} required />
        </div>

        {/* Field 3: Select Date and Enter Day Section */}
        <div className="form-row">
          <div>
            <label>Select the date:</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          </div>
          <div>
            <label>Enter the Day Section:</label>
            <input type="text" placeholder="Enter Day Section" value={daySelection} onChange={(e) => setDaySelection(e.target.value)} required />
          </div>
        </div>

        {/* Field 4: What kind of startup idea do you have? */}
        <div>
          <label>What kind of startup idea do you have?</label>
          <select value={startupIdea} onChange={(e) => setStartupIdea(e.target.value)}>
            <option value="" disabled>Select</option>
            <option value="EduTech">EduTech</option>
            <option value="Pharma">Pharma</option>
            <option value="Clean Energy">Clean Energy</option>
            <option value="Fashion">Fashion</option>
            <option value="AR (or) VR">AR (or) VR</option>
            <option value="FinTech">FinTech</option>
            <option value="HealthTech">HealthTech</option>
            <option value="AgriTech">AgriTech</option>
            <option value="Others">Others</option>
          </select>
        </div>

        {/* Field 5: Is your business idea B2B or B2C? */}
        <div className="checkbox-container">
          <label>Is your business idea B2B or B2C?</label>
          <div>
            <input type="checkbox" value="B2B" checked={b2bOrB2c === 'B2B'} onChange={() => setB2bOrB2c('B2B')} />
            B2B
          </div>
          <div>
            <input type="checkbox" value="B2C" checked={b2bOrB2c === 'B2C'} onChange={() => setB2bOrB2c('B2C')} />
            B2C
          </div>
          <div>
            <input type="checkbox" value="Both" checked={b2bOrB2c === 'Both'} onChange={() => setB2bOrB2c('Both')} />
            Both
          </div>
          <p></p>
        </div>

        {/* Field 6: Is your idea Product-based or Service-based? */}
        <div className="radio-container">
          <p></p>
          <label>Is your idea </label>
          <div>
            <input type="radio" value="Product-based" checked={ideaType === 'Product-based'} onChange={() => setIdeaType('Product-based')} />
            Product-based
          </div>
          <div>
            <input type="radio" value="Service-based" checked={ideaType === 'Service-based'} onChange={() => setIdeaType('Service-based')} />
            Service-based
            <p></p>
          </div>
          <p></p>
        </div>

        {/* Field 7: Textboxes - Explain Your Startup Idea and Business Model */}
        <div>
          <label>Explain Your Startup Idea:</label>
          <textarea placeholder="Enter Your Startup Idea Explanation" value={ideaExplanation} onChange={(e) => setIdeaExplanation(e.target.value)} required />
        </div>

        <div>
          <label>Explain Your Business Model:</label>
          <textarea placeholder="Enter Your Business Model Explanation" value={businessModel} onChange={(e) => setBusinessModel(e.target.value)} required />
        </div>

        {/* Display submission status */}
        {submissionStatus && <p style={{ color: submissionStatus.includes('Error') ? 'red' : 'green' }}>{submissionStatus}</p>}

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default StartupForm;
