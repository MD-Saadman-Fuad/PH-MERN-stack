console.log('index.js connected!!');

const loadLessons = () => {
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res => res.json())
    // .then(data => displayLessons(data.data))
    .then(data => displayLessons(data.data))
}

const displayLessons = lessons => {
    // console.log(lessons);
    const levelContainer = document.getElementById('level-container');
    levelContainer.innerHTML = '';
    for(const lesson of lessons){
        const btnDiv = document.createElement('div');
        btnDiv.innerHTML = `<button onClick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
        <i class="fa-solid fa-book-open"></i> Lesson ${lesson.level_no}</a></button>
        `;
        levelContainer.appendChild(btnDiv);
    }
}

const loadLevelWord = (id) => {
    // console.log(id);    
    const url = `https://openapi.programming-hero.com/api/level/${id}`;   
    // console.log(url);
    fetch(url).then(res => res.json())
    .then(data => displayLevelWord(data.data))
}

const displayLevelWord = words => {
    // console.log(words);
    // console.log(words.level_no);

    const wordContainer = document.getElementById('word-container');
    wordContainer.innerHTML = '';

    words.forEach((word) => {
        // console.log(word);
        const card = document.createElement('div');
        card.innerHTML = `
            <div class="bg-white text-gray-500 rounded-xl py-80px px-5 shadow-lg space-y-4 text-center p-10">
        <h2 class="font-bold text-2xl">${word.word}</h2>
        <p class="">Meaning / Pronounciation</p>
        <h2 class="text-2xl font-semibold font-bangla">'${word.meaning}' / '${word.pronunciation}'</h2>
        <div class="flex justify-between items-center bg-white text-gray-500 rounded-xl py-80px px-5  text-center p-10">
        <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
        <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>

      </div>
      </div>
        `;
        wordContainer.appendChild(card);
    });
}

loadLessons();