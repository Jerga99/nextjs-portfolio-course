
import BaseLayout from '@/layouts/BaseLayout';

const Topics = () => {

  return (
    <BaseLayout>
      <section className="section-title">
        <div className="px-2">
          <div className="pt-5 pb-4">
            <h1>Specific Category</h1>
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
              <th scope="col">Replies</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Some Topic Info</th>
              <td className="category">General Discussion</td>
              <td>Filip Jerga</td>
              <td>2</td>
            </tr>
            <tr>
              <th>Some Topic Info</th>
              <td className="category">General Discussion</td>
              <td>Filip Jerga</td>
              <td>2</td>
            </tr>
            <tr>
              <th>Some Topic Info</th>
              <td className="category">General Discussion</td>
              <td>Filip Jerga</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
      </section>

    </BaseLayout>
  )
}



export default Topics;
