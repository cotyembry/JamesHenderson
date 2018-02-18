import React from 'react';
import {findDOMNode} from 'react-dom';

import $ from 'jquery';

import GetSheetDone from 'get-sheet-done';

import SendEmail from './SendEmail.jsx';



/*
    TODO:
            -add logic to update the Chief and the Assistant Chief sections within the spreadsheet
            -after that update the components to pull in the correct data when the user is actually viewing the administration etc


*/


export default class Admin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            animationHelper: '',
			EditTribalAdminOverlay: '',
			inputFontColor: 'black',
            passwordValue: '',
            rootVisibility: ''
        }
    }
    componentDidMount() {
		window.AdminPasswordValidationCallback = (e) => {
			this.passwordValidationCallback(e);
        }
        window.AdminAssistantCallback = (e) => {
            console.log('in AdminAssistantCallback, e = ', e);
        }
        window.AssistantChiefUpdateDoneCallback = (e) => {
            console.log('in AssistantChiefUpdateDoneCallback, e = ', e);
        }
        window.ChiefUpdateDoneCallback = (e) => {
            console.log('in ChiefUpdateDoneCallback, e = ', e);
        }
        // window.AdminUpdateDoneCallback = (e) => {
		// 	this.updateAdminCallback(e);
		// }
        window.setTimeout(() => {
            this.setState({
                animationHelper: 'fadeIn'
            })
        }, 3000);
    }
    componentWillMount() {
        this.refs = [];
    }
    editTribalAdmin(e) {
		//I could not get the success or .then callbacks/promises to work so I used the google apps script ContentService to help return javascript that will be executed to on the page globally to let this Admin component know the request has came back
		//window.AdminPasswordValidationCallback is what is called after returning back from the following .ajax request which in turn calls this.passwordValidationLogic
		$.ajax({
			url: 'https://script.google.com/macros/s/AKfycbw3jmNPfOGLzWA5gPjsVHE2_LA_ey4R6hFgeIh_hWSVhzqreQwj/exec?type=validatePassword&password=' + this.state.passwordValue,
			dataType: 'jsonp'
		});
    }
    passwordKeyPressed(e) {
        if(e.key.toString().search(/enter/gi) !== -1) {
            this.editTribalAdmin();
        }
    }
	passwordValidationCallback(e) {		
		if (e === true || e === false) {
			console.log('correct password');
			this.setState({
				EditTribalAdminOverlay: EditTribalAdminOverlay
			})
		}
		else {
			console.log('incorrect password')
			//set the font color red or something to tell the user...hey...this password submission was wrong
			this.setState({
				inputFontColor: 'red'
			})
		}
    }
    updateAdminCallback(e) {
        alert('in updateAdminCallback')
    }
    render() {
        let EditTribalAdminOverlay = this.state.EditTribalAdminOverlay,    //just so it doesnt look weird during the return in render
            navButtonDisplay = this.state.EditTribalAdminOverlay === '' ? '' : 'none',
            flexHelper = navButtonDisplay !== 'none' ? {} : {};
        return (
            <div id='Admin' className={this.state.animationHelper} style={{...styles.root, visibility: this.state.rootVisibility, opacity: this.state.animationHelper === '' ? 0 : ''}}>
                {navButtonDisplay !== 'none' &&
                    <div style={styles.navButton}>
                        <span>Edit Tribal Administration:{'  '}</span>
						
                        <input ref={eref => { this.refs['passwordInput'] = findDOMNode(eref)}} style={{ width: '100%', textAlign: 'center', color: this.state.inputFontColor }} placeholder='password' value={this.state.passwordValue} onChange={(e) => { this.setState({ passwordValue: e.target.value, inputFontColor: 'black' }) }} onKeyPress={this.passwordKeyPressed.bind(this)} />
                        
						<div style={{display: 'flex', marginTop: '5px'}}>
                            <span className='button buttonHover' style={{...styles.button}} onClick={this.editTribalAdmin.bind(this)}>Go</span>
                        </div>
                    </div>
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
            administration: [],
            assistantChief: [],
            chief: [],
            newAdmin: [],
            removeAdminHeight: 0
        }
    }
    addAdmin() {
        let clonedAdmin = this.state.newAdmin.map((value) => value);
        clonedAdmin.push('');

        this.setState({
            newAdmin: clonedAdmin
        })
    }
    componentDidMount() {
        //1. get tribal administration list
        GetSheetDone.raw('1hZr_x7r36h_qAe0bpQ6P33Bxd5msf5tpg1eS2J3uDFo')
        .then(sheet => {
            this.setState({ administration: sheet.data })
        });
        $.get({
            url: 'https://script.google.com/macros/s/AKfycbw3jmNPfOGLzWA5gPjsVHE2_LA_ey4R6hFgeIh_hWSVhzqreQwj/exec?type=getAssistantChief',
            data: {
                type: 'getAssistantChief'
            },
            success: (e) => {
                console.log('getting assistant chief with: ', e);

                this.setState({
                    assistantChief: [e.toString()]
                })
            }
        })
        $.get({
            url: 'https://script.google.com/macros/s/AKfycbw3jmNPfOGLzWA5gPjsVHE2_LA_ey4R6hFgeIh_hWSVhzqreQwj/exec?type=getChief',
            data: {
                type: 'getAssistantChief'
            },
            success: (e) => {
                console.log('getting chief with: ', e);
                this.setState({
                    chief: [e.toString()]
                })
            }
        })
    }
    componentWillMount() {
        this.refs = [];
    }
    getInputHeight() {
        let inputHeight = 0;
        if(typeof this.refs['addAdminParent_0'] !== 'undefined') {
            inputHeight = this.refs['addAdminParent_0'].clientHeight;
        }
        return parseFloat(inputHeight);
    }
    // makeApiCall() {
    //     var params = {
    //         // The spreadsheet to apply the updates to.
    //         spreadsheetId: '1hZr_x7r36h_qAe0bpQ6P33Bxd5msf5tpg1eS2J3uDFo'
    //     };
    //     var batchUpdateSpreadsheetRequestBody = {
    //         // A list of updates to apply to the spreadsheet.
    //         // Requests will be applied in the order they are specified.
    //         // If any request is not valid, no requests will be applied.
    //         requests: [
    //             'one',
    //             'two',
    //             'three'
    //         ]

    //         // TODO: Add desired properties to the request body.
    //     };
    //     var request = gapi.client.sheets.spreadsheets.batchUpdate(params, batchUpdateSpreadsheetRequestBody);
    //     request.then(function (response) {
    //         // TODO: Change code below to process the `response` object:
    //         // console.log(response.result, response);
    //     }, function (reason) {
    //         console.error('error: ' + reason.result.error.message, reason);
    //     });
    // }
    onInputChange(id, event) {
        let adminArray = this.state.administration.map((e) => e);
        adminArray[id] = event.value;
        this.setState({administration: adminArray});
    }
    removeAdminClicked(i) {
        let newAdministrationArray = this.state.administration.map(e => e);
        newAdministrationArray.splice(i, 1);
        this.setState({administration: newAdministrationArray})
    }
    saveAdmin() {
        let inputs = document.getElementsByClassName('administrationInput'),
            adminAssistantInputs = document.getElementsByClassName('adminAssistant')[0],    //there is only one input right now but maybe there will be more later
            chiefInput = document.getElementsByClassName('chiefInput')[0],
            concatinatedString = '',
            adminAssistantString = '',
            chiefString = '';

        for(let i = 0; i < inputs.length; i++) {
            concatinatedString += inputs[i].value + '__$$^$$__';
        }
        for(let i = 0; i < adminAssistantInputs.length; i++) {
            adminAssistantString += adminAssistantInputs[i].value + '__$$^$$__';
        }


        console.log('in save with: ', adminAssistantInputs, adminAssistantString);

        console.log('with: ->', chiefInput, 'two ->', chiefInput.value);

        // console.log(concatinatedString);
        // console.log('doing get');
       
       
        let turnOffGetRequests = false;

        if(turnOffGetRequests === false) {
       
            $.get({
                url: 'https://script.google.com/macros/s/AKfycbw3jmNPfOGLzWA5gPjsVHE2_LA_ey4R6hFgeIh_hWSVhzqreQwj/exec',
                data: {
                    type: 'updateAdmin',
                    newAdmin: concatinatedString
                },
                success: (e) => {
                    alert('successfully updated Tribal Administration :)')
                }        
            })       
            $.get({
                url: 'https://script.google.com/macros/s/AKfycbw3jmNPfOGLzWA5gPjsVHE2_LA_ey4R6hFgeIh_hWSVhzqreQwj/exec',
                data: {
                    type: 'setAssistantChief',
                    newAssistantChief: adminAssistantInputs.value
                },
                success: (e) => {
                    alert('successfully updated Assistent Chief :)')
                }        
            })     
            $.get({
                url: 'https://script.google.com/macros/s/AKfycbw3jmNPfOGLzWA5gPjsVHE2_LA_ey4R6hFgeIh_hWSVhzqreQwj/exec?type=setChief',
                data: {
                    // type: 'setChief',
                    newChief: chiefInput.value
                },
                success: (e) => {
                    alert('successfully updated Chief :)')
                }
            })  
        }
    }
    sendEmailCallbackSetter(sendEmailCallback) {
        this._sendEmail = sendEmailCallback;
    }
    onAssistantChiefInputChange(id, event) {
        let assistantChiefArray = this.state.assistantChief.map((e) => e);
        assistantChiefArray[id] = event.value;
        this.setState({ assistantChief: assistantChiefArray });
    }
    onChiefInputChange(id, event) {
        let chiefArray = this.state.chief.map((e) => e);
        chiefArray[id] = event.value;
        this.setState({ chief: chiefArray });
    }
    render() {
        return (
            <div ref={(eref) => {this.refs['admin_root']}} style={{zIndex: 2, width: '100%', height: '100%'}}>
                
                <div style={styles.tribalAdministrationHeading}>Chief</div>
                {this.state.chief.map((textForSection, i) =>
                    <div key={i} style={{ padding: '0px 28px 0px 28px', width: '100%', boxSizing: 'border-box' }}>
                        {i === 0 &&
                            <br key={i + 'brzero'} />
                        }

                        <div style={styles.alreadyAdminInputParent}>
                            <input className='chiefInput' key={i} style={{ ...styles.fontSize, width: 'calc(100% - 35px)', }} value={textForSection} onChange={this.onChiefInputChange.bind(this, i)} />

                            <div>
                                <span className='button buttonHover' style={{ ...styles.button, backgroundColor: 'red', color: 'white', marginLeft: '5px' }} onClick={() => { this.removeAdminClicked(i) }}>-</span>
                            </div>
                        </div>

                        <br key={i + 'br_a'} />
                        <br key={i + 'br_b'} />
                    </div>
                )}

                <div style={styles.tribalAdministrationHeading}>Assistant Chief</div>
                {this.state.assistantChief.map((textForSection, i) =>
                    <div key={i} style={{ padding: '0px 28px 0px 28px', width: '100%', boxSizing: 'border-box' }}>
                        {i === 0 &&
                            <br key={i + 'brzero'} />
                        }

                        <div style={styles.alreadyAdminInputParent}>
                            <input className='adminAssistant' key={i} style={{ ...styles.fontSize, width: 'calc(100% - 35px)', }} value={textForSection} onChange={this.onAssistantChiefInputChange.bind(this, i)} />

                            <div>
                                <span className='button buttonHover' style={{ ...styles.button, backgroundColor: 'red', color: 'white', marginLeft: '5px' }} onClick={() => { this.removeAdminClicked(i) }}>-</span>
                            </div>
                        </div>

                        <br key={i + 'br_a'} />
                        <br key={i + 'br_b'} />
                    </div>
                )}


                
                <div style={styles.tribalAdministrationHeading}>Tribal Administration</div>

                {this.state.administration.map((textForSection, i) =>
                    <div key={i} style={{padding: '0px 28px 0px 28px', width: '100%', boxSizing: 'border-box'}}>
                        {i === 0 &&
                            <br key={i+ 'brzero'} />
                        }
                        
                        <div style={styles.alreadyAdminInputParent}>
                            <input className='administrationInput' key={i} style={{...styles.fontSize, width: 'calc(100% - 35px)',}} value={textForSection} onChange={this.onInputChange.bind(this, i)} />
                            
                            <div>
                                <span className='button buttonHover' style={{ ...styles.button, backgroundColor: 'red', color: 'white', marginLeft: '5px' }} onClick={() => {this.removeAdminClicked(i)}}>-</span>
                            </div>
                        </div>
                        
                        <br key={i + 'br_a'} />
                        <br key={i + 'br_b'} />
                    </div>
                )}
                
                
                <div style={{...styles.buttonContainer, marginBottom: '28px'}}>
                    <button className='buttonHover button' style={{...styles.button, marginRight: '28px'}} onClick={this.addAdmin.bind(this)}>Add Admin</button>
                </div>
                
                
                {this.state.newAdmin.map((nullPlaceholder, i) =>
                    <div key={'parent_' + i} style={{width: '100%'}}>
                        <div key={i} ref={eref => {this.refs['addAdminParent_' + i] = findDOMNode(eref)}} style={{ padding: '0px 28px 0px 28px', width: '100%', boxSizing: 'border-box' }}>
                            <AddAdmin updateParent={this.addAdmin.bind(this)} key={'addAdmin_' + i} style={{...styles.fontSize, width: '100%'}} />
                            <br key={i + '_a'} />
                            <br key={i + '_b'} />
                        </div>
                    </div>
                )}

                {/* {this.state.newAdmin.length > 0 && */}
                    <div style={{ width: '100%', textAlign: 'center', marginBottom: '28px', display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                        <center>
                            <div className='button buttonHover' style={{ ...styles.button, fontSize: '33px', display: 'inline-block' }} onClick={this.saveAdmin.bind(this)}>Save</div>
                        </center>
                    </div>
                {/* } */}


                {/* <SendEmail componentDidMount={this.sendEmailCallbackSetter.bind(this)} /> */}
            </div>
        )
    }

}

class AddAdmin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 'Add Admin (type whatever you want to show here)'
        }
    }
    onChange(event) {
        this.setState({ value: event.value });
        // this.props.updateParent(event.value, this.props.i);
    }
    render() {

        // console.log({ ...this.props.style, width: 'calc(100% - 35px)' });

        return (
            <div>
                <input key={this.props.i} style={{...this.props.style, width: 'calc(100% - 35px)'}} value={this.state.value} onChange={this.onChange.bind(this)} />
                {/* <span className='button buttonHover' style={{ ...styles.button, backgroundColor: 'red', color: 'white' }}>-</span> */}
            </div>
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
        alignItems: 'center',
        overflowY: 'auto'
    },
    alreadyAdminInputParent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        padding: '5px',
        border: '1px solid white',
        boxSizing: 'border-box',
        // backgroundColor: 'white',
        color: 'black',
        borderRadius: '4px',
        cursor: 'pointer'
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    fontSize: {
        fontSize: 30,
        display: 'inline-block',
        paddingTop: 10,
        paddingBottom: 10
    },
    navButton: {
        zIndex: 1,                       //needed because of how the background image is set
        display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
    },
    tribalAdministrationHeading: {
        textAlign: 'center'
    }
}
