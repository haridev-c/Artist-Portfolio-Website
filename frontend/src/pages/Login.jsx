import React from "react";

function Login() {
  return (
    <>
      <div className="row ">
        <div className="col-sm-6 mx-auto">
          <div className="container mt-5">
            <div className="card">
              <div className="card-header text-center">
                <h3>Login to Admin Page</h3>
              </div>
              <div className="card-body d-flex justify-content-center">
                <form>
                  <div>
                    <label className="form-label">
                      Username
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Username"
                      />
                    </label>
                  </div>
                  <div>
                    <label className="form-label">
                      Password
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter Password"
                      />
                    </label>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-success">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
