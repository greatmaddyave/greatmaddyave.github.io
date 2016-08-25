---
layout: post
title: How to add a Carousel to your website.
date: 2016-08-24 14:38:05 -0700
author: John Cossack
imageurl: https://s14.postimg.io/g0b19zugh/Screen_Shot_2016_08_25_at_12_55_36_PM.png
categories: tutorial web development
caption: A jqueryUI or Bootstrap slider can add, not only some style to your webpage but also give it a level of professionalism. Although generally used to showcase an array of images, a slider can also save vertical space on your website for the many levels of an application that the user may not even interact with otherwise. It really leans up the look of your website and is one of my favorite utilizations of the slider that I don't see a lot of developers using.
subtitle: Adding a Bootstrap or jQueryUI Slider/carousel to your website.
keywords: bootstrap, how-to, how, to, carousel, tutorial
baseurl: Update
---
<div class="wrapper" style = "width: 100%;">
<h1>Adding an interactive slider to your website</h1>
<br>
<a href="http://codepen.io/greatmaddyave/full/QEXOmO/"><button class="install">Visit the CodePen for this Project</button></a>
<br>
<p>A jqueryUI or Bootstrap slider can add, not only some style to your webpage but also give it a level of professionalism. Although generally used to showcase an array of images, a slider can also save vertical space on your website for the many levels of an application that the user may not even interact with otherwise. It really leans up the look of your website and is one of my favorite utilizations of the slider that I don't see a lot of developers using.</p>
<br>
<p>In this tutorial I'm going to be breaking down the step by step process and hopefully get your slider up and running on your very own website. I'm going to try to be as detailed as possible and easy to follow as there are a lot of steps to this process, that if missed, will leave your sliders functionality broken but that anger problem you have otherwise had under control. I'm looking at you Bruce Banner!</p>
<br>
<div id="imageWrapper">
  <img src="https://s13.postimg.io/olwajuck7/slider_1.jpg">
  <img src="https://s13.postimg.io/ytetw8ys7/slider_two.jpg">
  <img src="https://s13.postimg.io/651vt0wlz/slider_2.jpg">
</div>
<br>
<h3 class="orsteps">Step One:<span class="title-instruction">Add bootstrap.css & bootstrap.js</span></h3>
<p>Often times when pulling some snippet of code offline to impliment into your own website can be quiet frustrating as many of these folks leave off the fact you need to add libraries for the snippet to actually function correctly. So your first step will be to add these libraries straight away so we don't run into this, all too common, issue.</p>
<br>
<p>Since the order of these matter a great deal and going along with our all over theme, are one of the many little things that can make your code not perform the way you intended or worse; not work at all.</p>
<br>
<p>So what I have recently started doing with all my websites is copy and paste a template of all the libraries I use, in the order they need to be, from there I delete the ones that I never intend on using within the site. The reason I don't just leave them there is some libraries can increase the loading time of your webpage, and in today's climate of web development the user may be viewing your website on a data restricted tablet or smartphone and you want the user experience to be your number one priority, removing the unused libraries will speed up your load times as well as make the end user a whole lot happier you didn't eat up their data for a technology that wasn't even used.</p>
<br>
<p>Now that that little rant is out of the way, here is my header and script tags</p>
<br>
<p style = "font-weight: bold;">First the head tags:</p>
<div class="code-surround">
  <xmp style = "font-size: 11px;">
    <head>
      <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
      <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.8.9/jquery-ui.min.js" type="text/javascript"></script>
      <script src="/bootstrap/js/bootstrap.min.js"></script>
      <script src="/js/slider_input.js"></script>

      <link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.9/themes/base/jquery-ui.css" type="text/css" media="all" />
      <link href="/bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen">
    </head>
  </xmp>
</div>
<p style = "font-weight: bold;">Then the script tags below the last line within your body:</p>
<div class="code-surround">
  <xmp style = "font-size: 11px;">
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
    <script src="/bootstrap/js/bootstrap.min.js"></script>
  </xmp>
