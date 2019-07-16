---
path: "/blog/new-year-new-me"
date: "2016-01-29"
title: "New Year, New Me"
---
Three years since building the original joshuamclucas.com, it's exciting to now be at the point where a portfolio redesign feels necessary. The site first went live in June 2013. In building it, I resolved to follow best practices to a T, ensuring that every line of HTML, CSS, and JavaScript was standards-compliant. It was responsive and featured a blog powered by PHP with a custom CMS. I had never taken a class in development or computer science prior to its build, and I was damn proud of the result. 

But as a design, it stunk. 
//JTM MDX for this - write a component!
<div class="post-image">
	<img src="{{ "/images/oldPortfolio.png"| prepend: site.url }}" alt="Pre-Redesign Site" />
	<p>Not winning any Webby's...</p>
</div>

## Growing Older

Without a degree, without any job experience, my portfolio site was the sole piece of evidence that I knew my stuff. In building it I taught myself how to make websites - design took a backseat to education. The site was enough to get my first gig, and from that point on I called myself a web developer.

Fast forward three years and another handful of websites built, and we arrive at Portfolio 2.0. My growing embarrassment of v1.0 was the signal that it was time for a change. The link was everywhere - my email signatures, my resume, every job application was plastered with the words "Additional Samples available at www.joshuamclucas.com". I found myself hoping that link would be the last site potential employers clicked on, that they would see my stronger work first. When you cease to want your portfolio site to be seen, it's time for a redesign. 

Of course, this site isn't winning any Webby's either.

## Philosophy of v2.0

I actually began a redesign twice in the past year. Both failed because I got bored or sidetracked with paying gigs. The code I wrote was not well-documented (taking it at a lesson, of course) so it was quite hard to figure out what state I left it in - what bug I were in the middle of fixing, which naming conventions I were using, etc. It's worse when you have multiple simultaneous projects, each with their own requirements in unique places in their lifecycle. Too much going on.

This time around, I just wanted to get it done. I'd use a simple design that I can feel good about while prioritizing development speed. 

The two failed redesign attempts used a lot of animation and full-page photos, inspired by the latest design trends. What I had in mind was quite sexy - taking [this](http://www.carelpiethein.com/en/) as its main inspiration. In the end the complexity meant I couldn't just finish them in my free time over a weekend. Additionally, since the only high-res photos I had were theater photos, the site's intended balance of equal parts theater and web would be tipped. 

That being said, I knew I didn't want to go the easy route and use Squarespace, the most elite WYSIWYG out there. The site would look more modern, sure, but I am too proud to use third-party development for my website. Yes, Jekyll powers this site, and I did not write Jekyll, but it strikes me as significantly different from being able to press the Esc key or type /wp-login/ and reveal third-party magic at work.

Jekyll is really the core of this redesign. I first became exposed to it when building [Chopin Without Piano](http://www.chopinwithoutpiano.com). On that site I used it mostly for its Liquid Templating since we were going to re-use a lot of components throughout the site. Here, I'm combining that with Jekyll's main attraction: blog-aware sites. Essentially this means instead of using a massive CMS like WordPresss or a janky, featureless self-creation, I can have a blog with just some Markdown and a few Liquid declarations. Simplicity plus speed. 

In general, a website shouldn't split its focus as much as this does. However, I'm using simplicity to solve this conumdrum too. I eliminated photo galleries to balance the amount of media in each career division. Now I simply have to pick one awesome photo for each show and take a screenshot of each website I design. Additionally, I no longer have to deal with the cases when 4 out of 5 show photos are vertical and a horizontal aspect ratio would serve me better. 

Maybe some day I'll make something exceedingly fancy. Until then, it's nice to feel happy to send this site around.

## Takeaways

* Developers don't need to be flashy. Designers do. 
* If blogging is your priority, make it as easy as posssible for yourself. WordPress is great for this.
* I am never impressed when developers use WYSIWYG platforms for their portfolios, but they are often great solutions for clients.
