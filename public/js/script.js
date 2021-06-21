// Create required HTML elements

const root = document.querySelector('#root');
const showBugFormBtn = document.querySelector('.create-form-btn');
const showFeatureBtn = document.querySelector('.create-feature-btn');
const bugForm = document.querySelector('.custom-bug-form');
const featureForm = document.querySelector('.custom-feature-form');
const hideFormFeatureBtn = document.querySelector('.hide-feature-form');
const hidebugForm = document.querySelector('.hide-bug-form');
const submitFeatureBtn = document.querySelector('#submit-feature');
const newFeatureToAdd = document.querySelector('#feature');

const apiCall = async () => {
  try {
    // eslint-disable-next-line no-undef
    const api = await axios.get('/v1/bugs');
    const bugs = api.data;

    // Build the DOM
    bugs.forEach((bug) => {
      const card = document.createElement('div');
      const h4 = document.createElement('h4');
      const p = document.createElement('p');
      const small = document.createElement('small');

      h4.innerHTML = bug.problem;
      p.innerText = bug.errorText;
      small.innerText = bug.commit;

      card.appendChild(h4);
      card.appendChild(p);
      card.appendChild(small);

      card.classList.add('card');
      card.classList.add('shadow');
      card.classList.add('p-3');
      card.classList.add('m-1');

      root.appendChild(card);
    });

    console.log(api.data);
  } catch (error) {
    console.log(error);
  }
};

showBugFormBtn.addEventListener('click', () => {
  featureList();
  // console.log(btn.dataset.haha);
  showBugFormBtn.style.display = 'none';
  hidebugForm.style.display = 'block';
  bugForm.style.display = 'block';
});

showFeatureBtn.addEventListener('click', () => {
  // console.log(btn.dataset.haha);
  showFeatureBtn.style.display = 'none';
  hideFormFeatureBtn.style.display = 'block';
  featureForm.style.display = 'block';
});

hideFormFeatureBtn.addEventListener('click', () => {
  hideFormFeatureBtn.style.display = 'none';
  featureForm.style.display = 'none';
  showFeatureBtn.style.display = 'inline-block';
});

hidebugForm.addEventListener('click', () => {
  hidebugForm.style.display = 'none';
  bugForm.style.display = 'none';
  showBugFormBtn.style.display = 'inline-block';
});

submitFeatureBtn.addEventListener('click', async (e) => {
  e.preventDefault();

  const newStuff = {
    name: newFeatureToAdd.value,
  };
  console.log(newFeatureToAdd.value);
  await axios.post('/new-feature', { newFeature: newFeatureToAdd.value })
    .then((res) => {
      console.log(res);
    });
});

apiCall();
