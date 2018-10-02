To run this application, you need to get an application id from the mitter.io panel.

Then run the application:

```
git clone git@github.com:mitterio/mitter-react-starter.git
cd mitter-react-starter

yarn install
yarn start
```

The `mitter` instance is created in `index.js` from where you can set the authorization as per for your application flow.

The `ChannelComponent` that was described in the tutorial is also included in this pacakge if you wish to use it. To do so,

```
import ChannelComponent from './ChannelComponent'

class MyComponent extends React.Component {
    render() {
        return(
            <ChannelComponent
                mitter={...}
                loggedUser={...}
                channelMessages={...}
            />
        )
    }
}
```

