
import { useEffect, useRef } from 'react';
import LoginForm from '@/components/forms/LoginForm';
import withApollo from '@/hoc/withApollo';
import { useSignIn } from '@/apollo/actions';
import { useRouter } from 'next/router';
import Redirect from '@/components/shared/Redirect';
import BaseLayout from '@/layouts/BaseLayout';
import messages from '@/variables/messages';

const Login = () => {
  const disposeId = useRef(null);
  const [ signIn, {data, loading, error}] = useSignIn();
  const router = useRouter();
  const { message } = router.query;

  const disposeMessage = () => {
    router.replace('/login', '/login', {shallow: true});
  }

  useEffect(() => {
    if (message) {
      disposeId.current = setTimeout(() => {
        disposeMessage();
      }, 3000 )
    }

    return () => {
      clearTimeout(disposeId.current)
    }
  }, [message])

  const errorMessage = error => {
    return (error.graphQLErrors && error.graphQLErrors[0].message) || 'Ooooops something went wrong...'
  }

  return (
    <BaseLayout>
      <div className="bwm-form mt-5">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <h1 className="page-title">Login</h1>
            { message && <div className={`alert alert-${messages[message].status}`}>{messages[message].value}</div>}
            <LoginForm
              loading={loading}
              onSubmit={(signInData) => signIn({variables: signInData})}/>
            { data && data.signIn && <Redirect to="/"/> }
            { error && <div className="alert alert-danger">{errorMessage(error)}</div>}
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}



export default withApollo(Login);
