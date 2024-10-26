<script>
    import { goto } from '$app/navigation';
    export let currentPage = '';

    import ActionSheet from '@components/ActionSheet.svelte';
    let showActionSheet = false;
    let sheetData = [
        {
            title: '내역보기',
            items: [
                { itemTitle: '단체상해보험', route: '/history' },
                { itemTitle: '주차장 배상책임보험', route: '/history' },
                { itemTitle: '유도선 사업자 배상책임보험', route: '/history' },
                { itemTitle: '연장보증보험', route: '/history' }
            ]
        }
    ];
</script>

<footer>
    <div>
        <i class="icon icon-footer-home icon-36 {currentPage === 'home' ? 'bg-blue' : 'bg-lightGray'}" on:click={() => goto('/home')}></i>
        <i class="icon icon-footer-history icon-36 {currentPage === 'history' ? 'bg-blue' : 'bg-lightGray'}" on:click={() => showActionSheet = true}></i>
        <i class="icon icon-footer-setting icon-36 {currentPage === 'setting' ? 'bg-blue' : 'bg-lightGray'}" on:click={() => goto('/accounts/setting')}></i>
    </div>
</footer>

<ActionSheet {sheetData} bind:showActionSheet/>

<style>
    footer { position: sticky; bottom: 0; width: calc(100% - 3.2rem); background-color: var(--white); margin: 0 auto; padding: .8rem 1.6rem; box-shadow: 0px 0px 6px 0px #00000020; z-index: 1000;}
    footer div { display: flex; justify-content: space-between; align-items: flex-start; position: relative; width: 100%; }
    .icon { width: calc(33.33%); text-align: center; }
</style>