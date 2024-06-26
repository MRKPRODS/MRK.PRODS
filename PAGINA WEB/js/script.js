document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery .item');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img') || item.querySelector('video');
            const src = img.getAttribute('src');
            const modal = document.createElement('div');
            modal.classList.add('modal');
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    ${img.tagName === 'IMG' ? `<img src="${src}" alt="">` : `<video controls src="${src}"></video>`}
                </div>
            `;
            document.body.appendChild(modal);

            const closeModal = () => {
                modal.remove();
            };

            modal.querySelector('.close').addEventListener('click', closeModal);
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeModal();
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Evita el comportamiento por defecto del formulario
        
        const formData = new FormData(form); // Crea un objeto FormData con los datos del formulario
        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                alert('Mensaje enviado exitosamente'); // Mensaje de éxito
                form.reset(); // Resetea el formulario
            } else {
                alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.'); // Mensaje de error
            }
        } catch (error) {
            alert('Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo.'); // Mensaje de error en caso de excepción
        }
    });
});
