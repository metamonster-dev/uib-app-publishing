<script>
    import PageHeader from "@components/PageHeader.svelte";
    import Button from '@components/Button.svelte';
    import Comment from '@components/Comment.svelte';

    let comments = [
        "계정삭제 시 접수한 보험금 청구내역, 작성한 1대1 문의 내역은 모두 소멸됩니다.",
        "계정삭제 시 가입정보는 소멸됩니다.",
        "가입정보 복구는 고객센터에 문의해 주세요."
    ];

    import Confirm from '@components/Confirm.svelte';

    let showConfirm = false;
    let confirmData = {
        showConfirm: showConfirm,
        title: '계정을 정말로 삭제하시겠습니까?',
        text: '',
        cancel: '취소',
        ok: '확인',
        route: '/home',
    };


    function next () {
        showConfirm = true;
        confirmData.showConfirm = true;
    }

</script>

<PageHeader pageName="계정삭제" backRoute="/accounts/setting"/>
<Confirm {confirmData} bind:showConfirm />
<section>
    <div>
        <Comment {comments} />
        <Button className='bottom bg-red' route='' action={next} text='탈퇴하기' />
    </div>
</section>
