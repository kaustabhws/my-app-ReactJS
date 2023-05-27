import React, { useState } from 'react';

export default function Contact(props) {
  const [myAlert, setMyAlert] = useState(null);

  const showAlert = (message, type) => {
    setMyAlert({
      message: message,
      type: type
    });
  };

  const submitForm = () => {
    let name = document.getElementById('yname').value;
    let email = document.getElementById('yemail').value;
    let comm = document.getElementById('ycomm').value;

    if (name !== '' || email !== '' || comm !== '') {
      showAlert('Form has been submitted successfully!!!', 'success');
    }
    console.log(name + email + comm);

    setTimeout(() => {
        setMyAlert(null)
    }, 5000);
  };

  return (
    <>
    <div className="container w-25 p-3">
      <h2>Contact us</h2><br/>
      <div className="form-floating mb-3">
        <input type="name" className="form-control" data-bs-theme={`${props.mode}`} id="yname" placeholder="name@example.com" />
        <label htmlFor="floatingInput" data-bs-theme={`${props.mode}`}>Your name</label>
      </div>
      <div className="form-floating mb-3">
        <input type="email" className="form-control" data-bs-theme={`${props.mode}`} id="yemail" placeholder="name@example.com" />
        <label htmlFor="floatingInput" data-bs-theme={`${props.mode}`}>Email address</label>
      </div>
      <div className="form-floating mb-3">
        <textarea className="form-control" placeholder="Leave a comment here" data-bs-theme={`${props.mode}`} id="ycomm" style={{ height: '100px' }}></textarea>
        <label htmlFor="floatingTextarea2" data-bs-theme={`${props.mode}`}>Comments</label>
      </div>
      <div className="container d-flex justify-content-center">
        <button type="button" className="btn btn-primary mx-1 my-2" onClick={submitForm}>Submit form</button>
      </div>
      {myAlert && (
        <div className="alert alert-success my-4" role="alert">
          <h4 className="alert-heading">Well done!</h4>
          <p>{myAlert.message}</p>
        </div>
      )}
    </div>
    </>
  );
}
