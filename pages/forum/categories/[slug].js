
import BaseLayout from '@/layouts/BaseLayout';
import { useGetTopicsByCategory } from '@/apollo/actions';
import { useRouter } from 'next/router';
import withApollo from '@/hoc/withApollo';
import { getDataFromTree } from '@apollo/react-ssr';

const Topics = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { data } = useGetTopicsByCategory({variables: {category: slug}});
  const topicsByCategory = (data && data.topicsByCategory) || [];

  return (
    <BaseLayout>
      <section className="section-title">
        <div className="px-2">
          <div className="pt-5 pb-4">
            <h1>Select a Topic</h1>
          </div>
        </div>
      </section>
      <section className="fj-topic-list">
        <table className="table table-hover ">
          <thead>
            <tr>
              <th scope="col">Topic</th>
              <th scope="col">Category</th>
              <th scope="col">Author</th>
            </tr>
          </thead>
          <tbody>
            { topicsByCategory.map(topic =>
              <tr key={topic._id}>
                <th>{topic.title}</th>
                <td className="category">{topic.forumCategory.title}</td>
                <td>{topic.user.username}</td>
              </tr>
              )
            }
          </tbody>
        </table>
      </section>

    </BaseLayout>
  )
}

export default withApollo(Topics, {getDataFromTree});
