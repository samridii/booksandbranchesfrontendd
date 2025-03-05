import React from 'react';
import '../../styles/createclub.css';
import '../../App.css';

const Createclub = () => {
  return (
    <div className="container">
      {/* Header Section */}
      <div className="header">
        <h1>Hi Sam, Build Your Tribe</h1>
        <h2>"READ TOGETHER, RISE TOGETHER"</h2>
      </div>

      {/* Form Section */}
      <div className="form-container">
        <form>
          <div className="form-group">
            <label>WHAT'S YOUR STORY SQUAD CALLED?</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>WHAT'S YOUR BOOKISH VIBE?</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>RULES</label>
            <textarea rows="4"></textarea>
          </div>
        </form>

        {/* Create Button */}
        <div className="button-container">
          <button className="create-btn">Create Club</button>
        </div>
      </div>
    </div>
  );
};

export default Createclub;