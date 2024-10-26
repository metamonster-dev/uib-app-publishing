<script>
    import { goto } from '$app/navigation';
    import logo from "@images/logo.png"
</script>

<header>
    <img src="{logo}" alt="">
    <div>
        <i class="icon icon-bell-o icon-30" on:click={() => goto('/accounts/notice')}></i>
        <!-- <i class="icon icon-setting-o icon-30" on:click={() => goto('/accounts/setting')}></i> -->
    </div>
</header>

<style>
    header {display: flex; align-items: center; justify-content: space-between; background-color: var(--white); margin: 0 auto; padding: 1.6rem; z-index: 1000; border-bottom: 1px solid var(--lightGray);}
    header div {display: flex; align-items: center; gap: .8rem;}
    header img {width: 150px;}
</style>