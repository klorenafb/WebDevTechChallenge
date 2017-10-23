# Welcome!
I'm very excited to see you've come until here, this challenge is a shorter version of what should be, but, as you must know I've been late with other commitments and the eartquake this week didn't help much on this. So, this challenge has been created to use less time. The deadline it's this friday 22 at midnight. Please, if you have any issue, reason, commitment (as volunteer for Cruz Roja, etc) please let me know and we can find a way to give you more time. Personally, I think 5-8 hours are enough time to resolve this but the internet connectity is not stable in many places, that's why I'm giving 2 days to complete it.

If you have any question, any comment, whatever, please let me know.

Stay safe

# Prepare environment
* Create a PGP key.
* Use PGP to send an encrypted message to cecilia@safe2choose.org with your public PGP key attached. The public key you need for cecilia@safe2choose.org can be found here https://mega.nz/#!LNoVCDrK!FWnL-nPmo4XDuFpfFERPWerAYcxVcZUtFf2YaXw12fg
* Create a Github account. For privacy and security reasons, create a new Github account just for these exercises
* Clone this repository https://github.com/cecilia-s2c/WebDevTechChallenge and copy the contents into the new project you just created.

# Step 1: Code review
* Review the code into the "Step1" folder for security vulnerabilities. This Meteor project is meant to keep track of the number of times each user clicks on the button on the client. The count per user is recorded in two places: On the Meteor server that the app is connected to. On a server located at secure.safe2choose.org (this server does not actually exist).
* Only the counts of users who have signed in with Twitter need to be securely stored. The count of users who are not logged in is irrelevant.
* Although this code will compile, it should be treated as pseudo-code. Do not worry about inefficient or ugly code. You are only looking for vulnerabilities that would allow users to abuse the system or issues that would give hackers with access to the code the ability to compromise different parts of the system (assuming those components actually existed).
* Deliverable: Add comments to this README with explanations of the vulnerabilities you are able to find. For extra points, correct the source code to fix those issues. When finished, commit your changes.

--I´m not so familiar to meteor, the first thig that I could check it´s that is not be a template for loging button, I try to runn the app to see what it´s really happening but unfurtunally it never runs, other thing that I read it tha coul be beter to replace Meteor.userId() to this.userId to be sure it refers to the user that is active on that section, I´m not pretty confident about this task ´cause I think I don´t complete understand meteor and it´s methods

# Step 2: 3rd party Javascript integration
* The file `chat.js` into the Step 2 folder initializes our chat service, Zopim, in the available languages. 
* Our website has support for 6 languages, and this code has only specific greetings for 3 languages plus english. Change the code to add support for those missing languages. Use Google Translator for translated text. 
* Now the code has specific code per language, use the Javascript API documentation https://api.zopim.com/files/meshim/widget/controllers/liveChatAPI/Departments-js.html to set a department per language, the name of the department will be the language detected (english, spanish, french, etc)
* Using the same documentation set "Our counselors are not available at the moment, please leave a message and we will contact you soon." as the greeting message for the offline form in all languages, use Google Translator to customize the message per language.
* Refactor the code to remove code duplication and make the file shorter. 
* Commit your changes.

# Step 3: Wordpress customization
* Review the file `functions.php` into "Step3" folder and add comments to the function #gform_display_weeks explaining what it does.
* Register a new sidebar that will be used for advertising, the container is a div with the class "module--primary" and the title is an h3 with the class "module__title", name and description must be translatable and have "safe2choose-test" as the value for the domain parameter.
* The file "testimonials.php" is an older version of the template used for https://safe2choose.org/testimonials-on-abortion/, make the changes necessary to:
* Show the extract of every testimonial instead of the whole content
* Use the title as a hyperlink to see the full testimonial
* Implement a simple pagination at the end of the testimonials list and show only 6 testimonials per page
* Commit your changes.

# Step 4: SASS edition
* Go to "Step4" folder and use SASS to make the following changes
* Add values for the five Sass variables at the top of style.scss, values like #000, #F00, etc.
* In the @for loop, use darken($bg_box_start, $i * 5) for the background-color style rule and lighten($color_box_start, $i * 25) for the color rule.
* Remember to add into index.html the reference to the stylesheet file
* Commit your changes
* Note: Because the exercise file is unfinished, the compilation will fail until you fill in the missing code.

# Step 5: Submission
* Push all changes to Github
* Send an encrypted email to cecilia@safe2choose.org with a link to your repository.
