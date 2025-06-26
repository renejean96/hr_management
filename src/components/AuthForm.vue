// Ready for Ant Design Vue redesign

<script>
import PasswordInput from './PasswordInput.vue'

export default {
  name: 'AuthForm',
  components: { PasswordInput },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    onSubmit() {
      // Basic validation example
      if (!this.firstName || !this.lastName || !this.email || !this.password || !this.confirmPassword) {
        alert('Please fill in all fields.');
        return;
      }
      if (this.password !== this.confirmPassword) {
        alert('Passwords do not match.');
        return;
      }
      // Add further validation and submission logic here
      this.$router.push('/home');
    }
  }
}
</script> 