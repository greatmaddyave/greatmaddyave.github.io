---
layout: post
title: Configuring Jekyll
date: 2016-06-06 14:38:05 -0700
author: John Cossack
imageurl: http://joelglovier.com/img/ogimgs/jekyll.jpg
categories: jekyll update
caption: The Great Jekyll Tutorial - Part II This tutorial is a series of tutorials on Jekyll, if you are interested in learning how you can utilize all the features of Jekyll click here for more tutorials.
subtitle: THE GREAT JEKYLL TUTORIAL - PART II - CONFIGURING JEKYLL
keywords: jekyll, how, to, install, configure, tutorial, jekyll server, ruby, gem,
baseurl: How_to_config_jekyll
path: /jekyll/update/2016/06/06/Jekyll-Tutorial-Configuration.html
---

<div><br></div>
<div><br></div>
<div class = "wrapper">
<i style = "font-weight: muted">This tutorial is a series of tutorials on Jekyll, if you are interested in learning how you can utilize all the features of Jekyll click here for more tutorials.</i>
<div><br></div>
<img src = "http://s33.postimg.org/r0qjauysv/jekyll_tutorial.jpg">
<div style = "font-size: 75px;text-align: center; background-color: rgba(0,0,0,0.8); color: rgba(0, 195, 0, 0.6); box-shadow: 0px 2px 4px 1px grey;">
<h1><b>PART II</b><span class="blink"> _ </span></h1>
</div>
<div><br></div>
<div><br></div>
<h3 class="steps">WHAT'S COVERED IN THIS TUTORIAL</h3>
  <div class = "row" style="text-align: center; font-size: 13px; padding: 0px 15px 0px 15px;">

  			<p style = "box-shadow: 0px 2px 4px 1px grey;">WHAT IS JEKYLL?<br>
  			WHAT IS A YAML.<br>
  			WHERE TO FIND configure.yml.<br>
  			HOW TO CONFIGURE JEKYLL.</p>

  </div>

  <div><br></div>
  <hr style = "border: 3px solid #7f8c8d">
  <div><br></div>
  <h3>What is a Yaml?</h3>

  <h4>If you've never heard of a Yaml before it can be pretty confusing as to what you do with it. So let's give you some context so you will have a good foundation to properly impliment your yaml files in the future.</h4>
  <div><br></div>
  <h4>YAML stands for "YAML Ain't Markdown Language" and it is used extensively in Jekyll for its configuration files and also in page settings. YAML is to configuration what markdown is to markdown. It's basically a human-readable structured data format.</h4>
  <div><br></div>
  <h4>So this begs the question; <b>"What is Markdown?"</b><br>
  Markdown is a lightweight markup language with plain text formatting syntax designed so that it can be converted to HTML and many other formats using a tool by the same name.</h4>

  Find more information here:<br>
  <a href="http://rmarkdown.rstudio.com/authoring_basics.html">Markdown Docs</a><br>
  <div><br></div>
  Keep in mind that if you are going to be serious about using Jekyll for your blog or in general it may be a good idea to visit the link above and familiarize yourself with the syntax. It's honestly not that hard. Maybe a 10 minute look and you've got it.

  <div><br></div>
  <h3>Where to find configure.yml</h3>
  <h4> config.yml can be found in your main projects folder. Remember in <a href="/jekyll/update/2016/05/31/Jekyll-tutorial-How-to-install-jekyll.html">Part I</a> we learned how to make a new Jekyll project and give it a name? Well that same folder houses your config.yml file. This is the file that we will be going over in detail in the next section so ensure you have it open.</h4>
  <div><br></div>
  <div><br></div>

  <h3>How to configure jekyll</h3>
  <h4>When you first open the config.yml file it's filled with some placeholder information. Of course, you'll want to customize this to make your new project your own. </h4>
  <div><br></div>
  <h4>In order to customize the config file, we need to go over what exactly each variable controls</h4>
  I am calling anything that looks like "ThisIsAVariable:" because jekyll runs Ruby on Rails and this config file actually stores each section as a variable that becomes a standard across all pages of your website or project.
  <div><br></div>

  <ul><h3>Config Variables</h3>
    <li><b>title:</b></li><br>
    This is the name of your website, it will populate automatically across your pages in the header and footer. You can also use <i>{{ page.title }}</i> to insert it where ever you may wish for it to auto populate.
    <div><br></div>
    <li>email:</li>
    Again, this will auto populate on your page where ever you may put the variable "<i>{{ page.email }}</i>"
    <div><br></div>
    <li>description:</li>
    This, is pretty self explanatory, This description by default will be found in your footer, however you may...again... use the variable "<i>{{ page.description }}</i>" where ever you would like to recycle it.
    <div><br></div>
    <li>baseurl:</li>
    This is the subpath to your site, it comes after your main url. just after ".com". Don't use this anywhere else.
    <div><br></div>
    <li>url:</li>
    This is...the...ah...url.
    <div><br></div>
    <li>twitter_username:</li>
    This is another self explanatory one, basically you input your username, not a link just your username, this variable also calls the footer home and it will automatically link to your twitter account. No mess, no fuss.
    <div><br></div>
    <li>github_username:</li>
    This is the same as the twitter variable only for github. Use it the same.
    <div><br></div>
    <li>markdown:</li>
    Listen, don't change this one either, this is the markdown superset converter. if you need more information on the specifics of Kramdown (thats the markdown language) and it's syntax click <a href="http://kramdown.gettalong.org/">here</a>
  </ul>
<div></div>
<h3>Homework</h3>

<h4>Erase the default information in the variables title:, email:, description:, twitter_username: and github_username: with your own information. Try to see if you can locate all the places on your website it effects. Bonus points if you use one of them as a variable in another part of the page it isn't already setup in. </h4>

</div>


<style>

h3 {
  color: #9b59b6;
  font-weight: bolder;
}

li {
  font-size: 18px;
  font-weight: bold;
  list-style: none;
}
p{
	font-weight: bold;
	text-align: left;
	font-size: 20px;
	padding: 15px;
	margin-left: 15px;
	margin-right: 15px;
	border-bottom-left-radius: 7px;
	border-bottom-right-radius: 7px;
	color: rgba(0, 195, 0, 0.6);
	background-color: rgba(0, 0, 0, 0.9);
	margin-top: -10px;

}
p span {
	color: rgba(255,255,255, 0);
	background-color: rgba(255,255,255, 0.7);
}
a:hover {
	color: ;
}

</style>
