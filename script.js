document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        
        // Închide toate răspunsurile și resetează imaginile
        document.querySelectorAll('.faq-answer').forEach(ans => {
            if (ans !== answer) {
                ans.classList.remove('open');
                ans.previousElementSibling.classList.remove('open');
            }
        });

        // Alternăm clasa "open" pentru buton și răspuns
        answer.classList.toggle('open');
        item.classList.toggle('open');
    });
});

