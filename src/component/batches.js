const Batches = () => {
  return (
    <div>
      <div className="container">
        <h1>Add a Batch</h1>
        <form id="batchesForm">
          <div className="form-group">
            <label htmlFor="batchName">Batch Name:</label>
            <input type="text" id="batchName" name="batchName" required="" />
          </div>
          <div className="form-group">
            <label htmlFor="batchDate">Batch Date:</label>
            <input type="month" id="batchDate" name="batchDate" required="" />
          </div>
          <div className="form-group">
            <label htmlFor="batchImage">Upload Batch Image:</label>
            <input type="file" id="batchImage" name="batchImage" required="" />
          </div>
          <button type="submit">Add Batch</button>
        </form>
        <p id="successMessage" style={{ display: "none" }}>
          Batch successfully added!
        </p>
      </div>
    </div>
  );
};

export default Batches;
