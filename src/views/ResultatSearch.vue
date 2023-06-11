
<template>
    <NavbarCompoment></NavbarCompoment>
<div id="app">
  
    <div class="row  ">
    <div class="col-md-9 col-md-pull-3">
    <br>
    <br>
  
      <div class="container">
  <div class="row justify-content-center ">
    <div v-for="(article, index) in state.articles.slice((state.currentPage - 1) * state.itemsPerPage, state.currentPage * state.itemsPerPage)" :key="index" class="col-sm-10">
      <div class="ik shadow">
    
    <div class="row">
    <div class="col-sm-4">
      <img class="card-img-top" :src="article.image" alt="Card image cap">
    </div>
    <div class="col-sm-8">
      <br>
      <div class="search-result-item-body">
        <h4 class="search-result-item-heading"><a :href="article.url">{{ article.title }}</a></h4>
        <p class="description">{{ article.description }}</p>
        <div class="row align-items-end">
          <div class="col-sm-6">
            <p class="info"><small class="text-muted">{{ article.author }} - {{ article.date }}</small></p>
          </div>
          <div class="col-sm-6 text-right">
            <a :href="article.url" class="btn btn-outline-primary btn-sm addArticle">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
</div>

</div>
</div>

<div class="pag" style="background-color: #f2f2f2;">
    <Paginator :rows="10" :totalRecords="120" ></Paginator>
</div> 

    </div>
  </div>
</div>
   

<FooterCompoment></FooterCompoment>
</template>

