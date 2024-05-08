<template>
  <div style="display: flex; flex-direction: column; align-items: center" class="Container">
    <p style="color: #2a4b66; text-align: center; font-size: 30px">Appointment Data Enrollment</p>
    <form @keypress.enter.prevent="$event.stopPropagation()" class="doc-app-form-container" @submit.prevent="" enctype="multipart/form-data">
      <div>
        <input
          type="text"
          class="input-style"
          placeholder="diagnosis"
          v-model="diagnosis"
          @keyup.enter="addDiag"
        />
        <div v-if="medicalRecord.diagnosises.length > 0" class="added-container">
          <div v-for="diagnosis in medicalRecord.diagnosises" :key="diagnosis" class="added">
            {{ diagnosis }}
          </div>
        </div>
      </div>
      <hr style="width: 300px; border: 1px solid rgba(67, 106, 230, 0.5)" />
      <div>
        <input
          v-model="perscription"
          type="text"
          class="input-style"
          placeholder="perscription"
          id="perscription"
          @keyup.enter="addPers"
        />
        <div class="added-container" v-if="medicalRecord.prescriptions.length > 0">
          <div class="added" v-for="perscription in medicalRecord.prescriptions" :key="perscription">
            {{ perscription }}
          </div>
        </div>
      </div>
      <hr style="width: 300px; border: 1px solid rgba(67, 106, 230, 0.5)" />
      <textarea
        class="report"
        v-model="medicalRecord.rapport"
        name=""
        id=""
        placeholder="enter report"
        style="height: 30vh; padding-left: 10px"
      />
      <label for="images" class="drop-container">
        <span class="drop-title">Drop files here</span>
        or
        <input type="file" name="avatar" id="file-input" @change="handleFileChange" multiple >
      </label>
      <button type="submit" class="sub-btn" id="submitform" @click.prevent="sendMedicalRecord">Submit</button>
    </form>
  </div>
</template>
<script>

export default {
  props:['patientId'],
  data() {
    return {
      perscription: '',
      diagnosis: '',
      medicalRecord:{
        rapport: '',
        prescriptions:[],
        diagnosises: []
      },
      rapportError:'',
      diagnosisError:'',
      prescriptionError:''//for validation
    }
  },
  mounted() {
    // const dropContainer = document.getElementById('drop-container')
    // const fileInput = document.getElementById('file-input')
    // dropContainer.addEventListener(
    //   'dragover',
    //   (e) => {
    //     // prevent default to allow drop
    //     e.preventDefault()
    //   },
    //   false
    // )
    // dropContainer.addEventListener('dragenter', () => {
    //   dropContainer.classList.add('drag-active')
    // })
    // dropContainer.addEventListener('dragleave', () => {
    //   dropContainer.classList.remove('drag-active')
    // })
    // dropContainer.addEventListener('drop', (e) => {
    //   e.preventDefault()
    //   dropContainer.classList.remove('drag-active')
    //   fileInput.files = e.dataTransfer.files
    // })
  },
  methods: {
    handleFileChange(event) {
      // Handle file change if necessary
      event
    },
    addDiag(event) {
      console.log('addDiag called')
      if (event.key == 'Enter' && this.diagnosis) {
        if (!this.medicalRecord.diagnosises.includes(this.diagnosis)) {
          this.medicalRecord.diagnosises.push(this.diagnosis)
        }
      }
      this.diagnosis = ''
    },
    addPers(event) {
      if (event.key == 'Enter' && this.perscription) {
        if (!this.medicalRecord.prescriptions.includes(this.perscription)) {
          this.medicalRecord.prescriptions.push(this.perscription)
        }
      }
      this.perscription = ''
    },
    async sendMedicalRecord(){
      try{
        const res=await fetch (`http://localhost:3000/api/postVisit/${this.patientId}/66325051e0e2a989a8ca3cf4`,{
          method:'post',
          body:JSON.stringify(this.medicalRecord),
          headers:{
          'content-type': 'application/json',
        }
        });
        const data=await res.json()
        if(data.status=='success'){
          this.medicalRecord.diagnosises=[];
          this.medicalRecord.rapport='';
          this.medicalRecord.prescriptions=[];
          await this.sendDocument(data.visit._id);
          console.log('eys')
        }
      }catch(error){
        console.log(error.message)
      }
    },
    async sendDocument(id){
      try{
        const formData = new FormData();
        const fileInput = document.querySelector('input[type="file"]');
        const files = fileInput.files; // Get the FileList object

// Iterate over each file in the FileList and append it to the FormData object
for (let i = 0; i < files.length; i++) {
  formData.append('avatar', files[i]);
}

  const res=await fetch (`http://localhost:3000/api/upload/${id}`,{
          method:'post',
          body:formData
        })


        
      }catch(error){
        console.log(error)
      }
    }
  }

}
</script>

<style scoped>
.doc-app-form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}
.doc-app-form-container > div {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.report {
  border: 2px solid #00cec8;
  border-radius: 10px;
  font-size: 14px;
  padding: 10px;
  box-sizing: border-box;
}
.report::placeholder {
  color: rgba(67, 106, 230, 0.5);
}
.input-style {
  height: 40px;
  /*background-color: rgba(0, 206, 200, 0.1);*/
  border: 2px solid #00cec8;
  border-radius: 10px;
  overflow: hidden; /* Hide overflow text */
  padding-left: 10px;
}
.input-style::placeholder,
.file-input-style::placeholder {
  color: rgba(67, 106, 230, 0.5);
  font-size: 14px;
}
.sub-btn {
  text-align: center;
  background-color: rgba(67, 106, 230, 1);
  border: none;
  color: white;
  border-radius: 10px;
  width: 10vw;
  height: 40px;
  font-size: 14px;
  margin-bottom:10px
}
.sub-btn:hover {
  background-color: rgba(67, 106, 230, 0.8);
}
input[type='file']::file-selector-button {
  margin-right: 20px;
  border: none;
  background: #00cec8;
  padding: 10px 20px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
}

input[type='file']::file-selector-button:hover {
  background: rgba(0, 206, 200, 0.7);
}
.drop-container {
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 150px;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 40vw;
  border-radius: 10px;
  border: 2px dashed #00cec8;
  color: #444;
  cursor: pointer;
  transition:
    background 0.2s ease-in-out,
    border 0.2s ease-in-out;
}

.drop-container:hover {
  background: rgba(0, 206, 200, 0.05);
}
.drop-title {
  font-family: sans-serif;
  width: auto;
  height: 40px;
  color: #444;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  transition: color 0.2s ease-in-out;
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
  background-color: rgba(0, 206, 200, 0.1);
  color: rgba(0, 206, 200, 1);
  border-radius: 10px;
  border: none;
  display: flex;
  padding: 5px;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  width: min-content;
  flex: 1;
}
.added-container {
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  height: 40px;
  width: min-content;
  margin-top: 5px;
  flex: 1;
  row-gap: 5px;
}
.Container div,
.Container textarea {
  width: 40vw;
}
</style>
