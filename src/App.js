import { isNewMessagePayload } from '@mitter-io/core'
import React, { Component } from 'react'
import ChannelComponent from './ChannelComponent'
import './App.css'

class App extends Component {
    constructor() {
        super();

        this.state = {
            channelMessages: {}
        }

        this.setChannels = this.setChannels.bind(this)
        this.newMessage = this.newMessage.bind(this)
    }

    setChannels(participatedChannels) {
        const channelMessages = {}

        participatedChannels.forEach((participatedChannel) => {
            channelMessages[participatedChannel.channel.identifier] = []
        })

        this.setState((prevState) => {
            return Object.assign({}, prevState, {
                channelMessages
            })
        })
    }

    newMessage(messagePayload) {
        this.setState((prevState) => {
            const channelId = messagePayload.channelId.identifier

            if (
                prevState.channelMessages[channelId]
                    .find(x => x.messageId === messagePayload.message.messageId) !== undefined
            ) {
                return prevState
            }


            return Object.assign({}, prevState, {
                channelMessages: Object.assign({}, prevState.channelMessages, {
                    [messagePayload.channelId.identifier]:
                        prevState.channelMessages[messagePayload.channelId.identifier]
                                 .concat(messagePayload.message)
                })
            })
        })
    }

    componentDidMount() {
        const mitter = this.props.mitter
        mitter.clients().channels().participatedChannels()
              .then(channels => this.setChannels(channels))

        mitter.subscribeToPayload((payload) => {
            console.log(payload)
            if (isNewMessagePayload(payload)) {
                this.newMessage(payload)
            }
        })
    }

    render() {
        return (
            <div className='App'>
                <h2 className='application-title'>
                  My Chat App

                  <div className='user-label'>
                      Welcome, <strong>{this.props.loggedUser}</strong>
                  </div>
              </h2>

              <ChannelComponent
                  mitter={this.props.mitter}
                  channelMessages={this.state.channelMessages}
                  selfUserId={this.props.loggedUser}
              />
          </div>
        );
    }
}

export default App;
