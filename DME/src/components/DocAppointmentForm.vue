<template>
  <div>

  <h1 style="text-align: center;">
    Appointment data
  </h1>
    <form action="" class="doc-app-form-container">
        <div style="width: 100%">
            <button class="add-btn" @click.prevent="add('diagnosis')">+</button>
            <input type="text" class="input-style" placeholder="diagnosis" id="diagnosis">
        </div>
        <hr style="width: 300px ; border: 1px solid rgba(67, 106, 230, 0.5);" />
        <div style="">
            <button class="add-btn" @click.prevent>+</button>
            <input type="text" class="input-style" placeholder="perscription" id="perscription">
        </div>
        <hr style="width: 300px ; border: 1px solid rgba(67, 106, 230, 0.5);" />
        <div class="report">
            <textarea name="" id="" cols="40" rows="10" placeholder="enter report" style="margin-left: 20px ;"></textarea>
        </div>
        <div style="margin-left: 20px;">
            <label for="images" class="drop-container" id="dropcontainer" style="display: flex; justify-content: center;">
                <span class="drop-title">Drop files here</span>
                or
                <input type="file" id="file-input" @change="handleFileChange">
              </label>
        </div>
        <!-- <button type="submit" class="sub-btn">Submit</button> -->
    </form>
  </div>

</template>
<script>
export default {
    mounted() {
    const dropContainer = document.getElementById("dropcontainer");
    const fileInput = document.getElementById('file-input');

    dropContainer.addEventListener("dragover", (e) => {
      // prevent default to allow drop
      e.preventDefault();
    }, false);

    dropContainer.addEventListener("dragenter", () => {
      dropContainer.classList.add("drag-active");
    });

    dropContainer.addEventListener("dragleave", () => {
      dropContainer.classList.remove("drag-active");
    });

    dropContainer.addEventListener("drop", (e) => {
      e.preventDefault();
      dropContainer.classList.remove("drag-active");
      fileInput.files = e.dataTransfer.files;
    });
  },
  methods: {
    handleFileChange(event) {
      // Handle file change if necessary
    },
    add(id) {
    let parent = document.getElementById(id).parentNode;
    let newInput = document.createElement('input'); // Create a new input element
    newInput.type = 'text'; // Set the input type
    newInput.placeholder = id; // Set the placeholder attribute
    newInput.id = id; // Set the id attribute
    newInput.className = 'input-style'; // Set the class attribute
    newInput.style.marginLeft = '20px'; // Set the margin-left style
    parent.appendChild(newInput); // Append the new input element to its parent
}

  }
};
</script>

<style>
.doc-app-form-container {
    display: flex ;
    flex-direction: column;
    align-items: center ;
    justify-content: space-between;
    gap: 20px ;
}
.report > textarea {
    background-color: rgba(0, 206, 200, 0.1);
    border: 2px solid #00cec8 ;
    border-radius: 10px ;
    padding: 10px ;
    font-size: 14px ;
    width: 40vw ;
}
.report > textarea::placeholder {
    color: rgba(67, 106, 230, 0.5);
}
.add-btn {
    text-align: center;
    background-color: rgba(67, 106, 230, 1);
    border: none;
    color: white;
    border-radius: 5px;
    height: 40px ;
  }
  .input-style, .file-input-style {
    width: 40vw; /* Adjust the width as needed */
    height: 40px;
    background-color: rgba(0, 206, 200, 0.1);
    border: 2px solid #00cec8;
    border-radius: 10px;
    padding: 0 10px; /* Add padding to the input field */
    line-height: 40px; /* Ensure the input field height matches the button */
    overflow: hidden; /* Hide overflow text */
  }

  .input-style::placeholder, .file-input-style::placeholder {
    color: rgba(67, 106, 230, 0.5);
    font-size: 14px;
  }
.sub-btn {
    text-align: center;
    background-color: rgba(67, 106, 230, 1);
    border: none;
    color: white;
    border-radius: 5px;
}
  input[type=file]::file-selector-button {
    margin-right: 20px;
    border: none;
    background: #00cec8;
    padding: 10px 20px;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    transition: background .2s ease-in-out;
  }
  
  input[type=file]::file-selector-button:hover {
    background: rgba(0, 206, 200, 0.7);
  }
  .drop-container {
    position: relative;
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100px;
    padding: 20px;
    border-radius: 10px;
    border: 2px dashed #00cec8;
    color: #444;
    cursor: pointer;
    transition: background .2s ease-in-out, border .2s ease-in-out;
  }
  
  .drop-container:hover {
    background: rgba(0, 206, 200, 0.05);
  }
  
  .drop-container:hover .drop-title {
    color: #222;
  }
  
  .drop-title {
    font-family: sans-serif;
    width: 30vw;
    height: 40px ;
    color: #444;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    transition: color .2s ease-in-out;
  }
  .drop-container.drag-active {
    background: #eee;
    border-color: #111;
  }
  
  .drop-container.drag-active .drop-title {
    color: #222;
  }
</style>
