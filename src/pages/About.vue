<template>
  <Landing>
    <div class="index_all">
      <Header :isPage="true" :quote="quoteText" />
      <div class="container-about">
        <div class="wrapper-about">
          <p>
            My name is David Milošević, and I am a web developer from Belgrade.
            Web development is something I deeply dived in almost 2 years ago ,
            when shift in my professional consciousness occurred... but the
            spark was initiated much earlier when I realized I am in love with
            <span class="highlighted">Linux</span>,
            <span class="highlighted">Vim</span>, open-source, command line and
            coding in general.
          </p>
          <p>
            To start my career in this area, I decided to leave my previous
            profession and that is cooking. Yes, I was a chef for 9 years. Now I
            am praying to the holy trinity of front end development (HTML, CSS
            and Javascript) and expanding the experience with modern javascript
            frameworks, started it with
            <span class="highlighted">React</span> and
            <span class="highlighted">Gatsby</span>, and continuing with
            <span class="highlighted">Vue.js</span>,
            <span class="highlighted">Nuxt</span> and
            <span class="highlighted">Gridsome</span>.
          </p>
          <p>
            The reason I started to use Vue.js as my favourite web tool is
            because of my current job at Widewalls Ltd (<a
              class="underlined"
              href="https://widewalls.ch"
              >widewalls.ch</a
            >) which is built with Nuxt (Vue based framework). Skills that I
            earned at this company are working with team and version control
            tools such as <span class="highlighted">Git</span>,
            <span class="highlighted">Github</span>,
            <span class="highlighted">Kanban</span>
            and solidifying practice of
            <span class="highlighted">Sass</span>
            and Vue. In parallel I started working with great
            <a
              class="underlined"
              href="https://3lite.co/2019/06/13/introducing-lupa-our-solution-to-your-construction-disputes/"
              >LUPA™</a
            >
            team, supervised by 3lite.
          </p>

          Feel free to contact me via
          <g-link class="underlined" to="/contact">E-mail</g-link> or on
          <a
            class="underlined"
            href="https://www.linkedin.com/in/david-milosevic-9391a617/"
            >LinkedIn</a
          >. Thank you for reading!
        </div>
      </div>
      <Footer />
    </div>
  </Landing>
</template>

<script>
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Tech from "~/components/Tech";

export default {
  components: {
    Footer,
    Header,
    Tech
  },
  metaInfo: {
    title: "About"
  },
  layout: "Landing",

  data() {
    return {
      quoteText: ["GET TO KNOW", "ME", "A LITTLE BETTER"]
    };
  }
};
</script>

<style lang="scss">
.index_all {
  background-image: url(../assets/workstation.png);
  background-size: cover;

  @media (max-width: 576px) {
    background-image: url(../assets/workstation2.png);
    background-size: cover;
  }
}

.container-about {
  display: flex;
  justify-content: center;
}

.wrapper-about {
  width: 60vw;
  padding: 2rem;
  font-size: 1.2rem;
  border-left: 1px solid #2e8b57;
  border-right: 1px solid #2e8b57;
  color: wheat;

  @media (max-width: 576px) {
    width: 90vw;
  }
}

.underlined {
  text-decoration: underline;
  color: white;
}

.highlighted {
  color: white;
}
</style>
