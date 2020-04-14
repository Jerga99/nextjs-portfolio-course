

import PortfolioCard from '@/components/portfolios/PortfolioCard';
import Link from 'next/link';
import { useGetPortfolios } from '@/apollo/actions';
import withApollo from '@/hoc/withApollo';
import { getDataFromTree } from '@apollo/react-ssr';
import BaseLayout from '@/layouts/BaseLayout';

const Portfolios = () => {
  const { data } = useGetPortfolios();
  const portfolios = data && data.portfolios || [];

  return (
    <BaseLayout>
      <section className="section-title">
        <div className="px-2">
          <div className="pt-5 pb-4">
            <h1>Portfolios</h1>
          </div>
        </div>
      </section>
      <section className="pb-5">
        <div className="row">
          { portfolios.map(portfolio =>
            <div key={portfolio._id} className="col-md-4">
              <Link
                href='/portfolios/[id]'
                as={`/portfolios/${portfolio._id}`}>
                <a className="card-link">
                  <PortfolioCard portfolio={portfolio} />
                </a>
              </Link>
            </div>
          )
          }
        </div>
      </section>
    </BaseLayout>
  )
}

export default withApollo(Portfolios, {getDataFromTree});
