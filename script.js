document.addEventListener('DOMContentLoaded', () => {
    const colorOptions = [
        { name: 'Beige', value: '#ECDECC' },
        { name: 'Green', value: '#BBD278' },
        { name: 'Blue', value: '#BBC1F8' },
        { name: 'Pink', value: '#FFD3F8' }
    ];

    const sizes = ['Small', 'Medium', 'Large', 'Extra Large', 'XXL'];

    const populateColorOptions = () => {
        const colorOptionsContainer = document.getElementById('color-options');
        colorOptions.forEach(color => {
            const colorButton = document.createElement('button');
            colorButton.textContent = '';
            colorButton.classList.add('color-option');
            colorButton.style.backgroundColor = color.value;
            colorButton.dataset.colorName = color.name; // Store color name as a data attribute
            colorButton.addEventListener('click', () => {
                // Handle color selection
                document.querySelectorAll('.color-option').forEach(btn => btn.classList.remove('selected'));
                colorButton.classList.add('selected');
            });
            colorOptionsContainer.appendChild(colorButton);
        });
    };

    const populateSizeOptions = () => {
        const sizeOptionsContainer = document.getElementById('size-options');
        sizes.forEach(size => {
            const sizeButton = document.createElement('button');
            sizeButton.textContent = size;
            sizeButton.classList.add('size-option');
            sizeButton.addEventListener('click', () => {
                // Handle size selection
                document.querySelectorAll('.size-option').forEach(btn => btn.classList.remove('selected'));
                sizeButton.classList.add('selected');
            });
            sizeOptionsContainer.appendChild(sizeButton);
        });
    };

    populateColorOptions();
    populateSizeOptions();

    const thumbnails = document.querySelectorAll('.thumbnails img');
    const mainImage = document.getElementById('main-image');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            mainImage.src = thumbnail.src;
        });
    });

    const addToCartButton = document.getElementById('add-to-cart');
    addToCartButton.addEventListener('click', () => {
        const selectedProductTitle = document.getElementById('product-title').textContent;
        const selectedColorButton = document.querySelector('.color-option.selected');
        const selectedColor = selectedColorButton ? selectedColorButton.dataset.colorName : 'None';
        const selectedSize = document.querySelector('.size-option.selected')?.textContent || 'None';

        const cartMessage = `${selectedProductTitle} with Color ${selectedColor} and Size ${selectedSize} added to cart.`;
        displayCartMessage(cartMessage);
    });

    const displayCartMessage = (message) => {
        const cartMessageElement = document.createElement('p');
        cartMessageElement.textContent = message;
        cartMessageElement.classList.add('cart-message');

        // Insert cart message before product description
        const productDescription = document.querySelector('.product-description');
        productDescription.parentNode.insertBefore(cartMessageElement, productDescription);
    };

    const quantityInput = document.getElementById('quantity');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');

    incrementButton.addEventListener('click', () => {
        quantityInput.stepUp();
    });

    decrementButton.addEventListener('click', () => {
        if (quantityInput.value > 1) {
            quantityInput.stepDown();
        }
    });
});
