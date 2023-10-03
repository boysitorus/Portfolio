function validate(form) {
  let username = form.nameField.value;
  let email = form.nameField.value;
  let subject = form.subjectField.value;
  let message = form.messageField.value;

  if (
    username.length === 0 &&
    email.length === 0 &&
    subject.length === 0 &&
    message.length === 0
  ) {
    alert("Form tidak boleh kosong");
  } else if (username.length === 0) {
    alert("Username Tidak Boleh Kosong");
  } else if (email.length === 0) {
    alert("Email tidak boleh kosong");
  } else if (subject.length === 0) {
    alert("Subject tidak boleh kosong");
  } else if (message.length === 0) {
    alert("Message tidak boleh kosong");
  }
}
