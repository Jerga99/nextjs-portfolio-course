

import PortfolioCard from '@/components/portfolios/PortfolioCard';
import Link from 'next/link';
import { useQuery, useMutation } from '@apollo/react-hooks';
import {
  GET_PORTFOLIOS,
  CREATE_PORTFOLIO,
  UPDATE_PORTFOLIO,
  DELETE_PORTFOLIO } from '@/apollo/queries';
import withApollo from '@/hoc/withApollo';
import { getDataFromTree } from '@apollo/react-ssr';

const Portfolios = () => {
  const { data } = useQuery(GET_PORTFOLIOS);
  const [updatePortfolio] = useMutation(UPDATE_PORTFOLIO);

  const [deletePortfolio] = useMutation(DELETE_PORTFOLIO, {
    update(cache, {data: {deletePortfolio}}) {
      const {portfolios} = cache.readQuery({query: GET_PORTFOLIOS})
      const newPortfolios = portfolios.filter(p => p._id !== deletePortfolio);
      cache.writeQuery({
        query: GET_PORTFOLIOS,
        data: { portfolios: newPortfolios }
      });
    }
  });

  const [createPortfolio] = useMutation(CREATE_PORTFOLIO, {
    update(cache, {data: {createPortfolio}}) {
      const {portfolios} = cache.readQuery({query: GET_PORTFOLIOS})
      cache.writeQuery({
        query: GET_PORTFOLIOS,
        data: { portfolios: [...portfolios, createPortfolio]}
      });
    }
  });

  const portfolios = data && data.portfolios || [];
  return (
    <>
      <section className="section-title">
        <div className="px-2">
          <div className="pt-5 pb-4">
            <h1>Portfolios</h1>
          </div>
        </div>
        <button
          onClick={createPortfolio}
          className="btn btn-primary">Create Portfolio</button>
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
              <button
                className="btn btn-warning"
                onClick={() => updatePortfolio({variables: {id: portfolio._id}})}>Update Portfolio</button>
              <button
                onClick={() => deletePortfolio({variables: {id: portfolio._id}})}
                className="btn btn-danger">
                Delete Portfolio
              </button>
            </div>
          )
          }
        </div>
      </section>
    </>
  )
}

export default withApollo(Portfolios, {getDataFromTree});
