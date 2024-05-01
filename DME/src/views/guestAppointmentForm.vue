<template>
  <div>
    <form action="" class="guest-form-container" @submit.prevent="handleSubmition">
      <div class="element">
        <label for="name">Full name</label>
        <input type="text" name="name" v-model="name" />
      </div>
      <div class="element">
        <label for="phone">Phone number</label>
        <input type="tel" v-model="phone" />
      </div>
      <div class="element">
        <label for="email">Email</label>
        <input type="email" v-model="email" />
      </div>
      <div class="last-row" style="display: flex; flex-direction: row">
        <div class="element">
          <select name="doctor" id="" v-model="doctorId">
            <option value="">pick a doctor</option>
            <option v-for="doctor in doctors" :key="doctor.id" value="doctor.id">
              {{ doctor.name }}
            </option>
          </select>
        </div>
        <div class="">
          <label for="date">Date</label>
          <input type="date" name="date" v-model="date" class="date" />
        </div>
      </div>
      <button class="book-btn" @click.prevent="print">book appointment</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      date: '',
      doctorId: '',
      doctors: [
        {
          id: 1,
          name: 'l3amid'
        },
        {
          id: 2,
          name: 'lm9wd'
        },
        {
          id: 3,
          name: 'lm36ob'
        }
      ]
    }
  },
  methods: {
    print() {
      console.log(this.name)
      console.log(this.phone)
      console.log(this.email)
      console.log(this.date)
    }
  }
}
</script>

<style>
.guest-form-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 30vw;
  height: min-content;
  align-items: center;
}
.guest-form-container input::placeholder {
  padding-left: 10px;
  color: rgba(0, 206, 200, 0.5);
}
.guest-form-container input {
  padding-left: 10px;
  font-size: 14px;
}
.guest-form-container label {
  color: #2a4b66;
}
.element {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.element > input,
.date {
  height: 40px;
  border-radius: 5px;
  border: 2px solid rgba(0, 206, 200, 0.5);
}
.element > select {
  height: 40px;
  border-radius: 5px;
  border: 2px solid rgba(0, 206, 200, 0.5);
  width: 15vw;
  padding-left: 10px;
}
.element > input {
  width: 30vw;
}
.book-btn {
  height: 40px;
  width: 15vw;
  color: white;
  background-color: rgba(67, 106, 230, 1);
  border-radius: 5px;
  border: none;
  font-size: 14px;
  margin-top: 15px;
}
.book-btn:hover {
  background-color: rgba(67, 106, 230, 0.8);
}
.book-btn:active {
  background-color: rgba(67, 106, 230, 0.5);
}
.last-row {
  width: 31vw;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
}
.last-row > div {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.last-row > div > select {
  margin-top: 18px;
  height: 44px;
}
</style>
