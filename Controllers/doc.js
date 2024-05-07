



// documentRoutes.js

document.querySelector('form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission

    const fileInput = document.querySelector('input[type="file"]');
const files = fileInput.files; // Get the FileList object

// Iterate over each file in the FileList and append it to the FormData object
for (let i = 0; i < files.length; i++) {
  formData.append('avatar', files[i]);
} // Append the selected file to the FormData object

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
