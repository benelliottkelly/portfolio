# Portfolio Site ReadMe
## Description
This project is intended as a portfolio site to give people an idea of who I am and what I am about. The site is a static website, meaning there is no backend, as it is relatively small and will give all visitors the exact same experience.
 
## Deployment link
https://www.benelliottkelly.co.uk/ 

## Getting Started/Code Installation
HTML, CSS and JavaScript for this project can be found here: 
https://github.com/benelliottkelly/portfolio 

## Technologies Used
### Front end:
HTML, CSS, JavaScript, SASS and React.

### Development tools:
GitHub, AWS and GoDaddy

## Planning
I wanted to build a single page site as I hadn’t done that before so it would be a new experience for me. It also seemed fitting for a site which didn’t need a huge amount of information in it to be within one page, meaning the user can quickly scroll between sections that they want to see, rather than clicking through to a new page.

With this in mind I drew up a rough wireframe using Excalidraw detailing the sections that I wanted: 
- A landing page
- An about me
- A project page
- A contact page

![Wireframe of the site](https://github.com/benelliottkelly/portfolio/assets/143013767/a5155f5f-115a-40d4-8593-66967cb024a9)

## Build/Code Process
I set up the project using the Vite build tool and then created a component for each section of the site. I then added each of these components to the app.jsx and wrapped them in a ‘react-scroll’ Element tag. This allowed me to use ‘react-scroll’ Link to scroll the viewport to the relevant section when the link was clicked.

![Screenshot showing the code used to scroll to specific sections of the page](https://github.com/benelliottkelly/portfolio/assets/143013767/82545732-2cc9-438a-b058-4c64f0ff905b)

With the nav in place I put together an about me section. Something I really wanted for this was a link to the spotify playlist that I listen to while I code, which handily spotify already has a function set up making it as simple as copying and pasting an iframe into your code. Unfortunately though it isn’t 100% reliable and occasionally displays an error message rather than the spotify player, but this seems to be a problem on Spotifies end. I also had to convert some of the syntax so that it could be read by React rather than regular JavaScript.

![Screenshot showing the code used to add a spotify player into the website](https://github.com/benelliottkelly/portfolio/assets/143013767/b7066af3-c75e-4df1-93ca-32606f1e933f)

After filling out the rest of the about me section basics I added the projects that I have already completed. To make this easily reusable in the future when I’ve completed more projects, I did this by making a project Class, which I then create a ‘new Project’ for each project using the Class and then pushing that to an array which is then mapped through and added to the site.

![Screenshot showing the code used to amake a project class](https://github.com/benelliottkelly/portfolio/assets/143013767/bf0dd163-107b-4293-b788-28da25ff7072)

![Screenshot showing the code mapping through the projects](https://github.com/benelliottkelly/portfolio/assets/143013767/acbd23d2-5e61-4f8c-933d-2d16b4accf7d)

Next I turned my attention to the home/landing page, I wanted this to be fairly simple with just my name and a little bit about me. I was inspired by both Ryan Mulligan’s [Tiger Uppercut](https://codepen.io/hexagoncircle/pen/bQLRXK) codepen and Carlos Córdova’s [Text Animation - N° 1](https://codepen.io/carloscdev/pen/mdBLmwP) codepen. I combined both of these ideas and using the css ‘background-clip’ put an image of my favourite animal (the osprey) as the fill for the text and then put some little headlines that describe me underneath that.

![Gif showing the landing page](https://github.com/benelliottkelly/portfolio/assets/143013767/d4d24efe-4d4b-46b7-8a97-49039089e181)

I created some animations which I wanted to trigger as the viewer scrolled down to that section of the page (so that they don’t happen off screen). For this I used ‘useInView’ from react-intersection-observer. I gave each relevant section a reference which would trigger the useInView and therefore a useEffect which would then set state of a useState hook, which would in turn add an animate class to the specified element and thus triggering the animation. By using the useEffect to set a state for each element, it meant that the animation would only occur once, instead of every time you scrolled over it, which could get annoying.

![Screenshot showing the code to add animation classes to elemenets when they were in view](https://github.com/benelliottkelly/portfolio/assets/143013767/eb698955-c2cf-4748-b983-8c535d1d4ae6)

![Gif showing the animations triggering as they appear within the screen](https://github.com/benelliottkelly/portfolio/assets/143013767/e6f23ba8-6b3b-4060-9696-e2fa3cdba93d)

When researching animations I found that too many animations can have adverse effects such as motion sickness on users and so for any pages such as the about me which had a lot of animation in it I added a screen query for the reduced motion preference, so that no animations would occur.

![Screenshot showing the code for when the user has reduced-motion selected in their browsers](https://github.com/benelliottkelly/portfolio/assets/143013767/720094cf-1aea-4773-b8b6-62234bfda78c)

With the about me’s styling finished, I added styling for the projects page, the about me and the footer, keeping a similar theme with each and making sure to include the media query to turn off animations if required.

I then added a favicon and made sure that my styling was dynamic across multiple device sizes and lastly added the alt text for all of my pictures so that my site maintained accessibility.

## Challenges
The biggest challenge for me was implementing the animations triggering when the user scrolled down to them. I tried a couple of different techniques before I landed on the react-intersection-observer, but it was a really useful exercise in understanding the viewport and how to interact with it.

## Wins
The biggest wins for me were discovering the accessibility issue with using lots of animations as I had never thought about that before, but it is an important concept to think about when it comes to users’ experience.
I also thoroughly enjoyed making the animations and I definitely improved my skills with CSS.

## Key Learnings/Takeaways
Learning about react-scroll and react-intersection-observer were huge takeaways for me as they provide me with a new tool that can be implemented in so many different applications.

## Bugs
One bug that I have is that the individual projects' animations occur every time the user scrolls across it. I think this is probably due to them being dynamically rendered via react but it is such a minor thing that I haven’t looked into it further yet.


## Future Improvements
One future improvement would be to add a backend into this site and have a function so that I can add projects directly through the site rather than going into the code to add it. I might implement this when I have more projects to add.
