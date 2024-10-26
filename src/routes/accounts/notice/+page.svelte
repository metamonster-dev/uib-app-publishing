<script>
    import PageHeader from "@components/PageHeader.svelte"
    import '@css/app/accounts/Notice.scss';

    const notifications = [
        { title: '보험금 청구', message: '서류가 보험사에 전달되었습니다.', time: '2시간 전' },
        { title: '1:1문의', message: '에 대한 답변이 완료되었습니다.', time: '4시간 전' },
        { title: '보험금 청구', message: '서류가 보험사에 전달되었습니다.', time: '2시간 전' },
        { title: '1:1문의', message: '에 대한 답변이 완료되었습니다.', time: '4시간 전' },
        { title: '보험금 청구', message: '서류가 보험사에 전달되었습니다.', time: '2시간 전' },
        { title: '1:1문의', message: '에 대한 답변이 완료되었습니다.', time: '4시간 전' },
        { title: '보험금 청구', message: '서류가 보험사에 전달되었습니다.', time: '2시간 전' },
        { title: '1:1문의', message: '에 대한 답변이 완료되었습니다.', time: '4시간 전' },
        { title: '보험금 청구', message: '서류가 보험사에 전달되었습니다.', time: '2시간 전' },
        { title: '1:1문의', message: '에 대한 답변이 완료되었습니다.', time: '4시간 전' },
        { title: '보험금 청구', message: '서류가 보험사에 전달되었습니다.', time: '2시간 전' },
        { title: '1:1문의', message: '에 대한 답변이 완료되었습니다.', time: '4시간 전' },
    ];
</script>

<PageHeader pageName="알림" backRoute="/home"/>

<section id="알림">
    <div>
        {#each notifications as notification}
            <article>
                <i class="icon icon-alert-o icon-24"></i>
                <div>
                    <p class="mb4"><b>{notification.title}</b> {notification.message}</p>
                    <span class="gray">{notification.time}</span>
                </div>
            </article>
        {/each}
    </div>
</section>