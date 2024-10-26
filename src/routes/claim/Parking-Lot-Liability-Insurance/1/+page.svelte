<script>
    import PageHeader from "@components/PageHeader.svelte";
    import Button from '@components/Button.svelte';
    import '@css/app/Insurance.scss';

	import ParkingLotLiabilityInsurance from '@images/claim/Parking-Lot-Liability-Insurance.png';

    import { setupPageHeight } from '@/common';
    setupPageHeight({ includeHeader: false, includeFooter: true });
</script>

<PageHeader pageName='주차장 배상책임보험' backRoute="./" closeRoute="/home" closeIcon="home" />

<section id="주차장배상책임보험" class="insurance">
    <div>
        <div class="divider"></div>
        <article id="steps5">
            <div>
                <div class="flex-center">
                    <h5>5. 청구서 미리보기</h5>
                    <span class="blue fw600"><u>수정하기</u></span>
                </div>
            </div>
            <div>
                <img src="{ParkingLotLiabilityInsurance}" alt="">
            </div>
            <footer>
                <Button route="../Parking-Lot-Liability-Insurance/2" text='증빙서류 첨부' />
            </footer>
        </article>
    </div>
</section>
