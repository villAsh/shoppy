import { useState } from "react";
import useDarkSide from "../../Hooks/useDarkSide";
import { BsMoon, BsCloudSunFill } from "react-icons/bs";

export default function Switch() {
  const [ColorTheme, setTheme] = useDarkSide();
  const [dark, setDark] = useState(ColorTheme === "dark" ? true : false);
  const toggleDark = (dark) => {
    setTheme(ColorTheme);
    setDark(!dark);
  }
  return dark ? (
    <BsMoon
      className="mr-3 text-2xl hover:cursor-pointer"
    onClick={() => toggleDark(dark)}
    />
  ) : (
    <BsCloudSunFill
      className="mr-3 text-4xl hover:cursor-pointer" fill="white"
    onClick={() => toggleDark(dark)}
    />
  );
}
