document.addEventListener('DOMContentLoaded', function() {
    const openGalleryBtn = document.getElementById('openGalleryBtn');
    const galleryContainer = document.getElementById('galleryContainer');
    const gallery = document.getElementById('gallery');
    const artModal = document.getElementById('artModal');
    const modalImg = document.getElementById('artModalImg');
    const captionText = document.getElementById('caption');
    const closeModal = document.getElementById('closeModal');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;

    // Array of art items with their details
    const artItems = [
        { src: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/painting/w/9/b/the-starry-night-digital-painting-photo-frame-jadoun-original-imagshy2cw2jzekb.jpeg?q=90&crop=false', title: 'Starry Night', artist: 'Vincent van Gogh' },
        { src: 'https://www.artmajeur.com/medias/hd/f/r/frederic-font-chroma/artwork/16679974_3_4.jpg', title: 'Mona Lisa', artist: 'Leonardo da Vinci' },
        { src: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/The_Scream.jpg', title: 'The Scream', artist: 'Edvard Munch' },
        { src: 'https://vsemart.com/wp-content/uploads/2014/07/Flexible-clock.jpg', title: 'The Persistence of Memory', artist: 'Salvador Dalí' },
        { src: 'https://cdn.pixabay.com/photo/2017/10/12/23/05/girl-with-the-pearl-earring-2846349_1280.jpg', title: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer' },
    ];


    // Function to create art gallery items
    function createGalleryItem(item) {
        const artItemDiv = document.createElement('div');
        artItemDiv.className = 'art-item';
        artItemDiv.innerHTML = `
            <img src="${item.src}" alt="${item.title}">
            <div class="art-info">
                <h3>${item.title}</h3>
                <p>Artist: ${item.artist}</p>
            </div>
        `;
        artItemDiv.addEventListener('click', () => {
            currentIndex = artItems.indexOf(item);
            showModal(currentIndex);
        });
        return artItemDiv;
    }

    // Function to show the modal with the given index
    function showModal(index) {
        artModal.style.display = 'block';
        modalImg.src = artItems[index].src;
        captionText.innerHTML = `<h3>${artItems[index].title}</h3><p>Artist: ${artItems[index].artist}</p>`;
    }

    // Function to close the modal
    function closeModalFunc() {
        artModal.style.display = 'none';
    }

    // Function to show the next image
    function showNext() {
        currentIndex = (currentIndex + 1) % artItems.length;
        showModal(currentIndex);
    }

    // Function to show the previous image
    function showPrev() {
        currentIndex = (currentIndex - 1 + artItems.length) % artItems.length;
        showModal(currentIndex);
    }

    // Dynamically create gallery items
    artItems.forEach(item => {
        const artItem = createGalleryItem(item);
        gallery.appendChild(artItem);
    });

    // Event listener for opening the gallery
    openGalleryBtn.addEventListener('click', () => {
        galleryContainer.classList.remove('hidden');
        openGalleryBtn.style.display = 'none'; // Hide the button after opening the gallery
    });

    // Event listener for closing the modal
    closeModal.addEventListener('click', closeModalFunc);

    // Event listener for next button
    nextBtn.addEventListener('click', showNext);

    // Event listener for previous button
    prevBtn.addEventListener('click', showPrev);

    // Event listener for clicking outside the modal to close it
    window.addEventListener('click', (event) => {
        if (event.target === artModal) {
            closeModalFunc();
        }
    });
});
