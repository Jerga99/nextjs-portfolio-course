
import { useGetHighlight } from '@/apollo/actions';
import withApollo from '@/hoc/withApollo';
import { getDataFromTree } from '@apollo/react-ssr';

import PortfolioCard from '@/components/portfolios/PortfolioCard';
import BaseLayout from '@/layouts/BaseLayout';
import Link from 'next/link';

const useGetInitialData = () => {
  const { data } = useGetHighlight({variables: {limit: 3}});
  const portfolios = (data && data.highlight.portfolios) || [];
  const topics = (data && data.highlight.topics) || [];
  return { portfolios, topics };
}

const Home = () => {
  const { topics, portfolios } = useGetInitialData();

  return (
    <BaseLayout page="Home">
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
          { portfolios.map(portfolio =>
            <div key={portfolio._id} className="col-md-4">
              <Link
                href="/portfolios/[id]"
                as={`/portfolios/${portfolio._id}`}>
                <a className="card-link">
                  <PortfolioCard portfolio={portfolio}/>
                </a>
              </Link>
            </div>
            )
          }
        </div>
      </section>
      <Link href="/portfolios">
        <a className="btn btn-main bg-blue ttu">See More Portfolios</a>
      </Link>
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
    </BaseLayout>
  )
}

export default withApollo(Home, {getDataFromTree});
