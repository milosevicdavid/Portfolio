<template>
  <Landing>
  <div class="index_all">
    <Header isPage="true" :quote="quoteText" />
    <div class="center-mail">
      <form action="https://formspree.io/f/xdopdwjy" method="POST" class="form">
        <div>
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            id="name"
            class="form-control"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            id="email"
            class="form-control"
            placeholder="Your e-mail"
          />
        </div>
        <div>
          <label htmlFor="message">message</label>
          <textarea
            id="message"
            name="message"
            cols="10"
            rows="10"
            class="form-control"
            placeholder="Your letter"
          />
          <div>
            <input class="button-letter submit" type="submit" value="Send" />
          </div>
        </div>
      </form>
    </div>

    <Footer />
  </div>
  </Landing>
</template>

<script>
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export default {
  data() {
    return {
      quoteText: ["WRITE ME A", "LONG", "LETTER"],
    };
  },

  components: {
    Header,
    Footer,
  },
 metaInfo: {
        title: "Contact",
    },

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


.contact {
  padding: 4rem 0;
}
.center-mail {
  width: 50vw;
  margin: auto;
  @media (max-width: 576px) {
    height: 100vh;
    width: 90vw;
  }
}
label {
  text-transform: capitalize;
  display: block;
  margin-bottom: 0.5rem;
}

.form {
  padding: 1rem;
  outline: none;
}

.form-control,
.submit {
  width: 100%;
  font-size: 1rem;
  margin-bottom: 1rem;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  border: 3px solid #2e8b57;
  background-color: #282828;

  &:focus {
    background-color: #282828;
    outline: none;
    color: wheat;
    border: 3px solid #2e8b57;
    outline: 0;
    box-shadow: none;
  }
}
.submit {
  text-transform: uppercase;
  cursor: pointer;
}

.button-letter {
  height: 50px;
  width: 100px;
  color: #2e8b57;
  border-radius: 0;
  background-color: #282828;
  border: 3px solid #2e8b57;

  &:hover {
    color: wheat;
  }
}
</style>
