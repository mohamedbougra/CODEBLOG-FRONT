<template>
  <!-- navbar -->
  <NavbarCompomentAddArticle></NavbarCompomentAddArticle>
  <div class="create-post">
    <div class="container-fluid">
      <div class="blog-info">
        <div class="col-12">
          <div class="form-ctrl">
            <input
              type="text"
              class="form-control"
              placeholder="Title"
              v-model="blogTitle"
              @input="checkTitleLength"
              maxlength="75"
            />
          </div>

          <div class="row">
            <div class="col-6 card form-ctrl left">
              <div class="row">
                <div class="col-6"><p>Add Hero image :</p></div>
                <div class="col-6">
                  <Toast />
                  <FileUpload
                    mode="basic"
                    name="demo[]"
                    url="./upload.php"
                    accept="image/*"
                    :maxFileSize="1000000"
                    @upload="onUpload"
                  />
                </div>
              </div>
            </div>

            <div class="col-6 card form-ctrl left">
              <MultiSelect
                v-model="selectedTags"
                :options="itTags"
                placeholder="Select topic tags"
                display="chip"
                class="w-full md:w-20rem"
                @change="checkSelectionLimit"
                :max="3"
              >
                <template #option="slotProps">
                  <div class="flex align-items-center">
                    <div>{{ slotProps.option }}</div>
                  </div>
                </template>
                <template #footer>
                  <div class="py-2 px-3">
                    <b>{{ selectedTags ? selectedTags.length : 0 }}</b>
                    item{{
                      (selectedTags ? selectedTags.length : 0) > 1 ? "s" : ""
                    }}
                    selected.
                  </div>
                </template>
              </MultiSelect>
            </div>
          </div>
          <div class="modal" id="warning-modal">
            <div class="modal-content">
              <i class="fas fa-exclamation-circle"></i>
              <p style="color: #372f42">
                Title should not exceed 75 characters.
              </p>
              <button class="btn addArticle" @click="hideModal">OK</button>
            </div>
          </div>
        </div>
      </div>
      <div class="clo-12"></div>
      <div class="text">
        <QuillEditor theme="snow" toolbar="full" ref="myEditor" />
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.bubble.css";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

import NavbarCompomentAddArticle from "@/components/NavbarCompomentAddArticle.vue"; // @ is an alias to /src
export default {
  components: {
    QuillEditor,
    NavbarCompomentAddArticle,
  },
  setup() {
    const myEditor = ref(null);
    onMounted(() => {
      console.log(myEditor.value.getEditor());
    });
    return { myEditor };
  },

  data() {
    return {
      blogTitle: "",
      showWarning: false,
      itTags: [
        "spring boot",
        "java",
        "javascript",
        "html",
        "css",
        "react",
        "angular",
        "node.js",
        "mongodb",
      ],
      selectedTags: null,
      files: [],
      totalSize: 0,
      totalSizePercent: 0,
    };
  },
  methods: {
    checkTitleLength() {
      if (this.blogTitle.length > 74) {
        document.getElementById("warning-modal").style.display = "block";
      } else {
        document.getElementById("warning-modal").style.display = "none";
      }
    },
    showModal() {
      document.getElementById("warning-modal").style.display = "block";
    },
    hideModal() {
      document.getElementById("warning-modal").style.display = "none";
    },

    checkSelectionLimit() {
      if (this.selectedTags.length > 3) {
        this.selectedTags = this.selectedTags.slice(0, 3); // Limit selection to three items
      }
    },

    onUpload() {
      this.$toast.add({
        severity: "info",
        summary: "Success",
        detail: "File Uploaded",
        life: 3000,
      });
    },
  },
};
</script>

<style scoped>
.form-control {
  background-color: #e4e1ea !important;
  border: 0px !important;
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  height: 6rem;
}
.form-ctrl {
  padding: 1%;
}
.text {
  background-color: #e4e1ea !important;
  border: 0px !important;
  padding: 2%;
  text-align: center;
}
::v-deep .card {
  background-color: #e4e1ea !important;
  border: none;
}
.wrn,
.form-control::placeholder {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 3rem;
  text-align: center;
  color: #30303044;
  border: 0px;
}

