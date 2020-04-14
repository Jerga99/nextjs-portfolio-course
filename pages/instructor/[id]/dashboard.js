

import { useRouter } from 'next/router';
import withApollo from '@/hoc/withApollo';
import withAuth from '@/hoc/withAuth';
import BaseLayout from '@/layouts/BaseLayout';
import { Card, Button } from 'react-bootstrap';

const InstructorDashboard = () => {
  const router = useRouter();
  const instructorId = router.query.id || '';

  return (
    <BaseLayout>
      <div className="bwm-form mt-5">
        <div className="row">
          <div className="col-md-12">
            <h1 className="page-title">Instructor Portfolios - {instructorId}</h1>
            <Card>
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Portfolio Title</Card.Title>
                <Card.Text>
                  Just some testing description ...
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}

export default withApollo(withAuth(InstructorDashboard, ['admin', 'instructor']));

