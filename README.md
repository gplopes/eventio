# Eventio

Live: https://eventio-udyxzpxuyq.now.sh/
“Use the force, Luke.” ...

# Getting Started

to develop:

```
  > npm install
  > npm run dev
```

to build:

```
  > npm run build
```

# Folder Structure

`./pages` - served pages

`./static` - public site folder

`./src/api` - api config and helper functions

`./src/auth` - authentication server logic

`./src/components` - reusable components

`./src/layouts` - global layout components

`./src/lib` - 3rd party libs

`./src/store` - app store and wrappers (Context)

`./src/styles` - global styles

`./src/utils` - js utils functions

# Code Guide

1. Component's styles are imported directly to the component
   or the parent's component and named after the component/folder name

2. CSS Class should be followed by the Component's name.

- import the styles core into your module style so you can have access
  to the theme and global sass functions

```js
// Icon.js
import "./Icon.styles.scss";

function Icon() {
  return <div className="Icon" />;
}
```

```scss
// Icon.styles.scss
@import "./src/styles/core.scss";

.Icon {
}
```

3. Every Page should be wrapped with `<Page />` component

4. Layout are broken into section, to keep render function cleaner
   you can use `<Section />` wrapper

```jsx
import { Page, Section } from "./src/layouts";

function Login() {
  return (
    <Page>
      <Section>
        <h2>Section with Component</h2>
      </Section>
      <section>
        <div className="container">
          <h2>Section without component</h2>
        </div>
      </section>
    </Page>
  );
}
```

## Extra npm extra commands

1. Run Prettier Formatter

```
> npm run prettier
```

2. Run Test

```
> npm run jest
```

## Release

```
> npm install -g now
> now
```

## Built with

- [Nextjs](https://github.com/zeit/next.js)
- [React](http://reactjs.org)
- [Now](https://zeit.co/now)

# TODO

### SignUp

status: layout and logic is pretty much done, it needs to
connect to the api and do the correct redirection

### Event Detail

status: a few components done, it can display the event but
edit option needs work

### Test

Test still needs to be written, the jest is already plugged on the project.

```
> npm test
```
