import Swal from 'sweetalert2';

export const showAlert = (title, text, icon = 'success') => {
  Swal.fire({
    title,
    text,
    icon,
    showConfirmButton: false,      // Hide the OK button
    timer: 1000,                   // Auto close after 1 seconds
    timerProgressBar: true,         // Optional: show a progress bar
    width: '320px', // smaller width
  });
};
export const showSuccessAlert = (title) => {
    showAlert(title, '', 'success');
}
export const showErrorAlert = (title) => {
    showAlert(title, '', 'error');
}
export const showWarningAlert = (title) => {
    showAlert(title, '', 'warning');
}
