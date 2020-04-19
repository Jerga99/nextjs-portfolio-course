
import { fromNow } from '@/utils/functions';


const PostItem = ({post, onReply, className = '', canCreate = false}) => {

  const { parent } = post;
  return (
    <div className={`topic-post ${className}`}>
      <article>
        <div className="row">
          <div className="topic-avatar">
            <div className="main-avatar">
              <img
                className="avatar subtle-shadow"
                src={post.user.avatar}></img>
            </div>
          </div>
          <div className="topic-body">
            <div className="topic-header">
              <div className="topic-meta">
                <div className="name-container">
                    <span className="name">{post.user.username}</span>
                </div>
                { post.createdAt &&
                  <div className="date-container">
                    <span className="date">{fromNow(post.createdAt)}</span>
                  </div>
                }
              </div>
            </div>
            <div className="topic-content">
              { parent &&
                <div className="topic-parent cooked">
                  <div className="topic-parent-inner cooked">
                    <div className="topic-parent-header">
                      <div className="topic-parent-avatar">
                        <div className="main-avatar">
                          <img
                            className="avatar subtle-shadow"
                            src={parent.user.avatar}></img>
                        </div>
                      </div>
                      <div className="username">{parent.user.username}</div>
                    </div>
                    <div className="topic-parent-content">
                      <p>{parent.content}</p>
                    </div>
                  </div>
                </div>
              }
              <div className="cooked">
                <p>{post.content}</p>
              </div>
              <section className="post-menu-area">
                <nav className="post-controls">
                  <div className="actions">
                    { onReply &&
                      <button
                        disabled={!canCreate}
                        onClick={() => onReply({...post})}
                        className="btn">reply</button>
                    }
                  </div>
                </nav>
              </section>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default PostItem;
