import pc from "../assets/image/pc.svg";
import playstation from "../assets/image/playstation.svg";
import xbox from "../assets/image/xbox.svg";
import nintendo from "../assets/image/nintendo.svg";
import mac from "../assets/image/mac.svg";
import linux from "../assets/image/linux.svg";
import android from "../assets/image/android.svg";
import ios from "../assets/image/ios.svg";
import web from "../assets/image/web.svg";

const images = {
  pc,
  playstation,
  xbox,
  nintendo,
  mac,
  linux,
  android,
  ios,
  web,
};

export function getImageByKey(key) {
  return images[key];
}
