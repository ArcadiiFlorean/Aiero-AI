document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        
        // Verifică dacă răspunsul este deja deschis
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            // Închide toate răspunsurile deschise
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.style.display = "none";
            });
            // Deschide răspunsul pentru întrebarea curentă
            answer.style.display = "block";
        }
    });
});

