import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar/Sidebar';
const UserLayout = ({ children }) => {
    return (
        <div style={{display:"flex",margin:"0",overflowY:"hidden",padding: '2px'}}>
            <div>  
             <Sidebar />
            </div>
            <div style={{flex:"1 1 auto"}}>
                {children}
            </div>
        </div>
    );

}
    UserLayout.prototypes={
        children: PropTypes.node.isRequired
    }

export default UserLayout;