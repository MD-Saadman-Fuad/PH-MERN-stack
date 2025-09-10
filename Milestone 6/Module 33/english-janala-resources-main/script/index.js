console.log('index.js connected!!');

const loadLessons = () => {
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res => res.json())
    // .then(data => displayLessons(data.data))
    .then(data => displayLessons(data.data))
}

function pronounceWord (word) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US'; // Set the language to English (US)
    window.speechSynthesis.speak(utterance);
}

const displayLessons = lessons => {
    // console.log(lessons);
    const levelContainer = document.getElementById('level-container');
    levelContainer.innerHTML = '';
    for(const lesson of lessons){
        const btnDiv = document.createElement('div');
        btnDiv.innerHTML = `<button id="lesson-btn-${lesson.level_no}" onClick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary lesson-btn">
        <i class="fa-solid fa-book-open"></i> Lesson ${lesson.level_no}</button>
        `;
        levelContainer.appendChild(btnDiv);
    }
}

const loadLevelWord = (id) => {
    manageSpinner(true);
    // console.log(id);    
    const url = `https://openapi.programming-hero.com/api/level/${id}`;   
    // console.log(url);
    fetch(url).then(res => res.json())
    .then(data => {
        removeActive()
        const clickBtn = document.getElementById(`lesson-btn-${id}`);
        clickBtn.classList.add('active');

        displayLevelWord(data.data);
    })
    // manageSpinner(false);
}

const removeActive = () => {
    const allBtn = document.querySelectorAll('.lesson-btn');
    console.log(allBtn);
    allBtn.forEach(btn => btn.classList.remove('active'));
}

const displayLevelWord = words => {
    // console.log(words);
    // console.log(words.level_no);

    const wordContainer = document.getElementById('word-container');
    wordContainer.innerHTML = '';

    if(words.length === 0) {
        alert('No words found for this lesson.');
        wordContainer.innerHTML = `
        <div class="bg-white text-gray-500 rounded-xl py-80px px-5 shadow-lg space-y-4 text-center p-10 col-span-full">
        <i class="fa-solid fa-triangle-exclamation text-8xl"></i>

            <h2 class="text-xl font-bold text-center">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</h2>
        <h1 class="text-3xl font-bold text-center text-gray-700">নেক্সট Lesson এ যান</h1>
        </div>
        
        `;
        manageSpinner(false);
        return;
    }

    words.forEach((word) => {
        // console.log(word);
        const card = document.createElement('div');
        card.innerHTML = `
            <div class="bg-white text-gray-500 rounded-xl py-80px px-5 shadow-lg space-y-4 text-center p-10">
        <h2 class="font-bold text-2xl">${word.word ? word.word : '---'}</h2>
        <p class="">Meaning / Pronounciation</p>
        <h2 class="text-2xl font-semibold font-bangla">'${word.meaning ? word.meaning : '---'}' / '${word.pronunciation ? word.pronunciation : '---'}'</h2>
        <div class="flex justify-between items-center bg-white text-gray-500 rounded-xl py-80px px-5  text-center p-10">
        <button onclick="loadWordDetail(${word.id})" class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
        <button onclick="pronounceWord('${word.word}')" class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>

      </div>
      </div>
        `;
        wordContainer.appendChild(card);
    });
    manageSpinner(false);
}

const loadWordDetail = async (id) => {
    // console.log(id);
    const url = `https://openapi.programming-hero.com/api/word/${id}`;
    // console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    displayWordDetail(data.data);
}

// my_modal_5.showModal()

const displayWordDetail = word => {
    console.log(word);
    const detailBox = document.getElementById('details-container');
    detailBox.innerHTML = ` 
    <div>
            <h1 class="text-2xl font-bold">${word.word} (<i class="fa-solid fa-microphone-lines"></i> :${word.pronunciation})</h1>
           </div>
           <div>
            <h2 class="font-bold">Meaning</h2>
            <p>${word.meaning}</p>
           </div>
           <div>
            <h2 class="font-bold">Example</h2>
            <p>${word.sentence}</p>
           </div>
           <div>
            <h2 class="font-bold font-bangla">সমার্থক শব্দ গুলো</h2>

            <div class="space-x-2">${createElements(word.synonyms)}</div>
           </div>
    `;
    document.getElementById('my_modal_5').showModal();
}

createElements = (arr) =>{
    return arr.map(item => `<span class="btn">${item}</span>`).join(' ');
}

// manage spinner

const manageSpinner = isLoading => {
    
    if(isLoading) {
        // spinner.classList.remove('hidden');
        document.getElementById('spinner').classList.remove('hidden');
        document.getElementById('word-container').classList.add('hidden');
    } else {
        document.getElementById('spinner').classList.add('hidden');
        document.getElementById('word-container').classList.remove('hidden');
    }
}

loadLessons();

document.getElementById('btn-search').addEventListener('click', () => {
    removeActive();
    const input = document.getElementById('input-search');
    const searchValue = input.value.trim().toLowerCase();

   if (!searchValue) {
       alert('Please enter a word to search.');
       return;
   }

   console.log(searchValue);

   fetch("https://openapi.programming-hero.com/api/words/all")
    .then(res => res.json())
    .then(data => {
        const allWords = data.data;
        // console.log(allWords);
        const matchedWord = allWords.find(word => word.word.toLowerCase() === searchValue);
        // console.log(matchedWord);

        // console.log(matchedWord.word);

        displayLevelWord([matchedWord]);
    });



})