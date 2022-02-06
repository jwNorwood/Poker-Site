
  <script>
    import { createForm } from "svelte-forms-lib";

    const { form, handleChange, handleSubmit } = createForm({
      initialValues: {
        confirmPassword: "",
        password: "",
        email: ""
      },
      onSubmit: values => {
        alert(JSON.stringify(values));
      }
    });
  </script>

  <form on:submit={handleSubmit}>
    <label for="name">email</label>
    <input
      id="email"
      name="email"
      on:change={handleChange}
      bind:value={$form.email}
    />

    <label for="password">password</label>
    <input
      id="password"
      name="password"
      on:change={handleChange}
      bind:value={$form.password}
      type="password"
    />

    <label for="confirmPassword">confirm password</label>
    <input
      id="confirmPassword"
      name="confirmPassword"
      on:change={handleChange}
      bind:value={$form.confirmPassword}
      type="password"
    />

    <button type="submit">Submit</button>
  </form>


<style lang="postcss">
  input {
    @apply w-full px-8 py-4 mb-4 text-base leading-normal bg-white border border-gray-300 rounded shadow appearance-none;
  }
  input:focus {
    @apply outline-none shadow-md;
  }
  button {
    @apply w-full px-8 py-4 mb-4 text-base leading-normal bg-green-400 text-green-900 border-0 rounded shadow hover:bg-green-300 font-bold;
  }
</style>
