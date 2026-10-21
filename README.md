# Percy External API docs

Public integration guides for the Percy External API (`https://api.getbuyside.com/v1`), served with GitHub Pages
from `main`. Plain HTML, no build step.

```
index.html              home: authentication, errors and limits, support, list of APIs
buyer-profiles/         Buyer Profiles API (/buyers/profiles)
assets/style.css        shared styles
assets/copy.js          "Copy" buttons on code samples
```

## Adding an API

1. Copy `buyer-profiles/` to a new folder and rewrite its content. Keep the shared sections (authentication, common
   errors, support) on the home page and link to them.
2. Add the API to the "Available APIs" list and to the side index of `index.html`.
3. Only document routes that are approved for clients. Never put real credentials, keys or customer data in a page:
   examples use placeholders (`$CLIENT_ID`, `$CLIENT_SECRET`, `$API_KEY`) and made-up records.

Preview locally with `python3 -m http.server` from the repo root and open `http://localhost:8000/`.
