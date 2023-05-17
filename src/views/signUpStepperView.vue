<template>
  <div class="container">
    <div class="wrapper-stepper">
      <div class="stepper">
        <div class="stepper-progress">
          <div
            class="stepper-progress-bar"
            :style="'width:' + stepperProgress"
          ></div>
        </div>

        <div
          class="stepper-item"
          :class="{ current: step == 1, success: step > 1 }"
        >
          <div class="stepper-item-counter">
            <img
              class="icon-success"
              src="https://www.seekpng.com/png/full/1-10353_check-mark-green-png-green-check-mark-svg.png"
              alt=""
            />
            <span class="number">1</span>
          </div>
          <div class="stepper-item-title">Personal</div>
        </div>

        <div
          class="stepper-item"
          :class="{ current: step == 2, success: step > 2 }"
        >
          <div class="stepper-item-counter">
            <img
              class="icon-success"
              src="https://www.seekpng.com/png/full/1-10353_check-mark-green-png-green-check-mark-svg.png"
              alt=""
            />
            <span class="number">2</span>
          </div>
          <span class="stepper-item-title">Professional</span>
        </div>

        <div
          class="stepper-item"
          :class="{ current: step == 3, success: step > 3 }"
        >
          <div class="stepper-item-counter">
            <img
              class="icon-success"
              src="https://www.seekpng.com/png/full/1-10353_check-mark-green-png-green-check-mark-svg.png"
              alt=""
            />
            <span class="number">3</span>
          </div>
          <span class="stepper-item-title">Interests and Topics</span>
        </div>

        <div
          class="stepper-item"
          :class="{ current: step == 4, success: step > 4 }"
        >
          <div class="stepper-item-counter">
            <img
              class="icon-success"
              src="https://www.seekpng.com/png/full/1-10353_check-mark-green-png-green-check-mark-svg.png"
              alt=""
            />
            <span class="number">4</span>
          </div>
          <span class="stepper-item-title">Policies</span>
        </div>
      </div>

      <div class="stepper-content">
        <div class="stepper-pane" v-if="step == 1">
          <!-- Personal Information Section -->
          <div class="row">
            <div class="col form-group">
              <label for="firstName">fist Name</label>
              <input
                type="text"
                class="form-control"
                id="firstName"
                placeholder="Enter your first name"
              />
            </div>
            <div class="col form-group">
              <label for="lastName">last Name</label>
              <input
                type="text"
                class="form-control"
                id="lastName"
                placeholder="Enter your last name"
              />
            </div>
            <div class="w-100"></div>
            <div class="col form-group">
              <label for="linkedinProfile">LinkedIn Profile</label>
              <input
                type="text"
                class="form-control"
                id="linkedinProfile"
                placeholder="https://www.linkedin.com/in/username"
              />
            </div>
            <div class="col form-group">
              <label for="githubProfile">GitHub Profile</label>
              <input
                type="text"
                class="form-control"
                id="githubProfile"
                placeholder="https://github.com/username"
              />
            </div>
            <div class="w-100"></div>
            <div class="col form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <div class="col form-group">
              <label for="confirmPassword">Confirm Password</label>
              <input
                type="password"
                class="form-control"
                id="confirmPassword"
                placeholder="Confirm your password"
              />
            </div>
          </div>
        </div>

        <div class="stepper-pane" v-if="step == 2">
          <!-- Professional Information Section -->
          <div class="row">
            <div class="col form-group">
              <label for="job">Job</label>
              <input
                type="text"
                class="form-control"
                id="job"
                placeholder="Enter your job"
              />
            </div>
            <div class="col form-group">
              <label for="companyName">Company Name</label>
              <input
                type="text"
                class="form-control"
                id="companyName"
                placeholder="Enter your company name"
              />
            </div>
            <div class="w-100"></div>
            <div class="col form-group">
              <label for="domain">Domain</label>
              <select class="form-control" id="domain">
                <option value="java">Java</option>
                <option value="devops">DevOps</option>
                <option value="javascript">JavaScript</option>
                <!-- Add more options for other domains -->
              </select>
            </div>
            <div class="col form-group">
              <label for="topics">Topics you love to write about</label>
              <input
                type="text"
                class="form-control"
                id="topics"
                placeholder="Enter topics you love to write about"
              />
            </div>
            <div class="w-100"></div>
            <div class="col-12 form-group">
              <label for="bio">Bio</label>
              <textarea
                class="form-control"
                id="bio"
                rows="3"
                placeholder="Enter your bio"
              ></textarea>
            </div>
          </div>
        </div>

        <div class="stepper-pane" v-if="step == 3">
          <!-- Interests and Topics Section -->
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="writer"
              value="writer"
            />
            <label class="form-check-label" for="writer"> Writer </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="reader"
              value="reader"
            />
            <label class="form-check-label" for="reader"> Reader </label>
          </div>
        </div>

        <div class="stepper-pane" v-if="step == 4">
          <!-- Account Type and Policies Section -->
          <div class="form-group">
            <label for="email">Email address</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter your email address"
            />
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="acceptPolicy"
              value="accept"
            />
            <label class="form-check-label" for="acceptPolicy">
              I accept the policies and terms
            </label>
          </div>
        </div>
      </div>

      <div class="controls">
        <button class="btn cancels" @click="step--" :disabled="step == 1">
          Previous
        </button>
        <button class="btn valider" @click="step++" :disabled="step == 4">
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    step: 1,
  }),
  computed: {
    stepperProgress() {
      return (100 / 3) * (this.step - 1) + "%";
    },
  },
};
</script>

