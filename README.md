# Buy Bitcoin
Gives user a form and allows them to make a trade with their dollar and bitcoin balance updating.

## Implementation:
Node and create-react-app running concurrently

React fetches Node endpoint, Node then gets last price from Bitfinex API and returns it to React.
Price is set only on start.

## To run:
run 'npm install' in root, for node dependencies.

**run 'npm install' in 'client' directory, for react dependencies**

'yarn dev' from root runs both node and client concurrently

## Future additions:
Bitfinex API websocket for price data
