import React from 'react'
import {childWithProps} from '../utils/utils'

export default props => 
    <div>
        <h2>Família</h2>
        {childWithProps(props)}
        {/* {React.cloneElement(props.children, 
            {...props})} */}
        {/* {props.children} */}
    </div>