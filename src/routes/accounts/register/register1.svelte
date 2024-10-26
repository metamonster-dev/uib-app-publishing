<script>
    import PageHeader from "@components/PageHeader.svelte"
    import Button from '@components/Button.svelte';
    import '@css/app/accounts/Register.scss';

    let name = '';
    let ssn6 = '';
    let ssn7 = '';
</script>

<PageHeader pageName="가입대상 확인" backRoute="/home"/>

<section id="가입대상확인">
    <div>
        <div class="mt24 mb24">
            <h5>서비스 이용 전 가입 대상 확인을 <br>진행할게요</h5>
        </div>
        <div class="loginInput">
            <div>
                <label>직원명</label>
                <input class="input" type="text" id="name" bind:value={name} placeholder="이름을 입력해 주세요" required />
            </div>
            <div>
                <label>주민등록번호</label>
                <div class="ssn-input">
                    <input class="input" type="text" id="ssn" bind:value={ssn6} placeholder="생년월일 6자리" required />
                    <h5>-</h5>
                    <input class="input" type="text" id="ssn" bind:value={ssn7} placeholder="뒷 번호 7자리" required />
                </div>
            </div>
        </div>
        <Button className='mt24' disabled={true} route='' action={null} text='확인' />
    </div>
</section>