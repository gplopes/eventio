import Page from "../src/layouts/Page";
import Header from "../src/components/Header/Header";

import List from "../src/components/List/List";

import ActionButton from "../src/components/ActionButton/ActionButton";
import TagName from "../src/components/TagName/TagName";

export default () => (
  <Page>
    <Header />
    <List />
    <section>
      <div className="container">
        <TagName name="Gabriel Lopes" />
      </div>
    </section>
    <ActionButton />
  </Page>
);
