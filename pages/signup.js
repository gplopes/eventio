import Main from "../src/containers/Main";

import SectionBanner from "../src/containers/SectionBanner";
import TextInput from "../src/components/TextInput/TextInput";
import Button from "../src/components/Button/Button";

export default () => (
  <Main>
    <SectionBanner>
      <div style={{ width: 480 }}>
        <h4>Get started absolutely free.</h4>
        <span>Enter your details below.</span>
        <TextInput label="Email" />
        
        <Button>Sign Up</Button>
      </div>
    </SectionBanner>
  </Main>
);
