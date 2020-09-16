import React, { Component } from 'react';
import QRCode from 'react-qr-code';

import '../style/qrcodegenerator.css'

export default class QrCodeGenerator extends Component {
    
    
    state = {
        url: this.props.url
    }

    constructor(props){
        super(props)

        this.setUrl = this.setUrl.bind(this)
    }

    setUrl(e){
        this.setState({url: e.target.value})
    }

    render(){
        const {url} = this.state

        return(
            <div>      
                <input type="text" placeholder="url" value={url} onChange={this.setUrl}/>
                <div id="qrCodePlaceholder">
                    <div id="capture">
                        <QRCode value={url} />
                    </div>
                </div>
            </div>
        )
    }
}