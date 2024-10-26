<script>
    import PageHeader from "@components/PageHeader.svelte";
    import '@css/app/Qna.scss';
    import Button from '@components/Button.svelte';
    import { goto } from "$app/navigation";

    import { setupPageHeight } from '@/common';
    setupPageHeight({includeHeader: true, includeFooter: true});
</script>

<PageHeader pageName="문의 내역" backRoute="/accounts/setting"/>

<section id="문의내역">
    <div>
        <article on:click={() => goto('/qna/1-1/test')}>
            <div>
                <div class="badge mb8">답변대기</div>
                <h5>보험금 청구 문의</h5>
                <h6 class="mt8 gray">2024.03.22</h6>
            </div>
            <i class="icon icon-arrow-right bg-gray icon-12"></i>
        </article>
        <article on:click={() => goto('/qna/1-1/test')}>
            <div>
                <div class="badge response mb8">답변완료</div>
                <h5>보험금 청구 문의</h5>       
                <h6 class="mt8 gray">2024.03.22</h6>
            </div>
            <i class="icon icon-arrow-right bg-gray icon-12"></i>
        </article>
        <Button className='bottom' route='/qna/1-1/new' action={null} text='문의하기' />
    </div>
</section>