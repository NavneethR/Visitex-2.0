const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <h1 className="navbar-brand" style={{ fontSize: "26px" }}>
          Visitex 2.0
        </h1>
        <form className="d-flex">
          <input
            className="form-control me-sm-2 btn btn-light"
            type="button"
            value="Create User"
          />
          <input
            className="form-control me-sm-2 btn btn-light"
            type="button"
            value="Logout"
          />
        </form>
      </div>
    </nav>
  );
};

export default NavigationBar;
