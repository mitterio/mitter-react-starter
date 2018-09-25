To run this application, you need to get the following from the mitter.io panel

1. An application id.
2. Create three users `@john`, `@amy` and `@candice`.
3. Create two channels, either as per the getting started documentation or as you wish.
4. Modify `index.js` to include these credentials.

Then run the application:

```
git clone git@github.com:mitterio/mitter-getting-started-web-demo.git
cd mitter-getting-started-web-demo

yarn install
yarn start
```

Open your browser to `http://localhost:3000/user/@username` to login as `@username`. Do note that
the default page that opens up on `yarn start` will throw an error because it specfically looks for
a username-including pattern.
