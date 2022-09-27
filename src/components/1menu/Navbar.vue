<template>
  <div id="container-fluid">
    <div id="navbar" class="row-fluid">
      <div id="navbar-links">
        <router-link class="rute" to="/"
          ><i class="fa-solid fa-shield-dog brand"></i
        ></router-link>
        <router-link class="rute" to="/">HOME</router-link>
        <!-- <router-link class="rute" to="/news">NEWS</router-link> -->
        <a
          href="https://www.nbcnews.com/animal-news"
          target="_blank"
          class="rute"
          >NEWS</a
        >
        <router-link class="rute" to="/about">ABOUT</router-link>
        <router-link class="rute" to="/contact">CONTACT</router-link>
      </div>
      <div id="search">
        <input class="search_input" type="text" placeholder="Search..." />
        <i class="fa-solid fa-magnifying-glass search_btn"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
  props: {},
};
</script>

<style>
#navbar {
  display: flex;
  background-color: #320e3b;
  justify-content: space-between;
  height: 80px;
}
#navbar-links {
  display: flex;
  font-size: 25px;
  margin: 20px;
  font-weight: 800;
}

@media (max-width: 550px) {
  #navbar-links {
    font-size: 22px;
  }
  .rute {
    padding-top: 5px;
  }
  .brand {
    margin-top: -5px;
  }
}
.brand {
  color: white;
  margin-right: 10px;
  font-size: 40px;
}
.brand:hover {
  color: #966b9d;
  cursor: pointer;
}
.rute {
  text-decoration: none;
  margin: 0px 10px;
  color: #a6cfd5;
}
.rute:hover {
  color: #966b9d;
}
#search {
  display: flex;
  padding: 19px 0px;
  margin-right: 20px;
}
.search_input {
  border-radius: 5px;
  background: #633069;
  color: #a6cfd5;
  font-weight: 700;
  padding-left: 10px;
  padding: 20px;
  border: 1px solid;
  border-color: #320e3b;
}
.search_input:focus {
  background: #431849;
  outline: none;
  color: #a6cfd5;
}
.search_btn {
  color: white;
  font-size: 25px;
  margin: 9px 10px;
  cursor: pointer;
}

@media (max-width: 730px) {
  #search {
    display: none;
  }
  #navbar {
    justify-content: center;
  }
}

::placeholder {
  color: #02ddff;
}
</style>
