<template>
  <!-- navbar -->
  <NavbarCompoment></NavbarCompoment>

  <div class="about">
    <!-- section 2 : articles -->

    <section id="articles">
      <div class="container-fluid home">
        <div class="row">
          <!-- Article -->

          <div class="col-lg-9 mb-5 mb-lg-0">
            <div class="section-title">
              <ArticleFullCompoment :Articles="Articles" />
            </div>
          </div>
          <div class="col-lg-3">
            <MiniProfileCard :Articles="Articles" />
            <!-- Who Follow -->
            <div class="sugg my-3 p-3 rounded shadow-sm ">
              <h2 class="widget1-title" style="color: #e4e1ea">Suggested people to follow</h2>
              <whoFollow :whoFollow="whoFollow" />
              <small class="d-block text-right mt-3">
                <a href="#" class="follow">All suggestions</a>
              </small>
            </div>
            
            <!-- popular Topics -->
            <div class="sugg">
              <h2 class="widget1-title" style="color: #e4e1ea">popular Topics</h2>
              <RecommendedTopics :topics="recommendedTopic" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div class="comment">
   
    <div class="mt-3 d-flex flex-row align-items-center p-3 form-color">

<img src="https://i.imgur.com/zQZSWrt.jpg" width="50" class="rounded-circle mr-2">
<input type="text" class="form-control" placeholder="Enter your comment...">

</div>

<div class="row">
      <div class="col-md-10" v-for="comment in visibleComments" :key="comment.id">
        <div class="media g-mb-30 media-comment">
          <img class="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-15 comment-avatar" :src="comment.avatar" alt="Image Description">
          <div class="media-body card shadow border g-bg-secondary g-pa-30">
            <div class="g-mb-15">
              <h5 class="h5 g-color-gray-dark-v1 mb-0">{{ comment.author }}</h5>
              <span class="g-color-gray-dark-v4 g-font-size-12">{{ comment.timestamp }}</span>
            </div>
            <p>{{ comment.content }}</p>
            <ul class="list-inline d-sm-flex my-0">
              <li class="list-inline-item g-mr-20">
                <a class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">
                  <i class="fa fa-thumbs-up g-pos-rel g-top-1 g-mr-3"></i>
                  {{ comment.likes }}
                </a>
              </li>
              <li class="list-inline-item g-mr-20">
                <a class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">
                  <i class="fa fa-thumbs-down g-pos-rel g-top-1 g-mr-3"></i>
                  {{ comment.dislikes }}
                </a>
              </li>
              <li class="list-inline-item ml-auto">
                <a class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">
                  <i class="fa fa-reply g-pos-rel g-top-1 g-mr-3"></i>
                  Reply
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    
    </div>
    <div class="text-center mt-3" v-if="shouldShowReadMoreButton">
      <button class="btn btn-link" @click="loadMoreComments">
        Read more comments
      </button>
    </div>
  </div>
  <br>
  <br>
  <br>
  <!-- footer -->
  <FooterCompoment></FooterCompoment>
</template>
<script>
import { defineComponent, ref, Ref } from "vue";
import NavbarCompoment from "@/components/NavbarCompoment.vue"; // @ is an alias to /src
import ArticleFullCompoment from "@/components/ArticleFullCompoment.vue"; // @ is an alias to /src
import RecommendedTopics from "@/components/RecommendedTopics.vue"; // @ is an alias to /src
import whoFollow from "@/components/whoFollow.vue"; // @ is an alias to /src
import MiniProfileCard from "@/components/MiniProfileCard.vue"; // @ is an alias to /src
import FooterCompoment from "@/components/FooterCompoment.vue"; // @ is an alias to /src
import Prism from "prismjs";
import "prismjs/themes/prism.css";

