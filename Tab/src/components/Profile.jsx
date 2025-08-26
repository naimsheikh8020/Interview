import { useSelector } from "react-redux";

const Profile = () => {
  const profile = useSelector((state) => state.profile);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">Profile Info</h2>
      {profile.name ? (
        <div className="flex flex-col gap-2">
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Age:</strong> {profile.age}</p>
          <p><strong>Profile:</strong> {profile.profile}</p>
          <p><strong>Tech Stack:</strong> {profile.techStack}</p>
        </div>
      ) : (
        <p>No profile data yet. Fill the form in Interests tab.</p>
      )}
    </div>
  );
};

export default Profile;
