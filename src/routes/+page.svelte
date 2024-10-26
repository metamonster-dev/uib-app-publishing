<script>

    import { onMount, afterUpdate } from 'svelte';
    import { goto } from '$app/navigation';
    import splashImage from '@images/splash/splash.png';

    onMount(() => {
        setTimeout(() => {
            goto('/home');
        }, 3000);
    });


    function setDivHeight() {
        const vh = window.innerHeight * 0.01;
        const footerHeight = 52; 
        const divs = document.querySelectorAll('section > div:first-child');

        if (divs.length > 0) {
            divs.forEach((div) => {
                div.style.height = `${vh * 100 - footerHeight}px`;
                div.style.maxHeight = `${vh * 100 - footerHeight}px`;
            });
        }
    }

    const updateHeight = () => setDivHeight();

    onMount(() => {
        setDivHeight();
        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
    });

    afterUpdate(() => {
        setDivHeight();
    });
</script>

<section id="splash">
    <div class="text-center">
        <div class="splash-item">
            <div>
                <h6 class="white">WE GO TOGETHER</h6>
                <h4 class="fw600 white">글로벌 TOP 5 보험중계사</h4>
            </div>
            <img src="{splashImage}" alt="">
        </div>
        <span class="small">Copyright &copy; 2024 UIB all rights reserved.</span>
    </div>
</section>
