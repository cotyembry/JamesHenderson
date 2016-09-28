import React from 'react';

import $ from 'jquery';

// import Emblem from './Emblem.jsx';
import Header from './Header.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

// ReactDOM.render(<Header />, document.getElementById('header'));
// ReactDOM.render(<Navbar />, document.getElementById('navbar'));
// ReactDOM.render(<Footer />, document.getElementById('footer'));


// const dropdownItems = [
//     {href: '#', name: 'Overview'},
//     {href: '#', name: 'Setup'},
//     {href: '#', name: 'Usage'},
// ];
 
// const navbar = (
//     <Navbar>
//         <NavbarHeader href="homepage.html" name="Website Name"/>
//         <NavbarItems>
//             <Item link="about.html" title="About" />
//             <Item link="contact.html" title="Contact" />
//             <Item link="services.html" title="Services" />
//             <NavbarDropdown name="Features">
//                   <DropdownMenu menuItems={dropdownItems}/>
//             </NavbarDropdown>
//         </NavbarItems>
//     </Navbar>
// );
 
//React.render(navbar, document.getElementById('navbar'));


var Root = React.createClass({
	elements: [],
	componentDidMount: function() {
			
	},
	render: function() {
			return (
				<div>
					{/*<Emblem />*/}
					<div id="backgroundDiv"></div>
					<div id="page">
						{/*<div id="gradientHelper"></div>*/}
						<div id="paddingHelper">
							<Header />
							<Navbar ref={(elem) => this.elements['Navbar'] = elem } />
							{/*<Navbar menuItems, messages/>*/}
							{/*React.createElement(Navbar, {
						        menuItems//,
						        //secondaryMenuItems,
						        //messages: localeSpecificIcuMessagesForTheWholeAppCompiledOnTheServer
						    })*/}
							<div id="all-content">
								<div id="section-1" className="section">
									
								</div>
								<div id="section-2" className="section">
									<h3>Introduction Information one</h3>
									<h4>Introduction Information two</h4>

									<div id="all-content-picture"><h3>TODO: insert picture here</h3></div>
									
								</div>
								<div id="section-3" className="section"></div>
								<div id="section-4" className="section"></div>
								<div id="section-5" className="section"></div>
								<div id="section-6" className="section"></div>
								<div id="section-7" className="section"></div>
							</div>
						</div>
						<Footer />
						<div id="end"></div>
					</div>
				</div>
			)
	}
})

module.exports = Root;
