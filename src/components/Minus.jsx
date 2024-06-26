function Minus(props) {
  return (
    <button
      className={props.className}
      onClick={() => {
        props.setState(props.state - 1);
      }}
    >
      -
    </button>
  );
}

export default Minus;
