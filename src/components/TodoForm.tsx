//* creates a simple to do form

// TODO: Add a submit button

// TODO: Pass the input text back to App.tsx using a function prop

function todoForm() {
  // make submitButtonClick function
  const submitButtonClick = () => {
    // do try/catch
  };
  // everything below gets rendered to the browser
  return (
    <div>
      {/* TODO: Make an input field */}
      {/* the input field */}
      <input
        type='text'
        //
        placeholder='Write Here'
      />
      <button onClick={submitButtonClick}>Submit</button>
    </div>
  );
}

export default todoForm;
