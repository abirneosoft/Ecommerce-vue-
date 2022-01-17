<template>
  <div class="container">
      <h1>My Profile</h1>
      <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email ID</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{first_name}}</td>
      <td>{{lastName}}</td>
      <td>{{email}}</td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
import {profile} from '@/common/Service';
export default {
name:"Profile",
 data() {
    return {
        first_name: "",
        last_name: "",
        email: "",
    }
 },
 mounted(){
     profile().then(res=>{
         this.first_name=res.data.profile.first_name;
         
         this.lastName=res.data.profile.last_name;
         this.email=res.data.profile.email;
         console.log(res.data.profile);
     })
        .catch(error=>{
            console.log("Something Wrong "+error)
        })
 }

};
</script>

<style>

</style>