



// documentRoutes.js

document.querySelector('form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(); // Create a new FormData object
    formData.append('avatar', document.querySelector('input[type="file"]').files[0]); // Append the selected file to the FormData object

    try {
        
        const response = await fetch('/upload', {
            method: 'POST',
            body: formData // Set the body of the request to the FormData object
        });
        if (response.ok) {
            console.log('File uploaded successfully');
        } else {
            console.error('File upload failed');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
