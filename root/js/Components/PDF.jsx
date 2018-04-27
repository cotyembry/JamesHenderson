import React from 'react';

import $ from 'jquery';

import ReactPDF from 'react-pdf';

export default class PDF extends React.Component {
  constructor(props) {
    super(props);

    this.pdfUrl = 'https://rawgit.com/cotyembry/JamesHenderson/master/root/assets/application_final.pdf';
    this.sharableLink = 'https://drive.google.com/open?id=0Bz7-z5py5YVUa1hmRGNvVlpkNmM';

    this.state = {
      base64String: '',
      pageNumber: 1,
      total: ''
    }
  }
  componentDidMount() {
    document.getElementById('emblem').style.display = 'none';
    location = this.sharableLink;


    // var self = this;
    // fetch(self.pdfUrl).then(response => {
    //   return response.blob();
    // }).then(myBlob => {
    // 	// FileReader function for read the file.
    // 	let fileReader = new FileReader();
    // 	// Onload of file read the file content
    // 	fileReader.onload = this.receivedBase64Src.bind(this);
    // 	// Convert data to base64
    // 	fileReader.readAsDataURL(myBlob);
    // });



  }
  componentWillUnmount() {
    document.getElementById('emblem').style.display = '';
  }
  onDocumentLoad({ total }) {
    this.setState({ total })
  }
  onPageLoad({ pageIndex, pageNumber }) {
    this.setState({ pageIndex, pageNumber });
  }
  receivedBase64Src(fileLoadedEvent) {
    let base64 = fileLoadedEvent.target.result;
    // Print data in console
    this.setState({
      base64String: base64
    })
  }
  render() {
    //https://rawgit.com/cotyembry/DjangoWebserver/master/simpleWebsite/App1/js/dist/bundle.js
    // <iframe style={styles.iframe} src='https://rawgit.com/cotyembry/JamesHenderson/master/root/assets/application_final.pdf'>
    return (
      <div></div>
    )

  }

}

const styles = {
  iframe: {
    width: '100%',
    height: '100%',
    margin: '0px',
    padding: '0px',
    border: '0px'
  }
}
// 			Install by executing npm install --save react-pdf.
// Import by addding import ReactPDF from 'react-pdf'.
// Use by adding <ReactPDF file="..." />. file can be an URL, base64 content, Uint8Array, and more.
		// return (
  //           <div>
  //               <ReactPDF
  //                   file={this.state.base64String}
  //                   onDocumentLoad={this.onDocumentLoad}
  //               />
  //               <p>Page {this.state.pageNumber} of {this.state.total}</p>
  //           </div>			
		// )