<script lang="ts">
  import GoogleForm from "google-form-send";

  let email: HTMLInputElement;
  let submitted = false;
  let error = false;

  const formSubmit = async (
    e: Event & { currentTarget: EventTarget & HTMLFormElement }
  ) => {
    e.preventDefault();
    if (!email.validity.valid) return (email.required = true);
    e.currentTarget.reportValidity();

    let form = new GoogleForm(
      "https://docs.google.com/forms/d/e/1FAIpQLScGf-bzAIoTnv10eXwPAPIPxiM8_nWl8TJsDGGKNZpkvhoHMQ"
    );
    form.addField("entry.889115910", email.value);

    try {
      error = false;
      await form.send(true);
      submitted = true;
    } catch (err) {
      console.error(err);
      error = true;
    }
  };
</script>

<style lang="scss">
  @import "../scss/base/typography";
  @import "../scss/base/buttons";
  @import "../scss/base/forms";

  @import "../scss/components/signup";
</style>

<article class="signup__container">
  <div class="signup__content">
    {#if submitted}
      <h3>Email submitted</h3>
      <p>
        Thank you for joining the Yisu early access program. We'll be in contact
        with you once we've launched!
      </p>
    {:else}
      <h3>Register for early access</h3>
      <p>
        Yisu is currently in development but you can register here for early
        access and you will be added to our beta program once it is ready!
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
          {#if error}
            <p class="yisu-text-field__error">
              An error occurred. Please try again
            </p>
          {/if}
        </div>
        <button
          class="yisu-button yisu-button--w100"
          type="submit">Submit</button>
      </form>
    {/if}
  </div>
</article>
