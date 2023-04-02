<template>
  <div class="container-fluid home">
    <!-- Recommended Article -->
    <h1>Recommended Articles</h1>
    <ArticleCard :topics="Articles" />

    <!-- Recommended Topics -->
    <h1>Recommended Topics</h1>

    <RecommendedTopics :topics="recommendedTopic" />
    <!-- Who Follow -->
    <div class="my-3 p-3 bg-white rounded shadow-sm">
      <h6 class="border-bottom border-gray pb-2 mb-0">Who Follow</h6>
      <whoFollow :whoFollow="whoFollow" />
      <small class="d-block text-right mt-3">
        <a href="#">All suggestions</a>
      </small>
    </div>
  </div>

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
import api from "@/service/apiClient";
import { logout } from "@/service/AuthenticationService";

export default defineComponent({
  name: "HomeView",
  components: {
    ArticleCard,
    RecommendedTopics,
    whoFollow,
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
          name: "Technology",
          description:
            "Stay up-to-date with the latest tech news, insights, and trends.",
          imageUrl: "https://picsum.photos/200/200",
          url: "https://medium.com/topic/technology",
          autour: "mohmaed bougra",
          topic: "Spring",
        },
        {
          id: 2,
          name: "Design",
          description:
            "Explore the world of design with inspiring articles and tutorials.",
          imageUrl: "https://picsum.photos/200/200",
          url: "https://medium.com/topic/design",
          autour: "ikram ckiih",
          topic: "java",
        },
        {
          id: 3,
          name: "Culture",
          description:
            "Discover new perspectives on culture, arts, and society.",
          imageUrl: "https://picsum.photos/200/200",
          url: "https://medium.com/topic/culture",
          autour: "hamza ",
          topic: "Spring",
        },
        {
          id: 4,
          name: "Entrepreneurship",
          description:
            "Learn from successful entrepreneurs and start your own business.",
          imageUrl: "https://picsum.photos/200/200",
          url: "https://medium.com/topic/entrepreneurship",
          autour: "mohmaed rafa",
          topic: "JEE",
        },
        {
          id: 5,
          name: "Politics",
          description: "Stay informed on politics, policy, and global issues.",
          imageUrl: "https://picsum.photos/200/200",
          url: "https://medium.com/topic/politics",
          autour: "mohmaed bougra",
          topic: "Spring",
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
.container-fluid {
  padding: 3% 15%;
}
a {
  color: #322b3c;
}
</style>
