# YouTube Clone

React frontend that recreates core YouTube browsing flows: home feed, search, video pages, related videos, responsive navigation, and ad-style video playback components.

The application code lives in `youtube-clone/`.

## Features

- Home, video, and mobile search routes with React Router.
- Componentized layout: header, sidebar, search box, mobile sidebar, and skeleton loading states.
- Video cards for home, search, and related-video contexts.
- YouTube player integration through `react-youtube`.
- Ad playback components including skippable ad UI.
- Chakra UI, React Icons, Framer Motion, and utility helpers for formatting.

## Project Structure

```text
youtube-clone/
  src/
    pages/          Home, video, and mobile search pages
    components/     Layout, cards, ads, and video components
    context/        Shared YouTube context
    utils/          Formatting and helper utilities
    data/           Local ad/sample data
  public/
  package.json
```

## Run Locally

```bash
cd youtube-clone
npm install
npm start
```

## Build

```bash
cd youtube-clone
npm run build
```

## What This Demonstrates

- React component architecture.
- Routing and dynamic video pages.
- Responsive UI composition.
- API/data integration patterns for media-style apps.
- Frontend state sharing through context.
