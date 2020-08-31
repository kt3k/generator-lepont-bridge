# <%= packageName %>

> Description

# Install

```
npm i --save lepont <%= packageName %>
```

# Usage

On React Native side:

```tsx
import React from 'react'
import { WebView } from 'react-native-webview'
import { useBridge } from 'lepont'
import { <%= exportName %> } from '<%= packageName %>'

const App = () => {
  const [ref, onMessage] = useBridge(
    <%= exportName %>
  )
  return (
    <WebView
      ref={ref}
      onMessage={onMesssage}
      javaScriptEnabled
    />
  )
}
```

On the browser side:

```ts
import { api } from '<%= packageName %>'

api() // TODO: TBD
```

# API

TBD

# License

TBD

[lepont]: https://github.com/kt3k/lepont
