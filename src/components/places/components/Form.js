import React from "react";

function Form() {
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name of Place
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name of place"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <textarea
            type="text"
            className="form-control"
            id="address"
            placeholder="Enter address of place"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            type="text"
            className="form-control"
            id="description"
            placeholder="Write something about it"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            image
          </label>
          <input type="file" className="form-control" id="image" />
        </div>
        <button className="btn btn-outline-primary">Add</button>
      </form>
    </div>
  );
}

export default Form;
