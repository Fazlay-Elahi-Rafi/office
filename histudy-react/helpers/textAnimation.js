const animateText = (words, wordsRef) => {
    let totalWords = words.length;

    setInterval(() => {
        const visibleWord = wordsRef.current.find(el => {
            return el.classList.contains('is-visible');
        });

        let visibleWordIndex = wordsRef.current.indexOf(visibleWord);
        let nextWord;

        if (visibleWordIndex === totalWords - 1) {
            nextWord = wordsRef.current[0];
        } else {
            nextWord = visibleWord.nextElementSibling;
        }

        visibleWord.classList.remove('is-visible');
        visibleWord.classList.add('is-hidden');
        nextWord.classList.remove('is-hidden');
        nextWord.classList.add('is-visible');
    }, 2000);
}

module.exports = {
    animateText
};