export default defineComponent({
  name: "ReadArticleView",
  components: {
    NavbarCompoment,
    ArticleFullCompoment,
    RecommendedTopics,
    whoFollow,
    FooterCompoment,
    MiniProfileCard,
  },

  data() {
    return {
      comments: [
        {
          id: 1,
          avatar: 'https://bootdey.com/img/Content/avatar/avatar7.png',
          author: 'John Doe',
          timestamp: '5 days ago',
          content: 'Cras sit amet nibh libero, in gravida nulla...',
          likes: 178,
          dislikes: 34
        },
        {
          id: 2,
          avatar: 'https://bootdey.com/img/Content/avatar/avatar1.png',
          author: 'Jane Smith',
          timestamp: '2 days ago',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
          likes: 95,
          dislikes: 10
        },
        {
          id: 1,
          avatar: 'https://bootdey.com/img/Content/avatar/avatar7.png',
          author: 'John Doe',
          timestamp: '5 days ago',
          content: 'Cras sit amet nibh libero, in gravida nulla...',
          likes: 178,
          dislikes: 34
        },
        {
          id: 2,
          avatar: 'https://bootdey.com/img/Content/avatar/avatar1.png',
          author: 'Jane Smith',
          timestamp: '2 days ago',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
          likes: 95,
          dislikes: 10
        }
        // Add more comment objects as needed
      ],
      Articles: {
        id: 4,
        name: "Entrepreneurship stories you may have missed this week ",
        description:
          " <h2>A handpicked selection of stories you may have missed this week</h2> <p> Want to see something beautiful?</p> <p> This <a href=''>mosque in Malaysia</a>, a little cottage on the hill in Poland, and a series of tiny red houses seemingly floating on water in Norway are included in a cool, image-heavy article highlighting diverse architectural photos. Posted by the folks be hind Wikipedia, these 25 <a href=''>otherworldly shots </a> of buildings go beyond the basic and offer a nice blend of words and top notch imagery. I bookspaned it immediately. </p>       <img loading='lazy' class='card-img-top rounded-4' src='https://picsum.photos/500/300?grayscale' alt='Build CRUD APIs'/> <p> Sometimes those unexpected articles — like the one described above — resonate the most. <span style='color:#c40000'> Newly-minted author </span> <div class='code-container'> <pre> <code class='language-javascript'> function hello(){      console.log(Hello World)   }  </code> </pre> <button class='copy-btn' @click='copyCode'>Copy</button> </div> <span> <a href=''> Kaki Okumura </a> </span> <span> experienced this phenomenon as well, </span> <span><a> snagging a book deal</a> </span> <span> after her Medium posts caught the attention of a publisher. </span> “I had an article take off — a story about <a> harahachi-bunme, the Japanese idea of moderation and eating until you’re 80% full </a> ,” she discusses in an interview you can read on Medium’s official blog, <a> 3 Min Read</a> . </p> <p> Kaki’s real-world experience as an American who spent her formative years in Japan brought something to the table that no amount of book research could provide. She found writing success in being herself. Along those lines, writer </p> <div> <a href=''> Akilah Hughes </a> </div> <p> poured her heart out in empathy for a superstar singer’s much-maligned Coachella performance. As opposed to hate and derision, Hughes had only this to say about the sad performance of a beloved Grammy-winning artist: “ <a> I hope Frank Ocean is okay.</a> ” </p> <p> Some of your best work here is thoughtful, beautiful, and instructive. Please keep it coming. Also, for those celebrating the<a>end of Ramadan</a> : Eid Mubarak! </p> <p>Thanks for writing, <em>and</em> thanks for reading. <br /></p><div> <div> <div>Adrienne Gibbs</div> </div> </div> <br /> <p>Director, Creator Growth @Medium</p>",
        imageUrl:
          "https://reflectoring.io/images/stock/0129-node-graphql-1200x628-branded_hu946ea48a063c7bb127fbc15b48596a23_203637_650x0_resize_q90_box.jpg",
        url: "https://medium.com/topic/entrepreneurship",
        autour: "mohmaed rafa",
        topic: "JEE",
        date: "March 22, 2023",
        reader: 1009,
      },
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
      visibleCommentCount: 3,
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
    };
  },

  mounted() {
    window.Prism = window.Prism || {};
    window.Prism.manual = true;
    Prism.highlightAll(); // highlight your code on mount
  },
  methods: {
    copyCode() {
      const code = this.$el.querySelector(".code-container code").textContent;
      const temp = document.createElement("textarea");
      temp.value = code;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand("copy");
      document.body.removeChild(temp);
    },
    loadMoreComments() {
      // Increase the visible comment count to show more comments
      this.visibleCommentCount += 3; // Increase by the desired number of comments
    }

  },
  computed: {
    visibleComments() {
      // Return the subset of comments to be displayed
      return this.comments.slice(0, this.visibleCommentCount);
    },
    shouldShowReadMoreButton() {
      // Check if there are more comments to show
      return this.visibleCommentCount < this.comments.length;
    }
  },

});
</script>
<style>
/**
 * atom-dark theme for `prism.js`
 * Based on Atom's `atom-dark` theme: https://github.com/atom/atom-dark-syntax
 * @author Joe Gibson (@gibsjose)
 */

code[class*="language-"],
pre[class*="language-"] {
  color: #c5c8c6;
  text-shadow: 0 1px rgba(0, 0, 0, 0.3);
  font-family: Inconsolata, Monaco, Consolas, "Courier New", Courier, monospace;
  direction: ltr;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  line-height: 1.5;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}
.comment-avatar {
  border-radius: 50%;
}

.sugg{
  background-color: #35303e;
}
/* Code blocks */
pre[class*="language-"] {
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
  border-radius: 0.3em;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  background: #1d1f21;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
  padding: 0.1em;
  border-radius: 0.3em;
}


.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #7c7c7c;
}

.token.punctuation {
  color: #c5c8c6;
}

.namespace {
  opacity: 0.7;
}

.token.property,
.token.keyword,
.token.tag {
  color: #96cbfe;
}
body{
    margin-top:20px;
    background:#eee;
}
@media (min-width: 0) {
    .g-mr-15 {
        margin-right: 1.07143rem !important;
    }
}
@media (min-width: 0){
    .g-mt-3 {
        margin-top: 0.21429rem !important;
    }
}

.g-height-50 {
    height: 50px;
}

.g-width-50 {
    width: 50px !important;
}

@media (min-width: 0){
    .g-pa-30 {
        padding: 2.14286rem !important;
    }
}

.g-bg-secondary {
    background-color: #fafafa !important;
}

.u-shadow-v18 {
    box-shadow: 0 5px 10px -6px rgba(0, 0, 0, 0.15);
}

.g-color-gray-dark-v4 {
    color: #777 !important;
}

.g-font-size-12 {
    font-size: 0.85714rem !important;
}

.media-comment {
    margin-top:20px
}
.form-control{

height: 48px;
width:  80%;
border-radius: 50px;
}

.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #35b69f;
  outline: 0;
  box-shadow: none;
  text-indent: 10px;
}
.comment{
  padding-left: 3%;
 
}
.btn{
  color: #302939;
}

</style>
