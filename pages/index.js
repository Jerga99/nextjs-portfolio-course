

const Home = () => (
  <div className="portfolio-app">
    {/* NAVBAR START */}
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
    {/* NAVBAR ENDS */}
    {/* HERO STARTS */}
    <section className="fj-hero">
      <div className="fj-hero-wrapper row">
        <div className="hero-left col-md-6">
          <h1 className="white hero-title">Hey I'm Filip. Experienced full stack developer</h1>
          <h2 className="white hero-subtitle">Check my portfolio and video tutorials</h2>
          <div className="button-container">
            <a href="" className="btn btn-main bg-blue ttu">See my work</a>
          </div>
        </div>
        <div className="hero-right col-md-6">
          <div className="hero-image-container">
            <a className="grow hero-link">
              <img
                className="hero-image"
                src="https://i.udemycdn.com/course/750x422/1652608_662b_8.jpg"></img>
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* HERO ENDS */}
    <div className="container">
      {/* HOME PAGE STARTS */}
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
      <a href="" className="btn btn-main bg-blue ttu">See More Portfolios</a>
      <section className="section-title">
        <div className="px-2">
          <div className="pt-5 pb-4">
            <h1>Ask Me</h1>
          </div>
        </div>
      </section>
      <section className="pb-5">
        <div className="list-group">
          <a href="#" className="list-group-item list-group-item-action flex-column align-items-start py-3 subtle-shadow no-border">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1 black">List group item heading</h5>
              <small>3 days ago</small>
            </div>
            <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            <div className="avatar-container my-2">
              <img src="https://via.placeholder.com/150" className="avatar-image mr-2"></img>
              <span className="avatar-title">Filip Jerga</span>
            </div>
          </a>
          <a href="#" className="list-group-item list-group-item-action flex-column align-items-start mt-3 py-3 subtle-shadow no-border">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1 black">List group item heading</h5>
              <small className="text-muted">3 days ago</small>
            </div>
            <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            <div className="avatar-container my-2">
              <img src="https://via.placeholder.com/150" className="avatar-image mr-2"></img>
              <span className="avatar-title">Filip Jerga</span>
            </div>
          </a>
          <a href="#" className="list-group-item list-group-item-action flex-column align-items-start mt-3 py-3 subtle-shadow no-border">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1 black">List group item heading</h5>
              <small className="text-muted">3 days ago</small>
            </div>
            <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            <div className="avatar-container my-2">
              <img src="https://via.placeholder.com/150" className="avatar-image mr-2"></img>
              <span className="avatar-title">Filip Jerga</span>
            </div>
          </a>
        </div>
      </section>
      <a href="" className="btn btn-main bg-blue ttu">See More Posts</a>
      {/* HOME PAGE ENDS */}
      {/* FORUM CATEGORIES START */}
      <section className="section-title">
        <div className="px-2">
          <div className="pt-5 pb-4">
            <h1>Categories</h1>
          </div>
        </div>
      </section>
      <section className="fj-category-list">
        <div className="row">
          <div className="col-md-4">
            <div className="fj-category-container">
              <a className="fj-category subtle-shadow no-border" href="#">
                {
                // <div className="category-icon">
                //   <img src="images/pen.png" />
                // </div>
                }
                <div className="category-information">
                  <div className="heading gray-90">
                    General Discussion
                  </div>
                  <div className="description">
                    Just general question
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="fj-category-container">
              <a className="fj-category subtle-shadow no-border" href="#">
                {
                // <div className="category-icon">
                //   <img src="images/pen.png" />
                // </div>
                }
                <div className="category-information">
                  <div className="heading gray-90">
                    Other Discussion
                  </div>
                  <div className="description">
                    Just general question
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="fj-category-container">
              <a className="fj-category subtle-shadow no-border" href="#">
                {
                // <div className="category-icon">
                //   <img src="images/pen.png" />
                // </div>
                }
                <div className="category-information">
                  <div className="heading gray-90">
                    Some Discussion
                  </div>
                  <div className="description">
                    Just general question
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* FORUM CATEGORIES ENDS */}
      {/* TOPICS PAGE STARTS */}
      <section className="section-title">
        <div className="px-2">
          <div className="pt-5 pb-4">
            <h1>Specific Category</h1>
          </div>
        </div>
      </section>
      <section className="fj-topic-list">
        <table className="table table-hover ">
          <thead>
            <tr>
              <th scope="col">Topic</th>
              <th scope="col">Category</th>
              <th scope="col">Author</th>
              <th scope="col">Replies</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Some Topic Info</th>
              <td className="category">General Discussion</td>
              <td>Filip Jerga</td>
              <td>2</td>
            </tr>
            <tr>
              <th>Some Topic Info</th>
              <td className="category">General Discussion</td>
              <td>Filip Jerga</td>
              <td>2</td>
            </tr>
            <tr>
              <th>Some Topic Info</th>
              <td className="category">General Discussion</td>
              <td>Filip Jerga</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
      </section>
      {/* TOPICS PAGE ENDS */}
      {/* POSTS PAGE STARTS */}
      <section className="section-title">
        <div className="px-2">
          <div className="pt-5 pb-4">
            <h1>Specific Topic</h1>
          </div>
        </div>
      </section>
      <section>
        <div className="fj-post-list">
          <div className="row">
            <div className="col-md-9">
              <div className="topic-post">
                <article>
                  <div className="row">
                    <div className="topic-avatar">
                      <div className="main-avatar">
                        <img
                          className="avatar subtle-shadow"
                          src="https://i.imgur.com/cVDadwb.png"></img>
                      </div>
                    </div>
                    <div className="topic-body">
                      <div className="topic-header">
                        <div className="topic-meta">
                          <div className="name-container">
                            <span className="name">Filip Jerga</span>
                          </div>
                          <div className="date-container"><span className="date">21h</span></div>
                        </div>
                      </div>
                      <div className="topic-content">
                        <div className="cooked">
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <section className="post-menu-area">
                          <nav className="post-controls">
                            <div className="actions">
                              <button className="btn">reply</button>
                            </div>
                          </nav>
                        </section>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9">
              <div className="topic-post">
                <article>
                  <div className="row">
                    <div className="topic-avatar">
                      <div className="main-avatar">
                        <img
                          className="avatar subtle-shadow"
                          src="https://i.imgur.com/cVDadwb.png"></img>
                      </div>
                    </div>
                    <div className="topic-body">
                      <div className="topic-header">
                        <div className="topic-meta">
                          <div className="name-container">
                            <span className="name">Filip Jerga</span>
                          </div>
                          <div className="date-container"><span className="date">21h</span></div>
                        </div>
                      </div>
                      <div className="topic-content">
                        <div className="cooked">
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <section className="post-menu-area">
                          <nav className="post-controls">
                            <div className="actions">
                              <button className="btn">reply</button>
                            </div>
                          </nav>
                        </section>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9">
              <div className="topic-post">
                <article>
                  <div className="row">
                    <div className="topic-avatar">
                      <div className="main-avatar">
                        <img
                          className="avatar subtle-shadow"
                          src="https://i.imgur.com/cVDadwb.png"></img>
                      </div>
                    </div>
                    <div className="topic-body">
                      <div className="topic-header">
                        <div className="topic-meta">
                          <div className="name-container">
                            <span className="name">Filip Jerga</span>
                          </div>
                          <div className="date-container"><span className="date">21h</span></div>
                        </div>
                      </div>
                      <div className="topic-content">
                        <div className="cooked">
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <section className="post-menu-area">
                          <nav className="post-controls">
                            <div className="actions">
                              <button className="btn">reply</button>
                            </div>
                          </nav>
                        </section>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* POSTS PAGE ENDS */}
      {/* LOGIN PAGE STARTS */}
      <section className="section-title">
        <div className="px-2">
          <div className="pt-5 pb-4">
            <h1>Login Page</h1>
          </div>
        </div>
      </section>
      <div className="bwm-form">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <h1 className="page-title">Login</h1>
            <form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password" />
              </div>
              <button
                type="submit"
                className="btn btn-main bg-blue py-2 ttu">Submit</button>
            </form>
          </div>
        </div>
      </div>
      {/* LOGIN PAGE ENDS */}
    </div>

    {/* REPLIER STARTS */}
    {/* <div className='reply-controls is-open'> */}
    <div className='reply-controls'>
      <div className="reply-area">
        <div className="reply-to">
          Reply To: <span className="text ml-2">User1</span>
        </div>
        <div className="fj-editor-input">
          <input
            name="title"
            placeholder="Topic title"
            type="text"></input>
        </div>
        <div className="fj-editor">
          <div className="fj-editor-textarea-wrapper">
            <textarea
              name="content"
              placeholder="Type here">
            </textarea>
          </div>
          <div className="fj-editor-preview-wrapper">
            <div className="preview">
              <p></p>
            </div>
          </div>
        </div>
        <div className="submit-area">
          <div className="send mr-auto">
            <button
              href="#"
              className="btn btn-main bg-blue py-2 ttu">Reply</button>
            <a className="btn py-2 ttu gray-10">Cancel</a>
          </div>
          <div>
            <a className="btn py-2 ttu gray-10">hide preview</a>
          </div>
        </div>
      </div>
    </div>
    {/* REPLIER ENDS */}
    {/* FOOTER STARTS */}
    <footer id="sticky-footer" className="py-4 bg-black text-white-50 py-3">
      <div className="container text-center">
        <small>Copyright &copy; Your Website</small>
      </div>
    </footer>
    {/* FOOTER ENDS */}
  </div>
)

export default Home
