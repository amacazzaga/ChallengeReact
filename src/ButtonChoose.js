const ButtonChoose = ({ click }) => {
  return (
    <div>
      <button
        onClick={() => {
          click();
        }}
      >
        ✅
      </button>
    </div>
  );
};

export default ButtonChoose;
