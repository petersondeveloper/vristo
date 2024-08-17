import Swal from 'sweetalert2/dist/sweetalert2.js';

function showMessage (msg = 'Example notification text.', position = 'bottom-start', showCloseButton = true, closeButtonHtml = '', duration = 3000) {
    const toast = Swal.mixin({
        toast: true,
        position: position || 'bottom-start',
        showConfirmButton: false,
        timer: duration,
        showCloseButton: showCloseButton,
    });
    toast.fire({
        title: msg,
    });
};
