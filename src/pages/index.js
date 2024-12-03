import React, { useState } from "react";

const Batches = () => {
  const [formData, setFormData] = useState({
    batchName: "",
    batchDate: "",
    batchImage: null
  });
  const [successMessage, setSuccessMessage] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { batchName, batchDate, batchImage } = formData;

    if (batchName && batchDate && batchImage) {
      setSuccessMessage(true);

      // Clear form data
      setFormData({
        batchName: "",
        batchDate: "",
        batchImage: null
      });

      // Reset form (if needed for file input)
      document.getElementById("batchesForm").reset();
    }
  };

  return (
    <div>
      <div className="container">
        <h1>Add a Batch</h1>
        <form id="batchesForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="batchName">Batch Name:</label>
            <input
              type="text"
              id="batchName"
              name="batchName"
              value={formData.batchName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="batchDate">Batch Date:</label>
            <input
              type="month"
              id="batchDate"
              name="batchDate"
              value={formData.batchDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="batchImage">Upload Batch Image:</label>
            <input
              type="file"
              id="batchImage"
              name="batchImage"
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Add Batch</button>
        </form>
        {successMessage && (
          <p id="successMessage" style={{ display: "block" }}>
            Batch successfully added!
          </p>
        )}
      </div>
    </div>
  );
};

export default Batches;
