
<script>
import {auth,eventHub} from '../db/firebase'

export default {
  name: 'Logout',
  methods: {
    logout(){
      var self = this
      auth.signOut().then(function() {
        self.$router.replace('/login')
      }, function(error) {
        alert('Error Signing Out')
      })
    }
  },
  created(){
    this.logout()
  }
}
</script>
