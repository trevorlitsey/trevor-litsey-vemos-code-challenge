<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Reddit" src="https://www.redditstatic.com/desktop2x/img/favicon/android-icon-192x192.png" width="60" />
  </a>
</p>
<h1 align="center">
  Trevor Litsey's Vemos Code Challenge
</h1>

## Prerequisites

- [Node.js](https://nodejs.org)
- [Yarn](https://yarnpkg.com)

## Quick start

```sh
  git clone https://github.com/trevorlitsey/trevor-litsey-vemos-code-challenge.git
  cd trevor-litsey-vemos-code-challenge
  yarn install
  yarn start
```

Run tests: `yarn test`

## Problem

Users need a way to view and interact with the r/pics subreddit.

## Solution

Call Reddit's API from client-side rendered React app. Display basic post information including link to full post and user's profile.

## Tech

This app uses the React framework, [Gatsby](https://www.gatsbyjs.org/). The framework allows for a pleasing development environment and a performance-minded build config out of the box (code splitting, build-time server-side rendering for static content, polyfills, etc.). More info can be found on their website: https://www.gatsbyjs.org/

## Gaps / TODOs

- Unit tests that need implementation are marked as `test.todo`s. Tests should also check linting/formatting.
- There are no integration or functional tests. Functional tests could be implemented with a tool such as [Cypress](https://www.cypress.io/).
- SEO / meta tags. A layout component should be added with such information.
- As more components are added, it would be beneficial to group components by business domain or page (`components/posts` or `components/index`)
- The logger currently points to `window.console` - it should be integrated with whatever service is used to capture logs, whether that be an endpoint or third party library. It also may be beneficial to add a logger prefix.
- It would be helpful to implement styles with a css preprocessor (`less`, `sass`, or JS library like `styled-components` or `emotion`) in order to take advantage of more flexible variable deceleration, mixins, functions etc.
- The app styles will not work in IE or any browser that does not support css variables.
- There is currently no linter - some linting errors appear in the console while the dev server is running but an `eslint` config will need to be added in order to take advantage of linting in the user's editor and via the command line.
- There's a lot to be desired in regards to styling. Some thoughtful consideration should be given to default element styles, color palette, etc.
- An error boundary should be added to the main App. Other error boundaries may be necessary as the app grows.
- For the URLs, it would be better to store them as .../user/:user. A function similar to `react-router`'s `generatePath` would need to be written to transform them into links.

## Other code samples

Here's a fun list component:

```js
const items = [{
  id: 1,
  name: 'a name',
}]

<List items={items}>
  <Item source="name" title="Name">
</List>
```

`<List />` passes each item to all `<Item />` components that are direct children of the `<List />` component. The `<Item />` component then plucks the appropriate key to render. Nested keys are supported (`some.nested.thing`).

`<List />`: https://github.com/trevorlitsey/grantcenter_v2_frontend/blob/master/src/components/shared/list.js

`<Item />`: https://github.com/trevorlitsey/grantcenter_v2_frontend/blob/master/src/components/shared/item.js

## Links

- [Code Challenge Directions](https://github.com/bookbottles/react-challenge)
- [This App](https://trevor-litsey-vemos-code-challenge.netlify.com/)
- [Personal Website](https://trevorlitsey.com)
- [Resume](https://trevorlitsey.com/resume.pdf)

This was a fun assignment - thanks for the clear directions!
