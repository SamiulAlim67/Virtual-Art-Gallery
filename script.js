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
        { src: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGFydHxlbnwwfHx8fDE2Nzg4NzA4NjA&ixlib=rb-1.2.1&q=80&w=400', title: 'Starry Night', artist: 'Vincent van Gogh' },
        { src: 'https://images.unsplash.com/photo-1535392434882-2c5d6b1229ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIwfHxhdHxlbnwwfHx8fDE2Nzg4NzA5MjA&ixlib=rb-1.2.1&q=80&w=400', title: 'Mona Lisa', artist: 'Leonardo da Vinci' },
        { src: 'https://images.unsplash.com/photo-1580695761977-78bf8ec61327?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGFydHxlbnwwfHx8fDE2Nzg4NzA5NzA&ixlib=rb-1.2.1&q=80&w=400', title: 'The Scream', artist: 'Edvard Munch' },
        { src: 'https://images.unsplash.com/photo-1520676896001-88f8862e5049?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE3fHxhdHxlbnwwfHx8fDE2Nzg4NzEwMzA&ixlib=rb-1.2.1&q=80&w=400', title: 'The Persistence of Memory', artist: 'Salvador Dalí' },
        { src: 'https://images.unsplash.com/photo-1592206021263-1d2eac0835f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDczfHxhdHxlbnwwfHx8fDE2Nzg4NzExNDA&ixlib=rb-1.2.1&q=80&w=400', title: 'The Last Supper', artist: 'Leonardo da Vinci' },
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
