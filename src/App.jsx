import "./App.css";
import UserProfile from "./component/UserProfile";

function App() {
  return (
    <div className="app-layout">
      <h1>User Profiles</h1>

      <div className="profile-column">

        <UserProfile
          name="Sarah Jenkins"
          role="Frontend Engineer"
          age={28}
          isOnline={true}
          bio="Passionate about building responsive web applications."
          socials={{
            github: "https://github.com",
            twitter: "https://twitter.com"
          }}
        />

        <UserProfile
          name="Alex Rivera"
          role="UI/UX Designer"
          age={32}
          isOnline={false}
          bio="Designing clean interfaces and user experiences."
          socials={{
            github: "https://github.com",
            twitter: "https://twitter.com"
          }}
        />

        <UserProfile
          name="Chen Wei"
          role="Backend Developer"
          age={25}
          isOnline={true}
          bio="Node.js and database performance fanatic."
          socials={{
            github: "https://github.com",
            twitter: "https://twitter.com"
          }}
        />

      </div>
    </div>
  );
}

export default App;