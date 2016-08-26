---
layout: post
title: How to install Jekyll
date: 2016-05-31 19:38:05 -0700
author: John Cossack
imageurl: http://s33.postimg.org/4wcimsh7z/jekyll_hyde.jpg
categories: jekyll update
caption: The Great Jekyll Tutorial - Part I This tutorial is a series of tutorials on Jekyll, if you are interested in learning how you can utilize all the features of Jekyll click here for more tutorials.
subtitle: THE GREAT JEKYLL TUTORIAL - PART I - HOW TO INSTALL JEKYLL
keywords: jekyll, how, to, install, tutorial, jekyll server, ruby, gem,
---
<!-- Google Tag Manager -->
<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-5JC4RX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5JC4RX');</script>
<!-- End Google Tag Manager -->
<div class = "wrapper">
<i style = "font-weight: muted">This tutorial is a series of tutorials on Jekyll, if you are interested in learning how you can utilize all the features of Jekyll click here for more tutorials.</i>
<div><br></div>
<img src = "http://s33.postimg.org/r0qjauysv/jekyll_tutorial.jpg">
<div style = "font-size: 75px;text-align: center; background-color: rgba(0,0,0,0.8); color: rgba(0, 195, 0, 0.6); box-shadow: 0px 2px 4px 1px grey;">
<h1><b>PART I</b><span class="blink"> _ </span></h1>
</div>
<h3 class="steps">WHAT'S COVERED IN THIS TUTORIAL</h3>

<div class = "row" style="text-align: center; font-size: 13px; padding: 0px 15px 0px 15px;">

			<p style = "box-shadow: 0px 2px 4px 1px grey;">WHAT IS JEKYLL?<br>
			WHO SHOULD USE JEKYLL.<br>
			HOW TO INSTALL JEKYLL.<br>
			COMMON COMMANDS.</p>

</div>
<ins class="adsbygoogle"
 style="display:inline-block;width:336px;height:280px; z-index: 9999;" data-ad-client="ca-pub-4085915336649467" data-ad-slot="1120956636">
</ins>
<div><br></div>
<div><br></div>
<div><br></div>
<h2 style = "text-align: center"><b>What is Jekyll?</b></h2>
<img src = "http://s33.postimg.org/4wcimsh7z/jekyll_hyde.jpg">
<b>Jekyll is a Doctor who occasionally feels he is battling between the good and evil within himself revealing his alter ego "Hyde"....No? Wrong Jekyll?
<div><br></div>
Ahhh yes...of course you mean this Jekyll.</b>
<img src="https://jekyllrb.com/img/logo-2x.png">
Jekyll is a parsing engine bundled as a ruby gem used to build static websites from dynamic components such as templates, partials, liquid code, markdown, etc. Jekyllis known as "a simple, blog aware, static site generator".
<div><br></div>
If you didn’t understand all of that, that’s fine. Basically Jekyll is a ruby based framework that structures your static website. The benefits of Jekyll are really taking the developers industry by storm. Mainly for its “blog awareness”. Which is a fancy way of saying “It automatically sorts and organizes your blog post in chronological order and even display’s them for you on the main index.html page. Of course there is a lot more to what Jekyll is capable of, but I don’t want to over saturate you with information just yet. Just know that Jekyll makes the process way simpler for you.
<div><br></div>
<ins class="adsbygoogle"
 style="display:inline-block;width:336px;height:280px; z-index: 9999;" data-ad-client="ca-pub-4085915336649467" data-ad-slot="1120956636"></ins>