</div>
<p style = "font-size: 12px; color: lightgrey;">keep in mind that at the time of writing this tutorial, all libraries are the latest versions, if you are coming to this post some time in the future when a library has since been updated you may need to link to the newer version of said library. Im not gonna link here as the same issue would arise but googling "latest version of [insert library name] cdn".</p>
<br>
<br>
<h3 class="orsteps">Step Two:<span class="title-instruction">Add required HTML to your...uhh HTML doc</span></h3>
<br>
<p>Now I want to preface this step with the fact that I have created my own slider but used the bones of the bootstrap version if you will. I mention this because if you would like my version copy and past my code, otherwise just use the bootstrap version which I have also detailed below. If you would like to see my version in action click<a href="http://codepen.io/greatmaddyave/full/QEXOmO/"> here</a></p>
<br>
<p style = "font-weight: bold;">My custom version HTML:</p>


<div class="code-surround container" style = "overflow: hidden">
  <xmp style = "font-size: 13px; max-width: 200px;" id = "wordwrapWITHOUTWidth">
    <article>
        <div class="row">
            <div class="col-md-12">
                <div class="whatModal" id="modal-1">
                    <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="false">
                      <ol class="ballDiv col-md-12" style="display: inline-block;">
                          <div class="nav-ball active" data-target="#myCarousel" data-slide-to="0" id="ball1"></div>
                          <div class="nav-ball" id="ball2" data-target="#myCarousel" data-slide-to="1"></div>
                          <div class="nav-ball" id="ball3" data-target="#myCarousel" data-slide-to="2"></div>
                      </ol>
                      <h1 id="lets-talk"> Let's Talk!</h1>
                      <hr>
                      <div class="carousel-inner" role="listbox">
                          <div class="item active">
                              <div class="inner-content">
                                  <div id="content1">
                                      <div class="button-wrapper">
                                          <h6>Need a...</h6>
                                          <button id="btn1" data-target="#myCarousel" data-slide-to="1">
                                            Website
                                          </button><br>
                                      </div>
                                      <div class="button-wrapper">
                                          <h6>Have a...</h6>
                                          <button id="btn2" class="label success new-label" data-target="#myCarousel" data-slide-to="1">
                                            Job Opportunity
                                          </button>
                                          <br>
                                      </div>
                                      <div class="button-wrapper">
                                          <h6>Or a...</h6>
                                          <button id="btn3" class="label success new-label" data-target="#myCarousel" data-slide-to="1">
                                            General Question
                                          </button>
                                          <br>
                                      </div>
                                </div>
                              </div>
                          </div>
                      </div>
                      <div class="item" id="data-slide-one">
                          <h1 class="form-header">CONTACT FORM</h1>
                          <form>
                              <input id="name" type="text" placeholder="NAME">
                              <input id="email" type="text" placeholder="E-MAIL">
                              <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
                              <input id="submit" type="submit" value="GO!" data-target="#myCarousel" data-slide-to="2">
                          </form>
                      </div>
                      <div class="item" id="data-slide-three">
                          <h1 style="margin-top: 100px;" class="form-header">THANK YOU!
                          <br>WE WILL BE IN CONTACT SOON.</h1>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
  </xmp>
</div>
<div>

<br />
<a href="http://www.filedropper.com/slider"><button class="downloadButton">Download HTML</button></a>

<p style = "font-size: 12px; color: grey;">One important note here is that on the div "myCarousel" I included a data value that reads (data-interval="false"). This is to stop the carousel from automatically switching to the next slide at a given interval. Since I am using this as a contact sheet the slide doesn't really make sense in my case, however you are more than welcome to remove it without any ill effects</p>
<br>

