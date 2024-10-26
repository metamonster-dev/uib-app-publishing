import { onMount, afterUpdate } from 'svelte';

export function setPageHeight({ includeHeader = true, includeFooter = true, includeSafeArea = true } = {}) {
    const vh = window.innerHeight * 0.01;
    const headerHeight = includeHeader ? 62 : 0; // 헤더 높이
    const footerHeight = includeFooter ? 75 : 0; // 푸터 높이
    const safeArea = includeSafeArea ? 52 : 0; // 세이프티 에리아 높이
    const divs = document.querySelectorAll('section > div:first-child');

    if (divs.length > 0) {
        divs.forEach((div) => {
            div.style.height = `${vh * 100 - headerHeight - footerHeight - safeArea}px`;
            div.style.maxHeight = `${vh * 100 - headerHeight - footerHeight - safeArea}px`;
        });
    }
}

export function setupPageHeight(options) {
    const updateHeight = () => setPageHeight(options);

    onMount(() => {
        setPageHeight(options);
        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
    });

    afterUpdate(() => {
        setPageHeight(options);
    });
}


export function checkLogin() {
    const token = localStorage.getItem('UIB_LOGIN_TOKEN');
    return token === 'success';
}