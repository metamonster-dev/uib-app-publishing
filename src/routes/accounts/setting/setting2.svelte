<script>
    import { goto } from '$app/navigation';
    import PageHeader from "@components/PageHeader.svelte";
    import '@css/app/accounts/Setting.scss';

    const settings = [
        {
            category: '알림',
            items: [
                { name: 'App 알림', type: 'toggle', active: false, route: '' },
                { name: 'Push 알림', type: 'toggle', active: true, route: '' }
            ]
        },
        {
            category: '서비스',
            items: [
                { name: '서비스 이용약관', type: 'link', route: '/terms/services-policy'},
                { name: '개인정보 처리방침', type: 'link', route: '/terms/privacy-policy'},
                { name: '공지사항', type: 'link', route: '/notice'},
                { name: '1:1문의', type: 'link', route: '/qna/1-1'},
                { name: '계정삭제', type: 'link', route: '/accounts/delete'}
            ]
        }
    ];
</script>

<PageHeader pageName="설정" backRoute="/home"/>

<section>
    <div>
        {#each settings as setting}
            <section class="settings">
                <h5>{setting.category}</h5>
                <div class="underline"></div>
                <div class="setting-list">
                    {#each setting.items as item}
                        <article on:click={() => item.route && goto(item.route)}>
                            <p>{item.name}</p>
                            {#if item.type === 'toggle'}
                                <div class="toggle-btn {item.active ? 'active' : ''}"></div>
                            {:else if item.type === 'link'}
                                <i class="icon icon-arrow-right bg-gray icon-12"></i>
                            {/if}
                        </article>
                    {/each}
                </div>
            </section>
        {/each}
    </div>
</section>
