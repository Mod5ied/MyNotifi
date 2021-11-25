<script>
import { bell, clock, info, calender } from "../assets/";
import "animate.css";
import { reactive, ref, toRefs } from "@vue/reactivity";
export default {
  setup() {
    let course = ref(""); //this accesses the course display element
    let courseNum = ref(""); //this does the same for the course counter
    let timeHere = ref(""); //this accesses the time display element
    let myDay = ref("");
    let table = ref(false);

    const timetable = [
      {
        day: "Monday",
        course: "COS337, COS331",
        no: 2,
        time: "10:00 - 02:00 PM",
      },
      {
        day: "Tuesday",
        course: "COS335, COS341",
        no: 2,
        time: "08:00 - 12:00 PM",
      },
      {
        day: "Wednesday",
        course: "COS351",
        no: 1,
        time: "08:00 - 12:00 PM",
      },
      {
        day: "Thursday",
        course: "COS311",
        no: 1,
        time: "08:00 - 12:00 PM",
      },
      {
        day: "Friday",
        course: "COS333",
        no: 1,
        time: "10:00 - 12:00 PM",
      },
    ];
    let day = new Date().getDay();
    let days = new Array(7);
    days[0] = "Sunday";
    days[1] = "Monday";
    days[2] = "Tuesday";
    days[3] = "Wednesday";
    days[4] = "Thursday";
    days[5] = "Friday";
    days[6] = "Saturday";

    // An if conditional that displays the current course based on the current date
    timetable.forEach((obj) => {
      if (obj.day == days[day]) {
        course = obj.course;
        timeHere = obj.time;
        courseNum = obj.course.length;
        myDay.value = obj.day;
      }
    });
    // A method that toggles the timetable
    const methods = reactive({
      toggleTable: () => {
        if ((table.value = false)) {
          table.value = true;
        }
      },
    });

    return {
      bell,
      clock,
      info,
      myDay,
      calender,
      timetable,
      day,
      days,
      course,
      timeHere,
      courseNum,
      table,
      ...toRefs(methods),
    };
  },
};
</script>

<template>
  <main id="main">
    <section id="sec1">
      <nav>
        <p class="mobileHidden">Today - {{ myDay }}, You have:</p>
        <ion-icon
          name="calendar-outline"
          id="calender"
          @click="table = !table"
        ></ion-icon>
        <transition name="fade" class="table">
          <div id="timetable" v-show="table">
            <p id="tableElems">
              <span>Monday</span> <span class="courses">COS1, COS1</span>
            </p>
            <p id="tableElems">
              <span>Tuesday</span> <span class="courses">COS2, COS1</span>
            </p>
            <p id="tableElems">
              <span>Wednesday</span>
              <span class="courses">COS3, COS1, COS1</span>
            </p>
            <p id="tableElems">
              <span>Thursday</span> <span class="courses">COS4, COS1</span>
            </p>
            <p id="tableElems">
              <span>Friday</span> <span class="courses">COS5, COS1</span>
            </p>
          </div>
        </transition>
      </nav>

      <section id="infoArea">
        <!-- <i id="containBell"
          ><i
            class="far fa-bell animate__animated animate__shakeX animate__repeat-3"
            id="bell"
          ></i>
        </i> -->
        <p id="day">It's {{ myDay }}</p>

        <h1 id="course">{{ course }}</h1>
        <!-- <p id="info">That is about {{}} course(s) today</p> -->
        <!-- <h2 class="mobileHidden">8:00 - 10:00 AM</h2> -->
        <!-- <p class="mobileHidden" id="time">Course duration:</p> -->
        <h2 id="timeArea" class="mobileHidden">
          {{ timeHere }}
          <i
            class="far fa-bell animate__animated animate__shakeX animate__repeat-3"
            id="bell"
          ></i>
        </h2>
      </section>
    </section>

    <section id="sec2">
      <img
        :src="clock"
        alt="man-on-clock image here"
        loading="lazy"
        id="timeImage"
      />
      <h2 id="timeArea">
        {{ timeHere }}
        <i
          class="far fa-bell animate__animated animate__shakeX animate__repeat-3"
          id="bell"
        ></i>
      </h2>
      <section id="infoArea" class="mobileHidden">
        <i id="contain"
          ><ion-icon name="information-circle-outline" id="info"></ion-icon
        ></i>
        <p>
          Ping is your reliable assistant. Get info about current classes for
          the day, rescheduled classes all on your screen!
        </p>
      </section>
    </section>

    <section class="deskHidden" id="sec3">
      <i id="contain"
        ><ion-icon name="information-circle-outline" id="info"></ion-icon
      ></i>
      <p>
        Ping is your reliable assistant. Get info about current clases for the
        day, rescheduled classes all on your screen!
      </p>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import "../scss/dashboard.scss";
</style>
