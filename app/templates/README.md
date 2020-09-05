# <%= packageName %>

> TODO: write description

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

api() // TODO: write examples
```

# APIs

TODO: document APIs

# License

TODO: set license

[lepont]: https://github.com/kt3k/lepont
