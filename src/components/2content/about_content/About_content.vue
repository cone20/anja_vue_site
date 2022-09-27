<template>
  <div class="container-fluid main_center">
    <div class="row main_selection">
      <h1 class="team">Team leaders</h1>
      <div
        class="col-sm-12 col-md-4 items_tri"
        v-for="(item, index) in person"
        :key="index.id"
      >
        <div class="person_name zoom_person">
          {{ item.name }}
        </div>

        <img class="person" :src="item.img_url" />
        <div class="person_info">
          {{ text }}
        </div>
        <div class="social_brand">{{ text1 }} of {{ item.name }}</div>
        <div class="socials" v-for="(link, index) in social" :key="index.id">
          <a :href="link.link" target="_blank">
            <i :class="link.class" class="zoom_app"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h1 class="location">Location of the shop</h1>
      </div>
    </div>
    <div class="row location-row">
      <div class="col-lg-6 col-md-12">
        <div class="row1">
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                width="500"
                height="300"
                id="gmap_canvas"
                src="https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1sulica+lole+ribara!6i13"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe
              ><a href="https://123movies-to.org"></a><br />
              ><a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-12">
        <div class="about_us_text">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            harum quae eum, in natus consectetur enim porro pariatur sed
            repellat similique rerum deserunt iure at itaque, laboriosam numquam
            nam unde.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Libero harum quae eum, in natus consectetur enim porro pariatur sed
            repellat similique rerum deserunt iure at itaque, laboriosam numquam
            nam unde.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Libero harum quae eum, in natus consectetur enim porro pariatur sed
            repellat similique rerum deserunt iure at itaque, laboriosam numquam
            nam unde.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About_content",
  components: {},
  data() {
    return {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos dolores perspiciatis maiores! Sint blanditiis eum animi architecto dolore iusto illo. Lorem, ipsum.K Lorem.",
      text1: "Social networks",
      person: [
        {
          id: 1,
          name: "Alex",
          img_url:
            "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
        },
        {
          id: 2,
          name: "Emma",
          img_url:
            "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        },
        {
          id: 3,
          name: "Sophia",
          img_url:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        },
      ],
      social: [
        {
          link: "http://www.instagram.com",
          class: "fa-brands fa-instagram social_media",
        },
        {
          link: "https://www.youtube.com/",
          class: "fa-brands fa-youtube social_media",
        },
        {
          link: "http://www.gmail.com",
          class: "fa-solid fa-envelope-circle-check social_media",
        },
        {
          link: "https://www.snapchat.com/",
          class: "fa-brands fa-snapchat social_media",
        },
        {
          link: "https://twitter.com/login",
          class: "fa-brands fa-twitter social_media",
        },
      ],
    };
  },
};
</script>

<style>
.team {
  color: white;
  font-size: 35px;
  font-weight: 900;
}

.main_selection {
  border-top: 15px solid #20a4f3;
  border-bottom: 15px solid #20a4f3;
  border-top-left-radius: 200px;
  border-bottom-left-radius: 200px;
  border-top-right-radius: 200px;
  border-bottom-right-radius: 200px;
  padding-top: 30px;
  margin-bottom: 20px;
}
.main_center {
  text-align: center;
  justify-content: center;
  padding-top: 30px;
  background-color: #1f2041;
}
.person {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  scale: 0.8;
  filter: none;
  cursor: pointer;
}
.person_info {
  color: white;
  font-weight: 700;
  text-align: justify;
  margin: auto;
  margin-bottom: 30px;
  width: 80%;
}
.person_name {
  color: white;
  font-weight: 800;
  font-size: 30px;
  transition: 0.5s ease-in-out;
}
.person_name:hover {
  color: #5e0035;
  filter: blur(#5e0035);
  text-shadow: #fff 0px 0px 5px, #fff 0px 0px 10px, #fff 0px 0px 15px,
    #ff2d95 0px 0px 20px, -2px -2px 20px rgba(206, 206, 206, 0);
}
.socials {
  display: inline-block;
  margin: 30px 10px 50px 10px;
  justify-content: center;
}
.social_brand {
  color: white;
  font-size: 25px;
  font-weight: 500;
}
.social_brand:hover {
  scale: 1.2;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}
.zoom_app:hover {
  scale: 1.2;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}
.zoom_person:hover {
  scale: 1.2;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}
.location {
  color: white;
  font-size: 35px;
  font-weight: 900;
}

/* Map css */
.mapouter {
  height: 300px;
  width: 500px;
  border-radius: 50%;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 300px;
  width: 500px;
  border-radius: 5%;
}
.row1 {
  display: flex;
  justify-content: center;
  margin: 15px 0px 0px 0px;
}
.about_us_text {
  position: relative;
  color: white;
  padding-top: 20px;

  text-align: justify;
}
@media (min-width: 1500px) {
  .about_us_text {
    padding-right: 50px;
    margin-top: 50px;
  }
}
@media (max-width: 1500px) {
  .about_us_text {
    margin: 0px 10%;
  }
}
.location-row {
  padding-bottom: 20px;
}
</style>
