import React, {Component} from 'react'
import './style.css'

export default class Footer extends Component {
    constructor(props){
        super(props);
        const {footerObj} = props;
        this.state = footerObj
    }
    render(){        
        return <>
            <div class='absolute footerDiv'>
                <span class='left'>{this.state.date}</span>
                <span class='right'>{this.state.name}</span>
            </div>
        </>
    }
}