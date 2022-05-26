# Live Demo

https://bankapp-z1.vercel.app/

# Technologies

- NextJS
- React
- Typescript
- Styled-Components
- Cypress (e2e testing purposes)
- Eslint & Prettier

# Folders structure

- components
- containers (Contains a collection of components)
- cypress (e2e testing)
- globalStyles (App globalStyles)
- lib (To detach the Fetch function and not be attached to a component)
- pages

# Install and Run

```
npm i
npm run dev
```

**Run e2e test**

To run cypress you must have the app rsunning

```
npm run dev
```

And then execute cypress script

```
npm run cypress
```

# Approach

Looking at the design, I have approached the problem with two containers that play the role of views for the application, receiving a state that is sent from the parent and a handler function to modify that state.

# Feelings

This test has been a challenge for me since I haven't used Styled-Components for a long time and I don't have any testing experience either.
I tried my best to write the cleanest and most readable code I could.

# Indications

- Create a repository on Github with the name **z1-frontend-developer**.
- There is no set time to submit the test. However, we recommend to use a maximum of 3-4 days and submit as much as you can.
- Implement the frontend using React with TypeScript and using as few dependencies as possible. We recommend bootstrapping with [https://create-react-app.dev/docs/adding-typescript/#getting-started-with-typescript-and-react](https://create-react-app.dev/docs/adding-typescript/#getting-started-with-typescript-and-react)
- For styles use styled components.
- Optionally add tests, either unit tests, integration tests or any other type.
- The invision link for the styles is the following → [https://projects.invisionapp.com/d/main#/console/19021018/396492478/preview](https://projects.invisionapp.com/d/main#/console/19021018/396492478/preview) ask any question related to access or how to consult the styles in invision.
- The backend URL is [https://front-exercise.z1.digital/evaluations](https://front-exercise.z1.digital/evaluations) making a POST request will return {"summary":{"outcome": "Approved"}} when it considers it has succeeded and {"summary":{"outcome": "Too Much Glare"}} when it fails.
