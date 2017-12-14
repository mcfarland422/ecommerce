import axios form 'axios';

export default function(formData){
  console.log("Login action running")
  return {
    type: "AUTH_ACTION"
  }
}
