import moduleCss from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={moduleCss.item}>
    <span
      className={`${moduleCss.status} ${
        isOnline ? moduleCss.online : moduleCss.offline
      }`}
    ></span>
    <img
      className={moduleCss.avatar}
      src={avatar}
      alt={`${name}'s avatar`}
      width="48"
    />
    <p className={moduleCss.name}>{name}</p>
  </li>
);

export default FriendListItem;
