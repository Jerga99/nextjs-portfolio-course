

import { useGetPortfolio } from '@/apollo/actions';
import withApollo from '@/hoc/withApollo';
import { getDataFromTree } from '@apollo/react-ssr';
import BaseLayout from '@/layouts/BaseLayout';
import { formatDate } from '@/utils/functions';

const PortfolioDetail = ({query}) => {
  const { data } = useGetPortfolio({variables: {id: query.id}});
  const portfolio = data && data.portfolio || {};

  return (
    <BaseLayout>
      <div className="portfolio-detail">
        <div className="container">

          <div className="jumbotron">
            <h1 className="display-3">{portfolio.title}</h1>
            <p className="lead">{portfolio.jobTitle}</p>
            <p>
              <a className="btn btn-lg btn-success" href={portfolio.companyWebsite} role="button">
                See Company</a>
              </p>
          </div>

          <div className="row marketing">
            <div className="col-lg-6">
              <h4 className="title">Location</h4>
              <p className="text">{portfolio.location}</p>

              <h4 className="title">Start Date</h4>
              <p className="text">{formatDate(portfolio.startDate)}</p>
            </div>

            <div className="col-lg-6">
              {/* TODO: days later... */}
              <h4 className="title">Days</h4>
              <p className="text">{portfolio.daysOfExperience}</p>

              <h4 className="title">End Date</h4>
              <p className="text">{(portfolio.endDate && formatDate(portfolio.endDate)) || 'Present'}</p>
            </div>
            <div className="col-md-12">
              <hr />
              <h4 className="title">Description</h4>
              <p>{portfolio.description}</p>
              </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}

PortfolioDetail.getInitialProps = async ({query}) => {
  return {query};
}


export default withApollo(PortfolioDetail, {getDataFromTree});
