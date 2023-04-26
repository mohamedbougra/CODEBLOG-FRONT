<template>
  <!-- navbar -->
  <NavbarCompoment></NavbarCompoment>
  <section class="py-5 my-5">
    <div class="container">
      <h1 class="mb-5">Account Settings</h1>
      <div class="bg-white shadow rounded-lg d-block d-sm-flex">
        <div class="profile-tab-nav border-right">
          <div class="p-4">
            <div class="img-circle text-center mb-3">
              <img src="../assets/user2.jpg" alt="Image" class="shadow" />
            </div>
            <h4 class="text-center">Kiran Acharya</h4>
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
              id="password-tab"
              data-toggle="pill"
              href="#password"
              role="tab"
              aria-controls="password"
              aria-selected="false"
            >
              <i class="fa fa-key text-center mr-1"></i>
              Password
            </a>
            <a
              class="nav-link nl"
              id="security-tab"
              data-toggle="pill"
              href="#security"
              role="tab"
              aria-controls="security"
              aria-selected="false"
            >
              <i class="fa fa-user text-center mr-1"></i>
              Security
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
              <i class="fa fa-tv text-center mr-1"></i>
              Application
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
                  <input type="text" class="form-control" value="Kiran" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Last Name</label>
                  <input type="text" class="form-control" value="Acharya" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    class="form-control"
                    value="kiranacharya287@gmail.com"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Phone number</label>
                  <input
                    type="text"
                    class="form-control"
                    value="+91 9876543215"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Company</label>
                  <input
                    type="text"
                    class="form-control"
                    value="Kiran Workspace"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Designation</label>
                  <input
                    type="text"
                    class="form-control"
                    value="UI Developer"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <label>Bio</label>
                  <textarea class="form-control" rows="4">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vero enim error similique quia numquam ullam corporis officia odio repellendus aperiam consequatur laudantium porro voluptatibus, itaque laboriosam veritatis voluptatum distinctio!</textarea
                  >
                </div>
              </div>
            </div>
            <div>
              <button class="btn btn-primary AddAricle">Update</button>
              <button class="btn btn-light login">Cancel</button>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="password"
            role="tabpanel"
            aria-labelledby="password-tab"
          >
            <h3 class="mb-4">Password Settings</h3>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Old password</label>
                  <input type="password" class="form-control" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>New password</label>
                  <input type="password" class="form-control" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Confirm new password</label>
                  <input type="password" class="form-control" />
                </div>
              </div>
            </div>
            <div>
              <button class="btn btn-primary AddAricle">Update</button>
              <button class="btn btn-light login">Cancel</button>
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
              <button class="btn btn-primary AddAricle">Update</button>
              <button class="btn btn-light login">Cancel</button>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="application"
            role="tabpanel"
            aria-labelledby="application-tab"
          >
            <h3 class="mb-4">Application Settings</h3>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="app-check"
                    />
                    <label class="form-check-label" for="app-check">
                      App check
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck2"
                    />
                    <label class="form-check-label" for="defaultCheck2">
                      Lorem ipsum dolor sit.
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button class="btn btn-primary AddAricle">Update</button>
              <button class="btn btn-light login">Cancel</button>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum accusantium accusamus, neque cupiditate quis
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
                  hic nesciunt repellat perferendis voluptatum totam porro
                  eligendi.
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
                  commodi fugiat molestiae tempora corporis. Sed dignissimos
                  suscipit
                </label>
              </div>
            </div>
            <div>
              <button class="btn btn-primary AddAricle">Update</button>
              <button class="btn btn-light login">Cancel</button>
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
import NavbarCompoment from "@/components/NavbarCompoment.vue"; // @ is an alias to /src
import FooterCompoment from "@/components/FooterCompoment.vue"; // @ is an alias to /src
export default {
  name: "ProfileView",
  components: {
    NavbarCompoment,
    FooterCompoment,
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");

.nl {
  background: #eef2e6 !important;
  color: #372f42 !important;
  font-family: "Montserrat" !important;
  font-weight: 400 !important;
}
.nl:hover {
  background: #302939 !important;
  color: #eef2e6 !important;
}

.shadow {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1) !important;
}

.profile-tab-nav {
  min-width: 250px;
  background: #eef2e6 !important;
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
</style>
