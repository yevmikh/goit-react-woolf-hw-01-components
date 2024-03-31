import FriendListItem from 'components/FriendListItem/FriendListItem';
import moduleCss from './friendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={moduleCss.friendList}>
    {friends.map(friend => (
      <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    ))}
  </ul>
);

export default FriendList;
