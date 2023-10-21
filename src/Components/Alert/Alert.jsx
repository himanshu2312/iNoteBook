import React from "react";
import PropTypes from "prop-types";

export default function Alert(props) {
      return (
            props.alert && <div
                  className={`alert alert-${props.alert.type} alert-dismissible fade show `}
                  role="alert" style={{ marginTop: '3.5rem' }} id="alert"
            >
                  {props.alert.message}
            </div>
      );
}

Alert.propTypes = {
      alert: PropTypes.object,
};
