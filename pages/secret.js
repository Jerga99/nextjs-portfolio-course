
import withApollo from '@/hoc/withApollo';
import withAuth from '@/hoc/withAuth';

const Secret = withAuth(({displayMessage}) => {
  return (
    <>
      <div className="bwm-form mt-5">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <h1 className="page-title">SECRET</h1>
            SECRET PAGE, ONLY AUTHENTICATED USERS ALLOWED!
          </div>
        </div>
      </div>
    </>
  )
})



export default withApollo(Secret);