<h2 style = "text-align: center"> <b> Who is Jekyll for? </b> </h2>
Well as you probably guess Jekyll is tailor made for bloggers. However there are many themes (more on theme’s in the future) that the community have available to suit any needs you would have for a static webpage.
<div><br></div>
<h2 style = "text-align: center"><b>So then who isn’t Jekyll for?></b></h2>
Like stated above Jekyll is a “static site generator” that means that it really is only for static websites. That means if you have a site that has a user base or you are running an e-commerce site; Jekyll isn’t for you.
<div><br></div>
<div class = "midbreak">
<h2 style = "padding: 35px; text-align: center; background-color: black; color: white; box-shadow: 0px 2px 4px 1px grey;">HOW TO INSTALL JEKYLL</h2>
<div><br></div>
<h3 class = "steps">Step 1:</h3>
<p> Make sure that you have Ruby installed on your system.<br>
If Ruby isn’t installed then you really can’t be installing Ruby gems, now can you?<br>
If you find you don’t have it installed here is a great tutorial from the source: <a href = "http://www.tutorialspoint.com/ruby-on-rails/rails-installation.htm"> Install Ruby </a> If you do have it installed go ahead and move on to the next step. <span class="blink">$</span></p>
<div><br></div>
<h3 class = "steps" >Step 2:</h3>
<p>Open up your terminal and type in the following command: <span class="blink">$</span></p>
{% highlight ruby %}
$ gem install jekyll
{% endhighlight %}

<p>All of Jekyll’s gem dependencies are automatically installed by the above command, so you won’t have to worry about them at all. <span class="blink">$</span></p>
<div><br></div>

<h3 class = "steps" >Step 3:</h3>
<p>Enjoy Jekyll!<br>
Yes, really? <span class="blink">$</span></p>
<div><br></div>
<h2 style = "text-align: center">So now that Jekyll is on your system, I'm assuming you'll want to make an app and run it.</h2>
<img src = "http://designmodo.com/wp-content/uploads/2015/11/02-jekyll-cli-screenshot.jpg">
<div><br></div>
<div class = "wrapper">If the directions above seem a little daunting, I've gone through the trouble of laying out a little cheat sheet with small explainations of each command.
<div><br></div>

<h3 style = "margin-left: 15px; margin-right: 15px;">Below I’ve compiled a list of common command lines you should familiarize yourself with running Jekyll. Keep in mind that if you want to run your website locally you will need to run a server.</h3>
</div>
<div class = "highlight">
<h3 class="steps">Common Commands</h3>
<p>
$ jekyll new<br>
<span class="terminal-white"># => jekyll will create a new web app in the current folder.</span><br>
<span class="terminal-white"># => make sure to add the name of your project directly after "new"</span><br>
<br>
$ jekyll build<br>
<span class="terminal-white"># => The current folder will be generated into ./site</span><br>
<br>
$ jekyll build --destination <destination><br>
<span class="terminal-white"># => The current folder will be generated into destination </span><br>
<br>
$ jekyll build --source <source> --destination <destination><br>
<span class="terminal-white"># => The <source> folder will be generated into destination</span><br>
<br>
$ jekyll build --watch<br>
<span class="terminal-white"># => The current folder will be generated into ./site,</span><br>
<span class="terminal-white"># => watched for changes, and regenerated automatically.</span><br>
<br>
$ jekyll serve<br>
<span class="terminal-white"># => A development server will run at http://localhost:4000/</span><br>
<span class="terminal-white"># Auto-regeneration: enabled. Use `--no-watch` to disable.</span><br>
<br>
$ jekyll serve --detach<br>
<span class="terminal-white"># => Same as `jekyll serve` but will detach from the current terminal.</span><br>
<span class="terminal-white">#    If you need to kill the server, you can `kill -9 1234` where "1234" is the PID.</span><br>
<span class="terminal-white">#    If you cannot find the PID, then do, `ps aux | grep jekyll` and kill the instance.</span>
<br>
$ jekyll serve --no-watch<br>
<span class="terminal-white"># => Same as `jekyll serve` but will not watch for changes.</span>


<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- jekyll ad -->
<ins class="adsbygoogle"
     style="display:inline-block;width:336px;height:280px"
     data-ad-client="ca-pub-4085915336649467"
     data-ad-slot="1120956636"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

<style>
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
	color: white;
}
</style>
