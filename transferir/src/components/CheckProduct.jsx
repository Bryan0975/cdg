import React, { Component } from 'react';
import PropTypes from 'prop-types';

const CheckProduct = (props) => {
    return(
            <p>
                <input className="filled-in" name={props.nameProd} type="checkbox" id={props.idProd}  checked={props.checkedProd} value={props.valueProd} onChange={props.onChangeProd}/>
                <label htmlFor={props.idProd}>{props.prod}</label>
            </p>
    );
    console.loh(props)
}

CheckProduct.propTypes = {
    prod:PropTypes.string.isRequired,
    idProd: PropTypes.string.isRequired,
    nameProd: PropTypes.string.isRequired,
    checkedProd: PropTypes.bool,
    valueProd: PropTypes.string.isRequired,
    onChangeProd: PropTypes.func
};

export default CheckProduct