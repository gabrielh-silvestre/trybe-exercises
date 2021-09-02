const headerContainer = document.getElementById('header-container');
headerContainer.style.backgroundColor = 'green';
headerContainer.style.textAlign = 'center';

const main = document.querySelector('main');
main.style.display = 'flex';
main.style.justifyContent = 'center';
main.style.alignContent = 'center'

const emergencyTasks = document.querySelector('.emergency-tasks');
emergencyTasks.style.backgroundColor = 'rgb(249, 165, 1, 0.4)';
emergencyTasks.style.textAlign = 'center';

const emergencyTasksTitles = document.querySelectorAll('.emergency-tasks h3');
for (let t of emergencyTasksTitles) {t.style.backgroundColor = 'purple'};

const notEmergencyTasks = document.querySelector('.no-emergency-tasks');
notEmergencyTasks.style.backgroundColor = 'rgba(247, 235, 2, 0.4)';
notEmergencyTasks.style.textAlign = 'center';
notEmergencyTasks.style.margin = '56px 5px';

const notEmergencyTasksTitles = document.querySelectorAll('.no-emergency-tasks h3');
for (let t of notEmergencyTasksTitles) {t.style.backgroundColor = 'black'};

const footerContainer = document.getElementById('footer-container');
footerContainer.style.backgroundColor = 'darkGreen';
footerContainer.style.position = "absolute";
footerContainer.style.bottom = "0";
footerContainer.style.width = "100%";
