<script>
    import PageHeader from "@components/PageHeader.svelte";
    import Button from '@components/Button.svelte';
    import '@css/app/Insurance.scss';
    import { setupPageHeight } from '@/common';
    
    setupPageHeight({ includeHeader: false, includeFooter: true });

    let selectedMenu = 0;
    const menus = ['DB손해보험', 'KB손해보험', '롯데손해보험', 'MG손해보험'];

    function selectMenu(index) {
        selectedMenu = index;
    }
</script>

<PageHeader pageName='단체상해보험' backRoute="3" closeRoute="3" closeIcon="qusition-o" />

<section id="단체상해보험" class="insurance">
    <div>
        <div class="divider"></div>
        <article id="steps6">
            <div>
                <div class="flex-center">
                    <h5>6. 청구서 미리보기</h5>
                    <span class="blue fw600"><u>수정하기</u></span>
                </div>
            </div>
            <div>
                <div class="pageHeader">
                    {#each menus as menu, index}
                        <p 
                            class:selected={selectedMenu === index}
                            on:click={() => selectMenu(index)}>
                            {menu}
                        </p>
                    {/each}
                </div>
            </div>
            <footer>
                <Button route="5" text='증빙서류 첨부' />
            </footer>
        </article>
    </div>
</section>