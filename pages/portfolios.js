
import React from 'react';



const Portfolios = () => {

  return (
    <>
      <div className="navbar-wrapper">
        <nav className="navbar navbar-expand-lg navbar-dark fj-mw9">
          <a className="navbar-brand mr-3 font-weight-bold" href="#">FilipJerga</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item mr-3">
                <a className="nav-link" href="#">Portfolio</a>
              </li>
              <li className="nav-item mr-3">
                <a className="nav-link" href="#">Courses</a>
              </li>
              <li className="nav-item mr-3">
                <a className="nav-link" href="#">Cv</a>
              </li>
              <li className="nav-item mr-3">
                <a className="nav-link" href="#">Ask me</a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mr-3">
                <a className="nav-link" href="#">Sign Up</a>
              </li>
              <li className="nav-item mr-3">
                <a className="nav-link btn btn-success bg-green-2 bright" href="#">Sign In</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="container">
        <section className="section-title">
          <div className="px-2">
            <div className="pt-5 pb-4">
              <h1>Portfolios</h1>
            </div>
          </div>
        </section>
        <section className="pb-5">
          <div className="row">
            <div className="col-md-4">
              <div className="card subtle-shadow no-border">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p className="card-text fs-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="card-footer no-border">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card subtle-shadow no-border">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p className="card-text fs-2 ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="card-footer no-border">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card subtle-shadow no-border">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p className="card-text fs-2 ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="card-footer no-border">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}



export default Portfolios;
