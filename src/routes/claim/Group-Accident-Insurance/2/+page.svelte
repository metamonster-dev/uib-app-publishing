<script>
    import PageHeader from "@components/PageHeader.svelte";
    import Button from '@components/Button.svelte';
    import BoxRadioButton from '@components/BoxRadioButton.svelte';
    import RadioButton from '@components/RadioButton.svelte';
    import '@css/app/Insurance.scss';
    
    import { setupPageHeight } from '@/common';
    setupPageHeight({ includeHeader: false, includeFooter: true });

    import ActionSheet from '@components/ActionSheet.svelte';

    import SignModal from '@components/Sign.svelte';
    let showSignSheet = false;
</script>

<PageHeader pageName='단체상해보험' backRoute="1" closeRoute="1" closeIcon="qusition-o" />

<SignModal bind:showSignSheet/>
<section id="단체상해보험" class="insurance">
    <div>
        <div class="divider"></div>
        <article id="steps4">
            <div class="input-group">
                <h5>4. 보험금 청구서류 접수대행 이용동의</h5>
                <div>
                    <p class="gray">보험금 청구서류 접수대행 서비스를<br>신청하시겠습니까?</p>
                    <BoxRadioButton options={['아니오', '예']} className="mt20" />
                </div>
                <div>
                    <p class="gray mt32 mb12">고객님의 보험금 청구서류를 전송할 회사에 <br>체크해 주세요.</p>
                    <RadioButton options={['중복 가입된 모든 회사', '서류를 보내고자 하는 회사']} margin={true}/>
                    <BoxRadioButton options={['DB 손해보험', 'KB 손해보험', '롯데 손해보험']} className="mt20" allowMultiple={true} />
                </div>
                <h5>청구일 : 2024년 07월 08일</h5>
                <div>
                    <label>청구자 <sup class="red">*</sup></label>
                    <input class="input" disabled type="text" value="홍길동">
                </div>
                <button class="addfile" on:click={() => showSignSheet = true}>서명하기</button>
            </div>
            <footer>
                <Button route="3" text="다음"/>
            </footer>
        </article>
    </div>
</section>