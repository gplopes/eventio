import { LayoutBanner } from "../src/components/Layout";

import TextInput from "../src/components/TextInput/TextInput";
import Button from "../src/components/Button/Button";

import validateEmail from "../src/utils/validateEmail";

export default () => (
  <LayoutBanner className="Login">
    <div style={{ width: 480 }}>
      <h4>Sign in to Eventio.</h4>
      <span>Enter your details below.</span>
      <TextInput label="Email" validator={validateEmail} />
      <TextInput
        label="Password"
        type="password"
        icon
        iconType={TextInput.Icon.eye}
      />
      <Button>Sign In</Button>
    </div>
  </LayoutBanner>
);
