// تنفيذ الترجمة عند الضغط على زر "اضغط هنا للترجمة"
document.getElementById('translate-button').addEventListener('click', function() {
    let inputText = document.getElementById('input-text').value;
    let sourceLang = document.getElementById('source-lang').value;
    let targetLang = document.getElementById('target-lang').value;

    if (inputText === '') {
        alert('يرجى إدخال نص للترجمة');
    } else {
        fetch(`https://api.mymemory.translated.net/get?q=${inputText}&langpair=${sourceLang}|${targetLang}`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('translated-text').textContent = data.responseData.translatedText;
            })
            .catch(error => {
                console.error('Error:', error);
                alert('حدث خطأ أثناء الترجمة.');
            });
    }
});

// زر الرجوع إلى الصفحة الرئيسية
document.getElementById('back-btn').addEventListener('click', function() {
    document.getElementById('intro').style.display = 'block';
    document.getElementById('translate-container').style.display = 'none';
});

// بدء الترجمة عند الضغط على زر "ابدأ الترجمة"
document.getElementById('start-btn').addEventListener('click', function() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('translate-container').style.display = 'block';
});