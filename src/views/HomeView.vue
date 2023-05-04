<template>
  <!-- navbar -->
  <NavbarCompoment></NavbarCompoment>

  <!-- section 1: title -->

  <section id="title">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6">
          <div class="subdiv">
            <h1>
              Welcome to <span style="color: #f1c9a7">{{ message }}</span>
            </h1>
          </div>
          <div class="subdiv">
            <router-link class="btn start" to="/sign-up"
              >Get Started</router-link
            >
          </div>
        </div>
        <div class="title-img col-lg-6">
          <img
            class="Header-img"
            src="../assets/imagesSpring.png"
            alt="codeblog"
          />
        </div>
      </div>
    </div>
  </section>
  <!-- section 2 : articles -->

  <section id="articles">
    <div class="container-fluid home">
      <div class="row">
        <!-- Recent Article -->

        <div class="col-lg-9 mb-5 mb-lg-0">
          <div class="section-title">
            <h2>Recent Articles</h2>
          </div>
          <ArticleCard :topics="Articles" />
        </div>
        <div class="col-lg-3">
          <NewsLetterpost></NewsLetterpost>

          <!-- Who Follow -->

          <div class="my-3 p-3 rounded shadow-sm widgets1">
            <h2 class="widget1-title">Suggested people to follow</h2>
            <whoFollow :whoFollow="whoFollow" />
            <small class="d-block text-right mt-3">
              <a href="#" class="follow">All suggestions</a>
            </small>
          </div>
          <!-- popular Topics -->
          <div class="widgets1">
            <h2 class="widget1-title">popular Topics</h2>
            <RecommendedTopics :topics="recommendedTopic" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <div style="text-align: center">
    <button class="btn addArticle" style="text-align: center" @click="doLogout">
      logout
    </button>
  </div>

  <!-- footer -->

  <FooterCompoment></FooterCompoment>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import ArticleCard from "@/components/ArticleCard.vue"; // @ is an alias to /src
import RecommendedTopics from "@/components/RecommendedTopics.vue"; // @ is an alias to /src
import whoFollow from "@/components/whoFollow.vue"; // @ is an alias to /src
import NewsLetterpost from "@/components/NewsLetterpost.vue"; // @ is an alias to /src
import NavbarCompoment from "@/components/NavbarCompoment.vue"; // @ is an alias to /src
import FooterCompoment from "@/components/FooterCompoment.vue"; // @ is an alias to /src
import api from "@/service/apiClient";
import { logout } from "@/service/AuthenticationService";

