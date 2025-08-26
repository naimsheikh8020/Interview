import { useDispatch, useSelector } from "react-redux";
import { setDarkMode, setLightMode } from "../Features/themeSlice";


const Settings = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Theme Settings</h2>
      <div className="flex gap-4">
        <button
          className={`px-4 py-2 border rounded ${
            mode === "light" ? "bg-blue-500 text-white" : "bg-white text-black"
          }`}
          onClick={() => dispatch(setLightMode())}
        >
          Light Mode
        </button>
        <button
          className={`px-4 py-2 border rounded ${
            mode === "dark" ? "bg-blue-500 text-white" : "bg-white text-black"
          }`}
          onClick={() => dispatch(setDarkMode())}
        >
          Dark Mode
        </button>
      </div>

      <div
        className={`mt-6 p-4 border rounded ${
          mode === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
        }`}
      >
        <p>This is {mode === "dark" ? "Dark" : "Light"} Mode preview</p>
      </div>
    </div>
  );
};

export default Settings;
