import React from "react";
import PropTypes from "prop-types";

export default function Props(props) {
  return <div>This is a example container for {props.num} component</div>;
}
Props.propTypes = { num: PropTypes.string };
