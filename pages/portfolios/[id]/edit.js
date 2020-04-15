

import PortfolioForm from '@/components/forms/PortfolioForm';
import withApollo from '@/hoc/withApollo';
import withAuth from '@/hoc/withAuth';
import BaseLayout from '@/layouts/BaseLayout';
import { useRouter } from 'next/router';
import { useGetPortfolio } from '@/apollo/actions';

const PortfolioEdit = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useGetPortfolio({variables: {id}});

  return (
    <BaseLayout>
      <div className="bwm-form mt-5">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <h1 className="page-title">Edit Portfolio</h1>
            { data &&
              <PortfolioForm
                initialData={data.portfolio}
                onSubmit={() => {}} />
            }
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}

export default withApollo(withAuth(PortfolioEdit, ['admin', 'instructor']));