<script>
import NavbarCompoment from "@/components/NavbarCompoment.vue";
import FooterCompoment from "@/components/FooterCompoment.vue"; 
import { reactive, computed } from 'vue';



  export default {
    name: "ProfileView",
    components: {
      NavbarCompoment,
      FooterCompoment,
    },
   
    setup() {
    const state = reactive({
      resultsCount: 94700000,
      searchTime: 0.39,
      articles: [
        {
          id: 1,
          image: 'https://reflectoring.io/images/stock/0129-node-graphql-1200x628-branded_hu946ea48a063c7bb127fbc15b48596a23_203637_650x0_resize_q90_box.jpg',
          title: 'Spring',
          description: 'Stay informed on politics, policy, and global issues.',
          author: 'wade fedef',
          date: 'March 22, 2023',
          url: '#'
        },
        {
          id: 2,
          image: 'https://reflectoring.io/images/stock/0129-node-graphql-1200x628-branded_hu946ea48a063c7bb127fbc15b48596a23_203637_650x0_resize_q90_box.jpg',
          title: 'Article 2',
          description: 'Description for article 2',
          author: 'Author 2',
          date: 'April 1, 2023',
          url: '#'
        },
        {
          id: 3,
          image: 'https://reflectoring.io/images/stock/0129-node-graphql-1200x628-branded_hu946ea48a063c7bb127fbc15b48596a23_203637_650x0_resize_q90_box.jpg',
          title: 'Article 3',
          description: 'Description for article 3',
          author: 'Author 3',
          date: 'April 5, 2023',
          url: '#'
        },
        {
          id: 1,
          image: 'https://reflectoring.io/images/stock/0129-node-graphql-1200x628-branded_hu946ea48a063c7bb127fbc15b48596a23_203637_650x0_resize_q90_box.jpg',
          title: 'Spring',
          description: 'Stay informed on politics, policy, and global issues.',
          author: 'wade fedef',
          date: 'March 22, 2023',
          url: '#'
        },
        {
          id: 2,
          image: 'https://reflectoring.io/images/stock/0129-node-graphql-1200x628-branded_hu946ea48a063c7bb127fbc15b48596a23_203637_650x0_resize_q90_box.jpg',
          title: 'Article 2',
          description: 'Description for article 2',
          author: 'Author 2',
          date: 'April 1, 2023',
          url: '#'
        },
        {
          id: 3,
          image: 'https://reflectoring.io/images/stock/0129-node-graphql-1200x628-branded_hu946ea48a063c7bb127fbc15b48596a23_203637_650x0_resize_q90_box.jpg',
          title: 'Article 3',
          description: 'Description for article 3',
          author: 'Author 3',
          date: 'April 5, 2023',
          url: '#'
        },
        {
          id: 4,
          image: 'https://reflectoring.io/images/stock/0129-node-graphql-1200x628-branded_hu946ea48a063c7bb127fbc15b48596a23_203637_650x0_resize_q90_box.jpg',
          title: 'Article 4',
          description: 'Description for article 4',
          author: 'Author 4',
          date: 'April 8, 2023',
          url: '#'
        },
        {
          id: 1,
          image: 'https://reflectoring.io/images/stock/0129-node-graphql-1200x628-branded_hu946ea48a063c7bb127fbc15b48596a23_203637_650x0_resize_q90_box.jpg',
          title: 'Spring',
          description: 'Stay informed on politics, policy, and global issues.',
          author: 'wade fedef',
          date: 'March 22, 2023',
          url: '#'
        },
        {
          id: 2,
          image: 'https://reflectoring.io/images/stock/0129-node-graphql-1200x628-branded_hu946ea48a063c7bb127fbc15b48596a23_203637_650x0_resize_q90_box.jpg',
          title: 'Article 2',
          description: 'Description for article 2',
          author: 'Author 2',
          date: 'April 1, 2023',
          url: '#'
        },
        {
          id: 3,
          image: 'https://reflectoring.io/images/stock/0129-node-graphql-1200x628-branded_hu946ea48a063c7bb127fbc15b48596a23_203637_650x0_resize_q90_box.jpg',
          title: 'Article 3',
          description: 'Description for article 3',
          author: 'Author 3',
          date: 'April 5, 2023',
          url: '#'
        },
        {
          id: 1,
          image: 'https://reflectoring.io/images/stock/0129-node-graphql-1200x628-branded_hu946ea48a063c7bb127fbc15b48596a23_203637_650x0_resize_q90_box.jpg',
          title: 'Spring',
          description: 'Stay informed on politics, policy, and global issues.',
          author: 'wade fedef',
          date: 'March 22, 2023',
          url: '#'
        },
        {
          id: 2,
          image: 'https://reflectoring.io/images/stock/0129-node-graphql-1200x628-branded_hu946ea48a063c7bb127fbc15b48596a23_203637_650x0_resize_q90_box.jpg',
          title: 'Article 2',
          description: 'Description for article 2',
          author: 'Author 2',
          date: 'April 1, 2023',
          url: '#'
        },
        {
          id: 3,
          image: 'https://reflectoring.io/images/stock/0129-node-graphql-1200x628-branded_hu946ea48a063c7bb127fbc15b48596a23_203637_650x0_resize_q90_box.jpg',
          title: 'Article 3',
          description: 'Description for article 3',
          author: 'Author 3',
          date: 'April 5, 2023',
          url: '#'
        },
        {
          id: 4,
          image: 'https://reflectoring.io/images/stock/0129-node-graphql-1200x628-branded_hu946ea48a063c7bb127fbc15b48596a23_203637_650x0_resize_q90_box.jpg',
          title: 'Article 4',
          description: 'Description for article 4',
          author: 'Author 4',
          date: 'April 8, 2023',
          url: '#'
        }
      ],
      currentPage: 1,
      itemsPerPage: 6
    });
    const paginate = (array, page_size, page_number) => {
    // Page number is 1-based
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  };

  const getPaginatedArticles = computed(() => {
    return paginate(state.articles, state.itemsPerPage, state.currentPage);
  });

  return {
    state,
    getPaginatedArticles
  };
},

  };
</script>


<style scoped>
#app {
  transform: translateX(200px);
}

.ik:hover {
  background-color: rgba(0,0,0,0.1);
 
}
.row{
  margin-bottom: 10px;
}

.pagination {
  display: inline-block;
  margin: 0;
  padding: 0;
}

.pagination li {
  display: inline;
  margin: 0;
  padding: 0;
}
::v-deep .p-paginator {
    background: #efecf6;}
.pagination li a {
  display: inline-block;
  padding: 5px 10px;
  margin: 0 2px;
  border-radius: 3px;
  color: #000;
  background-color: #f2f2f2;
  text-decoration: none;
}

.pagination li.active a {
  background-color: #4CAF50;
  color: white;
}

.pagination li.disabled a {
  color: #ddd;
  cursor: not-allowed;
}

.pagination li a:hover:not(.active) {
  background-color: #ddd;
}

</style>