const contactFormContainer = document.getElementById('contactFormContainer');
const showFormBtn = document.getElementById('showFormBtn');
const closeFormBtn = document.getElementById('closeFormBtn');

showFormBtn.addEventListener('click', () => {
    contactFormContainer.style.display = 'block';
});

closeFormBtn.addEventListener('click', () => {
    contactFormContainer.style.display = 'none';
});

const mainImage = document.getElementById('mainImage');
const aboutPhotos = document.querySelectorAll('.about-photos');

aboutPhotos.forEach((photo) => {
    photo.addEventListener('click', () => {
        const imageUrl = photo.getAttribute('data-image');
        mainImage.src = imageUrl;
    });
});