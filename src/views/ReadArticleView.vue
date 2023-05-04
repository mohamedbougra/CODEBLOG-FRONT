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
  </div>

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

.token.class-name {
  color: #ffffb6;
  text-decoration: underline;
}

.token.boolean,
.token.constant {
  color: #99cc99;
}

.token.symbol,
.token.deleted {
  color: #f92672;
}

.token.number {
  color: #ff73fd;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
  color: #a8ff60;
}

.token.variable {
  color: #c6c5fe;
}

.token.operator {
  color: #ededed;
}

.token.entity {
  color: #ffffb6;
  cursor: help;
}

.token.url {
  color: #96cbfe;
}

.language-css .token.string,
.style .token.string {
  color: #87c38a;
}

.token.atrule,
.token.attr-value {
  color: #f9ee98;
}

.token.function {
  color: #dad085;
}

.token.regex {
  color: #e9c062;
}

.token.important {
  color: #fd971f;
}

.token.important,
.token.bold {
  font-weight: bold;
}

.token.italic {
  font-style: italic;
}
</style>
