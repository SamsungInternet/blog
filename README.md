# Welcome to the Samsung Internet Developer Hub :wave:

This site is built on the [GatsbyJS](https://www.gatsbyjs.org/) blog.

The site and this repository are maintained by the Samsung Internet Developer Advocate Team. 

If you spot any problems with our site please tell us about them using raising an [Issue](https://github.com/SamsungInternet/siteblog/issues) in this repository.

There are some useful templates for reporting a bug or making a feature request. Please follow these when submitting your issue to us :sparkling_heart:.  

## Importing Posts From Medium

Paste `https://medium-to-gatsby.glitch.me/` before the medium URL, it will then provide a wizard to make a PR.

Add the correct url for your medium avatar to 'authorImg' and ensure that your post has one of the following categories:
* Web Development
* Immersive Web
* Communities
* Browser Features
* Web APIs
* PWA
* Web Performance
* IOT


# Making a contribution...

Follow these instructions on how to get started with working on the samsunginter.net blog.

## Before you begin:

If you do not have Gatsby Cli installed yet, you will need to do this first.

```text
npm install --global gatsby-cli
```

More information on [GatsbyJS.org](https://www.gatsbyjs.org/tutorial/part-one)

Once you've installed gatsby-cli you'll also need to install the modules that come with the project.
Inside the siteblog directory run

```text
npm install
```

## Getting started

Inside the siteblog directory run:

```text
gatsby develop
```

to hot-serve your website on http://localhost:8000 

Now you can make changes to the content of the site locally and see those changes at http://localhost:8000. 

Alternativly you can run: 

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

### Some useful instructions & tutorials on the Gatsby Blog

* [How to install, setup and add new content to a Blog starter](https://dev.greglobinski.com/install-blog-starter/)
