// modal functionality for images in .featured-images

// create a modal element
const modal = document.createElement('div');
modal.id = 'image-modal';
modal.style.position = 'fixed';
modal.style.top = '0';
modal.style.left = '0';
modal.style.width = '100vw';
modal.style.height = '100vh';
modal.style.background = 'rgba(0,0,0,0.8)';
modal.style.alignItems = 'center';
modal.style.justifyContent = 'center';
modal.style.zIndex = '9999';
modal.style.display = 'none'; // Only set to none here (to hide), not flex
modal.innerHTML = `
    <span id="modal-close" style="position:absolute;top:30px;right:40px;font-size:3rem;color:white;cursor:pointer;z-index:10000">&times;</span>
    <img id="modal-img" src="" alt="modal image" style="max-width:90vw;max-height:90vh;box-shadow:0 0 20px #000;">
`; // puts close button and image inside the div. styles them a bit with inline css as well
document.body.appendChild(modal);

const modalImg = modal.querySelector('#modal-img');
const closeBtn = modal.querySelector('#modal-close');
let lastFocusedImg = null;

// Open modal on image click or keyboard
// calls anonymous function that adds modal functionality to each image in .featured-images
document.querySelectorAll('.featured-images img').forEach(img => {
    img.style.cursor = 'pointer';
    img.setAttribute('tabindex', '0'); // Make focusable by keyboard (tabbing)
    img.addEventListener('click', function() {
        lastFocusedImg = this;
        modalImg.src = this.src;
        modal.style.display = 'flex';
        closeBtn.focus();
    });
    img.addEventListener('keydown', function(e) { // allow user to use modal functionality by pressing enter on a focused image (when tabbing through)
        if (e.key === 'Enter') {
            lastFocusedImg = this;
            modalImg.src = this.src;
            modal.style.display = 'flex';
            closeBtn.focus();
        }
    });
});

document.querySelectorAll('.product-grid img').forEach(img => {
    img.style.cursor = 'pointer';
    img.setAttribute('tabindex', '0'); // Make focusable by keyboard (tabbing)
    img.addEventListener('click', function() {
        lastFocusedImg = this;
        modalImg.src = this.src;
        modal.style.display = 'flex';
        closeBtn.focus();
    });
    img.addEventListener('keydown', function(e) { // allow user to use modal functionality by pressing enter on a focused image (when tabbing through)
        if (e.key === 'Enter') {
            lastFocusedImg = this;
            modalImg.src = this.src;
            modal.style.display = 'flex';
            closeBtn.focus();
        }
    });
});

// Close modal on close button, clicking outside image, or escape key
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    modalImg.src = '';
    if (lastFocusedImg) lastFocusedImg.focus();
});
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
        modalImg.src = '';
        if (lastFocusedImg) lastFocusedImg.focus();
    }
});
document.addEventListener('keydown', function(e) {
    if (modal.style.display === 'flex' && e.key === 'Escape') {
        modal.style.display = 'none';
        modalImg.src = '';
        if (lastFocusedImg) lastFocusedImg.focus();
    }
});
