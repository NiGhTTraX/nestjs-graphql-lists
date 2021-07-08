## Setup

```console
yarn
```

## Usage

Run 

```console
yarn start:dev
```

And then go to http://localhost:3000/graphql and run the following query:

```graphql
{
  user(id: "1") {
    posts {
      body
    }
  }
}
```
