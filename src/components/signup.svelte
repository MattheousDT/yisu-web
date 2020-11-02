<script lang="ts">
  import GoogleForm from "google-form-send";

  let email: HTMLInputElement;

  const formSubmit = (e: Event) => {
    e.preventDefault();
    if (!email.validity.valid) return (email.required = true);

    let form = new GoogleForm("");
    form.addField("bruh", email.value);
    console.log(form);
  };
</script>

<style lang="scss">
  @import "../scss/base/typography";
  @import "../scss/base/buttons";
  @import "../scss/base/forms";

  @import "../scss/components/signup";
</style>

<div class="signup__container">
  <div class="signup__background" />
  <div class="signup__content">
    <h3>Register for beta access</h3>
    <p>
      Yisu is currently in development but you can register here for beta access
      and you will be added to our beta program once it is ready!
    </p>
    <form on:submit={formSubmit}>
      <div class="yisu-text-field">
        <label for="email">Email Address</label>
        <input
          bind:this={email}
          type="email"
          name="email"
          id="email"
          placeholder="example@example.com" />
      </div>
      <button
        class="yisu-button yisu-button--w100"
        type="submit">Submit</button>
    </form>
  </div>
</div>
