import React from 'react';

import $ from 'jquery';

import GetSheetDone from 'get-sheet-done';


export default class Admin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            EditTribalAdminOverlay: ''
        }
    }
    editTribalAdmin(e) {
        let EditTribalAdminOverlay = '';
        this.setState({
            EditTribalAdminOverlay: EditTribalAdminOverlay
        })
    }
  render() {
    let EditTribalAdminOverlay = this.state.EditTribalAdminOverlay,    //just so it doesnt look weird during the return in render
        navButtonDisplay = this.state.EditTribalAdminOverlay === '' ? '' : 'none';
    return (
        <div id="Admin" style={styles.root}>
            <div style={{display: navButtonDisplay}}>Edit Tribal Administration:&nbls;&nbls;<span onClick={this.editTribalAdmin.bind(this)}>go</span></div>
            {/* <div></div> */}
            
            
            {EditTribalAdminOverlay !== '' &&
                <EditTribalAdminOverlay />
            }
        </div>
    );
  }
}

class EditTribalAdminOverlay extends React.Component {
    componentWillMount() {
        //1. get tribal administration list

        //2. separate fields

        //3. add different field values into text boxes

        //4. add save button

        //5. onclick collect the input values

        //6. send input values as a string to the google spreadsheet

        //7. update the spreadsheet values
        //now I will use an npm api to make using google sheets easier
        GetSheetDone.raw('1hZr_x7r36h_qAe0bpQ6P33Bxd5msf5tpg1eS2J3uDFo')
        .then(sheet => this.setState({ administration: sheet.data }))
        
    }
    render() {
        return (
            <div>
                {this.state.administration.map((textForSection, i) =>
                    <div key={i}>
                        {i === 0 &&
                            <br />
                        }
                        <div key={i} style={styles.fontSize}>{textForSection}</div>
                        <br />
                        <br />
                    </div>
                )}
            </div>
        )
    }

}

var styles = {
    root: {
        display: 'flex',
        flexDirection: 'row'
    },
    fontSize: {
        fontSize: 30,
        display: 'inline-block',
        paddingTop: 10,
        paddingBottom: 10
    }
}
