import { connect } from "react-redux";

const Counter = (props) => {
  return <p style={{ fontSize: "40px", margin: "40px" }}>{props.counter}</p>;
};

const mapStateToProps = (state) => ({
  counter: state.counter,
});

export default connect(mapStateToProps)(Counter);
