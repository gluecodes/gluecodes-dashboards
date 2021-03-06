<p align="center"><a href="https://www.glue.codes" target="_blank" rel="noopener noreferrer"><img width="100" src="https://github.com/gluecodes/gluecodes-dashboards/blob/master/mediaFiles/images/logo.png" alt="GlueCodes Platform"></a></p>

<h1 align="center">@gluecodes/dashboards</h1>

This repo contains components/widgets to be used within [GlueCodes Platform](https://www.glue.codes) by single-click install.

The code name "dashboards" is meant to represent sections and elements used in admin dashboards e.g. data tables, charts etc.

There are more repos like this:

- [Animals](https://github.com/gluecodes/gluecodes-animals) (e-commerce)
- [Cities](https://github.com/gluecodes/gluecodes-cities) (navigation)
- [Forms](https://github.com/gluecodes/gluecodes-forms) (forms and wizards to be used by end-users e.g. reservation)
- [Fruits](https://github.com/gluecodes/gluecodes-fruits) (multi purpose content blocks e.g. hero, 3-column section etc.)
- [Vegetables](https://github.com/gluecodes/gluecodes-vegetables) (single purpose blocks and elements e.g. map or cookie notification)

Doesn't your component idea fit in one of the categories above? Feel free to mail us at hello@glue.codes.

## Motivation

Our aim is to develop repos of high quality widgets that are installable with a single-click inside [GlueCodes IDE](https://www.glue.codes). After the installation, the user should be able to experience fully functional UI populated with test data. The widgets should be lightweight and easily customisable while keeping their structure separated from the style. They should be reactive, yet prerendable to deliver static websites which offer fast page-load-time.

We believe a great dev experience has huge impact on your web products. Hence, we've combined the tools you may already know like: JSX, Virtual DOM, CSS Modules, Webpack or Docker to give you a dev environment where you can focus on a single UI piece at time. This repos gives you a standardised way to develop not only dummy components but also more complex widgets which might need to affect the app state.

The above goals led us to take "convention over configuration" approach which you'll be seeing a lot while developing your own widgets.

## Table of contents
- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [Become a contributor](#become-a-contributor)
  - [Git flow](#git-flow)
  - [Available scripts](#available-scripts)
  - [Your first component](#your-first-component)
  - [Anatomy of a component](#anatomy-of-a-component)
    - [JSX](#jsx)
    - [Prerender](#prerender)
    - [Injecting HTML or nested components](#injecting-html-or-nested-components)
- [Before shipping](#before-shipping)
- [License](#license)
- [Donate](#donate)
- [Subscribe](#subscribe)

## Setup

### Prerequisites

- Terminal (on Windows you may use PowerShell).
- You must have [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) installed.
- You must have [Docker](https://docs.docker.com/get-docker/) installed.

### Installation

In your terminal, run the commands below:

- Clone this repo: `git clone git@github.com:gluecodes/gluecodes-dashboards.git` or `git clone https://github.com/gluecodes/gluecodes-dashboards.git`.
- Navigate to newly created `gluecodes-dashboards` directory and run: `docker-compose up --build`.
- In the other tab/window, run: `docker exec -it gluecodes_dashboards npm run build`.

### Usage

- To start the repo dev server run: `docker-compose up` in `gluecodes-dashboards` directory (Omit this step if you just went through the "Installation").
- In your browser, navigate to: http://localhost:3636.
- Select a component from a top-left dropdown and follow the instructions on the screen. You'll find your own components there too, just keep reading.

## Become a contributor

Have an idea for a component or you want to improve existing one? Just create a pull requests following our Git flow. If you found a bug and don't feel like fixing it, just create an issue and someone else will take care of it.

### Git flow

We use a custom Git flow which is based on the feature branches, and branch names affect component versioning. Before you jump into coding, name your branch according to these rules:

- When developing a new component: `git checkout -b feature/someComponentName` which sets 1.0.0 version.
- Major component change: `git checkout -b major/shortDescription` which increases `(n++).0.0` of existing version.
- Minor component change: `git checkout -b minor/shortDescription` which increases `1.(n++).0` of existing version.
- Bug fix or patch to a component: `git checkout -b patch/shortDescription` which increases `1.0.(n++)` of existing version.

Always create your branch off master. When you're ready, just create a pull request. Remember to rebase onto `master` before requesting a code review in your pull request (`git rebase origin/master -i` and follow the instructions). You'll find more details in a pull request description template.

IMPORTANT: choose a component name that doesn't exist in `src/ui` and there is no existing branch: `feature/yourComponentName` which would indicate someone has already taken your name. After you created your local branch, push it straight away to reserve your name.

### Available scripts

- Start the repo: `docker-compose up`.
- Prerender a specific component: `docker exec -it gluecodes_dashboards npm run prerender --component someComponentName`.
- Build a specific component: `docker exec -it gluecodes_dashboards npm run build --component someComponentName`.
- Lint: `docker exec -it gluecodes_dashboards npm run lint` or `docker exec -it gluecodes_dashboards npm run lint -- --fix` to auto-fix the issues.
- Test (Join discussion about the ways of testing components. Visit this [issue](https://github.com/gluecodes/gluecodes-dashboards/issues/4)).

### Your first component

- Choose your component name. Make sure it doesn't exist in `src/ui` and there is no existing branch `feature/yourComponentName` which would indicate someone has already taken your name.
- Go to: `src/ui/` and duplicate one of the template components e.g. `aSimpleTemplate` directory naming it with your intended component name e.g. someComponentName.
- Run: `docker exec -it gluecodes_dashboards npm run prerender -- --component someComponentName`.
- Run: `docker exec -it gluecodes_dashboards npm run build -- --component someComponentName`,
- Restart `gluecodes_dashboards` container (CTRL+C in the window where the container runs) to gain access to live preview.
- In your browser, navigate to: http://localhost:3636/components/someComponentName where you should see a "hello world" text.
- To turn it into something useful, you'll need play with the files inside `someComponentName` directory. Keep reading.

### Anatomy of a component

A component is made out of the following files:

```
.
|-- brief.json                  <-- details about the component
|-- customizableClasses.json    <-- CSS classes to be customizable from outside of your component.
|-- getTestingData.js           <-- a function returning testing data that are passed to a component, these will be visible when inserting the component in GlueCodes IDE
|-- googleFonts.json            <-- Google fonts to be imported, they will be preloaded at the app level
|-- index.jsx                   <-- a JSX function which is your actual component
|-- prerender.js                <-- a function returning a string representation of your component HTML, it's used for prerendering
|-- readme.js                   <-- a function returning full description of the component which is visible in GlueCodes IDE widget details
|-- styles.css                  <-- styles which use CSS Modules
|-- test.js                     <-- it's the code which bootstraps your component for your local development purposes
|-- thumbnail.jpg               <-- a screenshot of your component which is visible in GlueCodes IDE widget details
```

Few notes:

- Keep your components as dummy presenters, they should be pure functions and communicate with outside world via callback props.
- Think ahead what needs to be customizable and use appropriate class names, then add them to `customizableClasses.json`.
- You may be surprised that `index.jsx` and `prerender.js` might often mirror each other. It isn't ideal to have them duplicated but that's the cost of handling more complex cases where prerendered view is a base for more complex, dynamically constructed HTML (e.g. from Ajax'ed data).
- Add the Google Fonts you want to import into `googleFonts.json`. [Read more](https://github.com/gluecodes/gluecodes-dashboards/blob/master/googleFonts.md) about importing fonts and taking advantage of font preloading.
- The `styles.css` should contain style declarations with class selectors. No worries about cross-page class name collisions as there is [CSS Modules](https://github.com/css-modules/css-modules) in place. [Read more](https://github.com/gluecodes/gluecodes-dashboards/blob/master/stylingRules.md) about styling rules.

#### JSX

Here is a very simple component:

`src/ui/aSimpleTemplate/index.jsx`:
```jsx harmony
import externalStyles from '@app/styles'
import fa from '@app/fa'
import styles from './styles.css'

export default ({
  example
}) => (
  <div className={styles.someClass}>{example}</div>
)
```

If you're coming from React, it should be familiar. In simple terms, component is a pure function which returns JSX. It's meant to be reactive i.e. rerender (be called) whenever the app state has changed. To better understand the framework which connects your component to the app, go to this [README.md](https://github.com/gluecodes/gluecodes-framework). 

Beyond internal differences to React, there are a few GlueCodes specific rules:

- The `import externalStyles from '@app/styles'` imports app styles which may contain overrides of customizable classes (see Anatomy of a component above) and by default includes Bootstrap classes.
- The `import fa from '@app/fa'` is a way to import Font Awesome and use their CSS classes. Learn more about [Font Awesome](https://fontawesome.com/).
- The `import styles from './styles.css'` gives you an object of hashed CSS classes you can use in JSX `className`'s to achieve scoped CSS.
- As in the real world UI needs to be far more complex than this, there is more. Keep reading.


Here is a more advanced component:

`src/ui/anAdvancedTemplate/index.jsx`:
```jsx harmony
import externalStyles from '@app/styles'
import fa from '@app/fa'
import styles from './styles.css'

import '@app/commands/setUrlQueryParam'
import '@app/providers/parseUrlQueryParams'

export default ({
  dateTimeWhenLastClicked,
  label,
  onClick
}) => (
  <div>
    <p className={styles.customizableParagraph}>The last time you clicked the button was: {dateTimeWhenLastClicked || 'never'}</p>
    <button
      className={`${externalStyles.btn} ${externalStyles['btn-primary']}`}
      onclick={() => onClick()}>
      <i className={`${fa.fas} ${fa['fa-fire']}`}/> {label}
    </button>
  </div>
)
```

In this example the component not only receives the props but also delegates DOM `onclick` (it's not a mistake, you write it exactly as you would in HTML) event to be handled by "outside world". The intention here is to call an app action within `onClick` callback which affects the app state and rerenders the component with updated props. To understand the mechanism, it's worth looking at the gluing part i.e. `./getTestingData.js`:

`src/ui/anAdvancedTemplate/getTestingData.js`:
```javascript
export default ({
  actionResults,
  actions
} = {
  actionResults: {
    parseUrlQueryParams: {}
  }
}) => ({
  dateTimeWhenLastClicked: actionResults.parseUrlQueryParams.dateTime,
  label: 'Click me',
  onClick: () => {
    actions.setUrlQueryParam({
      name: 'dateTime',
      value: new Date()
    })
    actions.reload()
  }
})
```

This is a function which passes `actions` (app actions) and `actionResults` (results of those actions stored in an object by their names). The function is called every time the component is rerendered and it connects your component props to the app. To avoid coupling and keeping it self-contained, a few conventions have been introduced:

- The `import '@app/commands/setUrlQueryParam'` in JSX file gives your component access to a `setUrlQueryParam` action (the implementation can be found in: `src/common/commands/setUrlQueryParam/index.js`).
- The `import '@app/providers/parseUrlQueryParams'` in JSX file runs `parseUrlQueryParams` prior initial rendering (the implementation can be found in: `src/common/providers/parseUrlQueryParams/index.js`).
- Note that those actions are shared across all components and they should be named within a context of a whole app. Remember, these are app-wide actions which write to a single store. This is to avoid code duplication and maintain a domain-specific set of functions.
- Note that when calling `actions.setUrlQueryParam()` the component will be rerendered. The subsequent `actions.reload()` is a built-in action which in addition to rerendering, it reloads all providers (in this example: `parseUrlQueryParams`). To avoid unnecessary rerendering, it would be better to use [actions.runTogether()](https://github.com/gluecodes/gluecodes-dashboards/blob/master/runTogether.md).
- Your component might use multiple providers. They are called in a specific order prior initial rendering and pipe through `actionResults` to give a provider access to a result of the previous one. Read more about [providers](https://github.com/gluecodes/gluecodes-animals/blob/master/providers.md) and how to define their execution order.
- Actions can be understood as controllers and having "fat controllers" is a bad practice. To avoid coupling even further, `reusableFunctions` have been introduced. Read more about [reusable functions](https://github.com/gluecodes/gluecodes-dashboards/blob/master/providers.md) and how you can use them as a "service" or "model" layer.
- Note that the function have a default object assigned against the deconstructed `actionResults` and `actions`. This is because `./getTestingData` is also used by `./prerender.js` which doesn't have access to the browser environment i.e. JavaScript, DOM etc. Hence, in `./prerender.js`, `./getTestingData` is called without any args and the defaults emulate the simplest shape of the store to avoid reference errors. Read more about [prerenders](#prerender) below.

Remember that when installing a widget within [GlueCodes IDE](https://www.glue.codes), the function exported by `./getTestingData.js` will be transformed and then inserted into the page code. This level of automation requires a few simple rules when writing your testing data function. [Read more](https://github.com/gluecodes/gluecodes-dashboards/blob/master/getTestingData.md).

#### Prerender

In terms of SEO, search engines reward pages with an instant "first contentful paint". Therefore, we want our components to be renderable as static HTML. 

Here is a function which produces your component initial HTML before Virtual DOM kicks in:

`src/ui/anAdvancedTemplate/prerender.js`:
```javascript
import getTestingData from './getTestingData'
import externalStyles from '@app/styles'
import fa from '@app/fa'
import styles from './styles.css'

export default ({
  label
} = getTestingData()) => `
  <div>
    <p class="${styles.customizableParagraph}">The last time you clicked the button was: </p>
    <button
      class="${externalStyles.btn} ${externalStyles['btn-primary']}">
      <i class="${fa.fas} ${fa['fa-fire']}"></i> ${label}
    </button>
  </div>
`
```

Instead of JSX, it returns a string template with an initial HTML. Note that props which in JSX are populated from the app state aren't available in prerenders. This is because when gluing initial HTML, there is no access to the browser environment, including JavaScript which builds up the app state.

- Remember to name CSS classes as `class` as prerenders are literal HTML.
- Use string template interpolation `${}` instead of JSX `{}`.
- Remember that tags like `<i>` whereas in JSX can be self-closed, in HTML they need a closing tag.
- Use `externalStyles`, `fa`, `./styles.css` and `./customizableClasses.json` as you would in JSX.

To see your changes, you need to run `prerender` and `build` scripts (described under "Available scripts"). Then, in Chrome open DevTools and press CTRL+P which will open a searchable list of things to turn on/off. Choose JavaScript and refresh the browser. You should now see your prerender.

#### Injecting HTML or nested components

Here is how you can inject HTML or other component from the "outside world":

`src/ui/aNestedTemplate/index.jsx`:
```jsx harmony
import glueDomRenderer from '../../init/glueDomRenderer'
import externalStyles from '@app/styles' // eslint-disable-line no-unused-vars
import fa from '@app/fa' // eslint-disable-line no-unused-vars
import styles from './styles.css'

export default ({
  getSlot,
  paragraph1Text,
  paragraph2Text
}) => (
  <div>
    {
      getSlot({ id: 'paragraph', content: paragraph1Text })(glueDomRenderer) || <p>default paragraph1</p>
    }
    {
      getSlot({ id: 'paragraph', content: paragraph2Text })(glueDomRenderer) || <p>default paragraph2</p>
    }
  </div>
)
```

The intention here is to be able to wrap `paragraph1Text` and `paragraph2Text` in custom HTML provided from outside of the component. The example might seem like an over-engineered code in which you could pass the components/rendering functions as callback props instead. And, that's correct for simple use cases. However, imagine a component which is a layout to host slots in 10 different positions. You would need 10 props and name them to explain what they are and as we all know – naming things is hard. 

Consistency makes coding simpler, hence we came up with a unified convention to cover those more complex cases.

- The `getSlot` prop is a callback which passes `id` along with other custom details.
- The `getSlot` returns a function which is called with a `glueDomRenderer`. The purpose of the `glueDomRenderer` is to give an "outside world" a unified way to construct Virtual DOM (when called from JSX) and HTML (when called from prerender). It'll become clear when you see `./getTestingData.js`

`src/ui/aNestedTemplate/getTestingData.js`:
```javascript
export default () => ({
  getSlot: ({ id, content }) => {
    switch (id) {
      case 'paragraph': {
        return tag => tag('p', (props, { tag }) => {
          tag('blockquote', (props, { text }) => {
            text(content)
          })
        })
      }
      default: {
        return () => null
      }
    }
  },
  paragraph1Text: 'Some paragraph 1',
  paragraph2Text: 'Some paragraph 2'
})
```

There are few things that need your attention:

- The `switch` statement is used to potentially handle multiple injections. For consistency, use it even when there is just one slot to "fill".
- The `tag` argument of returned function is either `glueDomRenderer` or `glueDomPrerenderer`, depends where the function is called from.
- Both renderers use the same simple syntax you can read more about [here](https://github.com/gluecodes/gluecodes-dashboards/blob/master/glueDom.md).

By now you might be thinking why some "GlueDOM renderer" and not JSX? – there is a number of reasons, some of them are described [here](https://github.com/gluecodes/gluecodes-dashboards/blob/master/glueDom.md). Also, note that the code in `./getTestingData.js` will end up in [GlueCodes IDE's](https://www.glue.codes) page HTML, and having JSX surrounded by HTML would be confusing. Finally, when downloading a project in [GlueCodes IDE](https://www.glue.codes), the HTML is converted to [GlueDOM](https://github.com/gluecodes/gluecodes-dashboards/blob/master/providers.md) to keep it more flexible for potential tweaks than JSX. So after all, the end user receives a consistent and maintainable code that is enjoyable to work with.

### Before shipping

Remember to document your component before requesting a code review. Fill in `./brief.json` and `./readme.js`. Also don't forget about a relevant  `./thumbnail.jpg`.

Here is an example of `./brief.json`:

```json
{
  "author": "Your name",
  "description": "short description",
  "icon": "data URL of your icon",
  "tags": [
    "block",
    "bootstrap",
    "content",
    "image",
    "text"
  ]
}
```

Keep it simple. Don't use too many tags and keep descriptions written with an appropriate language (lorem ipsum is fine). For an icon, use base64-ed data URL *.png.

The [IDE](https://www.glue.codes) users will likely want to preview a widget before installing it. For this purpose, you can provide `./thumbnail.jpg` which should be a screenshot of your component. To provide even more details, you can override standard `./readme.js`. 

## License

[MIT](https://github.com/gluecodes/gluecodes-dashboards/blob/master/LICENSE)

## Donate

Whether you're an active contributor or not, have direct impact on [GlueCodes Platform](https://www.glue.codes). Vote for new features and be involved in shaping the roadmap. Join one of our memberships by clicking below.

<p><a href="https://www.patreon.com/GlueCodes" target="_blank" rel="noopener noreferrer"><img src="https://github.com/gluecodes/gluecodes-dashboards/blob/master/mediaFiles/images/patreonLogo.png" alt="GlueCodes Patreon"></a></p>

## Subscribe

Subscribe to our social media channels for tutorials and latest news.

- [YouTube](https://www.youtube.com/channel/UCDtO8rCRAYyzM6pRXy39__A?view_as=subscriber)
- [Facebook](https://www.facebook.com/glue.codes)
- [LinkedIn](https://www.linkedin.com/company/gluecodes)
