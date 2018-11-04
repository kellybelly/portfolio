<template>
  <div id="work">
    <div class="work-item col col-6"><div class="work-info">
      <p>
        Hi, I’m <strong>Kelly</strong>. I’ve worked professionally as both a
        <strong>product manager</strong> and a <strong>software engineer</strong>. These are my
        most recent projects.
      </p>

      <p>
        <router-link to="/resume">See my full resume. &rarr;</router-link>
      </p>
    </div></div>

    <div class="work-item col col-6"><div>
      <div class="work-image teal-filter">
        <img src="../assets/brilliant.png">
      </div>

      <div class="work-description" v-bind:class="{ expanded: isBrilliantExpanded }"><div>
        <p>
          <strong>Brilliant</strong> helps people master math and science concepts through
          interactive, problem solving based courses. I worked as a software engineer and led the frontend team. As a team lead, I took on project management responsibilities &mdash; triaging frontend bugs and owning technical frontend architecture projects. Eventually, a product manager position opened up, and I jumped at the opportunity.
        </p>

        <p>
          <a href="https://brilliant.org/">Go to website. &rarr;</a>
        </p>

        <button class="expand-collapse" v-on:click="isBrilliantExpanded = !isBrilliantExpanded">
          <img src="../assets/arrow.png">
        </button>
      </div></div>
    </div></div>

    <div class="work-item col col-6"><div>
      <div class="work-image turquoise-filter">
        <img src="../assets/gdi.png">
      </div>

      <div class="work-description" v-bind:class="{ expanded: isGDIExpanded }"><div>
        <p>
          <strong>Girl Develop It</strong> is a nonprofit organization with over 108,000+ members
          in 62 cities. I co-lead the San Francisco chapter, which has over 9,100+ members. In 2017,
          we hosted 49 workshops and events, awarded 53 scholarships to our worshops, and raised
          $12,312 at our annual fundraiser towards our mission to include and empower women and non-binary folks in developing the future of technology.
        </p>

        <p>
          <a href="https://www.meetup.com/Girl-Develop-It-San-Francisco/">
            Check out our upcoming workshops and events! &rarr;
        </a>
        </p>

        <button class="expand-collapse" v-on:click="isGDIExpanded = !isGDIExpanded">
          <img src="../assets/arrow.png">
        </button>
      </div></div>
    </div></div>

    <div class="work-item col col-6"><div>
      <div class="work-image pink-filter">
        <img src="../assets/getschooled.png">
      </div>

      <div class="work-description" v-bind:class="{ expanded: isGSExpanded }"><div>
        <p>
          <strong>GetSchooled</strong> was originally conceived at the MasterCard Masters of Code
          Hackathon in San Francisco, where it won 2nd place. The focus of the hackathon was on
          building apps aimed at improving community and social good. GetSchooled aimed to help
          classrooms in need. It was a platflorm for public school teachers to request classroom
          supplies, which range from pencils to books for required reading.
        </p>

        <p>
          <a href="http://getschooled.herokuapp.com/">Go to website. &rarr;</a>
        </p>

        <button class="expand-collapse" v-on:click="isGSExpanded = !isGSExpanded">
          <img src="../assets/arrow.png">
        </button>
      </div></div>
    </div></div>

    <div class="work-item col col-6"><div>
      <div class="work-image teal-filter">
        <img src="../assets/continu.png">
      </div>

      <div class="work-description" v-bind:class="{ expanded: isContinuExpanded }"><div>
        <p>
          <strong>Continu</strong> is a learning platform used bycompanies to manage training and
          empower collaboration. I worked as a full stack engineer, working on infrastructure,
          backend, and frontend.
        </p>

        <p>
          <a href="https://www.continu.co/">Go to website. &rarr;</a>
        </p>

        <button class="expand-collapse" v-on:click="isContinuExpanded = !isContinuExpanded">
          <img src="../assets/arrow.png">
        </button>
      </div></div>
    </div></div>

    <div class="work-item col col-6"><div class="work-netsocket">
      <div class="work-image turquoise-filter">
        <img src="../assets/netsocket.jpg">
      </div>

      <div class="work-description" v-bind:class="{ expanded: isNetsocketExpanded }"><div>
        <p>
          <strong>Netsocket</strong> developed network virtualization and software-defined
          networking products. I worked on the web applications for these products whick allowed
          users to monitor and visualize their network data in real time.
        </p>

        <button class="expand-collapse" v-on:click="isNetsocketExpanded = !isNetsocketExpanded">
          <img src="../assets/arrow.png">
        </button>
      </div></div>
    </div></div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'Work',
    // components: {
    //   HelloWorld
    // }
    data() {
      return {
        isBrilliantExpanded: false,
        isGDIExpanded: false,
        isGSExpanded: false,
        isContinuExpanded: false,
        isNetsocketExpanded: false,
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../styles/globals.scss';
  @import '../styles/work.scss'
</style>
