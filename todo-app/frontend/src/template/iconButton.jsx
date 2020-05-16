import React from 'react';
import If from './if';

export default props => {
    return (
        <If test={!props.hide}>
            <button type='button' className={'btn btn-' + (props.style ? props.style : 'primary') + ' ' + props.otherClass} onClick={props.onClick}>
                <i className={'fa fa-' + props.icon}></i>
            </button>
        </If>
    )
}