<style scoped>
body {
  background-image: linear-gradient(60deg, #abecd6 0%, #fbed96 100%);
  color: #ffffff;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
}

.tx-green-1 {
  color: #75cc65;
  font-weight: 600;
}

.wrapper-stepper {
  background-color: #fff;
  padding: 60px;
  border-radius: 32px;
  box-shadow: rgba(0, 0, 0, 0.09);
}

.stepper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 0;
  margin-bottom: 24px;
}

.stepper-progress {
  position: absolute;
  background-color: #c5c5c5;
  height: 2px;
  z-index: -1;
  left: 0;
  right: 0;
  margin: 0 auto;
}

.stepper-progress-bar {
  position: absolute;
  left: 0;
  height: 100%;
  width: 0%;
  background-color: #75cc65;
  transition: all 500ms ease;
}

.stepper-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #c5c5c5;
  transition: all 500ms ease;
}

.stepper-item-counter {
  height: 68px;
  width: 68px;
  display: grid;
  place-items: center;
  background-color: #fff;
  border-radius: 100%;
  border: 2px solid #c5c5c5;
  position: relative;
}

.stepper-item-counter .icon-success {
  position: absolute;
  opacity: 0;
  transform: scale(0);
  width: 24px;
  transition: all 500ms ease;
}

.stepper-item-counter .number {
  font-size: 22px;
  transition: all 500ms ease;
}

.stepper-item-title {
  position: absolute;
  font-size: 14px;
  bottom: -24px;
}

.stepper-item.success .stepper-item-counter {
  border-color: #75cc65;
  background-color: #c8ebc1;
  color: #fff;
  font-weight: 600;
}

.stepper-item.success .stepper-item-counter .icon-success {
  opacity: 1;
  transform: scale(1);
}

.stepper-item.success .stepper-item-counter .number {
  opacity: 0;
  transform: scale(0);
}

.stepper-item.success .stepper-item-title {
  color: #75cc65;
}

.stepper-item.current .stepper-item-counter {
  border-color: #453957;
  background-color: #453957;
  color: #fff;
  font-weight: 600;
}

.stepper-item.current .stepper-item-title {
  color: #818181;
}

.stepper-pane {
  color: #333;
  text-align: center;
  padding: 60px 60px;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.09);
  margin: 40px 0;
}

.controls {
  display: flex;
}

.btn {
  border-radius: 9px;
  font-family: "Montserrat" !important;
  font-weight: 400 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 16px;
  border: 1px solid;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  transition: all 150ms;
  border-radius: 4px;
  width: fit-content;
  color: #333;
  background-color: #e4e1ea;
  border-color: #e4e1ea;
}

.btn:disabled {
  opacity: 0.5;
  pointer-events: none;
}

.cancels:hover {
  color: #453957;
  background: #e4e1ea !important;
}

.valider {
  background-color: #302939;
  border-color: #302939;
  color: #e4e1ea;
  margin-left: auto;
}
.container {
  margin-top: 3%;
}
.form-group {
  text-align: left;
}
</style>