export default defineComponent({
  name: "HomeView",
  components: {
    NavbarCompoment,
    ArticleCard,
    NewsLetterpost,
    RecommendedTopics,
    whoFollow,
    FooterCompoment,
  },

  setup() {
    let name: any = ref("mohamed");
    api.get("/test").then((response) => {
      name = response.data;
    });

    const doLogout = () => {
      logout()
        .then(() => {
          window.location.href = "/login";
        })
        .catch((error) => {
          console.log(error);
        });
    };

    return {
      name,
      doLogout,
    };
  },
  data() {
    return {
      recommendedTopic: [
        {
          id: 1,
          name: "Technology",
          url: "https://medium.com/topic/technology",
        },
        {
          id: 2,
          name: "Design",
          url: "https://medium.com/topic/design",
        },
        {
          id: 3,
          name: "Culture",
          url: "https://medium.com/topic/culture",
        },
        {
          id: 4,
          name: "Entrepreneurship",
          url: "https://medium.com/topic/entrepreneurship",
        },
        {
          id: 5,
          name: "Politics",
          url: "https://medium.com/topic/politics",
        },
      ],
      Articles: [
        {
          id: 1,
          name: "Technology, client-server communication protocole and js prototype",
          description:
            "ffffff REST API is a widely used client-server communication protocol, but it has limitations when dealing with clients such as web iOS, Android, smart devices, etc ffvfvfff gggg gbgbgbgbg bgbg.",
          imageUrl:
            "https://reflectoring.io/images/stock/0129-node-graphql-1200x628-branded_hu946ea48a063c7bb127fbc15b48596a23_203637_650x0_resize_q90_box.jpg",
          url: "https://medium.com/topic/technology",
          autour: "mohmaed bougra",
          topic: "Spring",
          date: "March 22, 2023",
          reader: 1225,
        },
        {
          id: 2,
          name: "Design",
          description:
            "Explore the world of design with inspiring articles and tutorials. Ut occaecat voluptate ullamco eiusmod. Dolore commodo tempor velit Lorem aliquip. Non tempor nulla ullamco sit ea et incididunt nulla magna aliqua id ipsum veniam. Aliquip aliqua pariatur voluptate eiusmod adipisicing velit culpa quis incididunt ex quis. Elit adipisicing commodo elit aliquip nulla consequat laboris ullamco tempor Lorem laboris tempor. Non anim nulla reprehenderit ad deserunt adipisicing. Proident adipisicing eiusmod deserunt excepteur labore ullamco occaecat veniam elit id incididunt qui mollit.",
          imageUrl:
            "https://reflectoring.io/images/stock/0129-node-graphql-1200x628-branded_hu946ea48a063c7bb127fbc15b48596a23_203637_650x0_resize_q90_box.jpg",
          url: "https://medium.com/topic/design",
          autour: "ikram ckiih",
          topic: "java",
          date: "March 22, 2023",
          reader: 1225,
        },
        {
          id: 3,
          name: "Culture",
          description:
            "Discover new perspectives on culture, arts, and society. new perspectives on culture, arts, and societ ",
          imageUrl:
            "https://reflectoring.io/images/stock/0129-node-graphql-1200x628-branded_hu946ea48a063c7bb127fbc15b48596a23_203637_650x0_resize_q90_box.jpg",
          url: "https://medium.com/topic/culture",
          autour: "hamza ",
          topic: "Spring",
          date: "March 22, 2023",
          reader: 1225,
        },
        {
          id: 4,
          name: "Entrepreneurship",
          description:
            "Learn from successful entrepreneurs and start your own business.",
          imageUrl:
            "https://reflectoring.io/images/stock/0129-node-graphql-1200x628-branded_hu946ea48a063c7bb127fbc15b48596a23_203637_650x0_resize_q90_box.jpg",
          url: "https://medium.com/topic/entrepreneurship",
          autour: "mohmaed rafa",
          topic: "JEE",
          date: "March 22, 2023",
          reader: 1225,
        },
        {
          id: 5,
          name: "Politics",
          description: "Stay informed on politics, policy, and global issues.",
          imageUrl:
            "https://reflectoring.io/images/stock/0129-node-graphql-1200x628-branded_hu946ea48a063c7bb127fbc15b48596a23_203637_650x0_resize_q90_box.jpg",
          url: "https://medium.com/topic/politics",
          autour: "mohmaed bougra",
          topic: "Spring",
          date: "March 22, 2023",
          reader: 1225,
        },
        {
          id: 6,
          name: "Politics",
          description: "Stay informed on politics, policy, and global issues.",
          imageUrl:
            "https://reflectoring.io/images/stock/0129-node-graphql-1200x628-branded_hu946ea48a063c7bb127fbc15b48596a23_203637_650x0_resize_q90_box.jpg",
          url: "https://medium.com/topic/politics",
          autour: "mohmaed bougra",
          topic: "Spring",
          date: "March 22, 2023",
          reader: 1225,
        },
      ],
      whoFollow: [
        {
          name: "med bougra",
          username: "medbougra",
          imageUrl: "https://randomuser.me/api/portraits/men/29.jpg",
          url: "#",
        },
        {
          name: "ikram chkih",
          username: "ikrCHKIH21",
          imageUrl: "https://randomuser.me/api/portraits/men/30.jpg",
          url: "#",
        },
        {
          name: "wade fedef",
          username: "user2119",
          imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
          url: "#",
        },
        {
          name: "wadg sadd",
          username: "wadgsadd2",
          imageUrl: "https://randomuser.me/api/portraits/men/31.jpg",
          url: "#",
        },
      ],
      message: "",
    };
  },
  methods: {
    typeWriter() {
      var i = 0;
      var welcomeText = "CodeBlog";
      var bonjourText = "Your Ultimate Destination for All Things Coding!";
      var speed = 120;

      setInterval(() => {
        if (i < welcomeText.length) {
          this.message += welcomeText.charAt(i);
        } else if (i === welcomeText.length) {
          this.message = "";
        } else if (i < welcomeText.length + bonjourText.length) {
          this.message += bonjourText.charAt(i - welcomeText.length - 1);
        } else {
          this.message = "";
          i = -1;
        }
        i++;
      }, speed);
    },
  },
  mounted() {
    this.typeWriter();
  },
});
</script>
<style scoped>
h1 {
  color: #e4e1ea;
}
#articles {
  position: relative;
}

.follow {
  color: #d7b8ff;
}
.follow:hover {
  color: #e4e1ea !important;
}
.Header-img {
  width: 82%;
  right: 0px;
}
.start {
  background-color: #e4e1ea;
  color: #372f42;
  border-radius: 9px;
}
.start:hover {
  color: #e4e1ea;
  background-color: #372f42;
}
.widgets1 {
  background: #372f42;
  color: #d7b8ff;
  border-radius: 6px;
  padding: 15px;
  margin-bottom: 30px;
}
#title {
  background: rgb(90, 81, 142);
  background: linear-gradient(
    0deg,
    rgba(90, 81, 142, 1) 0%,
    rgba(55, 47, 66, 1) 100%
  );
}
.widget1-title {
  margin-bottom: 45px;
  text-align: center;
}
.section-title {
  margin-bottom: 45px;
  position: relative;
  z-index: 1;
}
.subdiv {
  height: 50%;
}
</style>