<p style = "font-weight: bold;">My Custom version CSS:</p>
<div class="code-surround">
  <xmp style = "font-size: 13px;">
        body {
            font-family: "Open Sans", sans-serif;
            background: rgba(191, 185, 61, 1);
            background: -moz-linear-gradient(45deg,
              rgba(191, 185, 61, 1) 0%,
              rgba(203, 138, 48, 1) 39%,
              rgba(217, 80, 31, 0.86) 87%,
              rgba(217, 80, 31, 0.85) 91%);
            background: -webkit-gradient(left bottom,
              right top,
              color-stop(0%,  rgba(191, 185, 61, 1)),
              color-stop(39%, rgba(203, 138, 48, 1)),
              color-stop(87%, rgba(217, 80, 31, 0.86)),
              color-stop(91%, rgba(217, 80, 31, 0.85)));
            background: -webkit-linear-gradient(45deg,
              rgba(191, 185, 61, 1) 0%,
              rgba(203, 138, 48, 1) 39%,
              rgba(217, 80, 31, 0.86) 87%,
              rgba(217, 80, 31, 0.85) 91%);
            background: -o-linear-gradient(45deg,
              rgba(191, 185, 61, 1) 0%,
              rgba(203, 138, 48, 1) 39%,
              rgba(217, 80, 31, 0.86) 87%,
              rgba(217, 80, 31, 0.85) 91%);
            background: -ms-linear-gradient(45deg,
              rgba(191, 185, 61, 1) 0%,
              rgba(203, 138, 48, 1) 39%,
              rgba(217, 80, 31, 0.86) 87%,
              rgba(217, 80, 31, 0.85) 91%);
            background: linear-gradient
            (45deg,
              rgba(191, 185, 61, 1) 0%,
              rgba(203, 138, 48, 1) 39%,
              rgba(217, 80, 31, 0.86) 87%,
              rgba(217, 80, 31, 0.85) 91%);
            filter: progid: DXImageTransform.Microsoft.gradient
            ( startColorstr='#bfb93d',
            endColorstr='#d9501f',
            GradientType=1);
        }

        article {
            padding: 100px 0;
            max-width: 640px;
            margin: 0 auto;
            text-align: center;
        }

        h1 {
            weight: 300;
        }

        #lets-talk {
            color: lightgrey;
            padding-top: 55px;
        }

        .whatModal {
            background-color: #F9F9F9;
            height: 700px;
            width: 100%;
            margin: 25px 0px;
            box-shadow: 5px 10px 100px -10px black;
        }

        .whatModal hr {
            color: darkgrey;
            margin: auto 20px;
            width: auto;
        }

        .whatModal h1 {
            padding-top: 35px;
        }

        .item {
            padding: 0px 35px;
        }

        .whatModal span {
            font-size: 2.5em;
            font-weight: 300;
            color: lightgrey;
            transition: all ease-in-out 200ms;
            text-shadow: 2px 1px 3px darkgrey;
        }

        .whatModal span:hover {
            color: darkgrey;
            cursor: pointer;
            text-shadow: inset 2px 1px 3px white;
        }

        .form-header {
            position: relative;
            font-size: 2.3em;
            text-align: center;
            letter-spacing: 7px;
            color: #b3aca7;
            width: 100%;
        }

        #form {
            width: 500px;
            margin: 0px;
            padding: 0px;
        }

        #email,
        #name {
            font-family: 'Lato', sans-serif;
            font-size: 0.875em;
            width: 400px;
            height: 50px;
            background: transparent;
            outline: none;
            color: #726659;
            border: solid 1px #b3aca7;
            border-bottom: none;
            transition: all 0.3s ease-in-out;
            -webkit-transition: all 0.3s ease-in-out;
            -moz-transition: all 0.3s ease-in-out;
            -ms-transition: all 0.3s ease-in-out;
            border-radius: 0px;
            margin-bottom: -1px;
        }

        #email:hover,
        #name:hover {
            background: #b3aca7;
            color: #e2dedb;
        }

        #message {
            width: 400px;
            max-width: 400px;
            height: 110px;
            max-height: 110px;
            background-color: transparent;
            outline: none;
            color: #726659;
            font-family: 'Lato', sans-serif;
            font-size: 0.875em;
            border: solid 1px #b3aca7;
            border-radius: 0px;
            transition: all 0.3s ease-in-out;
            -webkit-transition: all 0.3s ease-in-out;
            -moz-transition: all 0.3s ease-in-out;
            -ms-transition: all 0.3s ease-in-out;
            margin-bottom: -1px;
        }

        #message:hover {
            background: #b3aca7;
            color: #e2dedb;
        }

        #submit {
            width: 400px;
            height: 40px;
            padding: 0;
            font-family: 'Lato', sans-serif;
            font-size: 0.875em;
            color: #b3aca7;
            outline: none;
            cursor: pointer;
            border: solid 1px #b3aca7;
            border-top: none;
            background-color: transparent;
            font-size: 20px;
            border-radius: 0px;
            margin-top: -56px;
        }

        #submit:hover {
            background: #b3aca7;
            color: #e2dedb;
        }

        .nav-ball {
            width: 15px;
            height: 15px;
            background-color: grey;
            border-radius: 50%;
            box-shadow: 0px 1px 1px 1px darkgrey;
            margin: 18px 8px;
            display: inline-block;
            transition: all ease-in-out 200ms;
        }

        .glyphicon:hover {
            color: darkgrey;
            cursor: pointer;
        }

        .carousel-inner {
            margin-top: 50px;
        }

        .ballDiv {
            display: inline-flex;
            height: 15px;
        }

        a:first-child {
            margin-right: 85%;
            display: inline;
        }

        .nav-ball:hover {
            cursor: pointer;
        }

        .nav-ball.active {
            width: 15px;
            height: 15px;
            background-color: orangered;
            border-radius: 50%;
            box-shadow: 0px 1px 1px 1px darkgrey;
            margin: 18px 8px;
            display: inline-block;
            transition: all ease-in-out 200ms;
        }

        .nav-ball-active:hover {
            width: 16px;
            height: 17px;
            margin: 16px 6px;
            background-color: red;
        }

        .nav-ball:hover {
            width: 16px;
            height: 16px;
            margin: 16px 6px;
            background-color: darkgrey;
        }

        .inner-content {
            margin: 0px 0px;
        }

        .inner-content button {
            margin-bottom: 70px;
            width: 200px;
            height: 70px;
            border: 1px solid transparent;
            font-size: 16px;
            text-align: center;
            padding: 0px;
            font-weight: 200;
            color: #00BAFF;
            border-radius: 0;
            transition: all ease-in-out 500ms;
            background-color: white;
            box-shadow: 2px 2px 5px 1px lightgrey;
            position: relative;
            right: 0px;
        }

        .button-wrapper {
            width: 200px;
            margin-left: 50%;
            left: -100px;
            position: relative;
        }

        .button-wrapper:hover button {
            background-color: white;
            box-shadow: 2px 42px 70px -30px black;
            transform: translate(0px, -5px);
            font-weight: 300;
            background-color: #00BAFF;
            color: white;
            border: none;
            width: 205px;
            height: 75px;
            position: relative;
            right: 3px;
        }

        .inner-content h6 {
            margin-bottom: 5px;
            color: lightgrey;
            text-transform: uppercase;
        }

        #data-slide-one {
            padding: 0px 10%;
            text-align: center;
        }
  </xmp>
