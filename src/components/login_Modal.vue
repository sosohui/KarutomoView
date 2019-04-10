<template>
  <div>
    <v-btn
      dark
      flat
      color="black"
      @click.stop="dialog = true"
    >
      User
    </v-btn>
    <v-dialog
      v-model="dialog"
      max-width="400"
    >
      <v-card>
        <div align="center">
        <v-img
          :src="require('../assets/KARUTOMO_LOGO.png')"
          width="220"
        ></v-img>
        </div>
        <span style="width='100px'">
          <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="p-4 font-weight-bold">
            <b-form-group
              id="input-group-1"
              label="ID :"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.id"
                type="id"
                required
                placeholder="Enter ID"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Password :"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.password"
                required
                placeholder="Enter Password"
              ></b-form-input>
            </b-form-group>
          </b-form>
        </span>
        <v-card-actions>
        <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialog = false"
            class="m-2"
          >
            Login
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialog: false,
        form: {
          id: '',
          password: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.id = ''
        this.form.password = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style>

</style>
