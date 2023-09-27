import { Image, useTheme } from "@aws-amplify/ui-react";
import "./Header.css";

export function Header() {
  const { tokens } = useTheme();

  return (
<div>
  <br />
<Image
      className="main_logo"
      alt="logo"
      src="./assets/logo.png"
      padding={tokens.space.medium}
    />
    <br />
</div>
  );
}
