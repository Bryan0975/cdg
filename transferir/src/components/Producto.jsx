import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCheck extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return(
            <div className="col s6 l3 accurance__item">
                <p className="accurance__type">
                    <input name={this.props.nameProd} type="checkbox" id={this.props.idProd}  checked={this.props.checkedProd} value={this.props.valueProd} onChange={this.props.onChangeProd} onClick={this.props.onClickProd}/>
                    <label className={this.props.lblClass} htmlFor={this.props.idProd}>{this.props.prod}</label>
                    <span className={this.props.iconProd}/>
                </p>
            </div>
        );
  }
}

ProductCheck.propTypes = {
    prod:PropTypes.string.isRequired,
    idProd: PropTypes.string.isRequired,
    nameProd: PropTypes.string.isRequired,
    checkedProd: PropTypes.bool,
    valueProd: PropTypes.string.isRequired,
    onChangeProd: PropTypes.func,
    iconProd:PropTypes.string.isRequired,
    lblClass: PropTypes.string
};

ProductCheck.defaultProps = {
    lblClass:'',
};
export default ProductCheck