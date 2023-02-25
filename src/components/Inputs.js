import React from 'react';

const Inputs = () => (
  <section>
    <h2 className="form-title">ADD NEW BOOK</h2>
    <form className="add-form">
      <input
        className="input title-input"
        placeholder="Book title"
      />
      <select className="input category-input">
        <option value="Category">
          author
        </option>
      </select>
      <button className="primary-button-big" type="submit">ADD BOOK</button>
    </form>
  </section>
);

export default Inputs;
