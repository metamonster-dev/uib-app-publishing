<script>
    import PageHeader from "@components/PageHeader.svelte";
    import '@css/app/accounts/Setting.scss';

    const settings = [
        {
            category: '서비스',
            items: [
                { name: '서비스 이용약관', type: 'link' },
                { name: '개인정보 처리방침', type: 'link' },
                { name: '공지사항', type: 'link' }
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
                        <article>
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
