// WeAre Observability Website Scripts
//
// This script handles interactive behaviour for the WeAre site. It prevents
// default form submissions, displays a friendly alert message to the user
// when they request an assessment or subscribe to the newsletter, and
// resets the form fields afterwards.

document.addEventListener('DOMContentLoaded', () => {
  const assessmentForm = document.querySelector('.assessment-form');
  if (assessmentForm) {
    assessmentForm.addEventListener('submit', (event) => {
      event.preventDefault();
      // In a real application, form data would be sent to a backend here.
      alert('Thank you! Your assessment request has been submitted. One of our experts will reach out soon.');
      assessmentForm.reset();
    });
  }

  const subscribeForm = document.querySelector('.subscribe-form');
  if (subscribeForm) {
    subscribeForm.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Thank you for subscribing! We\'ll keep you updated with the latest observability insights.');
      subscribeForm.reset();
    });
  }
});