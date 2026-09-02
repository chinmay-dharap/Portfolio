# Blog authoring

This is a deliberately small flat-file blog. It works on GitHub Pages because it uses only static files—no build command, server, or GitHub Action is required.

## Publish a post

1. Open `posts.js`.
2. Copy the object below and add it at the beginning of `window.BLOG_POSTS`.
3. Choose a unique lowercase `slug` using hyphens, write the date as `YYYY-MM-DD`, and add your content as HTML within the template string.
4. Commit and push. GitHub Pages will publish it.

```js
{
  slug: "my-new-post",
  title: "My new post",
  date: "2026-09-03",
  excerpt: "A short summary shown on the blog home page.",
  tags: ["Security", "Notes"],
  content: `
    <p>Opening paragraph.</p>
    <h2>A section heading</h2>
    <p>More content, including <a href="https://example.com">links</a>.</p>
    <pre><code>command --example</code></pre>
  `
}
```

The permalink for this example is `blog/post.html?post=my-new-post`.

## Local preview

Open `blog/index.html` in a browser, or serve the repository with any static server. The blog uses relative paths, so it works whether GitHub Pages serves it from a custom domain or a repository subpath.