button {
  background-color: #372f42;
  color: #e4e1ea;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
button:hover {
  background-color: #372f42;
}

.create-post {
  position: relative;
  height: 100%;
}
.left {
  text-align: left;
}

.create-post button {
  margin-top: 0;
}

.create-post .router-button {
  text-decoration: none;
  color: #fff;
}
.selected-tags {
  margin-top: 10px;
}
.create-post label,
.create-post button,
.create-post .router-button {
  transition: 0.5s ease-in-out all;
  align-self: center;
  font-size: 14px;
  cursor: pointer;
  border-radius: 20px;
  padding: 12px 24px;
  color: #fff;
  background-color: #303030;
  text-decoration: none;
}

.create-post label:hover,
.create-post button:hover,
.create-post .router-button:hover {
  background-color: rgba(48, 48, 48, 0.7);
}

.create-post .container {
  position: relative;
  height: 100%;
  padding: 10px 25px 60px;
}

.create-post .invisible {
  opacity: 0 !important;
}

.create-post .blog-info {
  display: flex;
  margin-bottom: 32px;
  background-color: #e4e1ea;
}

.create-post .blog-info input:nth-child(1) {
  min-width: 300px;
}

.create-post .blog-info input {
  transition: 0.5s ease-in-out all;
  padding: 10px 4px;
  border: none;
  border-bottom: 1px solid #303030;
}

.create-post .blog-info input:focus {
  outline: none;
  box-shadow: 0 1px 0 0 #303030;
}

.create-post .blog-info .upload-file {
  flex: 1;
  margin-left: 16px;
  position: relative;
  display: flex;
}

.create-post .blog-info .upload-file input {
  background-color: #e4e1ea;
  display: none;
}
.ql-container {
  box-sizing: border-box;
  font-family: Poppins !important;
  text-align: center !important;
  font-size: 13px;
  height: 100%;
  margin: 0px;
  position: relative;
}

.create-post .editor {
  height: 60vh;
  display: flex;
  flex-direction: column;
}

.create-post .editor .quillWrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.create-post .editor .ql-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: scroll;
}

.create-post .editor .ql-editor {
  padding: 20px 16px 30px;
}
.create-post .text {
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  box-shadow: 0 1px 0 0 #303030;
  background-color: #fff;
}

.create-post .blog-actions {
  margin-top: 32px;
}

.create-post .blog-actions button {
  margin-right: 16px;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: none;
}

.modal-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #e4e1ea;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.modal-content i {
  font-size: 48px;
  color: #372f42;
}
::v-deep .ql-editor p {
  font-size: medium;
  color: #000;
  font-family: "Montserrat";
}
::v-deep .ql-editor {
  box-sizing: border-box;
  line-height: 1.42;
  height: 700px;
  outline: none;
  overflow-y: auto;
  padding: 12px 15px;
  -o-tab-size: 4;
  tab-size: 4;
  -moz-tab-size: 4;
  text-align: left;
  white-space: pre-wrap;
  word-wrap: break-word;
  background-color: #eeecf1;
}

/* tags */
::v-deep .p-multiselect-token {
  background: #453957 !important;
  color: #fff !important;
}
::v-deep .p-multiselect-label {
  background-color: #e4e1ea;
  color: #6c757d;
}
::v-deep .p-multiselect .p-multiselect-trigger {
  background: #e4e1ea;
  color: #372f42;
}
::v-deep .p-button {
  color: #e4e1ea;
  background: #372f42;
  border: 1px solid #372f42;
}
::v-deep .p-fileupload-choose:not(.p-disabled):hover {
  color: #372f42;
  background: #d7b8ff;
  border: 1px solid #372f42;
}
/* upload IMG */
::v-deep .p-fileupload .p-fileupload-buttonbar {
  background: #eeecf1;
  justify-content: center;
}
.modal-content p {
  font-size: 18px;
  margin: 20px 0;
}

.btn {
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out !important;
}
.addArticle:hover {
  background-color: #d7b8ff !important;
}
</style>
