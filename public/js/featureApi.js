/* eslint-disable no-undef */
const select = document.querySelector('#selection');
// API call for feature list
const featureList = async () => {
  const optionToDel = document.querySelectorAll('.option-select');
  // REMOVE ADDITIONAL OPTIONS
  if (Array.from(optionToDel).length > 0) {
    const nodeListArr = Array.from(optionToDel);
    nodeListArr.forEach((item) => {
      select.removeChild(item);
    });
  }

  await axios.get('/v1/feature')
    .then((res) => {
      console.log('DATA FROM FEATURE API CALL -->', res.data);
      const features = res.data;

      features.forEach((feature) => {
        const option = document.createElement('option');
        option.value = feature.id;
        option.className = 'option-select';
        option.innerText = feature.name;
        select.appendChild(option);
      });
    });
};

featureList();
