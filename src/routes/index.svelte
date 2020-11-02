<script lang="ts">
  import Signup from "../components/signup.svelte";
</script>

<style lang="scss">
  @import "../scss/promo";
</style>

<svelte:head>
  <title>Register for beta access | yisu!</title>
</svelte:head>

<div class="container">
  <article class="row promo">
    <div class="col-5">
      <div class="promo__text promo__text--left">
        <h1>App Onboarding</h1>
        <h2 class="translation">入職</h2>
        <p class="large">
          Available in both light and dark mode, Yisu will invite you into the
          app by allowing you to log in with your email or by using Google and
          Apple
        </p>
      </div>
    </div>
    <div class="col-7 promo__onboarding">
      <img
        src="/onboarding.png"
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
        <img src="/topic.png" alt="Yisu topic page, teaching Greetings" />
        <img src="/topic.png" alt="Yisu topic page, teaching Greetings" />
        <img src="/topic.png" alt="Yisu topic page, teaching Greetings" />
        <img src="/topic.png" alt="Yisu topic page, teaching Greetings" />
      </div>
    </div>
  </article>
  <article class="row promo">
    <div class="col-7 promo__activities">
      <img
        src="/activities.png"
        alt="Yisu mobile login page displayed in light and dark mode" />
    </div>
    <div class="col-5">
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
</div>
<Signup />
