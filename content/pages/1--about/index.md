---
title: About
type: pages
---
<style>

  :root{
    --about-padding: 1em;      
  }
  h2{
    margin:.1em .5em .2em .1em;
  }
  .about-content{
    display:flex;
    flex-direction:column;
  }
  .about-header{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
  }
  .about-si-logo{
    width:70%;
    margin:auto;
  }
  .about-si-description{
    padding:var(--about-padding);
  }
  .si-versions{
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  .si-ver{
    display:flex;
    margin:.8em;
    flex-direction:column;
  }
  .main-version{
    grid-column-start:1;
    grid-column-end:3;
  }
  .store-badge{
    max-width:6em;
  }
  .si-more{
    display:grid;
    grid-template-columns: 2fr 2fr;
  }
  .side-column{
    background-color:#e8e8e8;
    padding:var(--about-padding);
    margin:.5em;
  }
  .small-logo{
    margin:auto;
    margin-top:-6.5em;
    z-index:10;
    width:5em;
    padding-bottom:1em;
  }
</style>

<div class="about-content">
  <div class="about-header">
    <div class="about-si-logo"><img src="images/si-logo.svg"></div>
    <div class="about-si-description"><p>Samsung Internet for Android is the web browser that is pre-installed on Samsung Galaxy phones and tablets. It is based on the open source Chromium project, to which Samsung are a major contributor.</p></div>
  </div>
  <div class="si-versions">
    <div class="si-ver main-version">
      <h2>Samsung Internet</h2>
      <img src="images/si-ss.jpg">      
      <p>Samsung Internet for Android is a simple, fast, and reliable web browser for your phone and tablet. It has replaced the stock Android browser on Samsung Galaxy devices since 2012, to provide a browser highly optimized for our devices.</p>
      <img class="store-badge" src="images/play-badge.svg">
    </div>
    <div class="si-ver">
      <h3>Samsung Internet Gear VR</h3>
      <img src="images/si4gvr-ss.jpg">
      <img src="images/si4gvr-logo.svg" class="small-logo">
      <p>Samsung Internet for Gear VR lets you browse the web and enjoy contents in an immersive environment. Browse the web on a big screen, just as if you were at the theater.</p>
      <img class="store-badge" src="images/oculus-badge.svg">
      
    </div>
    <div class="si-ver">
      <h3>Samsung Internet Beta</h3>
      <img src="images/sib-ss.jpg">
      <img src="images/sib-logo.svg" class="small-logo">
      <p>Introducing the Samsung Internet Beta, giving you early access to the newest features of the secure, private and optimized mobile web browser.</p>
      <img class="store-badge" src="images/play-badge.svg">
    </div>
  </div>
  <h2> Press Coverage</h2>
  <div class="si-more">
    <div class="">lolo</div>
    <div class="side-column"><h4>Further Reading</h4>
      <p>If you would like to learn more about Samsung Internet and the story behind it, these articles provide further background:</p>
      <ul>
        <li><a href="https://medium.com/@torgo/the-big-browser-you-haven-t-heard-of-yet-481a1b48517b">The Big Browser You Haven't Heard Of Yet</a></li>
        <li><a href="https://www.smashingmagazine.com/2016/10/whats-the-deal-with-the-samsung-internet-browser/">What’s The Deal With The Samsung Internet Browser?</a></li>
        <li><a href="https://medium.com/samsung-internet-dev/introducing-samsung-internet-for-developers-6c3a3be42f72">Introducing Samsung Internet for developers</a></li>
        <li><a href="https://medium.com/samsung-internet-dev/think-you-know-the-top-web-browsers-458a0a070175">Think you know the top web browsers?</a></li>
        <li><a href="https://medium.com/samsung-internet-dev/because-browser-diversity-is-good-for-the-web-910d1cbcdf3b">Because browser diversity is good for the web</a></li>
      </ul>
    </div>
  </div>
</div>