<script>
    import { goto } from '$app/navigation';
    import PageHeader from "@components/PageHeader.svelte"
    import Button from '@components/Button.svelte';


    import Alert from '@components/Alert.svelte';
    let showAlert = false;
    let AlertData = {
        showAlert: showAlert,
        title: '로그인',
        text: '',
        button: '확인',
        route: '',
        close: '',
    };

    let loginID;
    let loginPW;

    function login() {
        if (!loginID || !loginPW) {
            AlertData.text = '아이디와 비밀번호를 모두 입력해주세요';
            showAlert = true;
            return;
        }

        localStorage.setItem('UIB_LOGIN_TOKEN', 'success');
        goto('/home');
    }
</script>


<Alert {AlertData} bind:showAlert />

<PageHeader pageName="로그인" backRoute="/home"/>

<section>
    <div>
        <div class="mt24 mb24">
            <h5 class="fw400">회원 서비스 이용을 위해</h5>
            <h5>로그인 해주세요.</h5>
        </div>
        <div class="loginInput">
            <div>
                <label for="loginID">아이디</label>
                <input type="text" id="loginID" bind:value={loginID} placeholder="아이디를 입력해 주세요." required />
            </div>
            <div>
                <label for="loginID">비밀번호</label>
                <input type="password" id="loginPW" bind:value={loginPW} placeholder="비밀번호를 입력해 주세요." required />
            </div>
        </div>
        <Button route='' action={login} text='로그인' />
    </div>
</section>

<style>
    .loginInput {display: flex; flex-direction: column; gap: 1.2rem;}
    .loginInput div {display: flex; flex-direction: column; gap: .8rem;}
    input {border: 1px solid #E5E5EC; font-size: 1.4rem; padding: 1.4rem 1.6rem;}
</style>