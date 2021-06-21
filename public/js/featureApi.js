/* eslint-disable no-undef */
const select = document.querySelector('#selection');

// API call for feature list
const featureList = async () => {
  await axios.get('/v1/feature')
    .then((res) => {
      console.log(res.data);
      const features = res.data;

      features.forEach((feature) => {
        const option = document.createElement('option');
        option.value = feature.id;
        option.innerText = feature.name;
        select.appendChild(option);
      });
    });
};

featureList();
