# Blog

A [GatsbyJS](https://www.gatsbyjs.org/) blog. <br /><br />

## Description

If you do not have Gatsby Cli installed yet, do it first.

```text
npm install --global gatsby-cli
```

More information on [GatsbyJS.org](https://www.gatsbyjs.org/tutorial/part-one)

## Getting started

Inside the siteblog directory run

```text
gatsby develop
```

to hot-serve your website on http://localhost:8000 or

```text
gatsby build
```

to create static site ready to host (/public).

##### External services

The blog uses external services for some functions: comments, analytics. To use them you have to secure some access data. All services are free to use or have generous free tiers big enough for a personal blog.

Create an `.env` file like below in the root folder. Change `...` placeholders with real data.

```text
GOOGLE_ANALYTICS_ID=...
FB_APP_ID=...
```

### Instructions & tutorials

* [How to install, setup and add new content to a Blog starter](https://dev.greglobinski.com/install-blog-starter/)
* More articles soon at [Front-end web development with Greg](https://dev.greglobinski.com/gatsby-starter-hero-blog/)
