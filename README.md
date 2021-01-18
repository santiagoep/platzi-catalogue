# Platzi Catalogue

Platzi Catalogue
The demo can be found at: https://platzi-test.vercel.app

## Desktop
![screencapture-platzi-test-vercel-app-2021-01-18-01_48_58 (1)](https://user-images.githubusercontent.com/46332292/104881576-8551d600-592f-11eb-9017-84c2ead358b4.png)
![screencapture-platzi-test-vercel-app-products-chaqueta-rompevientos-unicolor-con-capota-para-hombre-freedom-00703-2021-01-18-01_49_13 (1)](https://user-images.githubusercontent.com/46332292/104881583-88e55d00-592f-11eb-8d4b-67404e605e21.png)

## Mobile
![screencapture-platzi-test-vercel-app-products-chaqueta-rompevientos-unicolor-con-capota-para-hombre-freedom-00703-2021-01-18-01_49_26 (1)](https://user-images.githubusercontent.com/46332292/104881588-8d117a80-592f-11eb-92f6-f0b379478125.png)
![screencapture-platzi-test-vercel-app-2021-01-18-01_49_39 (1)](https://user-images.githubusercontent.com/46332292/104881599-90a50180-592f-11eb-897d-2ff4786f7863.png)


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

### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ cd platzi-catalogue
$ yarn
$ yarn dev
```

For production environments...

```sh
$ cd platzi-catalogue
$ yarn
$ yarn build
$ yarn start
```
