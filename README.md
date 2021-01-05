# Platzi Test

Following the instructions, i develop the proposed test. The demo can be found at: https://platzi-test.vercel.app

Used technology:

- React
- Redux (optional): I did the setup, however, I didn't see the need to use redux for the test.
- Stylus: Currently it is not a good idea to use Next JS with Stylus, for this reason use styled-components with a mobile first strategy as an alternative
- Server Side Render with Express
- Unit testing with Jest (Only in the components)
- Integration testing with Jest (Only in the pages)
- E2E tests with Cypress

Also i made the request for the indexing of the page in Google, however, I am subject to the times that Google predestined for this.
![Google Index Request](https://user-images.githubusercontent.com/46332292/103614603-f4263c80-4ef6-11eb-933d-2b9ac24fbff7.png)

I hope that in the next few days the indexing can be validated through this url [site:platzi-test.vercel.app](https://www.google.com/search?q=site%3Aplatzi-test.vercel.app&oq=site%3Aplatzi-test.vercel.app&aqs=chrome.0.69i59j69i58j69i60.400j0j7&sourceid=chrome&ie=UTF-8)

The application deployment is done through Vercel. Additionally create some Github Actions workflows to validate linter, tests and e2e tests when pushing or creating a pull-request.

PD: Please bear in mind that on dates 31, 1, 2 and 3 do not advance with the test for travel reasons.

### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ cd platzi-test
$ yarn
$ yarn dev
```

For production environments...

```sh
$ cd platzi-test
$ yarn
$ yarn build
$ yarn start
```
