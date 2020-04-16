
import { useGetUser } from '@/apollo/actions';
import Redirect from '@/components/shared/Redirect';
import SpinningLoader from '@/components/shared/Loader';

export default (WrappedComponent, role, options = {ssr: false}) => {
  function WithAuth(props) {
    const { data: { user } = {}, loading, error } = useGetUser({fetchPolicy: 'network-only'});

    if (
      !loading &&
      (!user || error) &&
      typeof window !== 'undefined'
    ) {
      return <Redirect to="/login" query={{message: 'NOT_AUTHENTICATED'}} />
    }

    // TODO: Send a message to login page
    if (user) {
      if (role && !role.includes(user.role)) {
        return <Redirect to="/login" query={{message: 'NOT_AUTHORIZED'}}/>
      }
      return <WrappedComponent {...props} />
    }

    return (
      <div className="spinner-container">
        <SpinningLoader variant="large" />;
      </div>
    )
  }

  if (options.ssr) {
    const serverRedirect = (res, to) => {
      res.redirect(to);
      res.end();
      return {};
    }

    WithAuth.getInitialProps = async (context) => {
      const { req, res } = context;
      if (req) {
        const { user } = req;

        if (!user) {
          return serverRedirect(res, '/login?message=NOT_AUTHENTICATED');
        }

        if (role && !role.includes(user.role)) {
          return serverRedirect(res, '/login?message=NOT_AUTHORIZED');
        }
      }

      const pageProps = WrappedComponent.getInitialProps && await WrappedComponent.getInitialProps(context);
      return {...pageProps};
    }
  }

  return WithAuth;
}
