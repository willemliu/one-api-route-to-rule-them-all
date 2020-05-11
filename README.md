# one-api-route-to-rule-them-all

[Demo](https://one-api-route-to-rule-them-all.now.sh)

Minimal show-case of how to have a single API Route handle all incoming requests.

In light of the [limits](https://github.com/zeit/now/discussions/4029) set bij Vercel (formerly known as Zeit Now) it has now
become paramount to use as few API Routes as possible even though it's well supported by NextJS.

## [pillarjs/Router](https://github.com/pillarjs/router)

I picked the first router I found [here](https://github.com/amio/awesome-micro#routing). I've looked at the others in the list. Besides the file-based one I think they should all work.
This [pillarjs/Router](https://github.com/pillarjs/router) looks to have the most community support compared to the rest of the list.

## Local development

### Prerequisites

1. NodeJS + NPM

### Install dependencies

Run `npm i`.

### Start local server

Run `npm run dev`.
.
