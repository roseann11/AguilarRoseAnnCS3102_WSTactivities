document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('textInput');
    const wordCount = document.getElementById('wordCount');
    const sentenceCount = document.getElementById('sentenceCount');

    function updateCounts() {
        const text = textInput.value;
        
        // Count words
        const words = text.trim() ? text.trim().split(/\s+/).length : 0;
        
        // Count sentences
        const sentences = text.trim() ? 
            text.split(/[.!?]+(?:\s|$)/)
                .filter(sentence => sentence.trim().length > 0)
                .length : 0;
        
        wordCount.textContent = words;
        sentenceCount.textContent = sentences;
    }

    textInput.addEventListener('input', updateCounts);
    updateCounts();

    // Adjust textarea height on window resize for better responsiveness
    function adjustTextareaHeight() {
        const vh = window.innerHeight;
        const maxHeight = Math.max(120, vh * 0.4); // 40% of viewport height, minimum 120px
        textInput.style.height = `${Math.min(200, maxHeight)}px`;
    }

    window.addEventListener('resize', adjustTextareaHeight);
    adjustTextareaHeight();
});