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

## Updating the Featured Article

The featured article is inside the following directory:

src > components > Hero > Feature.js

It is a react component with three variables, `title`, `image` and `url`. Update these with the relevant information and commit your changes.

## Folders structure
This is the starter’s main folders structure.

root
  ├── .cache  
  ├── content  
  ├── node_modules  
  ├── src  
  └── static  

### Content

The content folder contains four subfolders.

root
  ├── content  
  │   ├── meta  
  │   ├── pages  
  │   ├── parts  
  │   └── posts  
  
#### Meta
There is a config.js file inside the /content/meta/ folder, this contains data about the setup of the blog.

#### Posts
Every blog post has its own folder.

root
  ├── content  
  │   ├── posts  
  │   │   ├── 2017-10-01--two-things-are-infinite  
  │   │   ├── 2017-10-03--be-who-you-are  
  │   │   ├── 2017-10-05--you-only-live-once  
When you change or add new post, remeber to keep up with the post folder name pattern (this is done for us by the glitch-medium tool)

/YYYY-MM-DD--title-of-post/  
There are three obligatory parts:

a post date prefix YYYY-MM-DD,  
a separator -- (two dashes)  
a slug  
Only posts inside properly named folders are displayed on the blog post list.  

#### Pages
Every page has its own folder.

root  
  ├── content  
  │   ├── pages  
  │   │   ├── 1--about  
  │   │   ├── 2--Docs  
  │   │   ├── 3--meet-the-team  
  │   │   ├── diversity-inclusion-statement  
  │   │   └── success  
When you change or add new page, remember to properly use the page folder name pattern.

/number--title/  
There are three parts.

a page order number prefix No (one or more digit)  
a separator -- (two dashes)  
a slug  
Only pages inside folders with a number prefix are displayed in the navigation. Pages without will be linkable but will not appear in the navigation

#### Parts
These are the constituent parts of the blog’s layout. Edit these to add information about Samsung Internet or to add a footer to the blog posts.

root  
  ├── content  
  │   ├── parts  
  │   │   ├── author.md  
  │   │   └── footnote.md  

### Node Modules
This contains all of the installed packages.

### Src
This contains the components, templates and theming of the blog. If you need to edit the markup or styling of a component, you will find it in here. 

Each component contains its own CSS. Try to keep the CSS selectors as un-specific as possible when adding styles. Use an element selector or a class if you can. 

## Some useful instructions & tutorials on the Gatsby Blog

* [How to install, setup and add new content to a Blog starter](https://dev.greglobinski.com/install-blog-starter/)
