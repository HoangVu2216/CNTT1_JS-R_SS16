import { useState } from "react";
import "./ThemeSwitcher.css";

function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <h2>
        {isDarkMode ? "🌙 Chế độ Tối đang bật" : "🌞 Chế độ Sáng đang bật"}
      </h2>
      <button onClick={toggleTheme}>Chuyển theme</button>
    </div>
  );
}

export default ThemeSwitcher;
