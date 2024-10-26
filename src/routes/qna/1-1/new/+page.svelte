<script>
    import PageHeader from "@components/PageHeader.svelte";
    import '@css/app/Qna.scss';
    import Button from '@components/Button.svelte';
    import Confirm from '@components/Confirm.svelte';

    let showConfirm = false;
    let confirmData = {
        showConfirm: showConfirm,
        title: '문의 하시겠습니까?',
        text: '텍스트 필드',
        cancel: '취소',
        ok: '확인',
        route: '/qna/1-1',
    };


    function next () {
        showConfirm = true;
        confirmData.showConfirm = true;
    }
</script>

<PageHeader pageName="문의하기" backRoute="" closeRoute="/qna/1-1"/>
<Confirm {confirmData} bind:showConfirm />
<section id="문의하기">
    <div>
        <input class="input mb18" type="text" placeholder="제목을 입력해주세요.">
        <textarea class="input" placeholder="내용을 입력해주세요." rows="5"></textarea>
        <h6 class="char-count gray">0/500</h6>
        <Button className='bottom' route="/accounts/setting" disabled={false} action={next} text='등록' />
    </div>
</section>