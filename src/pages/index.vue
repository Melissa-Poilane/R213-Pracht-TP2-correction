<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Pocketbase from "pocketbase";
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="300" height="125" />

    <div class="wrapper">
      <HelloWorld msg="Connexion !" />
    </div>
    <div><p><label>Email : </label><input type="email" id="email"></p>
      <p><label>Mot de passe : </label><input type="password" id="password"></p>
      <p><label>Pseudo : </label><input type="text" id="name"></p>

      <p><button v-on:click="signUp()">S'inscrire</button>
        <button v-on:click="signIn()">Se connecter</button>
        <button v-on:click="signOut()">Se déconnecter</button></p>
        
        <label id="status" style="color: aliceblue;">tu n'est pas connécté !</label>
   
      </div>
  </header>

  <main>
  
  </main>
</template>


<script>
var pocketbase_ip = " ";
if (import.meta.env.MODE === "production")
  pocketbase_ip = "http://185.216.25.68:8090";
else pocketbase_ip = "http://127.0.0.1:3000";
alert("pocketbase_ip : "+pocketbase_ip);
const pb = new Pocketbase(pocketbase_ip);

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    async signUp(){await pb.collection("users").create({
      email:document.getElementById("email").value,
      password:document.getElementById("password").value,
      passwordConfirm:document.getElementById("password").value,
      name:document.getElementById("name").value});
      document.getElementById("status").innerText="tu est inscrit ! connecte toi maintenant.";
    },
    

   async signIn(){
     try{
      await pb.collection("users").authWithPassword(
        document.getElementById("email").value,
        document.getElementById("password").value,
      );
      if(pb.authStore.baseToken !== null){
        document.getElementById("status").innerHTML="tu est connecté !";
      }
    } catch(error){
      document.getElementById("status").innerHTML= 'Erreur de connexion ! Réessaye stp';
    }
    },

    signOut(){
      pb.authStore.clear();
      document.getElementById("status").innerHTML="tu est déconnecté !";
    }
  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
