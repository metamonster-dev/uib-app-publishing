<script>
    import { goto } from '$app/navigation';
    import PageHeader from "@components/PageHeader.svelte";
    import '@css/app/qna.scss';

    const notices = [
        { title: '상해후유증 장애 진단금 구비서류 안내', route: '/qna/requiredDocs/test' },
        { title: '상해 사망 보험금 구비서류 안내', route: '/qna/requiredDocs/test' },
        { title: '질병사망 보험금 구비서류 안내', route: '/qna/requiredDocs/test' },
        { title: '뇌졸중 진단금 구비서류 안내', route: '/qna/requiredDocs/test' },
        { title: '암 진단금 구비서류 안내', route: '/qna/requiredDocs/test' },
        { title: '급성심근경색 진단금 구비서류 안내', route: '/qna/requiredDocs/test' },
        { title: '실손의료비 구비서류 안내', route: '/qna/requiredDocs/test' },
    ];
</script>

<PageHeader pageName="필수서류안내" backRoute="/home"/>

<section id="필수서류안내">
    <div>
        <h4 class="mb36">질병/상해 보험금청구에 필요한<br>서류를 안내해 드려요.</h4>
        {#each notices as notice}
            <article on:click={() => goto(notice.route)}>
                <div>
                    <p>{notice.title}</p>
                    <i class="icon icon-arrow-right bg-gray icon-12"></i>
                </div>
                <div class="underline"></div>
            </article>
        {/each}
    </div>
</section>