</div>
<a href="http://www.filedropper.com/slider_1"><button class="downloadButton">Download CSS</button></a>
<p style = "font-weight: bold;">Custom jQuery:</p>
<div class="code-surround">
  <xmp style = "font-size: 11px;">
        //slider class toggle
      $('.nav-ball').on('click', function() {
          $('.nav-ball').removeClass('active');
          $(this).addClass('active');
      });

      $('#content1 button').on('click', function() {
          $('#ball1').removeClass('active');
          $('#ball2').addClass('active');
      });

      $('#submit').on('click', function() {
          $('#ball2').removeClass('active');
          $('#ball3').addClass('active');
      });
  </xmp>
</div>
<a href="http://www.filedropper.com/slider_2"><button class="downloadButton">Download jQuery</button></a>

<br>
<p>Well that's it for my version. Make sure that you change the "body" tag in the CSS to match your particular scenario as this will change the background of all of your HTML page. Unless that is something you want. Then go ahead and leave it in, it's up to you.</p>
<br>
<p style = "font-weight: bold;">Bootstrap Carousel HTML:</p>
<div class="code-surround">
  <xmp style = "font-size: 11px;">
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
<!-- Indicators -->
<ol class="carousel-indicators">
  <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
  <li data-target="#myCarousel" data-slide-to="1"></li>
  <li data-target="#myCarousel" data-slide-to="2"></li>
  <li data-target="#myCarousel" data-slide-to="3"></li>
</ol>

<!-- Wrapper for slides -->
<div class="carousel-inner" role="listbox">
  <div class="item active">
    <img src="img_chania.jpg" alt="Chania">
  </div>

  <div class="item">
    <img src="img_chania2.jpg" alt="Chania">
  </div>

  <div class="item">
    <img src="img_flower.jpg" alt="Flower">
  </div>

  <div class="item">
    <img src="img_flower2.jpg" alt="Flower">
  </div>
</div>

<!-- Left and right controls -->
<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
  <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
</a>
<a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
  <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
</a>
</div>
  </xmp>
</div>
<br>
<p>Since bootstrap handles all the css and javascript for you this is really all that is to it. Just Replace the images and you should be good to go at this point if you've included the bootstrap links correctly in step 1.</p>

