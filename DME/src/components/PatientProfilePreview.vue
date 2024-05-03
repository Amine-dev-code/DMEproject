<template>
    <div class="profile-preview-container">
        <div style="display: flex; flex-direction: column;">
            <p class="name">
                full name: 
            </p>
            <p class="gender">
                gender: 
            </p>
            <p class="blood">
                blood type: 
            </p>
            <p class="birthday">
                birth date: 
            </p>
            <p class="phone">
                phone number: 
            </p>
            <p class="address">
                address:
            </p>
        </div>
        <div style="display: flex; flex-direction: column;">
            <p>
                {{  }} 
            </p>
            <p>
                {{  }} 
            </p>
            <p>
                {{  }}
            </p>
            <p>
                {{  }}
            </p>
            <p>
                {{   }}
            </p>
            <p>
                {{  }}
            </p>
        </div>
    </div>
</template>
<script>
export default {
    props: ['patient'],
    data(){
    return{
    
    }
  },
  methods:{
    async fetchUserProfile(){
      try{
        const res= await fetch(`http://localhost:3000/api/patientInfo/${this.patient._id}`);
          const data=await res.json()

          
      }catch(error){
        console.log(error.message)
      }
    }
  },
  async created(){
    this.fetchUserProfile()
  }
    
}
</script>
<style>
.profile-preview-container {
    display: flex; 
    flex-direction: row; 
    justify-content: space-between; 
    width: 20vw; 
    background-color: white; 
    border-radius: 10px; 
    border: 2px  solid #00cec8; 
    padding: 10px ; 
    color : #2a4b66;
    height: min-content;
}
</style>