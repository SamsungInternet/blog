---
title: About
type: pages
---
<style>

  :root{
    --about-padding: 1em;    
    --light-grey:#F2F2F2;  
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
    height: 3em;
    align-self: flex-end;
    margin:auto auto 0px auto;

  }
  .si-more{
    display:grid;
    grid-template-columns: 2fr 2fr;
  }
  .side-column{
    background-color:var(--light-grey);
    padding:var(--about-padding);
    margin:.5em;
    align-self:flex-start;

  }
  .small-logo{
    margin:-6.5em auto 0px auto;
    z-index:2;
    width:5em;
    padding-bottom:1em;
  }

  .ul_card{
    list-style-type:none;
    margin:1em;
    border:1px solid var(--light-grey);
    padding:.6em;
    display:box;
    line-height:1.6em;
  }

</style>

<div class="about-content">
  <div class="about-header">
    <div class="about-si-logo"><img src="images/si-logo.svg"></div>
    <div class="about-si-description"><p>Samsung Internet for Android is the web browser that is pre-installed on Samsung Galaxy phones and tablets. It is based on the open source Chromium project, to which Samsung are a major contributor.</p></div>
  </div>
  <div class="si-versions">
    <div class="si-ver main-version">
      <h2 style="margin:0px">Samsung Internet</h2>
      <img src="images/si-ss.jpg">      
      <p>Samsung Internet for Android is a simple, fast, and reliable web browser for your phone and tablet. It has replaced the stock Android browser on Samsung Galaxy devices since 2012, to provide a browser highly optimized for our devices.</p>
      <img class="store-badge" src="images/play-badge.svg" style="margin-top:-.4em;">
    </div>
    <div class="si-ver">
      <h3 style="margin:0px">Samsung Internet Gear VR</h3>
      <img src="images/si4gvr-ss.jpg">
      <img src="images/si4gvr-logo.svg" class="small-logo">
      <p>Samsung Internet for Gear VR lets you browse the web and enjoy contents in an immersive environment. Browse the web on a big screen, just as if you were at the theater.</p>
      <img class="store-badge" src="images/oculus-badge.svg">
    </div>
    <div class="si-ver">
      <h3 style="margin:0px">Samsung Internet Beta</h3>
      <img src="images/sib-ss.jpg">
      <img src="images/sib-logo.svg" class="small-logo">
      <p>Introducing the Samsung Internet Beta, giving you early access to the newest features of the secure, private and optimized mobile web browser.</p>
      <img class="store-badge" src="images/play-badge.svg">
    </div>
  </div>
  <h2> Press Coverage</h2>
  <div class="si-more">
    <div >
      <ul>
        <li class="ul_card">“Samsung is making a very, very strong case to become the default web browser for your Android devices.”<a href="https://www.androidauthority.com/samsung-internet-browser-android-793983/"> Android Authority</a></li>
        <li class="ul_card">“Android’s best mobile browser… After using them all on various devices, the best I have found is the Samsung Internet browser.”<a href="https://www.zdnet.com/article/thanks-samsung-androids-best-mobile-browser-now-available-to-all/"> ZDNet</a></li>
        <li class="ul_card">“[Use] it once and you’ll immediately notice the speed difference. Samsung Internet feels much faster. It is also better at a lot of the things that you might find limiting in Chrome, like the download manager. And in a surprise move, the Samsung internet browser actually uses much less battery than Chrome too.”<a href="https://www.makeuseof.com/tag/mobile-browser-alternatives-chrome-safari/"> makeuseof.com</a></li>
        <li class="ul_card">“This mobile browser was built specifically for Samsung devices, but people liked it so much that the company made it available for download on all Android phones.”<a href="https://www.wired.com/story/alternative-mobile-browsers/"> Wired</a></li>
        <li class="ul_card">“Once upon a time, no one would even consider using a handset manufacturer’s web browser on its own phones, much less install one on another phone. But here we are today, with Samsung’s Internet Browser being one of the best choices available in the Play Store.”<a href="https://www.howtogeek.com/348934/the-best-web-browsers-for-android/"> HowToGeek</a></li>
      </ul>
    </div>
    <div class="side-column"><h3>Further Reading</h3>
      <p>If you would like to learn more about Samsung Internet and the story behind it, these articles provide further background:</p>
      <ul>
        <li><a href="https://medium.com/@torgo/the-big-browser-you-haven-t-heard-of-yet-481a1b48517b">The Big Browser You Haven't Heard Of Yet</a></li>
        <li><a href="https://www.smashingmagazine.com/2016/10/whats-the-deal-with-the-samsung-internet-browser/">What’s The Deal With The Samsung Internet Browser?</a></li>
        <li class="ul_card"><a href="https://medium.com/samsung-internet-dev/introducing-samsung-internet-for-developers-6c3a3be42f72">Introducing Samsung Internet for developers</a></li>
        <li><a href="https://medium.com/samsung-internet-dev/think-you-know-the-top-web-browsers-458a0a070175">Think you know the top web browsers?</a></li>
        <li><a href="https://medium.com/samsung-internet-dev/because-browser-diversity-is-good-for-the-web-910d1cbcdf3b">Because browser diversity is good for the web</a></li>
      </ul>
    </div>
  </div>
</div>