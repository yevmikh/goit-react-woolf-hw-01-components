import moduleCss from './profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={moduleCss.profile}>
      <div className={moduleCss.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={moduleCss.avatar}
          width={100}
          height={100}
        />
        <p className={moduleCss.name}>{username}</p>
        <p className={moduleCss.social}>@{tag}</p>
        <p className={moduleCss.social}>{location}</p>
      </div>

      <ul className={moduleCss.stats}>
        <li className={moduleCss.statisticGoup}>
          <span className={moduleCss.label}>Followers</span>
          <span className={moduleCss.quantity}>{stats.followers}</span>
        </li>
        <li className={moduleCss.statisticGoup}>
          <span className={moduleCss.label}>Views</span>
          <span className={moduleCss.quantity}>{stats.views}</span>
        </li>
        <li className={moduleCss.statisticGoup}>
          <span className={moduleCss.label}>Likes</span>
          <span className={moduleCss.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
