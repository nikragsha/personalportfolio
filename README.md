
# Personal Portfolio

Personal Portfolio is a website that provides templates for personal portfolio websites. There are twenty different background colors to choose from. Customizing a portfolio website requires you to only have a basic understanding of HTML and CSS. Once you download a template from the website, customize it to your preferences. Feel free to customize and edit the site as you wish! Follow the instructions below for a step-by-step guide on how to customize each section.
## Customization

Click [here](https://www.youtube.com/watch?v=b5GBMJfAhHg) for a video demonstrating customization. Each section of the portfolio is listed below along with instructions on how to customize it. Again, feel free to customize and edit the site as you wish to fit your needs. To change the colors, refer to the section at the end titled "Colors". To change the text sizes or fonts, refer to the section at the end titled "Text Sizes and Fonts".

The website uses internal CSS, so only one HTML file needs to be downloaded, if you prefer you can modify the site to use external CSS.

### Image

Replace "image.png" with the link/file path to the image you want to feature on the website and replace "User's image" with the alt text for the image (text displayed if the image does not load).
```
<img src="image.png" alt="User's image">
```

### Name

Replace "Your name" with your name.
```
<div class="name">
  Your name
</div>
```

### About Me

Write a description for the website.
```
<div class="aboutme">
  <h1>About me</h1>
  Description
</div>
```

### Links

Replace the "#" with the link to the site that you want to link to and replace "Lorem ipsum" with the title of the link. Add or remove links as needed. 

Note: The div that contains links is inside another div named "links-contact".
```
 <div class="links">
   <h1>Links</h1>
   <a href="#">Link Name</a>
   <br>
   <a href="#">Link Name</a>
   <br>
   <a href="#">Link Name</a>
   <br>
   <a href="#">Link Name</a>
</div>
```

### Contact

Replace "Your email" with your email and "Your phone number" with your phone number (feel free to add or remove methods of contact).

Note: The div that contains contact is inside another div named "links-contact".
```
<div class="contact">
   <h1>Contact</h1>
   Email: Your Email
   <br>
   Phone: Your phone number
</div>
```

### Resume

Replace "#" with a link to your resume.

```
<div class="resume">
  <a href="#">View my resume/CV</a>
</div>
```

### Euducation

Replace "Lorem ipsum" with each point of education. Add or remove points as needed. 

```
<div class="euducation">
  <h1>Euducation</h1>
  Add text here
  <br>
  Add text here
  <br>
  Add text here
  <br>
  Add text here
</div>
```

### Experience

Replace "Lorem ipsum" with each point of experience. Add or remove points as needed.

```
<div class="experience">
  <h1>Experience</h1>
  Add text here
  <br>
  Add text here
  <br>
  Add text here
  <br>
  Add text here
</div>
```

### Skills

Replace "Lorem ipsum" with each skill that you want to display. Add or remove skills as needed.

```
<div class="skills">
  <h1>Skills</h1>
  Add text here
  <br>
  Add text here
  <br>
  Add text here
  <br>
  Add text here
</div>
```

### Awards and Recognition

Replace "Lorem ipsum" with each award or recognition that you have received. Add or remove awards or recognitions as needed. 

```
<div class="awards-recognition">
  <h1>Awards and Recognition</h1>
  Add text here
  <br>
  Add text here=
  <br>
  Add text here
  <br>
  Add text here
</div>
```

### Portfolio

Replace "#" with a link to each work that you want to showcase and replace "Lorem ipsum" with the name of the work. Add or remove pieces of work as needed.

```
<div class="portfolio">
  <h1>Portfolio</h1>
  <a href="#">Work Name</a>
  <br>
  <a href="#">Work Name</a>
  <br>
  <a href="#">Work Name</a>
  <br>
  <a href="#">Work Name</a>
</div>
```

### Credits

Add any credits here. While I do not require attribution to me on the website I would greatly appreciate if one is added.
```
<div class="credits">
  Any credits go here.
</div>
```

To give me credit, simply add the following within the div:
```
Created by Nik S.
```

### Legal

Add any legal notices here. If none are required, simply delete the div.
```
<div class="legal">
  Any legal information such as privacy policies go here.
</div>
```

### Colors

To change the background color of the page to a color not provided in the website, simply enter the color name or code into the CSS. 

The example shown is from the aquamarine portfolio.
```
body {
    background-color: aquamarine;
}
```

To change the color (or other property) of a div (box containing the information), simply edit (or add/remove) that property in the CSS.

The example shown is from the "name" section of the aquamarine portfolio (some sections may have additional CSS properties for text or links).

```
display: inline-block;
background-color: gray;
padding: 10px;
color: white;
font-weight: bold;
border-radius: 10px;
font-size: 40px;
font-family: Arial, sans-serif;
margin-bottom: 20px;
```

Similarly, to change the color of the text within the div (box containing the information), simply edit (or add/remove) that property in the CSS.

The CSS for the color of certain links might be in a separate CSS selector from the rest of the div, in this case, the correct selector for the text or link will be directly below the selector for the rest of the div (second example shown). 

Normal example (from the "name" section of the aquamarine portfolio):
```
display: inline-block;
background-color: gray;
padding: 10px;
color: white;
font-weight: bold;
border-radius: 10px;
font-size: 40px;
font-family: Arial, sans-serif;
margin-bottom: 20px;
```

Example where the text color property is in a separate selector (from the "about me" section of the aquamarine portfolio):
```
  .links {
  display: inline-block;
  background-color: gray;
  padding: 10px;
  color: white;
  border-radius: 10px;
  font-size: 25px;
  font-family: Arial, sans-serif;
  margin-right: 10px;
}

.links h1 {
  font-size: 30px;
}

.links a {
  color: white;
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;
}
```

### Text Sizes and Fonts

To change the text size or font, simply edit the CSS property to your preferences.

The CSS for the size of certain text or links might be in a separate CSS selector from the rest of the div, in this case, the correct selector for the text or link will be directly below the selector for the rest of the div (second example shown).

Normal example (from the "name" section of the aquamarine portfolio):
```
.name {
  display: inline-block;
  background-color: gray;
  padding: 10px;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  font-size: 40px;
  font-family: Arial, sans-serif;
  margin-bottom: 20px;
}
```

Example where the font size property is in a seperate selector (from the "about me" section of the aquamarine portfolio)
```
.aboutme {
  display: inline-block;
  background-color: gray;
  padding: 10px;
  color: white;
  border-radius: 10px;
  font-size: 25px;
  font-family: Arial, sans-serif;
  margin-bottom: 20px;
}

.aboutme h1 {
  font-size: 30px;
}
```

## License
This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) license.


## Thank you!

If you found this project useful please give it a :star: and follow me on GitHub!
