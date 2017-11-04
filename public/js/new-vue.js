var app = new Vue({
      el: '#app',
      // data: {
      //   message: 'Hello Vue!',
      //   students: []
      // },
      created(){
      	axios.get("http://localhost:8080/api/students")
      	.then(response=>{
      		this.students = response.data;
      		console.log(response.data)

      	})
      },
      data(){
        return{
          userData: {
            first_name: "",
            last_name: "",
            phone: 080,
            age: 0,
            school: "",
            course: ""
          },
          message: 'Hello vue',
          students: [],
          student: {},        } 
      },
      methods: {
        register: function(){
          console.log(this.userData);
          let self = this;
          axios.post("http://localhost:8080/api/student", self.userData)
          .then(function(response){
            console.log(response.data);
            self.students.push(self.userData)
          })
          .catch(function(error){
            console.log(error);

          });
          $('#registerModal .close').click();
        },
        

        update: function(){
          console.log(this.userData);
          let self = this;
          let user = {
            first_name: userData.first_name,
            last_name: userData.last_name,
            phone: userData.phone,
            age:userData.age,
            school: userData.school,
            course: userData.course
          }
          axios.put("http://localhost:8080/api/school/"+ self.userData._id,)
          .then(function(response){
            console.log(response.data);
            self.students.forEach(function(stud, idx){
              if(stud._id == id){ 
                stud= userData;
              }
            })
          })
          .catch(function(error){
            console.log(error);

          });
          $('#updateModal .close').click();
        },

        deleteStudent: function(){
          console.log(this.userData);
          let self = this;
          axios.delete("http://localhost:8080/api/school/" + self.userData._id)
          .then(function(response){
            console.log(response.data);
            self.students.forEach(function(stud, idx){
              if(stud._id == self.userData._id){ 
                self.students.splice(idx, 1);
              }
            })
          })
          .catch(function(error){
            console.log(error);

          });
          $('#deleteModal .close').click();
        },
        selectStudent: function(id){
          let self = this;
            let newStudent = self.students.filter(function(stud){
              return stud._id == id;
            })
            this.userData = newStudent[0];
        },
      },
   })