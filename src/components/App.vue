<template>
  <div class="container">
    <Header />
        <div class="todo-app">
            <h2>Your TO-DO list <img src="\src\assets\images.jpg" alt="just some image"></h2>
            <div class="row">
                <input type="text" v-model="newTask" id="input-box" placeholder="Add a note">
                <button @click="addTask()">Add</button>
            </div>
            <ul id="list-container">
              <li v-for="(task, index) in tasks" :key="index" :class="{checked:task.checked}" @click="toggleTask(index)">
                {{ task.text }}
                <span @click.stop="removeTask(index)">×</span>
              </li>                
            </ul>
        </div>
   </div>

  <RouterView />
</template>

<script setup>
import Header from './Header.vue';
import { ref, onMounted } from 'vue'
const name = ref("walker");
const newTask = ref("")
const tasks = ref([])

function addTask()
{
  if (newTask.value.trim() === '') {
        alert("You must write something!");
      } else {
        tasks.value.push({ text: newTask.value, checked: false });
        newTask.value = '';
        saveData();
      }
}
    function saveData() 
    {
      localStorage.setItem("tasks", JSON.stringify(tasks.value));
    }
    function removeTask(index) 
    {// Method to remove a task from the `tasks` array based on its index.
      tasks.value.splice(index, 1);
      saveData();
    }
    function toggleTask(index) 
    {// Method to toggle the checked state of a task
      tasks.value[index].checked = !tasks.value[index].checked;
      saveData();
    }
    function loadTasks()
    {
      const savedTasks = localStorage.getItem("tasks");
      if (savedTasks) {
        tasks.value = JSON.parse(savedTasks);
      }
    } 

onMounted(() => {
  loadTasks()
})

</script>


<style>
 #heading {
    font-family: 'Times New Roman', Times, serif;
    width: 100%;
    background-color: #fff;
    color: black; /* Dark text color */
    padding: 10px;
    text-align: center;
  }
  .container{
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(135deg, #153677, #4e085f);
    padding: 10px;
  }
  .todo-app{
    width: 100%;
    max-width: 540px;
    background-color: #fff;
    margin: 100px auto 20px;
    padding: 40px 30px 70px;
    border-radius: 10px;
}
.todo-app h2{
    color: #002765;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
.todo-app h2 img{
    width: 30px;
    margin-left: 10px;
}
.row{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #edeef0;
    border-radius: 30px;
    padding-left: 20px;
    margin-bottom: 25px;
}
input{
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    padding: 10px;
}
button{
    border: none;
    outline: none;
    padding: 16px 50px;
    background: #ff5945;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    border-radius: 40px;
}
ul li{
    list-style: none;
    font-size: 17px;
    padding: 12px 8px 12px 50px;
    user-select: none;
    cursor: pointer;
    position: relative;
}
ul li::before{
    content: '';
    position: absolute;
    height: 28px;
    width: 28px;
    border-radius: 50%;
    background-image: url(/src/assets/images2.png);
    background-size: cover;
    background-position: center;
    top: 12px;
    left: 8px;
}
ul li.checked{
    color: #555;
    text-decoration: line-through;
}
ul li.checked::before{
    background-image: url(/src/assets/checkedimage.png);
}
ul li span{
    position: absolute;
    right: 0;
    top: 5px;
    width: 40px;
    height: 40px;
    font-size: 22px;
    color: #555;
    line-height: 40px;
    text-align: center;
}
ul li span:hover{
    background: #edeef0;
}
</style>
