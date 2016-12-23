
1
	Update code on Navbar.jsx where clicking on a link for instance 'Application' routes to (pretty much i.e. localhost/application rather than what I'm about to type: ->) localhost:3000/application so the express app server side routing would take over

2
	Update code in all of the pages to not let the height of the page get smaller than the margin-top shift that is on all of the main content elements for the pages because when it does the blue background is revealed because the image shows it. This appeared after converting the image sizing from using translate: scale(...) to background-sizing: cover
