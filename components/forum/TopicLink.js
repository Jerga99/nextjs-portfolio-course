
import { fromNow, shortify } from '@/utils/functions';
import Link from 'next/link';

const TopicLink = ({topic}) =>
  <Link
    href="/forum/topics/[slug]"
    as={`/forum/topics/${topic.slug}`}>
    <a className="mb-1 list-group-item list-group-item-action flex-column align-items-start py-3 subtle-shadow no-border">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1 black">{topic.title}</h5>
        <small>{fromNow(topic.createdAt)}</small>
      </div>
      <p className="mb-1">{shortify(topic.content)}</p>
      <div className="avatar-container my-2">
        <img src={topic.user.avatar} className="avatar-image mr-2"></img>
        <span className="avatar-title">{topic.user.username}</span>
      </div>
    </a>
  </Link>

export default TopicLink;
