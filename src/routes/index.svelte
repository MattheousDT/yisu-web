<script lang="ts">
  import Signup from "../components/signup.svelte";
</script>

<style lang="scss">
  @import "../scss/promo";
</style>

<svelte:head>
  <title>yisu! Early Access</title>
</svelte:head>

<div class="container">
  <article class="row promo promo__header">
    <div class="col-12">
      <img src="/img/logo.svg" draggable={false} alt="Yisu! logo" />
      <h3>The next generation language learning app</h3>
    </div>
  </article>
  <article class="row promo">
    <div class="col-12 col-lg-6 col-xl-5">
      <div class="promo__text promo__text--left">
        <h1>App Onboarding</h1>
        <h2 class="translation">入職</h2>
        <p class="large">
          Available in both light and dark mode, Yisu will invite you into the
          app by allowing you to log in with your email or by using Google and
          Apple.
        </p>
      </div>
    </div>
    <div class="col-12 col-lg-6 col-xl-7 promo__onboarding">
      <img
        src="/img/onboarding.png"
        draggable={false}
        alt="Yisu mobile login page displayed in light and dark mode" />
    </div>
  </article>
  <article class="row promo">
    <div class="col-12">
      <div class="promo__text promo__text--center">
        <h1>Lessons</h1>
        <h2 class="translation">課</h2>
        <p class="large">
          Topics are broken down into sections where lessons are grouped by
          difficulty. Instead of just giving the learner random words or phrases
          to learn, we give them reasons and cultural background as to why they
          are learning what they are learning.
        </p>
      </div>
    </div>
    <div class="col-12">
      <div class="row promo__lessons">
        <img
          src="/img/topic.png"
          draggable={false}
          alt="Yisu topic page, teaching Greetings" />
        <img src="/img/word.png" draggable={false} alt="Yisu word page" />
        <img
          src="/img/word2.png"
          draggable={false}
          alt="Yisu alternative word page" />
      </div>
    </div>
  </article>
  <article class="row promo">
    <div class="col-12 col-lg-6 col-xl-7 promo__activities">
      <img
        src="/img/activities.png"
        draggable={false}
        alt="Yisu mobile login page displayed in light and dark mode" />
    </div>
    <div class="col-12 col-lg-6 col-xl-5">
      <div class="promo__text promo__text--right">
        <h1>Activities</h1>
        <h2 class="translation">活動</h2>
        <p class="large">
          Using engaging and tested teaching techniques like cloze-deletion;
          yisu! will also make use of teaching via scenarios, listening and
          chat-like conversations to immerse the learner as much as possible in
          the language.
        </p>
      </div>
    </div>
  </article>
  <article class="row promo">
    <div class="col-12 col-lg-6 col-xl-5">
      <div class="promo__text promo__text--left">
        <h1>Community</h1>
        <h2 class="translation">社區</h2>
        <p class="large">
          Learn, share and discuss on the yisu! community tab. Chat more about
          topics, show off things you’re trying out while learning the language
          or get help with anything you’re struggling with.
        </p>
      </div>
    </div>
    <div class="col-12 col-lg-6 col-xl-7 promo__community">
      <img
        src="/img/community.png"
        draggable={false}
        alt="Yisu mobile login page displayed in light and dark mode" />
    </div>
  </article>
</div>
<Signup />
