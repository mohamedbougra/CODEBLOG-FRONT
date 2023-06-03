<template>
  <!-- navbar -->
  <NavbarCompoment></NavbarCompoment>
  <section class="profile">
    <div class="container">
      <h1 class="mb-5">Account Settings</h1>
      <div class="bg-white shadow rounded-lg d-block d-sm-flex">
        <div class="profile-tab-nav border-right">
          <div class="p-4">
            <div class="img-circle text-center mb-3">
              <img src="../assets/user2.jpg" alt="Image" class="shadow" />
            </div>
            <h4 class="text-center">
              {{ user.firstName }} {{ user.lastName }}
            </h4>
            
          </div>
          <div
            class="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              class="nav-link active nl"
              id="account-tab"
              data-toggle="pill"
              href="#account"
              role="tab"
              aria-controls="account"
              aria-selected="true"
            >
              <i class="fa fa-home text-center mr-1"></i>
              Account
            </a>
            
          
            
            <a
              class="nav-link nl"
              id="notification-tab"
              data-toggle="pill"
              href="#notification"
              role="tab"
              aria-controls="notification"
              aria-selected="false"
            >
              <i class="fa fa-bell text-center mr-1"></i>
              Notification
            </a>
            <a
              class="nav-link nl"
              id="application-tab"
              data-toggle="pill"
              href="#application"
              role="tab"
              aria-controls="application"
              aria-selected="false"
            >
            <i class="fa-solid fa-shield-halved"></i>
              Privacy Policy
            </a>
          </div>
        </div>
        <div class="tab-content p-4 p-md-5" id="v-pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="account"
            role="tabpanel"
            aria-labelledby="account-tab"
          >
            <h3 class="mb-4">Account Settings</h3>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="user.firstName"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="user.lastName"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="user.email"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Phone number</label>
                  <input type="tel" class="form-control" v-model="user.phone" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Company</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="user.company"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Designation</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="user.designation"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <label>Bio</label>
                  <textarea
                    class="form-control"
                    rows="4"
                    v-model="user.bio"
                  ></textarea>
                </div>
              </div>
            </div>
            <div>
              <button class="btn login">Update</button>
              <button class="btn btn-light cancel">Cancel</button>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="post"
            role="tabpanel"
            aria-labelledby="post-tab"
          >
            <h3 class="mb-4">My Posts</h3>
            <div class="row">
              <div
                v-for="topic in user.topics"
                :key="topic.id"
                class="col-12 mb-4"
              >
                <div class="card bg-light h-100">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        :src="topic.imageUrl"
                        class="card-img"
                        alt="Topic image"
                      />
                    </div>
                    <div class="col-md-8">
                      <div
                        class="card-body d-flex flex-column justify-content-between h-100"
                      >
                        <div>
                          <h5 class="card-title fw-bold">{{ topic.name }}</h5>
                          <p class="card-text">{{ topic.description }}</p>
                        </div>
                        <div
                          class="d-flex justify-content-between align-items-end"
                        >
                          <div>{{ topic.lastUpdated }}</div>
                          <router-link to="/aticle" class="btn login"
                            >Read</router-link
                          >
                          <router-link to="/add-article" class="btn login"
                            >Modify</router-link
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="user.topics.length === 0" class="col-12">
                <div class="card bg-light">
                  <div class="card-body">
                    <h5 class="card-title">No topics found</h5>
                    <p class="card-text">
                      There are currently no topics available. Please add a new
                      topic to continue.
                    </p>
                    <router-link to="/add-topic" class="btn btn-primary"
                      >Add Topic</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="password"
            role="tabpanel"
            aria-labelledby="password-tab"
          >
            <!-- Password settings form -->
            <h3 class="mb-4">Password Settings</h3>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Old password</label>
                  <input
                    type="password"
                    class="form-control"
                    v-model="oldPassword"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>New password</label>
                  <input
                    type="password"
                    class="form-control"
                    v-model="newPassword"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Confirm new password</label>
                  <input
                    type="password"
                    class="form-control"
                    v-model="confirmNewPassword"
                  />
                </div>
              </div>
            </div>
            <div>
              <button class="btn btn-primary login" @click="updatePassword">
                Update
              </button>
              <button class="btn btn-light cancel">Cancel</button>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="security"
            role="tabpanel"
            aria-labelledby="security-tab"
          >
            <h3 class="mb-4">Security Settings</h3>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Login</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Two-factor auth</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="recovery"
                    />
                    <label class="form-check-label" for="recovery">
                      Recovery
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button class="btn btn-primary login">Update</button>
              <button class="btn btn-light cancel">Cancel</button>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="application"
            role="tabpanel"
            aria-labelledby="application-tab"
          >
            <h3 class="mb-4">Privacy Policy for CODE BLOG</h3>
            <div class="row">
              <div class="col-md-8">
                <div class="form-group">
                  <p>Welcome to  CODE BLOG .We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your information when you use our application or services. By using  CODE BLOG, you consent to the practices described in this policy.

                  </p> <br>
                  <p>1. Personal Information: We may collect certain personally identifiable information ("Personal Information") when you use our application. This may include your name, email address, contact information, and any other information you provide voluntarily.

                  </p>
                  <p>2. Non-Personal Information: We may also collect non-personal information such as device information, IP addresses, browser type, and usage statistics. This information does not personally identify you and is collected to improve our services and enhance your user experience.</p>
                
                </div>
              </div>
            </div>
            <div>
              <button class="btn btn-primary login">accept</button>
              <button class="btn btn-light cancel">Cancel</button>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="notification"
            role="tabpanel"
            aria-labelledby="notification-tab"
          >
            <h3 class="mb-4">Notification Settings</h3>
            <div class="form-group">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="notification1"
                />
                <label class="form-check-label" for="notification1">
                  Allow email notification
                </label>
              </div>
            </div>
            <div class="form-group">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="notification2"
                />
                <label class="form-check-label" for="notification2">
                  Allow desktop notification
                </label>
              </div>
            </div>
            <div class="form-group">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="notification3"
                />
                <label class="form-check-label" for="notification3">
                  Don't receive any thing
                </label>
              </div>
            </div>
            <div>
              <button class="btn btn-primary login">Update</button>
              <button class="btn btn-light cancel">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- footer -->
  <FooterCompoment></FooterCompoment>
