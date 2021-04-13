## Your Task

This tiny app mocks our business case: we render notifications when users go online and offline. In this sandbox, the data source is mocked with [two buttons](./src/OnlineStatusMock.js).

Get familiar with the code and see it [live](https://preply.github.io/fe-riddle-online-status/build/).

We are going to ask you to extend it with some features.

While you code them, please, keep the [mock](./src/OnlineStatusMock.js) untouched, otherwise do whatever you would do in real world. If you need a dependency, go for it.

### Solution implementation

First I moved everything to hooks, I'm more confortable with it.

Then I was completing the task step by step.

- Show only notification when there's a new state.
- Check that if you switch online - offline and the other way arround you need 2s to display that new notification.
- Check if you are coming from online to offline or offline to online to wait the time or not.

Timeout variable is out the component scope to avoid re-renders because of it.
