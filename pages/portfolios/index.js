
import axios from 'axios'
import PortfolioCard from '@/components/portfolios/PortfolioCard';
import Link from 'next/link';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_PORTFOLIOS, CREATE_PORTFOLIO } from '@/apollo/queries';
import withApollo from '@/hoc/withApollo';
import { getDataFromTree } from '@apollo/react-ssr';

const graphDeletePortfolio = (id) => {
  const query = `
    mutation DeletePortfolio {
      deletePortfolio(id: "${id}")
    }
  `

  return axios.post('http://localhost:3000/graphql', { query })
    .then(({data: graph}) => graph.data)
    .then(data => data.deletePortfolio)
}

const graphUpdatePortfolio = (id) => {
  const query = `
    mutation UpdatePortfolio {
      updatePortfolio(id: "${id}",input: {
        title: "UPDATE Job"
        company: "UPDATE Company"
        companyWebsite: "UPDATE Website"
        location: "UPDATE Location"
        jobTitle: "UPDATE Job Title"
        description: "UPDATE Desc"
        startDate: "12/12/2012 UPDATE"
        endDate: "14/11/2013 UPDATE"
      }) {
        _id,
        title,
        company,
        companyWebsite
        location
        jobTitle
        description
        startDate
        endDate
      }
    }`;
  return axios.post('http://localhost:3000/graphql', { query })
    .then(({data: graph}) => graph.data)
    .then(data => data.updatePortfolio)
}

const Portfolios = () => {
  const { data } = useQuery(GET_PORTFOLIOS);

  const [createPortfolio] = useMutation(CREATE_PORTFOLIO, {
    update(cache, {data: {createPortfolio}}) {
      const {portfolios} = cache.readQuery({query: GET_PORTFOLIOS})
      cache.writeQuery({
        query: GET_PORTFOLIOS,
        data: { portfolios: [...portfolios, createPortfolio]}
      })
    }
  });

  const updatePortfolio = async (id) => {
    await graphUpdatePortfolio(id);
  }

  const deletePortfolio = async (id) => {
    await graphDeletePortfolio(id);
  }

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
                onClick={() => updatePortfolio(portfolio._id)}>Update Portfolio</button>
              <button
                onClick={() => deletePortfolio(portfolio._id)}
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
