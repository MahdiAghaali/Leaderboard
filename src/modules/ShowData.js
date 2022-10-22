const message = (msg = 'Data Inserted successfully.') => {
  const messageBox = document.getElementById('message');
  messageBox.innerHTML = msg;
  messageBox.style.bottom = '20px';
  setTimeout(() => {
    messageBox.style.bottom = '-100px';
  }, 4000);
};

const showData = (data) => {
  let pattern = '';
  for (let index = 0; index < data.length; index += 1) {
    pattern += `
      <tr>
        <td>${data[index].user}</td>
        <td>${data[index].score}</td>
      </tr>`;
  }
  return pattern;
};
export { message, showData };