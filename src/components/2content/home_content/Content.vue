<template>
  <div class="container-fluid contentt">
    <div class="row">
      <div
        class="col-lg-4 col-sm-6 d-flex justify-content-center"
        v-for="(item, id) in animal"
        :key="id.id"
      >
        <div class="card" style="width: 18rem">
          <div class="card-img-top img-style">
            <i :class="item.img" class="img_fix"></i>
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text p-img">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary price"
              >{{ item.price }}<sup> $</sup></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content",
  components: {},
  props: {},
  data() {
    return {
      animal: [
        { id: 1, name: "Dog", price: "79.99", img: "fa-solid fa-dog" },
        { id: 2, name: "Cat", price: "23.99", img: "fa-solid fa-cat" },
        {
          id: 3,
          name: "Frog",
          price: "15.99",
          img: "fa-solid fa-frog",
        },
        {
          id: 4,
          name: "Wolf",
          price: "250.99",
          img: "fa-brands fa-wolf-pack-battalion",
        },
        {
          id: 5,
          name: "Bird",
          price: "43.99",
          img: "fa-solid fa-crow",
        },
        {
          id: 6,
          name: "Fish",
          price: "10.99",
          img: "fa-solid fa-fish",
        },
        {
          id: 7,
          name: "Cow",
          price: "700.99",
          img: "fa-solid fa-cow",
        },
        {
          id: 8,
          name: "Spider",
          price: "35.99",
          img: "fa-solid fa-spider",
        },
        {
          id: 9,
          name: "Horse",
          price: "800.99",
          img: "fa-solid fa-horse",
        },
      ],
    };
  },
};
</script>

<style>
.contentt {
  margin-top: 50px;
  text-align: center;
}
.img_fix {
  font-size: 100px;
}
.img-style {
  text-align: center;
  outline: none;
}
.card {
  border: none;
  margin: 10px 0px auto;
  background: none;
}
.p-img {
  text-align: center;
}
.price {
  height: 100%;
  width: 100%;
  font-size: 17px;
  font-weight: 800;
  background-color: #320e3b;
  color: #7ee8fa;
}
</style>