</template>

<script>
import { defineComponent, ref, Ref } from "vue";
import NavbarCompoment from "@/components/NavbarCompoment.vue"; // @ is an alias to /src
import FooterCompoment from "@/components/FooterCompoment.vue"; // @ is an alias to /src
import axios from "axios"; // Import Axios library for making HTTP requests

export default defineComponent({
  name: "ProfileView",
  components: {
    NavbarCompoment,
    FooterCompoment,
  },
  data() {
    return {
      user: {
        id: 1,
        firstName: "Mohamed",
        lastName: "bougra",
        email: "mohamed@gmail.com",
        phone: "0697822768",
        company: "ensa Marrakech",
        designation: "talib",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vero enim error similique quia numquam ullam corporis officia odio repellendus aperiam consequatur laudantium porro voluptatibus, itaque laboriosam veritatis voluptatum distinctio!",
        follower: 21,
        following: 22,
        password: "ensa2023",
        TwoFactorAuth: "122",
        // update Password varaibles
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: "",
        topics: [
          {
            id: 1,
            name: "Technology",
            description:
              "Articles about technology Enim amet aliqua veniam laboris aute culpa ex aliqua. Reprehenderit aliqua id enim anim fugiat ullamco minim exercitation. Ad est dolore incididunt esse ex non et deserunt sit est aliqua. Sunt consectetur ea consectetur labore eu voluptate velit veniam id. Excepteur sunt amet adipisicing dolore dolor elit consequat est et duis pariatur. Cupidatat ex ipsum laborum laboris ea occaecat excepteur dolor. Irure occaecat commodo duis nulla velit nulla minim veniam.",
            imageUrl: "https://picsum.photos/200/300",
            url: "/topics/technology",
            lastUpdated: "12,mai 2023",
            topic: "Tech",
          },
          {
            id: 2,
            name: "Science",
            description:
              "Articles about science Reprehenderit eiusmod ea deserunt nulla adipisicing dolore enim id dolor qui. Voluptate proident aliqua id consequat anim qui dolor cupidatat. Laboris veniam ullamco ipsum in ut. Dolor amet minim commodo fugiat elit adipisicing exercitation est sunt et. Lorem sit nostrud amet enim. Dolor reprehenderit quis et eu. Irure excepteur est sunt laborum magna.",
            imageUrl: "https://picsum.photos/200/300",
            url: "/topics/science",
            lastUpdated: "12,march 2023",
            topic: "Science",
          },
          // add more topics as needed
        ],
      },
    };
  },
  methods: {
    updatePassword() {
      // Check that new password and confirm password match
      if (this.newPassword !== this.confirmNewPassword) {
        alert("New password and confirm password do not match.");
        return;
      }

      // Make HTTP request to update password
      const userId = 1; // Replace with actual user ID
      axios
        .put(`/api/users/${userId}/password`, {
          oldPassword: this.oldPassword,
          newPassword: this.newPassword,
        })
        .then((response) => {
          alert("Password updated successfully!");
          // Clear input fields
          this.oldPassword = "";
          this.newPassword = "";
          this.confirmNewPassword = "";
        })
        .catch((error) => {
          console.error(error);
          alert("Error updating password. Please try again later.");
        });
    },
  },
});
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");

.nl {
  background: #e4e1ea !important;
  color: #372f42 !important;
  font-family: "Montserrat" !important;
  font-weight: 400 !important;
}
.nl:hover {
  background: #302939 !important;
  color: #e4e1ea !important;
}

.shadow {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1) !important;
}

.profile-tab-nav {
  min-width: 250px;
  background: #e4e1ea !important;
}

.tab-content {
  flex: 1;
}

.form-group {
  margin-bottom: 1.5rem;
}

.nav-pills a.nav-link {
  padding: 15px 20px;
  border-bottom: 1px solid #ddd;
  border-radius: 0;
  color: #333;
}
.nav-pills a.nav-link i {
  width: 20px;
}

.img-circle img {
  height: 100px;
  width: 100px;
  border-radius: 100%;
  border: 5px solid #fff;
}
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");

/* Define color variables */

/* Define global styles for body and font-family */
body {
  background: #f9f9f9;
  font-family: "Roboto", sans-serif;
}

/* Define shadow class for box-shadow */
.shadow {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1) !important;
}

/* Define styles for profile tab navigation */
.profile-tab-nav {
  min-width: 250px;
}

/* Define styles for tab content */
.tab-content {
  flex: 1;
}

/* Define styles for form groups */
.form-group {
  margin-bottom: 1.5rem;
}

/* Define styles for nav pills */
.nav-pills a.nav-link {
  padding: 15px 20px;
  border-bottom: 1px solid #ddd;
  border-radius: 0;
  color: #333;
}

.nav-pills a.nav-link i {
  width: 20px;
}

/* Define styles for circular image */
.img-circle img {
  height: 100px;
  width: 100px;
  border-radius: 100%;
  border: 5px solid #fff;
}
.cancel {
  background-color: #4539577d;
}
.profile {
  padding-bottom: 4%;
}
.card {
  border: none;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  border-radius: 4%;
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
}
.card-text {
  font-size: 0.9rem;
  color: #757575;
  margin-bottom: 1rem;
}

</style>
