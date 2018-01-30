import React from 'react';

import $ from 'jquery';

import GetSheetDone from 'get-sheet-done';


export default class Admin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            animationHelper: '',
            EditTribalAdminOverlay: '',
            rootVisibility: ''
        }
    }
    componentDidMount() {
        window.setTimeout(() => {
            this.setState({
                animationHelper: 'fadeIn'
            })
        }, 3000)
    }
    editTribalAdmin(e) {
        // let EditTribalAdminOverlay = '';
        this.setState({
            EditTribalAdminOverlay: EditTribalAdminOverlay
        })
    }
  render() {
    let EditTribalAdminOverlay = this.state.EditTribalAdminOverlay,    //just so it doesnt look weird during the return in render
        navButtonDisplay = this.state.EditTribalAdminOverlay === '' ? '' : 'none';
    return (
        <div id='Admin' className={this.state.animationHelper} style={{...styles.root, visibility: this.state.rootVisibility, opacity: this.state.animationHelper === '' ? 0 : ''}}>
            {navButtonDisplay !== 'none' &&
                <div style={styles.navButton}>Edit Tribal Administration:{'  '}<span style={styles.button} onClick={this.editTribalAdmin.bind(this)}>Go</span></div>
            }
            
            
            {EditTribalAdminOverlay !== '' &&
                <EditTribalAdminOverlay />
            }
        </div>
    );
  }
}

class EditTribalAdminOverlay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            administration: []
        }
    }
    componentWillMount() {
        //1. get tribal administration list
        GetSheetDone.raw('1hZr_x7r36h_qAe0bpQ6P33Bxd5msf5tpg1eS2J3uDFo')
        .then(sheet => {

            console.log('sheet = ', sheet);


            this.setState({ administration: sheet.data })
        
        
        })
        
        //2. separate fields
        // sheet.data.map((data, i) => {


        //     return (

        //     )
        // })

        //3. add different field values into text boxes

        //4. add save button

        //5. onclick collect the input values

        //6. send input values as a string to the google spreadsheet

        //7. update the spreadsheet values
        //now I will use an npm api to make using google sheets easier
    }
    onInputChange(id, event) {
        let adminArray = this.state.administration.map((e) => e);
        adminArray[id] = event.value;
        this.setState({administration: administration});
    }
    render() {
        return (
            <div style={{zIndex: 2}}>
                {this.state.administration.map((textForSection, i) =>
                    <div key={'adminContainer_' + i}>
                        <div key={i}>
                            {i === 0 &&
                                <br />
                            }
                            <input key={i} style={styles.fontSize} value={textForSection} onChange={this.onInputChange.bind(this, i)} />
                            <br />
                            <br />
                        </div>
                        {i === this.state.administration.length &&  //if true then this is the last iteration
                            <AddAdmin key={i} style={styles.fontSize} value={textForSection} onChange={this.onInputChange.bind(this, i)} />
                        }
                    </div>
                )}
            </div>
        )
    }

}

class AddAdmin extends React.Component {
    render() {
        return (
            <input key={i} style={styles.fontSize} value={this.props.value} onChange={this.onInputChange.bind(this, i)} />
        )
    }
}

var styles = {
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        zIndex: 2,
        backgroundColor: 'black',
        position: 'fixed',
        color: 'white',
        fontSize: '28px',
        alignItems: 'center'
    },
    button: {
        padding: '5px',
        border: '1px solid white',
        boxSizing: 'border-box',
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '4px',
        cursor: 'pointer'
    },
    fontSize: {
        fontSize: 30,
        display: 'inline-block',
        paddingTop: 10,
        paddingBottom: 10
    },
    navButton: {
        zIndex: 1                       //needed because of how the background image is set
    }
}
