import { FaGithub, FaTwitter } from "react-icons/fa";

function UserProfile(props) {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <h2>{props.name}</h2>

        {props.isOnline ? (
          <span className="online-badge">● Online</span>
        ) : (
          <span className="offline-badge">● Offline</span>
        )}
      </div>

      <p>
        <strong>Role:</strong> {props.role}
      </p>

      <p>
        <strong>Age:</strong> {props.age}
      </p>

      <p>
        <strong>Bio:</strong> {props.bio}
      </p>

      <div className="socials">
        <a href={props.socials.github}>
          <FaGithub /> GitHub
        </a>

        <a href={props.socials.twitter}>
          <FaTwitter /> Twitter
        </a>
      </div>
    </div>
  );
}

export default UserProfile;