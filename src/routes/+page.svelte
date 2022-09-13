<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
  const { token } = data;

  async function login() {
    try {
      await fetch("/auth/login", { method: "POST" });
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }
</script>

{#if token}
  You are logged in with token {token}
{:else}
  <button on:click={() => login()}>Click to login</button>
{/if}
