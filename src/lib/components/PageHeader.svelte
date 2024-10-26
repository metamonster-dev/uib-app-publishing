<script>
    import { goto } from '$app/navigation';

    export let pageName = '페이지이름';
    export let backRoute = '#'
    export let closeRoute = '#'
    export let closeIcon = '';
</script>

<header>
    {#if backRoute !== ''}
    <i class="icon icon-arrow-left icon-20" on:click={() => goto(backRoute)}></i>
    {:else}
    <i class="icon icon-20"></i>
    {/if}
    <h5 class="fw700 page-title">{pageName}</h5>
    {#if !backRoute}
    <i class="icon icon-x icon-20" on:click={() => goto(closeRoute)}></i>
    {/if}
    {#if closeIcon}
    <i class="icon icon-{closeIcon} icon-28" on:click={() => goto(closeRoute)}></i>
    {/if}
</header>

<style>
    header { display: flex; align-items: center; justify-content: space-between; background-color: var(--white); max-width: 52.8rem; margin: 0 auto; padding: 1.6rem; border-bottom: 1px solid var(--lightGray); position: relative;}
    .icon-arrow-left {flex: 0 0 auto;}
    .page-title { position: absolute; left: 50%; transform: translateX(-50%);}
</style>
