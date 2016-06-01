---
layout: post
title: How to install Jekyll
date: 2016-05-31 19:38:05 -0700
author: John Cossack
imageurl: http://s33.postimg.org/4wcimsh7z/jekyll_hyde.jpg
categories: jekyll update
caption: The Great Jekyll Tutorial - Part I This tutorial is a series of tutorials on Jekyll, if you are interested in learning how you can utilize all the features of Jekyll click here for more tutorials.
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
<i>This tutorial is a series of tutorials on Jekyll, if you are interested in learning how you can utilize all the features of Jekyll click here for more tutorials.</i>
<div><br></div>
<img src = "http://s33.postimg.org/r0qjauysv/jekyll_tutorial.jpg">
<h1 style = "border: 2px solid white; font-size: 75px;text-align: center; background-color: #e74c3c; color: white; box-shadow: 0px 2px 4px 1px grey;"><b>PART I</b></h1>
<div style = "border: 2px solid white; background-color: #e74c3c; box-shadow: 0px 2px 4px 1px grey;">
<h3 style = "text-align: center; color: white; background-color: #e74c3c;">WHAT'S COVERED IN THIS TUTORIAL</h3>
<ul style = "color: white;">
	<li style = "display: inline; padding: 15px; background-color: #e74c3c;">What is Jekyll?</li>
	<li style = "display: inline; padding: 15px; background-color: #e74c3c; ">Who is Jekyll for?</li>
	<li style = "display: inline; padding: 15px;background-color: #e74c3c;">How to install Jekyll.</li>
	<li style = "display: inline; padding: 15px; background-color: #e74c3c; ">Popular commands</li>

</ul>
</div>
<ins class="adsbygoogle"
 style="display:inline-block;width:336px;height:280px; z-index: 9999;" data-ad-client="ca-pub-4085915336649467" data-ad-slot="1120956636">
</ins>

<div><br></div>
<h4><b>What is Jekyll?</b></h4>
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
 style="display:inline-block;width:336px;height:280px; z-index: 9999;" data-ad-client="ca-pub-4085915336649467" data-ad-slot="1120956636">
</ins>

<h4><b>Who is Jekyll for?</b></h4>
Well as you probably guess Jekyll is tailor made for bloggers. However there are many themes (more on theme’s in the future) that the community have available to suit any needs you would have for a static webpage.
<div><br></div>
<h4><b>So then who isn’t Jekyll for</b></h4>
Like stated above Jekyll is a “static site generator” that means that it really is only for static websites. That means if you have a site that has a user base or you are running an e-commerce site; Jekyll isn’t for you.
<div><br></div>
<h2 style = "text-align: center; background-color: black; color: white; box-shadow: 0px 2px 4px 1px grey;">GREAT! SO LET'S GET JEKYLL ON YOUR SYSTEM!</h2>
<div><br></div>
<h3 class = "steps">Step 1:</h3>
Make sure that you have Ruby installed on your system. If Ruby isn’t installed then you really can’t be installing Ruby gems now can you? If you find you don’t have it installed here is a great tutorial from the source: <a href = http://www.tutorialspoint.com/ruby-on-rails/rails-installation.htm> Install Ruby</a> If you do have it installed go ahead and move on to the next step.
<div><br></div>
<h3 class = "steps" >Step 2:</h3>
Open up your terminal and type in the following command:
{% highlight ruby %}
$ gem install jekyll
{% endhighlight %}

All of Jekyll’s gem dependencies are automatically installed by the above command, so you won’t have to worry about them at all.
<div><br></div>
<h3 class = "steps" >Step 3:</h3>
You’re done!
“…wait, really?” yep!
<img src = "http://designmodo.com/wp-content/uploads/2015/11/02-jekyll-cli-screenshot.jpg">
<div><br></div>
Okay, so now that you have Jekyll installed on your system, what now?
Let’s go over some basic commands as well as a brief description to get you started with familiarizing yourself, run through them, test them out and meet me in the next tutorial.
<div><br></div>
Below I’ve compiled a list of common command lines you should familiarize yourself with running Jekyll. Keep in mind that if you want to run your website locally you will need to run a server.
<div><br></div>
{% highlight ruby %}
$ jekyll new
# => jekyll will create a new web app in the current folder.
# => make sure to add the name of your project directly after "new"

$ jekyll build
# => The current folder will be generated into ./site

$ jekyll build --destination <destination>
# => The current folder will be generated into <destination>

$ jekyll build --source <source> --destination <destination>
# => The <source> folder will be generated into <destination>

$ jekyll build --watch
# => The current folder will be generated into ./site,
#    watched for changes, and regenerated automatically.

$ jekyll serve
# => A development server will run at http://localhost:4000/
# Auto-regeneration: enabled. Use `--no-watch` to disable.

$ jekyll serve --detach
# => Same as `jekyll serve` but will detach from the current terminal.
#    If you need to kill the server, you can `kill -9 1234` where "1234" is the PID.
#    If you cannot find the PID, then do, `ps aux | grep jekyll` and kill the instance. [Read more](http://unixhelp.ed.ac.uk/shell/jobz5.html).

$ jekyll serve --no-watch
# => Same as `jekyll serve` but will not watch for changes.
{% endhighlight %}
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- jekyll ad -->
<ins class="adsbygoogle"
     style="display:inline-block;width:336px;height:280px"
     data-ad-client="ca-pub-4085915336649467"
     data-ad-slot="1120956636"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
</div>


<style>
.steps {
	background-color: #e74c3c;
	color: white;
	box-shadow: 0px 2px 4px 1px grey;
	padding: 7px;
	width: 15%;
	text-align: center;
}
</style>
