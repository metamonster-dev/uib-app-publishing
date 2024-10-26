<script>
    import PageHeader from "@components/PageHeader.svelte";
    import { goto } from '$app/navigation';

    const notices = [
        { title: 'UIB 공지사항 안내', date: '2024.03.22', route: '/notice/test' },
        { title: '보험 청구 변경 내용 안내', date: '2024.03.22', route: '/notice/test' },
        { title: 'UIB 이용 가이드', date: '2024.03.22', route: '/notice/test' }
    ];
</script>

<PageHeader pageName="공지사항" backRoute="/accounts/setting"/>

<section>
    <div>
        {#each notices as notice}
            <article on:click={() => goto(notice.route)}>
                <div>
                    <h5>{notice.title}</h5>
                    <i class="icon icon-arrow-right bg-gray icon-12"></i>
                </div>
                <h6 class="mt8 gray">{notice.date}</h6>
                <div class="underline"></div>
            </article>
        {/each}
    </div>
</section>



<style>
    article > div:first-child {display: flex; justify-content: space-between; align-items: center;}
    .underline {margin: 1.6rem 0;}
</style>