<template>
  <div id="app">
    <header class="header">
      <div class="overlay has-fade"></div>
      <nav class="container container--pall flex flex-jc-sb flex-ai-c">
        <a href="/" class="header__logo">
          <img src="../src/assets/images/logo-torre.svg" alt="Easybank">
        </a>

        <a id="btnHamburger" href="#" class="header__toggle hide-for-desktop">
          <span></span>
          <span></span>
          <span></span>
        </a>

        <div class="header__links hide-for-mobile">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
        </div>

        <a href="#" class="button header__cta hide-for-mobile">Request Invite</a>
      </nav>

      <div class="header__menu has-fade">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Blog</a>
        <a href="">Careers</a>
      </div>

    </header>

    <!-- <Elements data /> -->

      <section class="hero">
        <div class="container">
            <div class="hero__image"></div>
            <div class="hero__text container--pall">
            <h1>
                Meet {{ data.person.name }}
            </h1>
            <p>{{ data.person.summaryOfBio }}
            </p>
            <div class="social_media" v-if="data.person.links != null">
              <h3>Follow on:</h3>
              <div class="social_media_count" v-for="(persons, index) in data.person.links" :key = "index">
                <a :href="data.person.links[index].address" class="button">{{data.person.links[0].name}}</a>
              </div>
            </div>  
          </div>
        </div>
      </section>

    <section class="feature">
      <div class="feature__content container container--pall">
        <div class="feature__intro">
          <h2>The background</h2>
          <p>
            Recent jobs</p>
        </div>
          <div class="feature__grid">
            <div class="feature__item" v-for="job in data.jobs" :key="job.index">
              <div class="feature__icon"><img src="../src/assets/images/icon-online.svg" alt=""></div>
              <div class="feature__title">
                {{ job.name }}
              </div>
              <div class="feature__description">
                At {{ job.organizations[0].name }} from {{ job.fromMonth}} {{ job.fromYear }} to {{ job.toMonth}} {{ job.toYear }}
              </div>
            </div>
          </div>
      </div>
    </section>
<!-- <div v-for="gen in data.strengths" :key="gen.index">
  {{gen.name}}
</div> -->
    <section class="article">
      <div class="container container--pall">
          <h2>Education</h2>
          <div class="article__grid">
            <a href="#" class="article__item" v-for="gen in data.education" :key="gen.index">
              <div class="article__image" style="background-color: darkGray;"></div>
              <div class="article__text">
                <div class="article__author">
                  {{gen.organizations[0].name}}
                </div>
                <div class="article__title">
                  {{gen.name}}
                </div>
                <div class="feature__description">
                  The world is getting smaller and we’re becoming more mobile. So why should you be 
                  forced to only receive money in a single …
                </div>
              </div>
            </a>
          </div>
      </div>
    </section>
    
    <footer class="footer">
      <div class="container">
        <a href="#" class="footer__logo">
          <img src="../src/assets/images/logo-torre-white.svg" alt="">
        </a>
        <div class="footer__social">
          <a href="#">
            <img src="../src/assets/images/icon-facebook.svg" alt="Facebook">
          </a>
          <a href="#">
            <img src="../src/assets/images/icon-youtube.svg" alt="YouTube">
          </a>
          <a href="#">
            <img src="../src/assets/images/icon-twitter.svg" alt="Twitter">
          </a>
          <a href="#">
            <img src="../src/assets/images/icon-pinterest.svg" alt="Pinterest">
          </a>
          <a href="#">
            <img src="../src/assets/images/icon-instagram.svg" alt="Instagram">
          </a>
        </div>
    
        <div class="footer__links col1">
          <a href="">About Us</a>
          <a href="">Contact</a>
          <a href="">Blog</a>
        </div>
    
        <div class="footer__links col2">
          <a href="">Careers</a>
          <a href="">Support</a>
          <a href="">Privacy Policy</a>
        </div>
    
        <div class="footer__cta">
          <a href="#" class="button">Request Invite</a>
        </div>

        <div class="footer__copyright">  
          &copy; Torre Labs, Inc.
        </div>
      </div>
    </footer>

    <div class="attribution" style="text-align:center; font-size: 0.8rem;">
      Based on the challenge by <a href="https://www.frontendmentor.io" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="http://github.com/Salvawho">Salvador</a>.
    </div>

  </div>
</template>

<script>

import Elements from './components/Elements.vue'
import Vue from 'vue';

export default {
  data: "",
  props:['data'],
  components: {
    Elements
  },
  data () {
    return {
      data,
      icons: ["../src/assets/images/icon-online.svg"]
    }
  },
  mounted(){
    Vue.axios.get('https://torre.bio/api/bios/jsdelarosa')
    .then((resp)=> {
      this.data = resp.data
      console.log(this.data)
    })
  }
}
</script>

<style lang="scss">
  @import "./assets/app/scss/style.scss"
</style>
