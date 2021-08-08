import React from 'react';

export default function LE_Header(props){
    return(
        <div className="le-header">
            <div className="le-header__logo">
                {props.logo}
            </div>
            <div className="le-header__content">
                {props.menu}
            </div>
        </div>
    );
}