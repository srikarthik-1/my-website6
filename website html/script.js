document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const grade = document.getElementById('grade').value;
  
    if (name && email && grade) {
      const tableBody = document.getElementById('studentTableBody');
      const row = document.createElement('tr');
  
      row.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${grade}</td>
      `;
  
      tableBody.appendChild(row);
  
      document.getElementById('studentForm').reset();
    }
  });
  