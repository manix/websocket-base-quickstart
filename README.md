# websocket-base-quickstart

This is an example of how to use `websocket-base` in its simplest form.

The authentication function fakes an api call and creates a fake user in order for this to work without a backend api.

### How to run it

After cloning this repository go into `./server` and run `npm start`. You should see the following message:

> ... system: Server listening on port 81

Next open `./client/index.html` and click on "Open a connection". You should see messages appear in the log.

Examine the code in `./server/example.js` and `./server/actions/hello.js` to get a better understanding of how Base works.
