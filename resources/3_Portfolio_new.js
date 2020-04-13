<form onSubmit={handleSubmit(onSubmit)}>
  <div className="form-group">
    <label htmlFor="title">Title</label>
    <input
      ref={register}
      name="title"
      type="text"
      className="form-control"
      id="title"/>
  </div>

  <div className="form-group">
    <label htmlFor="city">Company</label>
    <input
      ref={register}
      name="company"
      type="text"
      className="form-control"
      id="company"/>
  </div>

  <div className="form-group">
    <label htmlFor="street">Location</label>
    <input
      ref={register}
      name="location"
      type="text"
      className="form-control"
      id="location"/>
  </div>

  <div className="form-group">
    <label htmlFor="street">Job Title</label>
    <input
      ref={register}
      name="jobTitle"
      type="text"
      className="form-control"
      id="jobTitle"/>
  </div>

  <div className="form-group">
    <label htmlFor="description">Description</label>
    <textarea
      ref={register}
      name="description"
      rows="5"
      type="text"
      className="form-control"
      id="description">
    </textarea>
  </div>

  <div className="form-group">
    <label htmlFor="street">Start Date</label>
    <input
      ref={register}
      name="startDate"
      type="text"
      className="form-control"
      id="startDate"/>
  </div>

  <div className="form-group">
    <label htmlFor="street">End Date</label>
    <input
      ref={register}
      name="endDate"
      type="text"
      className="form-control"
      id="endDate"/>
  </div>

  <button
    type="submit"
    className="btn btn-primary">Create
  </button>
</form>
