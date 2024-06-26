function Reset(props) {
  return (
    <button
      className={props.className}
      onClick={() => {
        props.setState(props.value);
      }}
    >
      Reset
    </button>
  );
}

export default Reset;
