const moods = [
  { label: '专注陪伴', line: '我会安静趴在屏幕角落，陪你把复杂问题拆成下一步。', face: '•ᴗ•', aura: 'linear-gradient(135deg,#c7f9ff,#e7ddff)' },
  { label: '代码巡逻', line: '发现灵感碎片！要不要让我帮你做一次逻辑梳理？', face: 'ᵔᴥᵔ', aura: 'linear-gradient(135deg,#d8f7c5,#fff0a8)' },
  { label: '夜航充电', line: '熬夜也要温柔一点。喝口水，我替你守住待办星图。', face: '–ᴗ–', aura: 'linear-gradient(135deg,#b8c7ff,#ffd6ee)' },
];
const actions = document.querySelector('#actions');
const face = document.querySelector('#face');
const line = document.querySelector('#line');
const pet = document.querySelector('#pet');
function renderMood(index) {
  const mood = moods[index];
  face.textContent = mood.face;
  line.textContent = mood.line;
  pet.style.setProperty('--aura', mood.aura);
  [...actions.children].forEach((button, i) => button.classList.toggle('active', i === index));
}
moods.forEach((mood, index) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = mood.label;
  button.addEventListener('click', () => renderMood(index));
  actions.append(button);
});
renderMood(0);
