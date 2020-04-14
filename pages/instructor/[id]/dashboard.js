

import { useRouter } from 'next/router';
import withApollo from '@/hoc/withApollo';
import withAuth from '@/hoc/withAuth';
import BaseLayout from '@/layouts/BaseLayout';
import { Card, Button } from 'react-bootstrap';
import { useGetUserPortfolios } from '@/apollo/actions';
import { getDataFromTree } from '@apollo/react-ssr';

const InstructorDashboard = withAuth(() => {
  const { data } = useGetUserPortfolios();
  const userPortfolios = (data && data.userPortfolios) || [];
  const router = useRouter();

  return (
    <BaseLayout>
      <div className="bwm-form mt-5">
        <div className="row">
          <div className="col-md-12">
            <h1 className="page-title">Instructor Portfolios</h1>
            { userPortfolios.map(p =>
              <Card key={p._id}>
                <Card.Header>{p.jobTitle}</Card.Header>
                <Card.Body>
                  <Card.Title>{p.title}</Card.Title>
                  <Card.Text>
                    {p.startDate} - {p.endDate}
                  </Card.Text>
                  {/* TODO: Delete Update Buttons */}
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              )
            }
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}, ['admin', 'instructor'])

export default withApollo(InstructorDashboard, {getDataFromTree});

