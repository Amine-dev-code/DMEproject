<template>
  <div style="display: flex; flex-direction: column; align-items: center;" class="Container">
  <h1 style="text-align: center;">
    Appointment data
  </h1>
    <form action="" class="doc-app-form-container">
        <div>
            <input type="text" class="input-style" placeholder="diagnosis" id="diagnosis" v-model="diagnosis" @keyup.enter.prevent="addDiag" />
            <div v-if="diagnosises.length > 0" class="added-container">
              <div v-for="diagnosis in diagnosises" :key="diagnosis" class="added">
                {{ diagnosis }}
              </div> 
            </div>
        </div>
        <hr style="width: 300px ; border: 1px solid rgba(67, 106, 230, 0.5);" />
        <div>
            <input v-model="perscription" type="text" class="input-style" placeholder="perscription" id="perscription" @keyup.enter="addPers">
            <div class="added-container" v-if="perscriptions.length > 0">
              <div class="added" v-for="perscription in perscriptions" :key="perscription">
                {{ perscription }}
              </div>
            </div>
        </div>
        <hr style="width: 300px ; border: 1px solid rgba(67, 106, 230, 0.5);" />
        <textarea class="report" v-model="report" name="" id="" placeholder="enter report" style="height: 30vh; padding-left: 10px;"/>
        <label for="images" class="drop-container">
          <span class="drop-title">Drop files here</span>
            or
          <input type="file" id="file-input" @change="handleFileChange">
        </label>
        <button type="submit" class="sub-btn">Submit</button>
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
      event
    },
    addDiag(event) {
      if(event.key == 'Enter' && this.diagnosis && !this.diagnosises.includes(this.diagnosis)) {
        this.diagnosises.push(this.diagnosis)
      }
      this.diagnosis =''
    },
    addPers(event) {
      if(event.key == 'Enter' && this.perscription && !this.perscriptions.includes(this.perscription)) {
        this.perscriptions.push(this.perscription)
      }
      this.perscription =''
    }
  },
  data() {
    return {
      report: '',
      perscription: '',
      perscriptions: [],
      diagnosis: '',
      diagnosises: []
    };
  }
};
</script>

<style>
.doc-app-form-container {
  display: flex ;
  flex-direction: column;
  align-items: center ;
  justify-content: center;
  gap: 10px;
}
.doc-app-form-container > div {
  width: 40vw; 
  display: flex; 
  justify-content: center; 
  flex-direction: column;
}
.report {
  background-color: rgba(0, 206, 200, 0.1);
  border: 2px solid #00cec8 ;
  border-radius: 10px ;
  font-size: 14px ;
  padding : 10px;
  box-sizing: border-box;
}
.report::placeholder {
  color: rgba(67, 106, 230, 0.5);
}
.input-style {
  height: 40px;
  background-color: rgba(0, 206, 200, 0.1);
  border: 2px solid #00cec8;
  border-radius: 10px;
  overflow: hidden; /* Hide overflow text */
  padding-left: 10px;
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
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    padding-top: 20px ;
    padding-bottom: 20px;
    width: 40vw;
    border-radius: 10px;
    border: 2px dashed #00cec8;
    color: #444;
    cursor: pointer;
    transition: background .2s ease-in-out, border .2s ease-in-out;
  }
  
  .drop-container:hover {
    background: rgba(0, 206, 200, 0.05);
  }
  .drop-title {
    font-family: sans-serif;
    width: auto;
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
.added {
  height: 30px;
  width: auto;
  background-color: rgba(0, 206, 200, 0.1);
  color: rgba(0, 206, 200, 1);
  border-radius: 10px;
  border: none ;
  display: flex;
  padding: 5px ;
  align-items: center;
  justify-content: center;
  margin-right: 5px ;
}
.added-container {
  display: flex; 
  flex-direction: row;
  height: 40px ;
  width: auto;
  margin-top: 5px;
}
.Container div, .Container textarea {
  width: 100%;
}
</style>
