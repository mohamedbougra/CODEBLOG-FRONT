<template>
  <section id="title">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6">
          <div class="subdiv">
            <h1 class="header1">Welcome to CodeBlog</h1>
          </div>
          <div class="subdiv">
            <h2>Your Ultimate Destination for All Things Coding!</h2>
          </div>
          <div class="subdiv">
            <router-link class="btn btn-primary addArticle" to="/login"
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
  <!-- Recommended Article -->
  <section id="articles">
    <div class="container-fluid home">
      <div class="row">
        <div class="col-lg-8 mb-5 mb-lg-0">
          <div class="section-title">
            <h2>Recent Articles</h2>
          </div>
          <ArticleCard :topics="Articles" />
        </div>
        <div class="col-lg-4">
          <NewsLetterpost></NewsLetterpost>
          <!-- Who Follow -->
          <div class="my-3 p-3 rounded shadow-sm widgets1">
            <h2 class="widget1-title">Suggested people to follow</h2>
            <whoFollow :whoFollow="whoFollow" />
            <small class="d-block text-right mt-3">
              <a href="#" class="follow">All suggestions</a>
            </small>
          </div>
          <!-- Recommended Topics -->
          <div class="widgets1">
            <h2 class="widget1-title">Recommended Topics</h2>
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
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import ArticleCard from "@/components/ArticleCard.vue"; // @ is an alias to /src
import RecommendedTopics from "@/components/RecommendedTopics.vue"; // @ is an alias to /src
import whoFollow from "@/components/whoFollow.vue"; // @ is an alias to /src
import NewsLetterpost from "@/components/NewsLetterpost.vue"; // @ is an alias to /src
import api from "@/service/apiClient";
import { logout } from "@/service/AuthenticationService";

export default defineComponent({
  name: "HomeView",
  components: {
    ArticleCard,
    RecommendedTopics,
    whoFollow,
    NewsLetterpost,
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
          name: "Technology, client-server communication protocol",
          description:
            "REST API is a widely used client-server communication protocol, but it has limitations when dealing with clients such as web iOS, Android, smart devices, etc.",
          imageUrl:
            "https://reflectoring.io/images/stock/0129-node-graphql-1200x628-branded_hu946ea48a063c7bb127fbc15b48596a23_203637_650x0_resize_q90_box.jpg",
          url: "https://medium.com/topic/technology",
          autour: "mohmaed bougra",
          topic: "Spring",
          date: "March 22, 2023",
        },
        {
          id: 2,
          name: "Design",
          description:
            "Explore the world of design with inspiring articles and tutorials.",
          imageUrl:
            "https://reflectoring.io/images/stock/0129-node-graphql-1200x628-branded_hu946ea48a063c7bb127fbc15b48596a23_203637_650x0_resize_q90_box.jpg",
          url: "https://medium.com/topic/design",
          autour: "ikram ckiih",
          topic: "java",
          date: "March 22, 2023",
        },
        {
          id: 3,
          name: "Culture",
          description:
            "Discover new perspectives on culture, arts, and society.",
          imageUrl:
            "https://reflectoring.io/images/stock/0129-node-graphql-1200x628-branded_hu946ea48a063c7bb127fbc15b48596a23_203637_650x0_resize_q90_box.jpg",
          url: "https://medium.com/topic/culture",
          autour: "hamza ",
          topic: "Spring",
          date: "March 22, 2023",
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
    };
  },
});
</script>
<style>
a {
  color: #322b3c;
}
.follow {
  color: #d7b8ff;
}
.follow:hover {
  color: #eef2e6 !important;
}
.Header-img {
  width: 100%;
}
.widgets1 {
  background: #322b3c;
  color: #d7b8ff;
  border-radius: 6px;
  padding: 15px;
  margin-bottom: 30px;
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
  height: 33.33%;
}
#articles {
  position: relative;
}
</style>
