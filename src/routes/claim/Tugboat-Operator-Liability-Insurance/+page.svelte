<script>
    import PageHeader from "@components/PageHeader.svelte";
    import Button from '@components/Button.svelte';
    import '@css/app/Insurance.scss';
    
	import sampleImage from '@images/sample.png';
	import ParkingLotLiabilityInsurance from '@images/claim/Parking-Lot-Liability-Insurance.png';

    import { setupPageHeight } from '@/common';
    setupPageHeight({ includeHeader: false, includeFooter: true });

    import SelectDate from '@components/SelectDate.svelte';
    import Select from '@components/Select.svelte';
    import ActionSheet from '@components/ActionSheet.svelte';

    let showActionSheet = false;
    let sheetData = [{component: '증빙서류 첨부',}];
    let files = [
        { name: '증빙서류1.jpg', src: sampleImage },
        { name: '증빙서류2.jpg', src: sampleImage },
        { name: '증빙서류3.jpg', src: sampleImage },
        { name: '증빙서류4.jpg', src: sampleImage }
    ];
</script>

<PageHeader pageName='유도선사업자 배상책임보험' backRoute="/home" closeRoute="/home" closeIcon="home" />

<ActionSheet {sheetData} bind:showActionSheet/>

<section id="유도선사업자배상책임보험" class="insurance">
    <div>
        <div class="divider"></div>
        <article id="steps1">
            <div class="input-group">
                <h5>1. 선박정보</h5>
                <div>
                    <label>승선일자 <sup class="red">*</sup></label>
                    <Select placeholder="승선일자 선택" options={['2024년', '2023년', '2022년']}/>
                </div>
                <div>
                    <label>선박회사명 <sup class="red">*</sup></label>
                    <input class="input" type="text" placeholder="선박회사명을 입력해 주세요">
                </div>
                <div>
                    <label>선박명 <sup class="red">*</sup></label>
                    <input class="input" type="text" placeholder="선박명을 입력해 주세요">
                </div>
            </div>
        </article>
        <div class="divider"></div>
        <article id="steps2">
            <div class="input-group">
                <h5>2. 승선자 정보</h5>
                <div>
                    <label>이름 <sup class="red">*</sup></label>
                    <input class="input" type="text" placeholder="승선자 이름을 입력해 주세요">
                </div>
                <div>
                    <label>승선자 생년월일 <sup class="red">*</sup></label>
                    <SelectDate />
                </div>
                <div>
                    <label>승선자 휴대폰 번호 <sup class="red">*</sup></label>
                    <div class="phone-input">
                        <input class="input" type="text" placeholder="010" value="010" required />
                        <h5>-</h5>
                        <input class="input" type="text" placeholder="숫자입력" required />
                        <h5>-</h5>
                        <input class="input" type="text" placeholder="숫자입력" required />
                    </div>
                </div>
            </div>
        </article>
        <div class="divider"></div>
        <article id="steps3">
            <div class="input-group">
                <h5>3. 사고 정보</h5>
                <div>
                    <label>사고일시 <sup class="red">*</sup></label>
                    <SelectDate />
                </div>
                <div>
                    <label>사고경위 <sup class="red">*</sup></label>
                    <textarea class="input mt8" placeholder="사고경위를 작성해 주세요." rows="4"></textarea>
                    <h6 class="char-count gray">0/200</h6>
                </div>
            </div>
        </article>
        <div class="divider"></div>
        <article id="steps4">
            <div class="input-group">
                <h5>4. 보험금 수령정보</h5>
                <div>
                    <label>수령자 이름 <sup class="red">*</sup></label>
                    <input class="input" type="text" placeholder="수령자 이름을 입력해 주세요">
                </div>
                <div>
                    <label>은행/계좌번호<sup class="red">*</sup></label>
                    <Select placeholder="은행 선택" options={['은행1', '은행2', '은행3']}/>
                    <input class="input" type="text" placeholder="계좌번호 입력">
                </div>
            </div>
            <footer>
                <Button route="./Tugboat-Operator-Liability-Insurance/1" text='청구서 미리보기' />
            </footer>
        </article>
    </div>
</section>