<br>
<h3 class="orsteps">Step Three:<span class="title-instruction">Test & Shim</span></h3>
<br>
<p>The final part in this tutorial is what I dub the "Test & Shim" phase</p>
<br>
<p>Test because you want to make sure all of the buttons work and act like they are supposed to. Do this even before you start customizing it by adding pictures or other content. The reason you want to hold off on the customization is you want to rule that out as a reason for the code not working the way you intended it to. After it's working you'll want to move on to the second part in this step. "Shim"</p>
<br>
<p>I borrow the word "Shim" from the construction industry. The reason being is that when building a house and installing something modular such as a window or door there is always some sort of shimming required to make it fit to your custom work. In this case the framing of the house is your html, the drywall and paint is your css, jQuery and JavaScript is your electrical and the door or window is this carousel. A margin may be off, the position of it may not be quiet centered, font sizes may be off the container. Point being you need to shim it to fit your custom build. Do this by adding ID's to your tags and customizing the css for that particular problem area. After everything is looking good then go in and customize it with content. If you do things in this order it will alleviate some of the stress that comes with coding. </p>

<style>
h1, h2,{
  text-align: center;
  padding: 10px;
}
.orsteps {
  color: orangered;
  font-weight: bold;
  text-transform: uppercase;
}
#imageWrapper {
  display: inline-block;
  margin: 15px;
  margin-left: 60px;
  margin-bottom: 60px;
}

#imageWrapper img {
  width: 30%;
}
@media screen and (max-width: 780px) {
    #imageWrapper img {
        width: 100%;
        padding-bottom: 15px;
    }
    #imageWrapper {
      margin: 0px;

    }
}

xmp {


}
.code-surround {
  background-color: black;
  border-radius: 10px;
  color: green;
  width: 100%;
  word-wrap: break-word;
}

.title-instruction {
  color: grey;
  font-size: 16px;
  padding-left: 15px;
}

.install {
  background-color: transparent;
  border: 2px solid orangered;
  color: orangered;
  padding: 15px 30px;
  font-size: 16px;
  border-radius: 5px;
  text-transform: uppercase;
  transition: all ease-in-out 200ms;
  margin: 10%;
  margin-left: 25%;
}

.install:hover {
  box-shadow: 0px 0px 0px .2px orangered, 0px 0px 10px 2px white inset;
  color: white;
  background: rgba(191, 185, 61, 1);
  background: -moz-linear-gradient(45deg,
    rgba(191, 185, 61, 1) 0%,
    rgba(203, 138, 48, 1) 39%,
    rgba(217, 80, 31, 0.86) 87%,
    rgba(217, 80, 31, 0.85) 91%);
  background: -webkit-gradient(left bottom,
    right top,
    color-stop(0%,  rgba(191, 185, 61, 1)),
    color-stop(39%, rgba(203, 138, 48, 1)),
    color-stop(87%, rgba(217, 80, 31, 0.86)),
    color-stop(91%, rgba(217, 80, 31, 0.85)));
  background: -webkit-linear-gradient(45deg,
    rgba(191, 185, 61, 1) 0%,
    rgba(203, 138, 48, 1) 39%,
    rgba(217, 80, 31, 0.86) 87%,
    rgba(217, 80, 31, 0.85) 91%);
  background: -o-linear-gradient(45deg,
    rgba(191, 185, 61, 1) 0%,
    rgba(203, 138, 48, 1) 39%,
    rgba(217, 80, 31, 0.86) 87%,
    rgba(217, 80, 31, 0.85) 91%);
  background: -ms-linear-gradient(45deg,
    rgba(191, 185, 61, 1) 0%,
    rgba(203, 138, 48, 1) 39%,
    rgba(217, 80, 31, 0.86) 87%,
    rgba(217, 80, 31, 0.85) 91%);
  background: linear-gradient
  (45deg,
    rgba(191, 185, 61, 1) 0%,
    rgba(203, 138, 48, 1) 39%,
    rgba(217, 80, 31, 0.86) 87%,
    rgba(217, 80, 31, 0.85) 91%);
  filter: progid: DXImageTransform.Microsoft.gradient
  ( startColorstr='#bfb93d',
  endColorstr='#d9501f',
  GradientType=1);

}

.downloadButton {
  background-color: transparent;
  border: 2px solid orangered;
  color: orangered;
  padding: 15px 30px;
  font-size: 16px;
  border-radius: 5px;
  text-transform: uppercase;
  transition: all ease-in-out 200ms;
  margin-bottom: 15px;
}

.downloadButton:hover {
  background-color: lightgrey;
  border: 2px solid lightgrey;
}

#wordwrapWITHOUTWidth
{   
    word-wrap: break-word;
}
</style>
